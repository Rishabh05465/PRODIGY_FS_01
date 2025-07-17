from fastapi import APIRouter, HTTPException, Depends, status
from pydantic import BaseModel
import json
import datetime
import secrets
import jwt
from fastapi.security import OAuth2PasswordBearer

#SECRET_KEY = secrets.token_hex(32)
SECRET_KEY = "6e994ac6febc7c29691d897aaec910e9e7f87064ed6322fac04f33e71b369ba4"
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="login")

router = APIRouter(
    prefix="/user",
    tags=["User"]
)

class IUser(BaseModel):
    name:str
    password:str
    email:str

class ILogin(BaseModel):
    email:str
    password:str

class IRegister(BaseModel):
    name:str
    password:str
    email:str

def create_jwt_token(data: dict):
    """Generate JWT token"""
    payload = data.copy()
    expire = datetime.datetime.utcnow() + datetime.timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    payload.update({"exp": expire, "iat": datetime.datetime.utcnow()})
    token = jwt.encode(payload, SECRET_KEY, algorithm=ALGORITHM)
    return token

# Function to verify token
def verify_jwt_token(token: str = Depends(oauth2_scheme)):
    try:
        # Decode the token
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        return payload  # payload contains user data (e.g., sub, exp)
    except jwt.ExpiredSignatureError:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED,
                            detail="Token has expired")
    except jwt.InvalidTokenError:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED,
                            detail="Invalid token")

@router.get('/')
async def get_users(user : dict = Depends(verify_jwt_token)):
    with open("data/user.json","r") as userdata:
        data=json.load(userdata)
    return {"message":"user data loaded successfully","data":data}

@router.post('/')
async def create_user(data: IUser):
    return {"message": "Item created successfully", "items": data}

@router.post('/login')
async def Login(info: ILogin):
    with open("data/user.json","r") as userdata:
        data=json.load(userdata)
    for i in data:
        if info.email==i["email"] and info.password==i["password"]:
            token = create_jwt_token({"sub": i["name"]})
            return {"message":"User successfully login", "token":token, "token_type": "bearer", "user":i["name"]}
    return{ "error":"Invalid username or password"}

@router.post('/register')
async def Register(new_user: IRegister):
    with open("data/user.json","r") as read_data:
        data=json.load(read_data)
        for i in data:
            if new_user.email == i["email"]:
                return {"message":"user already registered"}
        data.append(new_user.model_dump())
    
    with open("data/user.json","w") as save_data:
        json.dump(data,save_data)
    return {"message":"registration succesful","data":data}