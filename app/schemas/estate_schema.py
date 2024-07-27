from pydantic import BaseModel, Field
from typing import Annotated


class AddHouse(BaseModel):
    bed_no: Annotated[int, Field(min_length=1)]
    size: Annotated[float, Field()]
    price: Annotated[float, Field()]
    location: Annotated[str, Field()]
    description: Annotated[str, Field()]

