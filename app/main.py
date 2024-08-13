from fastapi import FastAPI
from .routers.user import user
from .model import model as model
from .model.database import engine
from .routers.estate import estate
from .routers.admin import admin
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
import os

load_dotenv()
FRONTEND = os.getenv('FRONTEND')

origins = [
    FRONTEND
]
app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=['*'],
    allow_headers=['*']
)
app.include_router(user, prefix='/user', tags=['User'])
app.include_router(estate, prefix='/estate', tags=['Estate'])
app.include_router(admin, prefix='/admin', tags=['Admin'])


@app.get('/')
def testing():
    return 'This is the beginning of something great'


model.data.metadata.create_all(bind=engine)
