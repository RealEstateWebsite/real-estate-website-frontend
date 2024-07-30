from .database import data
from sqlalchemy import Column, String, Integer, Float, Boolean


class UserModel(data):
    __tablename__ = 'user'

    id = Column(Integer, index=True, primary_key=True)
    firstname = Column(String, nullable=False)
    lastname = Column(String, nullable=False)
    username = Column(String(15), nullable=False, unique=True)
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


class Transaction(data):
    __tablename__ = 'transaction'

    id = Column(Integer, index=True, primary_key=True)
