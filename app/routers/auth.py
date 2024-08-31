from fastapi import APIRouter, Request
from fastapi.responses import RedirectResponse
from ..schemas.config import *
from ..model.model import StateModel
import requests
import string
import urllib.parse
import random
import os

load_dotenv()

auth = APIRouter()

client_id = os.getenv("CLIENT_ID")
client_secret = os.getenv("CLIENT_SECRET")
redirect_uri = 'https://estate-api-wn9c.onrender.com/auth/callback'


@auth.get("/login")
def login(db: db_dependency):
    state = ''.join(random.choices(string.ascii_uppercase + string.digits, k=16))
    params = {
        'state': state,
        'client_id': client_id,
        'response_type': 'code',
        'redirect_uri': redirect_uri,
        'scope': 'openid email profile',
        'access_type': 'offline'
    }

    db.add(StateModel(state=state))
    db.commit()
    url = f'https://accounts.google.com/o/oauth2/v2/auth?{urllib.parse.urlencode(params)}'
    return RedirectResponse(url)


@auth.get("/callback")
def callback(request: Request, db: db_dependency):
    code = request.query_params.get('code')
    error = request.query_params.get('error')
    state = request.query_params.get('state')

    if error:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail=error)

    valid_state = db.query(StateModel).filter(StateModel.state == state).first()
    if not valid_state:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail='Invalid State')

    db.delete(valid_state)
    db.commit()

    token_request = requests.post(
        'https://oauth2.googleapis.com/token',
        data={
            'code': code,
            'client_id': client_id,
            'client_secret': client_secret,
            'redirect_uri': redirect_uri,
            'grant_type': 'authorization_code'
        },
        headers={
            'content-Type': 'application/x-www-form-urlencoded'
        }
    )

    if token_request.status_code == 200:
        token = token_request.json()
        access_token = token['access_token']
    else:
        raise HTTPException(status_code=token_request.status_code, detail=token_request.json())

    user_info = requests.get(
        'https://www.googleapis.com/oauth2/v2/userinfo',
        headers={
            'Authorization': f'Bearer {access_token}'
        }
    )

    if user_info.status_code == 200:
        user_data = user_info.json()
    else:
        raise HTTPException(status_code=user_info.status_code, detail=user_info.json())

    email = user_data['email']
    first_name = user_data['given_name']
    last_name = user_data['family_name']
    username = user_data['name']

    user = db.query(UserModel).filter(UserModel.email == email).first()
    if not user:
        create_user = requests.post(
            'http://localhost:8006/user/signup',
            json={
                'firstname': first_name,
                'lastname': last_name,
                'username': username,
                'email': email,
                'password': 'Password123.',
                'is_admin': False
            }
        )

        if create_user.status_code == 201:
            user = db.query(UserModel).filter(UserModel.email == email).first()
            token = authentication(user.id, user.username, user.is_admin, timedelta(days=1), 'login')
            if not token:
                raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST,
                                    detail='Unable to generate token try later')

            return {
                'access_token': token,
                'token_type': 'bearer'
            }

        else:
            raise HTTPException(status_code=create_user.status_code, detail=create_user.json())

    else:
        token = authentication(user.id, user.username, user.is_admin, timedelta(days=1), 'login')
        if not token:
            raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail='Unable to generate token try later')

        return {
            'access_token': token,
            'token_type': 'bearer'
        }
