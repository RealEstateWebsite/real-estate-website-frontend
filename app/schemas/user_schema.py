from pydantic import BaseModel, Field, EmailStr
from typing import Annotated


class UserSignin(BaseModel):
    firstname: Annotated[str, Field(min_length=3, max_length=50)]
    lastname: Annotated[str, Field(min_length=3, max_length=50)]
    username: Annotated[str, Field(min_length=8, max_length=12)]
    email: Annotated[EmailStr, Field(examples=['example@gmail.com'])]
    password: Annotated[str, Field(min_length=8)]
    is_admin: Annotated[bool, Field()]


class UserLogin(BaseModel):
    username: str
    password: str


class UserProfile(BaseModel):
    firstname: str
    lastname: str
    username: str
    email: str
    address: str


class UpdateProfile(BaseModel):
    firstname: Annotated[str, Field(min_length=3, max_length=50)]
    lastname: Annotated[str, Field(min_length=3, max_length=50)]
    username: Annotated[str, Field(min_length=8, max_length=12)]
    email: Annotated[EmailStr, Field(examples=['example@gmail.com'])]
    address: Annotated[str, Field(max_length=70)]


class ForgotPassword(BaseModel):
    email: str


class NewPassword(BaseModel):
    password: str
    new_password: Annotated[str, Field(min_length=8)]


class Password(BaseModel):
    password: Annotated[str, Field(min_length=8)]
    password1: str


class Token(BaseModel):
    access_token: str
    token_type: str