from sqlalchemy import Column, Integer, String, DateTime, func
from app.db.base import Base

class Installation(Base):
    __tablename__ = "installations"

    id = Column(Integer, primary_key=True, index=True)
    github_installation_id = Column(Integer, unique=True, index=True)
    account_login = Column(String, index=True)
    account_type = Column(String)  # "User" or "Organization"

    created_at = Column(DateTime(timezone=True), server_default=func.now(), nullable=False)
