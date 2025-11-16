from app.services.github_reviews import get_pr_diff, post_review_comment
from app.services.ai_reviewer import analyze_diff

async def analyze_pull_request(repo_full_name: str, pr_number: int, token: str):
    diff = await get_pr_diff(repo_full_name, pr_number, token)
    if not diff:
        return "Failed to fetch diff"

    results = await analyze_diff(diff)

    for item in results:
        comment = item["comment"]
        await post_review_comment(repo_full_name, pr_number, comment, token)

    return "Review posted"
