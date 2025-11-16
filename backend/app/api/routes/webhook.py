from fastapi import APIRouter
from app.api.controllers.webhook_controller import handle_github_webhook

router = APIRouter(prefix="/webhooks", tags=["webhooks"])

router.post("/github")(handle_github_webhook)
