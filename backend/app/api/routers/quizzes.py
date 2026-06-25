from fastapi import APIRouter

router = APIRouter()


@router.get("/generate")
def generate_quiz() -> dict[str, object]:
    return {
        "title": "Python Basics Quiz",
        "difficulty": "easy",
        "questions": [
            {"type": "mcq", "prompt": "What is Python?", "options": ["A language", "A fruit", "A car"], "answer": "A language"}
        ],
    }
