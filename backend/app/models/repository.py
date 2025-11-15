from sqlalchemy import Column, Integer, String, DateTime, ForeignKey, func
from sqlalchemy.orm import relationship
from app.db.base import Base

class Repository(Base):
    __tablename__ = "repositories"

    id = Column(Integer, primary_key=True, index=True)
    github_repo_id = Column(Integer, unique=True, index=True)
    full_name = Column(String, index=True)  # "owner/name"
    installation_id = Column(Integer, ForeignKey("installations.id"))

    created_at = Column(DateTime(timezone=True), server_default=func.now(), nullable=False)

    installation = relationship("Installation", backref="repositories")
