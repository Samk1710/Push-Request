import httpx
from app.core.config import get_settings

settings = get_settings()

async def get_pr_diff(repo_full_name: str, pr_number: int, token: str):
    url = f"https://api.github.com/repos/{repo_full_name}/pulls/{pr_number}"
    headers = {
        "Accept": "application/vnd.github.v3.diff",
        "Authorization": f"Bearer {token}"
    }
    async with httpx.AsyncClient() as client:
        r = await client.get(url, headers=headers)
        return r.text if r.status_code == 200 else None


async def post_review_comment(repo_full_name: str, pr_number: int, body: str, token: str):
    url = f"https://api.github.com/repos/{repo_full_name}/pulls/{pr_number}/reviews"
    async with httpx.AsyncClient() as client:
        r = await client.post(
            url,
            headers={
                "Accept": "application/vnd.github+json",
                "Authorization": f"Bearer {token}"
            },
            json={
                "body": body,
                "event": "COMMENT"
            }
        )
        return r.status_code in (200, 201)
