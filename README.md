# ScholarAI

ScholarAI is a production-ready AI-powered personalized learning assistant built with FastAPI, React, Tailwind, SQLAlchemy, and Docker.

## Run locally

- Backend: `cd backend && pip install -r requirements.txt && uvicorn app.main:app --reload`
- Frontend: `cd frontend && npm install && npm run dev`
- Docker Compose: `docker compose up --build`

## Structure

- backend/: FastAPI application and API routers
- frontend/: React + TypeScript UI
- ai_engine/: embedding and language model helpers
- recommendation_engine/: content and collaborative recommendations
- rag_system/: retrieval augmented generation helpers
- database/: schema and migration assets
- deployment/: deployment and Docker assets
- tests/: automated tests
