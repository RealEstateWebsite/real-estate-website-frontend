from fastapi import APIRouter, Depends, HTTPException, BackgroundTasks
from starlette import status
from sqlalchemy.orm import Session
from ..model.database import begin
from ..model.model import Housing, UserModel
from ..schemas.config import get_user, get_db, send_email
from ..schemas.estate_schema import *

estate = APIRouter()

db_dependency = Annotated[Session, Depends(get_db)]
user_dependency = Annotated[str, Depends(get_user)]


@estate.get('/get-all-estate')
async def get_estate_list(db: db_dependency):
    estate_list = db.query(Housing).all()

    return estate_list


@estate.post('/add-house')
async def add_housing(background_task: BackgroundTasks, form: AddHouse, db: db_dependency, user: user_dependency):
    if not user:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid Credentials")

    user_details = db.query(UserModel).filter(UserModel.id == user.get('user_id')).first()

    email = user_details.email
    username = user_details.username

    data = Housing(
        bedroom_space=form.bed_no,
        size=form.size,
        price=form.price,
        location=form.location,
        description=form.description
    )

    db.add(data)
    db.commit()
    db.refresh(data)

    body = 'A new house has been added to the platform, we will get back to you later regarding the next step'
    await send_email(background_task, email, username, body)

    return "New House has been uploaded successfully"
