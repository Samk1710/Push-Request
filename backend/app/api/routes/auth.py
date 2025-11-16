from fastapi import APIRouter
from app.api.controllers.auth_controller import login, callback, me

router = APIRouter(prefix="/auth", tags=["auth"])

router.get("/login")(login)
router.get("/callback")(callback)
router.get("/me")(me)
