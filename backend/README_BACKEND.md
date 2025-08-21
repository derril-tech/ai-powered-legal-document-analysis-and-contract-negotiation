# Backend (FastAPI)

## Run (dev)
```bash
python -m venv .venv
source .venv/bin/activate  # Windows: .\.venv\Scripts\Activate.ps1
pip install -r requirements.txt
uvicorn backend.app.main:app --reload
```

## Health Check
- GET http://localhost:8000/api/health

## Env
Copy `env.example` to `.env` and adjust:
- `APP_ENV=dev`
- `API_PREFIX=/api`
