from .database import data
from sqlalchemy import Column, String, Integer, Float, Boolean, ForeignKey, DateTime


class UserModel(data):
    __tablename__ = 'user'

    id = Column(Integer, index=True, primary_key=True)
    firstname = Column(String, nullable=False)
    lastname = Column(String, nullable=False)
    username = Column(String, nullable=False, unique=True)
    email = Column(String, nullable=False, unique=True)
    password = Column(String, nullable=False)
    is_admin = Column(Boolean, nullable=False)


class Housing(data):
    __tablename__ = 'houses'

    id = Column(Integer, index=True, primary_key=True)
    bedroom_space = Column(Integer, nullable=True)
    size = Column(Float, nullable=False)
    price = Column(Float, nullable=False)
    location = Column(String, nullable=False)
    description = Column(String, nullable=False)


class OTPModel(data):
    __tablename__ = 'otp'

    id = Column(Integer, index=True, primary_key=True)
    user_id = Column(Integer, ForeignKey('user.id'))
    otp = Column(String, nullable=False)
    created_at = Column(DateTime, nullable=False)
    expires_at = Column(DateTime, nullable=False)
    is_used = Column(Boolean, nullable=False, default=False)


class StateModel(data):
    __tablename__ = 'state'

    id = Column(Integer, index=True, primary_key=True)
    state = Column(String, nullable=False)


class AccountDeletionRequest(data):
    __tablename__ = 'deletion_request'

    id = Column(Integer, index=True, primary_key=True)
    user_id = Column(Integer, ForeignKey('user.id'))
    status = Column(Boolean, nullable=False, default=False)
