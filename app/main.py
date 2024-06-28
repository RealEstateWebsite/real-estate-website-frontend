from fastapi import FastAPI
from .routers.user import user
from .model import model as model
from .model.database import engine
from .routers.estate import estate

app = FastAPI()

app.include_router(user, prefix='/user', tags=['User'])
app.include_router(estate, prefix='/estate', tags=['Order'])


@app.get('/')
def testing():
    return 'This is the beginning of something great'


model.data.metadata.create_all(bind=engine)
