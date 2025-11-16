# utils/github_signing.py
import hmac
import hashlib
from fastapi import Request, HTTPException
from app.core.config import get_settings

def verify_signature(request: Request, body: bytes):
	settings = get_settings()
	secret = settings.GITHUB_WEBHOOK_SECRET.encode()
	signature = request.headers.get("X-Hub-Signature-256")
	if not signature:
		raise HTTPException(status_code=400, detail="Missing signature header")

	sha_name, signature = signature.split('=')
	if sha_name != 'sha256':
		raise HTTPException(status_code=400, detail="Unsupported signature type")

	mac = hmac.new(secret, msg=body, digestmod=hashlib.sha256)
	if not hmac.compare_digest(mac.hexdigest(), signature):
		raise HTTPException(status_code=400, detail="Invalid signature")
