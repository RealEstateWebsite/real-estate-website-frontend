from fastapi import FastAPI
from .routers.user import user
from .routers.estate import estate

app = FastAPI()

app.include_router(router=user, prefix='/user', tags=['User'])
app.include_router(router=estate, prefix='/estate', tags=['Order'])


@app.get('/')
def testing():
    return 'This is testing of the api'
