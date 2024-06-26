import datetime
from datetime import datetime, timedelta
from fastapi import APIRouter, Depends, HTTPException
from typing import Annotated
from sqlalchemy.orm import Session
from passlib.context import CryptContext
from starlette import status
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from jose import jwt, JWTError
from ..model.model import UserModel
from ..schemas.user_schema import *
from ..model.database import begin

user = APIRouter()


def get_db():
    db = begin()
    try:
        yield db
    finally:
        db.close()


db_dependency = Annotated[Session, Depends(get_db())]
hashed = CryptContext(schemes=['bcrypt'])
SECRET = 'Testing'
Algorithm = ['HS256']


def authorization(username: str, password: str, db):
    user = db.query(UserModel).filter(UserModel.username == username).first()
    if not user:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail='Unauthorized user')
    password = hashed.verify(password, user.password)
    if not password:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail='Unauthorized user')
    return user


def authentication(user_id: int, username: str, is_admin: bool, limit):
    encode = {'sub': username, 'id': user_id, 'admin': is_admin}
    exp = datetime.datetime.now() + limit
    encode.update({'exp' : exp})
    return jwt.encode(encode, SECRET, algorithm=Algorithm)


bearer = OAuth2PasswordBearer(tokenUrl='user/login')


async def get_user(token: Annotated[str, Depends(bearer)]):
    try:
        payload = jwt.decode(token, SECRET, algorithms=[Algorithm])
        username: str = payload.get('sub')
        user_id: int = payload.get('id')
        admin: bool = payload.get('admin')
        if username is None or user_id is None or admin is None:
            raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail='Unauthorized user')
        return {
            'username': username,
            'user_id': user_id,
            'admin': admin
        }

    except JWTError as e:
        print(f'An error occurred as: {e}')
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail='You have been logged out due to inactivity')


@user.post('/signup/')
async def user_testing(form: UserSignin, db: db_dependency):
    user = UserModel(
        firstname=form.firstname,
        lastname=form.lastname,
        username=form.username,
        email=form.email,
        password=hashed.hash(form.password),
        is_admin=form.is_admin
    )
    db.add(user)
    db.commit()
    db.refresh(user)

    return 'User has signed in successfully'


@user.post('/login', response_model=Token)
async def login(form: Annotated[OAuth2PasswordRequestForm, Depends()], db: db_dependency):
    user = authorization(form.username, form.password, db)
    if not user:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail='Invalid Credentials')

    token = authentication(user_id=user.id, username=user.username,is_admin=user.is_admin, limit=timedelta(minutes=15))
    if not token:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail='Unable to generate token try later')

    return {
        'access_token': token,
        'token_type': 'bearer'
    }
