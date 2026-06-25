from fastapi import APIRouter

router = APIRouter()


@router.get("")
def get_analytics() -> dict[str, object]:
    return {
        "performance": [
            {"month": "Jan", "score": 72},
            {"month": "Feb", "score": 78},
            {"month": "Mar", "score": 85},
        ],
        "skill_gaps": ["System Design", "Data Structures"],
        "subject_progress": {"Math": 80, "Science": 75, "Programming": 90},
    }
