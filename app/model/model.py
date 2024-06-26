from .database import data
from sqlalchemy import Column, String, Integer, Float, Boolean


class UserModel(data):
    __tablename__ = 'user'

    id = Column(Integer, index=True, primary_key=True)
    firstname = Column(nullable=False)
    lastname = Column(String, nullable=False)
    username = Column(String(15), nullable=False, unique=True)
    email = Column(String, nullable=False, unique=True)
    password = Column(String, nullable=False)
    is_admin = Column(Boolean, nullable=False)


class Food(data):
    __tablename__ = 'food'

    id = Column(Integer, index=True, primary_key=True)
    name = Column(String, nullable=False)
    price = Column(Float, nullable=False)
    availability = Column(Boolean, nullable=False, default=True)


class Order(data):
    __tablename__ = 'order'

    id = Column(Integer, index=True, primary_key=True)
    food = Column(String, nullable=False)
    quantity = Column(Integer, nullable=False, default=1)
    order_address = Column(String, nullable=True)
    price_paid = Column(Float, nullable=False)


class Transaction(data):
    __tablename__ = 'transaction'

    id = Column(Integer, index=True, primary_key=True)
