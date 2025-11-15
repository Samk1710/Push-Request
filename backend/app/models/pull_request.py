from sqlalchemy import Column, Integer, String, DateTime, ForeignKey, Enum, func
from sqlalchemy.orm import relationship
import enum
from app.db.base import Base

class PRState(str, enum.Enum):
    open = "open"
    closed = "closed"
    merged = "merged"

class PullRequest(Base):
    __tablename__ = "pull_requests"

    id = Column(Integer, primary_key=True, index=True)
    github_pr_id = Column(Integer, index=True)
    repo_id = Column(Integer, ForeignKey("repositories.id"))
    number = Column(Integer, nullable=False)
    title = Column(String)
    author_login = Column(String)
    state = Column(Enum(PRState), default=PRState.open)

    created_at = Column(DateTime(timezone=True), server_default=func.now(), nullable=False)

    repository = relationship("Repository", backref="pull_requests")
