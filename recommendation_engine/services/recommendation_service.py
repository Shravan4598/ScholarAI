from typing import Any


class RecommendationService:
    def __init__(self) -> None:
        self.content_rules = ["python", "fastapi", "sqlalchemy", "react"]

    def content_based(self, interests: list[str]) -> list[dict[str, Any]]:
        return [
            {"title": f"{interest.title()} Deep Dive", "type": "content", "score": 0.9}
            for interest in interests
            if interest.lower() in self.content_rules
        ]

    def collaborative(self, similar_users: list[str]) -> list[dict[str, Any]]:
        return [{"title": user.title(), "type": "collaborative", "score": 0.84} for user in similar_users]

    def hybrid(self, interests: list[str], similar_users: list[str]) -> list[dict[str, Any]]:
        recommendations = self.content_based(interests)
        recommendations.extend(self.collaborative(similar_users))
        return recommendations
