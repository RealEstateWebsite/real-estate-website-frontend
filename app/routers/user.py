from datetime import datetime, timedelta
from fastapi import APIRouter, Depends, HTTPException, BackgroundTasks
from sqlalchemy.orm import Session
from starlette import status
from fastapi.security import OAuth2PasswordRequestForm
from ..model.model import UserModel
from ..schemas.user_schema import *
from ..schemas.admin_schema import *
from ..schemas.config import get_user, get_db, send_email, authentication, authorization, hashed


user = APIRouter()



user_dependency = Annotated[str, Depends(get_user)]
db_dependency = Annotated[Session, Depends(get_db)]


@user.post('/signup', status_code=status.HTTP_201_CREATED)
async def user_sign_in(background_tasks: BackgroundTasks, form: UserSignin, db: db_dependency):
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

    body = 'Congratulations on making the right choice to trade with us'
    await send_email(background_tasks, user.email, user.username, body)

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

    body = 'Congratulations on making the right choice to trade with us'
    await send_email(BackgroundTasks, user.email, user.username, body)

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

    token = authentication(user_id=user.id, username=user.username, is_admin=user.is_admin, limit=timedelta(minutes=1))
    if not token:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail='Unable to generate token try later')

    return {
        'access_token': token,
        'token_type': 'bearer'
    }


@user.get('/me', status_code=status.HTTP_200_OK)
async def view_profile(db: db_dependency, user: user_dependency):
    if not user:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail='Invalid Credentials')

    data = db.query(UserModel).filter(UserModel.id == user.get('user_id')).first()

    if not data:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail='Error while fetching user data')

    data_pack = {
        "firstname": data.firstname,
        "lastname": data.lastname,
        "username": data.username,
        "email": data.email
    }

    return data_pack


@user.put('/me/update-profile', status_code=status.HTTP_202_ACCEPTED)
async def update_user_profile(form: UpdateProfile, db: db_dependency, user: user_dependency):
    if not user:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail='Unauthorized user')

    user_data = db.query(UserModel).filter(UserModel.id == user.get('user_id')).first()

    user_data.firstname = form.firstname
    user_data.lastname = form.lastname
    user_data.email = form.email
    user_data.username = form.username

    db.add(user_data)
    db.commit()
    db.refresh(user_data)


@user.put('/me/change-password', status_code=status.HTTP_202_ACCEPTED)
async def change_password(password: NewPassword, db: db_dependency, user: user_dependency):
    if not user:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail='Unauthorized user')

    user_data = db.query(UserModel).filter(UserModel.id == user.get('user_id')).first()

    verify = hashed.verify(password.password, user_data.password)
    if not verify:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail='Invalid Credentials')

    user_data.password = password.new_password

    db.add(user_data)
    db.commit()
    db.refresh(user_data)


@user.put('/me/forgot-password', status_code=status.HTTP_202_ACCEPTED)
async def forgot_password(email: ForgotPassword, db: db_dependency):
    valid_email = db.query(UserModel).filter(UserModel.email == email.email).first()
    if not valid_email:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail='Invalid email')
# Send an email with the link to reset password


@user.delete('/me/delete-user')
async def delete_user(password: DeleteUser, db: db_dependency, user: user_dependency):
    if not user:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail='Unauthorized user')

    user_data = db.query(UserModel).filter(UserModel.id == user.get('user_id')).first()

    verify = hashed.hash(password.password, user_data.password)
    if not verify:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail='Invalid Credentials')

    db.delete(user_data)
    db.commit()
