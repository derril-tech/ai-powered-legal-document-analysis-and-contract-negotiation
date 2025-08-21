from fastapi import APIRouter
from pydantic import BaseModel
from importlib.metadata import version, PackageNotFoundError

router = APIRouter()

class HealthResponse(BaseModel):
	status: str
	version: str

@router.get("/health", response_model=HealthResponse)
async def health() -> HealthResponse:
	try:
		ver = version("fastapi")
	except PackageNotFoundError:  # pragma: no cover
		ver = "dev"
	return HealthResponse(status="ok", version=ver)
