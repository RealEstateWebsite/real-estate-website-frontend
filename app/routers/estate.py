from fastapi import APIRouter

estate = APIRouter()


@estate.get('/order-food')
async def order_testing():
    return 'Testing order route'
