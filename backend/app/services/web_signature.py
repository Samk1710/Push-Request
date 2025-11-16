import hmac
import hashlib
from fastapi import HTTPException, Request
from app.core.config import get_settings

settings = get_settings()

def verify_signature(request: Request, body: bytes):
    signature_header = request.headers.get("X-Hub-Signature-256")

    if not signature_header:
        raise HTTPException(status_code=401, detail="Missing signature")

    signature = signature_header.split("=")[1].strip()
    secret = settings.GITHUB_WEBHOOK_SECRET.encode()

    mac = hmac.new(secret, msg=body, digestmod=hashlib.sha256)
    expected_signature = mac.hexdigest()

    if not hmac.compare_digest(expected_signature, signature):
        raise HTTPException(status_code=401, detail="Invalid signature")
