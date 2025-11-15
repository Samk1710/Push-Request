from sqlalchemy.orm import declarative_base

Base = declarative_base()

# Import all model files here so Alembic auto-detects them
from app.models.user import User
from app.models.installation import Installation
from app.models.repository import Repository
from app.models.pull_request import PullRequest
from app.models.review import Review
from app.models.issue import Issue
