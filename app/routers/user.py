from fastapi import APIRouter
from fastapi.security import OAuth2PasswordRequestForm
from ..model.model import OTPModel, AccountDeletionRequest
from ..schemas.user_schema import *
from ..schemas.config import *

user = APIRouter()


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
        is_admin=False
    )

    db.add(user)
    db.commit()
    db.refresh(user)

    body = f'Hi {user.firstname} \n Congratulations on making the right choice to trade with us'
    html_body = (f'''
    <div style="font-family: Arial, sans-serif; color: #333; background-color: #f0f4f8; padding: 20px; border-radius: 10px; text-align: center;">
        <h1 style="color: #4caf50;">🎉 Welcome, {user.firstname}! 🎉</h1>
        <p style="font-size: 18px;">
            We’re thrilled to have you on board! You've made an excellent choice by joining us, and we can't wait to see you thrive with our platform.
        </p>
        <p style="font-size: 16px; margin-top: 20px;">
            To get started, explore our features, connect with our community, and don't hesitate to reach out if you need any help.
        </p>
        <p style="font-size: 16px;">
            Here’s to your success! 🥂
        </p>
        <div style="margin-top: 30px;">
            <a href="https://real-estate-website-ruddy.vercel.app" style="text-decoration: none; background-color: #4caf50; color: white; padding: 10px 20px; border-radius: 5px; font-size: 16px;">Get Started</a>
        </div>
        <p style="font-size: 14px; color: #757575; margin-top: 30px;">
            Best regards,<br/>
            <strong>Estate API</strong>
        </p>
    </div>
''')

    subject = 'Welcome to our platform'

    if send_email(user.email, html_body, body, subject):
        return {'message': 'Sign-up Successful'}
    else:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail='Error while sending email')


@user.post('/login', response_model=Token)
async def login(form: Annotated[OAuth2PasswordRequestForm, Depends()], db: db_dependency):
    user = authorization(form.username, form.password, db)
    if not user:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail='Invalid Credentials')

    token = authentication(user.id, user.username, user.is_admin, timedelta(days=1), 'login')
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

    user_data.password = hashed.hash(password.new_password)

    db.add(user_data)
    db.commit()
    db.refresh(user_data)

    return {'message': 'Password changed successfully'}


@user.post('/me/forgot-password', status_code=status.HTTP_202_ACCEPTED)
async def otp_generator(email: ForgotPassword, db: db_dependency):
    valid_email = db.query(UserModel).filter(UserModel.email == email.email).first()
    if not valid_email:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail='Invalid email')

    otp = create_otp()

    new_otp = OTPModel(
        user_id=valid_email.id,
        otp=otp,
        created_at=datetime.utcnow(),
        expires_at=datetime.utcnow() + timedelta(minutes=60),
        is_used=False
    )

    db.add(new_otp)
    db.commit()
    db.refresh(new_otp)

    html_body = (f'''
    <div style="font-family: Arial, sans-serif; color: #333; background-color: #f9f9f9; padding: 20px; border-radius: 8px;">
        <h2 style="color: #ff6b6b;">Hi {valid_email.firstname},</h2>
        <p style="font-size: 16px;">
            <em>Oops! We heard you've lost your password.</em><br/>
            But don't worry! We've got your back. 
        </p>
        <p style="font-size: 16px;">
            <strong>Use the following OTP to reset your password it is valid for 1 hour:</strong>
        </p>
        <div style="text-align: center; margin: 20px 0;">
            <span style="font-size: 24px; font-weight: bold; color: #4caf50; background-color: #e8f5e9; padding: 10px 20px; border-radius: 4px; display: inline-block;">{otp}</span>
        </div>
        <p style="font-size: 14px; color: #757575;">
            If you didn’t request a password reset, no worries—your account is safe and sound!
        </p>
        <p style="font-size: 14px; color: #757575;">
            Cheers,<br/>
            <strong>Estate API</strong>
        </p>
    </div>
''')

    body = (f'Hi {valid_email.firstname}, We are sorry to hear that you have lost your password\nUse '
            f'the following OTP to reset your password {otp} it is valid for 1 hour')

    if not send_email(email.email, html_body, body, 'Reset Password'):
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail='Error while sending email')
    else:
        return {'message': 'Email sent successfully'}


@user.post('/verify-otp', response_model=Token, status_code=status.HTTP_202_ACCEPTED)
async def verify_otp(otp: OTP, db: db_dependency):
    verify = db.query(OTPModel).filter(OTPModel.otp == otp.otp).first()
    if not verify:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail='Invalid OTP')

    if verify.is_used:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail='OTP already used')

    verify.is_used = True
    db.commit()

    user = db.query(UserModel).filter(UserModel.id == verify.user_id).first()
    if not user:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail='User not found')

    token = create_token(user.id, 'password reset')

    return {
        'access_token': token,
        'token_type': 'reset'
    }


@user.put('/password-reset', status_code=status.HTTP_202_ACCEPTED)
async def reset_password(password: Password, db: db_dependency, token: str = Depends(reset)):
    value = await validate_token(token)
    if not value:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail='Invalid Credentials')

    user_data = db.query(UserModel).filter(UserModel.id == value.get('user_id')).first()
    if not user_data:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail='User not found')

    if password.password != password.password1:
        raise HTTPException(status_code=status.HTTP_422_UNPROCESSABLE_ENTITY, detail='Password does not match')

    user_data.password = hashed.hash(password.password)

    db.add(user_data)
    db.commit()
    db.refresh(user_data)

    return {'message': 'Password reset successful'}


@user.post('/me/delete-account', status_code=status.HTTP_202_ACCEPTED)
async def delete_account_request(password: DeleteAccount, db: db_dependency, user: user_dependency):
    if not user:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail='Unauthorized user')

    user_data = db.query(UserModel).filter(UserModel.id == user.get('user_id')).first()
    if not user_data:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail='User not found')

    verify = hashed.verify(password.password, user_data.password)

    if not verify:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail='Invalid Credentials')

    request = AccountDeletionRequest(
        user_id=user.get('user_id'),
        status=False
    )

    db.add(request)
    db.commit()
    db.refresh(request)

    html_body = (f'''
        <div style="font-family: Arial, sans-serif; color: #333; background-color: #f9f9f9; padding: 20px; border-radius: 8px;">
            <h2 style="color: #ff6b6b;">Hi {user_data.firstname},</h2>
            <p style="font-size: 16px;">
                <em>We have received your request to delete your account.</em><br/>
                Your request is being processed and will be reviewed by our team.
            </p>
            <p style="font-size: 16px;">
                If you didn't request this, please contact our support team immediately to prevent any further action.
            </p>
            <p style="font-size: 14px; color: #757575;">
                Once the request is approved, your account and all associated data will be permanently deleted.
            </p>
            <p style="font-size: 14px; color: #757575;">
                Thank you for your time with us.
            </p>
            <p style="font-size: 14px; color: #757575;">
                Best Regards,<br/>
                <strong>Estate API</strong>
            </p>
        </div>
    ''')

    body = (
        f'Hi {user_data.firstname},\nWe have received your request to delete your account. Your request is being '
        f'processed and will be reviewed by our team. If you didn’t request this, please contact our support team '
        f'immediately to prevent any further action. Once the request is approved, your account and all associated '
        f'data will be permanently deleted.')

    if not send_email(user_data.email, html_body, body, 'Account Deletion Request'):
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail='Error while sending email')

    return {'message': 'Account deletion request sent successfully'}
