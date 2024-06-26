from typing import Annotated
from pydantic import BaseModel, Field, EmailStr


class CreateAdminUserSchema(BaseModel):
    firstname: Annotated[str, Field(min_length=3, max_length=50)]
    lastname: Annotated[str, Field(min_length=3, max_length=50)]
    username: Annotated[str, Field(min_length=8, max_length=12)]
    email: Annotated[EmailStr, Field(examples=['example@gmail.com'])]
    password: Annotated[str, Field(min_length=8)]