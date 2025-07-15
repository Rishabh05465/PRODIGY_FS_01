from fastapi import APIRouter
from pydantic import BaseModel
import json

router = APIRouter(
    prefix="/user",
    tags=["User"]
)

class IUser(BaseModel):
    name:str
    password:str
    email:str

class ILogin(BaseModel):
    name:str
    password:str

class IRegister(BaseModel):
    name:str
    password:str
    email:str

@router.get('/')
async def get_users():
    with open("data/user.json","r") as userdata:
        data=json.load(userdata)
    return {"message":"user data loaded successfully","data":data}

@router.post('/')
async def create_user(data: IUser):
    return {"message": "Item created successfully", "items": data}

@router.post('/login')
async def Login(data: ILogin):
    return {"message": "login successfully", "username": data.name}

@router.post('/register')
async def Register(new_user: IRegister):
    with open("data/user.json","r") as read_data:
        data=json.load(read_data)
        if new_user.model_dump() in data:
            return {"message":"user already registered"}
        else:
            data.append(new_user.model_dump())
    
    with open("data/user.json","w") as save_data:
        json.dump(data,save_data)
    return {"message":"registration succesful","data":data}