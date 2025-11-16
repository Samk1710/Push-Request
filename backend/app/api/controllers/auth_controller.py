from fastapi import Depends, HTTPException, Request
from sqlalchemy.orm import Session
from app.db.session import get_db
from app.services.github_service import exchange_code_for_token, get_github_user
from app.core.security import create_access_token
from app.api.deps import get_current_user
from app.models.user import User
from app.core.config import get_settings

settings = get_settings()

def login():
    url = (
        "https://github.com/login/oauth/authorize"
        f"?client_id={settings.GITHUB_OAUTH_CLIENT_ID}"
        f"&redirect_uri={settings.GITHUB_REDIRECT_URI}"
        "&scope=read:user,user:email"
    )
    return {"auth_url": url}


async def callback(code: str, db: Session = Depends(get_db)):
    token = await exchange_code_for_token(code)
    if not token:
        raise HTTPException(status_code=401, detail="GitHub auth failed")

    github_user = await get_github_user(token)

    user = db.query(User).filter(User.github_user_id == github_user["id"]).first()
    if not user:
        user = User(
            github_user_id=github_user["id"],
            username=github_user["login"],
            avatar_url=github_user.get("avatar_url"),
            email=github_user.get("email"),
        )
        db.add(user)
        db.commit()
        db.refresh(user)

    jwt_token = create_access_token({"user_id": user.id})
    return {"access_token": jwt_token}


async def me(current_user: User = Depends(get_current_user)):
    return {
        "id": current_user.id,
        "username": current_user.username,
        "avatar_url": current_user.avatar_url,
    }
