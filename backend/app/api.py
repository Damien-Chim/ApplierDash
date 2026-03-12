from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List


app = FastAPI()

# set urls to allow requests
origins = [
    "http://localhost:3000",
    "localhost:3000"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)


@app.get("/", tags=["root"])
async def read_root() -> dict:
    return {"message": "Hello from FASTAPI"}


@app.get("/applications")
def get_applications():
    return [
        {"company" : "Optiver", "location" : "Sydney", "role" : "SWE", "notes" : "Something something notes"}, 
        {"company" : "Optiver", "location" : "Sydney", "role" : "SWE", "notes" : "Something something notes"}
    ]

class Application(BaseModel):
    company: str
    location: str
    role: str
    notes: str

class ApplicationList(BaseModel):
    data: List[Application]

@app.post("/receive")
async def receive_data(application: ApplicationList):
    print(application)
    return application

