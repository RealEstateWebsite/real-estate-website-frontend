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
from ..schemas.admin_schema import *
from ..model.database import begin

user = APIRouter()


def get_db():
    db = begin()
    try:
        yield db
    finally:
        db.close()


hashed = CryptContext(schemes=['bcrypt'])
SECRET = 'Testing'
Algorithm = 'HS256'


def authorization(username: str, password: str, db):
    user = db.query(UserModel).filter(UserModel.username == username).first()
    if not user:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail='Invalid Credentials!')
    password = hashed.verify(password, user.password)
    if not password:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail='Invalid Credentials!')
    return user


def authentication(user_id: int, username: str, is_admin: bool, limit):
    encode = {'sub': username, 'id': user_id, 'admin': is_admin}
    exp = datetime.now() + limit
    encode.update({'exp': exp})
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
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail='logged out due to inactivity')


user_dependency = Annotated[str, Depends(get_user)]
db_dependency = Annotated[Session, Depends(get_db)]


@user.post('/signup', status_code=status.HTTP_201_CREATED)
async def user_sign_in(form: UserSignin, db: db_dependency):
    existing_username = db.query(UserModel).filter(UserModel.username == form.username).first()
    existing_email = db.query(UserModel).filter(UserModel.email == form.email).first()

    if existing_email:
        raise HTTPException(status_code=status.HTTP_409_CONFLICT, detail='Email already in use!')
    if existing_username:
        raise HTTPException(status_code=status.HTTP_409_CONFLICT, detail='Username already in use!')

    user = UserModel(
        firstname=form.firstname,
        lastname=form.lastname,
        username=form.username,
        email=form.email,
        password=hashed.hash(form.password),
        is_admin=True
    )

    db.add(user)
    db.commit()
    db.refresh(user)

    return 'Sign-up Successful'


@user.post('/admin/sign-up', status_code=status.HTTP_201_CREATED)
async def admin_sign_up(form: CreateAdminUserSchema, db: db_dependency, admin: user_dependency):
    if not admin:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail='Invalid Credential!')

    admin_user = db.query(UserModel).filter(UserModel.id == admin.get('user_id')).first()

    if not admin_user.is_admin:
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail='Permission Denied!')

    user = UserModel(
        firstname='admin',
        lastname='admin',
        username=form.username,
        email=form.email,
        password=hashed.hash(form.password),
        is_admin=True
    )

    db.add(user)
    db.commit()
    db.refresh(user)

    return 'Admin User has been created'


@user.put('/user-to-admin', status_code=status.HTTP_201_CREATED)
async def user_to_admin(form: ToAdmin, db: db_dependency, user: user_dependency):
    if not user:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail='Invalid Credentials!')

    admin = db.query(UserModel).filter(UserModel.id == user.get('user_id')).first()
    if not admin.is_admin:
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail='Permission denied!')

    existing_user = db.query(UserModel).filter(UserModel.username == form.username).filter(UserModel.email == form.email).first()
    if not existing_user:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail='User not found!')

    existing_user.is_admin = True

    db.add(existing_user)
    db.commit()
    db.refresh(existing_user)

    return 'User status now admin'


@user.put('/admin-to-user', status_code=status.HTTP_201_CREATED)
async def admin_to_user(form: ToAdmin, db: db_dependency, user: user_dependency):
    if not user:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail='Invalid Credentials!')

    admin = db.query(UserModel).filter(UserModel.id == user.get('user_id')).first()
    if not admin.is_admin:
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail='Permission denied!')

    existing_user = db.query(UserModel).filter(UserModel.username == form.username).filter(UserModel.email == form.email).first()
    if not existing_user:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail='User not found!')

    existing_user.is_admin = False

    db.add(existing_user)
    db.commit()
    db.refresh(existing_user)

    return 'User status now user'


@user.post('/login', response_model=Token)
async def login(form: Annotated[OAuth2PasswordRequestForm, Depends()], db: db_dependency):
    user = authorization(form.username, form.password, db)
    if not user:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail='Invalid Credentials')

    token = authentication(user_id=user.id, username=user.username, is_admin=user.is_admin, limit=timedelta(minutes=15))
    if not token:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail='Unable to generate token try later')

    return {
        'access_token': token,
        'token_type': 'bearer'
    }
