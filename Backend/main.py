from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from routers import user

app = FastAPI()

origin=["http://localhost:3000"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origin,
    allow_credentials=True,  # Allow cookies, authorization headers, etc.
    allow_methods=["*"],     # Allow all HTTP methods (GET, POST, PUT, DELETE, etc.)
    allow_headers=["*"],     # Allow all headers in the request
)

app.include_router(user.router)