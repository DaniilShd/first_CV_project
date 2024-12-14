from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

# class Task(BaseModel):
#     id:

@app.get("/")
async def root():
    return {"message": "Hello World"}