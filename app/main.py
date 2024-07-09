from fastapi import FastAPI
from .routers.user import user
from .model import model as model
from .model.database import engine
from .routers.estate import estate
from fastapi.middleware.cors import CORSMiddleware

origins = [
    'http://localhost:5173/'
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


@app.get('/')
def testing():
    return 'This is the beginning of something '


model.data.metadata.create_all(bind=engine)
