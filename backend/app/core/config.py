# app/core/config.py
from functools import lru_cache
from typing import List
from pydantic_settings import BaseSettings
from pydantic import AnyHttpUrl

class Settings(BaseSettings):
    ENV: str = "dev"
    DEBUG: bool = True

    BACKEND_CORS_ORIGINS: List[AnyHttpUrl] = []

    DATABASE_URL: str

    GITHUB_OAUTH_CLIENT_ID: str
    GITHUB_OAUTH_CLIENT_SECRET: str
    GITHUB_REDIRECT_URI: str

    GITHUB_APP_ID: int
    GITHUB_WEBHOOK_SECRET: str
    GITHUB_PRIVATE_KEY_PATH: str

    JWT_SECRET_KEY: str
    JWT_ALGORITHM: str = "HS256"
    JWT_ACCESS_TOKEN_EXPIRE_MINUTES: int = 60

    class Config:
        env_file = ".env"
        case_sensitive = True

@lru_cache
def get_settings() -> Settings:
    return Settings()
