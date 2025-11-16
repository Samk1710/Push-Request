from fastapi import Request, Depends
from sqlalchemy.orm import Session
from app.db.session import get_db

from app.models.pull_request import PullRequest
from app.models.repository import Repository

from app.utils.github_signing import verify_signature


async def handle_github_webhook(request: Request, db: Session = Depends(get_db)):
    body = await request.body()

    # Validate signature
    verify_signature(request, body)

    event = request.headers.get("X-GitHub-Event")
    payload = await request.json()

    if event == "pull_request":
        action = payload.get("action")
        pr_data = payload.get("pull_request")
        repo_data = payload.get("repository")

        if action in ["opened", "reopened", "synchronize"]:
            repo = db.query(Repository).filter(
                Repository.github_repo_id == repo_data["id"]
            ).first()

            if not repo:
                repo = Repository(
                    github_repo_id=repo_data["id"],
                    name=repo_data["name"],
                    full_name=repo_data["full_name"],
                    private=repo_data.get("private", False)
                )
                db.add(repo)
                db.commit()
                db.refresh(repo)

            pr = db.query(PullRequest).filter(
                PullRequest.github_pr_id == pr_data["id"]
            ).first()

            if not pr:
                pr = PullRequest(
                    github_pr_id=pr_data["id"],
                    number=pr_data["number"],
                    title=pr_data["title"],
                    state=pr_data["state"],
                    branch=pr_data["head"]["ref"],
                    repo_id=repo.id,
                )
                db.add(pr)
            else:
                pr.title = pr_data["title"]
                pr.state = pr_data["state"]
                pr.branch = pr_data["head"]["ref"]

            db.commit()

            return {"status": "PR stored/updated"}

    return {"status": "ignored"}
