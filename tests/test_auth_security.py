import sys
import unittest
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[1] / "backend"))

from app.core.security import hash_password, verify_password


class AuthSecurityTests(unittest.TestCase):
    def test_hash_and_verify_password(self) -> None:
        password = "super-secret"
        hashed = hash_password(password)

        self.assertTrue(hashed)
        self.assertTrue(verify_password(password, hashed))
        self.assertFalse(verify_password("wrong-password", hashed))


if __name__ == "__main__":
    unittest.main()
