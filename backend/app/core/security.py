from datetime import datetime, timedelta
from jose import jwt
from app.core.config import get_settings

settings = get_settings()

def create_access_token(data: dict):
    expire = datetime.utcnow() + timedelta(hours=10)
    payload = data.copy()
    payload.update({"exp": expire})
    return jwt.encode(payload, settings.JWT_SECRET_KEY, algorithm=settings.JWT_ALGORITHM)
