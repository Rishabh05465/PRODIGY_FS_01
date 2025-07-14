from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

origin=["http://localhost:3000"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origin,
    allow_credentials=True,  # Allow cookies, authorization headers, etc.
    allow_methods=["*"],     # Allow all HTTP methods (GET, POST, PUT, DELETE, etc.)
    allow_headers=["*"],     # Allow all headers in the request
)

@app.get('/')
def index():
    return {"data":{"name":"Rishabh"}}


@app.get('/about')
def about():
    return "hello"

class ILogin(BaseModel):
    name:str
    password:str

@app.post('/login')
async def Login(data: ILogin):
    return {"message": "Item created successfully", "item": data}