from sqlalchemy.orm import declarative_base
from typing import TYPE_CHECKING

Base = declarative_base()

# Only import models for Alembic migrations, not at runtime to avoid circular imports
if TYPE_CHECKING:
	from app.models.user import User
	from app.models.installation import Installation
	from app.models.repository import Repository
	from app.models.pull_request import PullRequest
	from app.models.review import Review
	from app.models.issue import Issue
