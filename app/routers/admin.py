from ..model.model import OTPModel, AccountDeletionRequest
from fastapi import APIRouter
from ..schemas.user_schema import *
from ..schemas.config import *
from ..schemas.admin_schema import *


admin = APIRouter()


@admin.post('/sign-up', status_code=status.HTTP_201_CREATED)
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

    body = f'Hi {user.firstname} \n Congratulations on making the team \n Welcome to the admin team'
    subject = 'Welcome to our platform'
    html_body = (f'''
        <div style="font-family: Arial, sans-serif; color: #333; background-color: #f0f4f8; padding: 20px; border-radius: 10px;">
            <h1 style="color: #1e88e5; text-align: center;">🎉 Welcome, {user.firstname}! 🎉</h1>
            <p style="font-size: 18px;">
                Congratulations on becoming a part of our team as an <strong>Admin</strong>! We’re excited to have you on board and look forward to the great work we'll achieve together.
            </p>
            <p style="font-size: 16px; margin-top: 20px;">
                As an admin, you play a critical role in ensuring our platform remains secure, efficient, and user-friendly. We trust in your abilities to help us maintain high standards and to lead by example.
            </p>
            <p style="font-size: 16px;">
                To get started, please familiarize yourself with the admin tools and resources available to you. If you need any assistance or have any questions, our team is here to support you.
            </p>
            <div style="margin-top: 30px; text-align: center;">
                <a href="https://github.com/Emmy-Akintz/real-estate-website" style="text-decoration: none; background-color: #1e88e5; color: white; padding: 10px 20px; border-radius: 5px; font-size: 16px;">Access the resource here</a>
            </div>
            <p style="font-size: 14px; color: #757575; margin-top: 30px;">
                Welcome aboard!<br/>
                <strong>Estate API</strong>
            </p>
        </div>
    ''')

    if send_email(user.email, html_body, body, subject):
        return {'message': 'Sign-up Successful'}
    else:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail='Error while sending email')


@admin.put('/user-to-admin', status_code=status.HTTP_201_CREATED)
async def user_to_admin(form: ToAdmin, db: db_dependency, user: user_dependency):
    if not user:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail='Invalid Credentials!')

    admin = db.query(UserModel).filter(UserModel.id == user.get('user_id')).first()
    if not admin.is_admin:
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail='Permission denied!')

    existing_user = db.query(UserModel).filter(UserModel.username == form.username).filter(
        UserModel.email == form.email).first()
    if not existing_user:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail='User not found!')

    existing_user.is_admin = True

    db.add(existing_user)
    db.commit()
    db.refresh(existing_user)

    return {'message': 'User status now admin'}


@admin.put('/admin-to-user', status_code=status.HTTP_201_CREATED)
async def admin_to_user(form: ToAdmin, db: db_dependency, user: user_dependency):
    if not user:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail='Invalid Credentials!')

    admin = db.query(UserModel).filter(UserModel.id == user.get('user_id')).first()
    if not admin.is_admin:
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail='Permission denied!')

    existing_user = db.query(UserModel).filter(UserModel.username == form.username).filter(
        UserModel.email == form.email).first()
    if not existing_user:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail='User not found!')

    existing_user.is_admin = False

    db.add(existing_user)
    db.commit()
    db.refresh(existing_user)

    return {'message': 'User status no longer admin'}


@admin.get('/view-delete-request')
async def view_delete_request(db: db_dependency, user: user_dependency):
    if not user:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail='Unauthorized user')

    if not user.get('admin'):
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail='Permission Denied')

    user_data = db.query(AccountDeletionRequest).filter(AccountDeletionRequest.status == False).all()

    return user_data


@admin.put('/approve-delete-request', status_code=status.HTTP_202_ACCEPTED)
async def approve_delete_request(user_id: DeleteRequest, db: db_dependency, user: user_dependency):
    if not user:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail='Unauthorized user')
    if not user.get('admin'):
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail='Permission Denied')

    user_data = db.query(AccountDeletionRequest).filter(AccountDeletionRequest.user_id == user_id.user_id).first()

    if not user_data:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail='Request not found')

    user_data.status = True

    db.add(user_data)
    db.commit()
    db.refresh(user_data)

    return {'message': 'Request approved successfully'}


@admin.delete('/delete-user')
async def delete_user(db: db_dependency, user: user_dependency):
    if not user:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail='Unauthorized user')

    if not user.get('admin'):
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail='Permission Denied')

    user_data = db.query(AccountDeletionRequest).filter(AccountDeletionRequest.status == True).all()

    if not user_data:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail='No pending request found')

    for data in user_data:
        user_account = db.query(UserModel).filter(UserModel.id == data.user_id).first()
        db.delete(data)
        db.delete(user_account)
        html_body = (f'''
            <div style="font-family: Arial, sans-serif; color: #333; background-color: #f9f9f9; padding: 20px; border-radius: 8px;">
                <h2 style="color: #ff6b6b;">Hi {user_account.firstname},</h2>
                <p style="font-size: 16px;">
                    <em>We are sorry to see you go.</em><br/>
                    Your account has been successfully deleted from our system.
                </p>
                <p style="font-size: 16px;">
                    If you didn't request this, please contact our support team immediately.
                </p>
                <p style="font-size: 14px; color: #757575;">
                    We hope to see you again soon.
                </p>
                <p style="font-size: 14px; color: #757575;">
                    Best Regards,<br/>
                    <strong>Estate API</strong>
                </p>
            </div>
        ''')

        body = (
            f'Hi {user_account.firstname},\nWe are sorry to see you go. Your account has been successfully deleted. '
            f'If you didn’t request this, please contact our support team immediately.')

        if not send_email(user_account.email, html_body, body, 'Account Deletion'):
            raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail='Error while sending email')

    db.commit()

    return {'message': 'User deleted successfully'}


@admin.post('/delete-otp', status_code=status.HTTP_202_ACCEPTED)
async def delete_expired_otp(db: db_dependency, user: user_dependency):
    if not user:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail='Unauthorized user')

    if not user.get('admin'):
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail='Permission Denied')

    expired_otp = db.query(OTPModel).filter(OTPModel.expires_at < datetime.utcnow()).all()
    if not expired_otp:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail='No expired OTP found')

    for otp in expired_otp:
        db.delete(otp)
    db.commit()

    return {'message': 'Expired OTP deleted successfully'}
