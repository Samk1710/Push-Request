import google.generativeai as genai
from app.core.config import get_settings

settings = get_settings()
genai.configure(api_key=settings.GEMINI_API_KEY)

MODEL = "gemini-1.5-pro-latest"

async def analyze_diff(diff_text: str):
    prompt = f"""
    You are CodeBoard, a senior software engineer AI.

    Review the following GitHub Pull Request diff.
    Identify:
    - Potential bugs
    - Security concerns
    - Performance issues
    - Style improvements

    Respond strictly in JSON list format:
    [
      {{
        "file": "filename",
        "line": 42,
        "comment": "explain issue here"
      }}
    ]

    If no comments, return empty list: []
    
    Diff:
    {diff_text}
    """

    response = genai.GenerativeModel(MODEL).generate_content(prompt)
    raw = response.text.strip()

    try:
        return eval(raw)
    except Exception:
        return [{"file": None, "line": None, "comment": raw}]
