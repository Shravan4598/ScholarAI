from pathlib import Path
from typing import List
from setuptools import find_packages, setup


ROOT_DIR = Path(__file__).resolve().parent
BACKEND_DIR = ROOT_DIR / "backend"


def get_requirements() -> List[str]:
    requirements_file = BACKEND_DIR / "requirements.txt"
    requirements_list: List[str] = []

    if requirements_file.exists():
        for line in requirements_file.read_text(encoding="utf-8").splitlines():
            line = line.strip()
            if not line or line.startswith("#") or line.startswith("-e "):
                continue
            requirements_list.append(line)

    return requirements_list


setup(
    name="scholarai",
    version="0.0.1",
    description="AI-powered personalized learning assistant",
    author="Shravan Kumar Pandey",
    author_email="shravankumarpandey825412@gmail.com",
    packages=find_packages(where="backend", include=["app", "app.*"]),
    package_dir={"": "backend"},
    install_requires=get_requirements(),
    python_requires=">=3.10",
)
