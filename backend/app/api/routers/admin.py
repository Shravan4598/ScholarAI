from fastapi import APIRouter

router = APIRouter()


@router.get("/overview")
def admin_overview() -> dict[str, object]:
    return {"users": 128, "courses": 24, "quizzes": 58, "recommendations": 92}
