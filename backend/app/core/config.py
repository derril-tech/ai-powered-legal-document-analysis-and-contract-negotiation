import os
from pydantic import BaseModel

class Settings(BaseModel):
	env: str = os.getenv("APP_ENV", "dev")
	api_prefix: str = "/api"

settings = Settings()
