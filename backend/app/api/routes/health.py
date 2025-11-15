# app/api/routes/health.py
from fastapi import APIRouter
from app.api.controllers.health_controller import health_status

router = APIRouter()

@router.get("/health")
def health():
	return health_status()
