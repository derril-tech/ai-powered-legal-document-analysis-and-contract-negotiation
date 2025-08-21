# Folder Instructions — backend/

- Place FastAPI app under `app/` with routers in `app/api/`.
- Keep endpoints small and typed (Pydantic v2). Avoid side effects in routers.
- Configuration lives in `app/core/`. Read env vars via `config.py`.
- Health endpoint: `GET /api/health` returns `{ status, version }`.
