from fastapi import FastAPI, Request
from fastapi.responses import RedirectResponse
from .routers.user import user
from .model import model as model
from .model.database import engine
from .routers.estate import estate
from .routers.admin import admin
from .routers.auth import auth
from fastapi.middleware.cors import CORSMiddleware
from starlette.middleware.sessions import SessionMiddleware
from dotenv import load_dotenv
import os

load_dotenv()
FRONTEND = os.getenv('FRONTEND')
secret = os.getenv('SECRET')


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
app.add_middleware(SessionMiddleware, secret_key=secret)
app.include_router(user, prefix='/user', tags=['User'])
app.include_router(estate, prefix='/estate', tags=['Estate'])
app.include_router(admin, prefix='/admin', tags=['Admin'])
app.include_router(auth, prefix='/auth', tags=['Auth'])


@app.get('/')
def testing():
    return RedirectResponse(url='https://real-estate-website-ruddy.vercel.app/')


model.data.metadata.create_all(bind=engine)
