from pydantic import BaseModel
from typing import Optional


class NewOrder(BaseModel):
    name: str
