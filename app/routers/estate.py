from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from typing import Annotated
from ..model.database import begin


estate = APIRouter()

def get_db():
    db = begin()
    try:
        yield db
    finally:
        db.close()


db_dependency = Annotated[Session, Depends(get_db)]

@estate.get('/get-all-estate')
async def get_estate_list(db: db_dependency):
    estate_list = db.query()
