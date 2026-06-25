from fastapi import APIRouter

router = APIRouter()


@router.get("/overview")
def dashboard_overview() -> dict[str, object]:
    return {
        "progress": 72,
        "recommended_topics": ["Python Basics", "FastAPI", "SQLAlchemy"],
        "quiz_performance": 88,
        "study_streak": 12,
        "weak_areas": ["System Design"],
        "upcoming_tasks": ["Review SQL joins", "Complete AI tutor session"],
    }
