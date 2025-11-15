# app/core/logging.py
import logging
from app.core.config import get_settings

settings = get_settings()

LOG_LEVEL = logging.DEBUG if settings.DEBUG else logging.INFO

def setup_logging() -> None:
    logging.basicConfig(
        level=LOG_LEVEL,
        format="%(asctime)s [%(levelname)s] %(name)s: %(message)s",
    )
