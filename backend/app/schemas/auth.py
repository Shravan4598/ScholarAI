from pydantic import BaseModel


class UserCreate(BaseModel):
    email: str
    username: str
    password: str
    full_name: str | None = None


class UserLogin(BaseModel):
    email: str
    password: str


class Token(BaseModel):
    access_token: str
    token_type: str = "bearer"


class UserOut(BaseModel):
    id: int
    email: str
    username: str
    full_name: str | None = None
    role: str
    is_active: bool
    is_verified: bool

    class Config:
        from_attributes = True
