import os
import random
from fastapi import HTTPException, Depends
from typing import Annotated
from starlette import status
from ..model.database import begin
from dotenv import load_dotenv
from passlib.context import CryptContext
from fastapi.security import OAuth2PasswordBearer
from postmarker.core import PostmarkClient
from jose import jwt, JWTError
from ..model.model import UserModel
from datetime import datetime, timedelta


load_dotenv()
postmark = PostmarkClient(server_token=os.getenv('POSTMARK'))
conf = os.getenv('FROM')
secret = os.getenv('SECRET')
algorithm = os.getenv('ALGORITHM')


def get_db():
    db = begin()
    try:
        yield db
    finally:
        db.close()


hashed = CryptContext(schemes=['bcrypt'])
SECRET = secret
Algorithm = algorithm


def authorization(username: str, password: str, db):
    user = db.query(UserModel).filter(UserModel.username == username).first()
    if not user:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail='Invalid Credentials!')
    password = hashed.verify(password, user.password)
    if not password:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail='Invalid Credentials!')
    return user


def authentication(user_id: int, username: str, is_admin: bool, limit, purpose: str):
    encode = {'sub': username, 'id': user_id, 'admin': is_admin, 'purpose': purpose}
    exp = datetime.utcnow() + limit
    encode.update({'exp': exp})
    return jwt.encode(encode, SECRET, algorithm=Algorithm)


bearer = OAuth2PasswordBearer(tokenUrl='user/login')

reset = OAuth2PasswordBearer(tokenUrl='user/verify-otp')


async def get_user(token: Annotated[str, Depends(bearer)]):
    try:
        payload = jwt.decode(token, SECRET, algorithms=[Algorithm])
        username: str = payload.get('sub')
        user_id: int = payload.get('id')
        admin: bool = payload.get('admin')
        purpose: str = payload.get('purpose')

        if username is None or user_id is None or admin is None:
            raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail='Unauthorized user')
        if purpose != 'login':
            raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail='Invalid token')
        return {
            'username': username,
            'user_id': user_id,
            'admin': admin
        }

    except JWTError as e:
        print(f'An error occurred as: {e}')
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail='logged out due to inactivity')


def create_token(user_id: int, purpose: str):
    encode = {'id': user_id, 'purpose': purpose}
    exp = datetime.utcnow() + timedelta(minutes=15)
    encode.update({'exp': exp})
    return jwt.encode(encode, SECRET, algorithm=Algorithm)


async def validate_token(token: str):
    try:
        payload = jwt.decode(token, SECRET, algorithms=[Algorithm])
        user_id: int = payload.get('id')
        purpose: str = payload.get('purpose')

        if user_id is None:
            raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail='Unauthorized user')
        if purpose != 'password reset':
            raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail='Invalid token')
        return {
            'user_id': user_id,
        }

    except JWTError as e:
        print(f'An error occurred as: {e}')
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail='token expired')


def send_email(user_email, html_body, body, subject):
    response = postmark.emails.send(
        From=conf,
        To=user_email,
        Subject=subject,
        HtmlBody=html_body,
        TextBody=body,
        MessageStream='outbound'
    )

    if response['ErrorCode'] == 0:
        return True
    else:
        return False


def create_otp():
    otp = random.randint(100000, 999999)
    return str(otp)
