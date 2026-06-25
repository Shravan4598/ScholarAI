from fastapi import APIRouter

router = APIRouter()


def _build_tutor_response(question: str) -> dict[str, str]:
    cleaned_question = question.strip()
    if not cleaned_question:
        return {
            "answer": "Step 1: Ask a specific question about your topic.\nStep 2: I will break it into simple steps.\nStep 3: Review the summary and notes to study effectively.",
            "summary": "No question provided.",
            "notes": "Try asking about a concept, formula, or topic you want to learn.",
        }

    lowered = cleaned_question.lower()
    if "python" in lowered and "variable" in lowered:
        answer = (
            f"Step 1: Think of a variable as a labeled container that stores a value.\n"
            f"Step 2: In Python, you create one with an assignment such as 'x = 10'.\n"
            f"Step 3: Variables can be reassigned, so 'x = 20' changes the stored value."
        )
    elif "math" in lowered or "equation" in lowered:
        answer = (
            f"Step 1: Identify the main quantity or unknown in '{cleaned_question}'.\n"
            f"Step 2: Rewrite the problem into smaller parts you can solve one at a time.\n"
            f"Step 3: Check your work by substituting the result back into the original equation."
        )
    elif "ai" in lowered or "artificial intelligence" in lowered:
        answer = (
            f"Step 1: AI means creating computer systems that can perform tasks that normally need human intelligence.\n"
            f"Step 2: Examples include recognizing images, understanding speech, recommending videos, and answering questions.\n"
            f"Step 3: A simple way to think about it is: AI learns patterns from data and uses them to make decisions or predictions."
        )
    elif "photosynthesis" in lowered:
        answer = (
            f"Step 1: Photosynthesis is the process plants use to make food from sunlight.\n"
            f"Step 2: Plants take in carbon dioxide and water, then use sunlight to produce glucose and oxygen.\n"
            f"Step 3: This process is essential because it provides food for plants and oxygen for life on Earth."
        )
    elif "gravity" in lowered:
        answer = (
            f"Step 1: Gravity is the force that pulls objects toward each other.\n"
            f"Step 2: On Earth, it pulls everything toward the ground.\n"
            f"Step 3: It is why planets orbit the Sun and why objects fall when dropped."
        )
    else:
        answer = (
            f"Step 1: Break '{cleaned_question}' into its main idea and supporting details.\n"
            f"Step 2: Connect each detail to a simple example you can remember.\n"
            f"Step 3: Summarize the concept in your own words and test yourself on it."
        )

    return {
        "answer": answer,
        "summary": f"Key idea: {cleaned_question[:80]}",
        "notes": "Practice by explaining the concept aloud and solving one example problem.",
    }


@router.post("/chat")
def ai_chat(payload: dict[str, str]) -> dict[str, str]:
    question = payload.get("question", "")
    return _build_tutor_response(question)
