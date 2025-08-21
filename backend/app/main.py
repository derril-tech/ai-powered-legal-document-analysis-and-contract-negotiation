from fastapi import FastAPI
from app.api.health import router as health_router

app = FastAPI(title="ClauseGuard AI API")

@app.get("/")
async def root():
	return {"status": "ok"}

app.include_router(health_router, prefix="/api")
