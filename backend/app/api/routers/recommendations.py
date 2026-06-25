from fastapi import APIRouter

router = APIRouter()


@router.get("")
def get_recommendations() -> list[dict[str, object]]:
    return [
        {"title": "Machine Learning Foundations", "type": "content", "score": 0.92},
        {"title": "React Patterns", "type": "collaborative", "score": 0.87},
    ]
