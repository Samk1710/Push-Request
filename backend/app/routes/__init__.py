# app/api/routes/__init__.py
from fastapi import APIRouter
from . import health

api_router = APIRouter()
api_router.include_router(health.router)
