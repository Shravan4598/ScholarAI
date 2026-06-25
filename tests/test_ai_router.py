import importlib.util
import unittest
from pathlib import Path


MODULE_PATH = Path(__file__).resolve().parents[1] / "backend" / "app" / "api" / "routers" / "ai.py"
SPEC = importlib.util.spec_from_file_location("scholarai_ai_router", MODULE_PATH)
MODULE = importlib.util.module_from_spec(SPEC)
assert SPEC.loader is not None
SPEC.loader.exec_module(MODULE)
ai_chat = MODULE.ai_chat


class AiRouterTests(unittest.TestCase):
    def test_ai_chat_generates_meaningful_answer(self) -> None:
        response = ai_chat({"question": "Explain Python variables"})
        self.assertIn("Step 1", response["answer"])
        self.assertTrue(response["summary"])
        self.assertTrue(response["notes"])


if __name__ == "__main__":
    unittest.main()
