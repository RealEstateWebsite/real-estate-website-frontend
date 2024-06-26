from fastapi import APIRouter

user = APIRouter()


@user.get('/user/signup')
async def user_testing():
    return 'Testing user'
