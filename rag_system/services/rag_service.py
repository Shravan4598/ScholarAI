from typing import Any


class RAGService:
    def __init__(self) -> None:
        self.documents: list[dict[str, Any]] = []

    def ingest(self, documents: list[dict[str, Any]]) -> None:
        self.documents.extend(documents)

    def answer(self, question: str) -> dict[str, str]:
        relevant = next((doc for doc in self.documents if question.lower() in doc.get("content", "").lower()), None)
        if relevant:
            return {"answer": relevant["content"], "source": relevant.get("title", "unknown")}
        return {"answer": "No matching material found. Please add more study resources.", "source": "none"}
