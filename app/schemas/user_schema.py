from pydantic import BaseModel, Field, EmailStr, field_validator
from typing import Annotated
import re


class UserSignin(BaseModel):
    firstname: Annotated[str, Field(min_length=3, max_length=50)]
    lastname: Annotated[str, Field(min_length=3, max_length=50)]
    username: Annotated[str, Field(min_length=8, max_length=12)]
    email: Annotated[EmailStr, Field(examples=['example@gmail.com'])]
    password: Annotated[str, Field(min_length=8)]

    @field_validator('password')
    def validate_password(cls, value):
        if not re.search(r'[A-Z]', value):
            raise ValueError('Password must contain at least one upper case character')
        if not re.search(r'[!@#$%^&*(),.?|{}:;<>]', value):
            raise ValueError('Password must contain at least one special character')
        return value


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


class ForgotPassword(BaseModel):
    email: str


class NewPassword(BaseModel):
    password: str
    new_password: Annotated[str, Field(min_length=8)]

    @field_validator('new_password')
    def validate_password(cls, value):
        if not re.search(r'[A-Z]', value):
            raise ValueError('Password must contain at least one upper case character')
        if not re.search(r'[!@#$%^&*(),.?|{}:;<>]', value):
            raise ValueError('Password must contain at least one special character')
        return value


class Password(BaseModel):
    password: Annotated[str, Field(min_length=8)]
    password1: str

    @field_validator('password')
    def validate_password(cls, value):
        if not re.search(r'[A-Z]', value):
            raise ValueError('Password must contain at least one upper case character')
        if not re.search(r'[!@#$%^&*(),.?|{}:;<>]', value):
            raise ValueError('Password must contain at least one special character')
        return value


class OTP(BaseModel):
    otp: str


class DeleteUser(BaseModel):
    password: str


class Token(BaseModel):
    access_token: str
    token_type: str
