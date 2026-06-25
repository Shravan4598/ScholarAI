from fastapi import APIRouter

router = APIRouter()


@router.get("")
def get_study_plans() -> list[dict[str, object]]:
    return [
        {"title": "Daily Plan", "type": "daily", "content": "Review Python and complete one quiz"},
        {"title": "Weekly Plan", "type": "weekly", "content": "Focus on FastAPI and databases"},
    ]
