# REPO_MAP

This repository is a monorepo containing a Next.js 14 frontend and a FastAPI backend, plus shared documentation and configuration.

## Top-level
- `apps/frontend/` — Next.js 14 app (App Router, TypeScript, Tailwind, shadcn/ui)
- `backend/` — FastAPI app (async SQLAlchemy 2.0, Pydantic v2, JWT, RBAC)
- `docs/` — Architecture docs for Claude Code and human contributors
- `PROJECT_BRIEF` — Product brief and implementation steps

## apps/frontend
- `app/` — Next.js App Router entry (routes + layouts)
  - `page.tsx` — Home
  - `about/page.tsx` — About
  - `dashboard/page.tsx` — Dashboard (mock data)
- `components/` — Reusable UI components
  - `Button.tsx`
- `lib/` — Client utilities (API client, helpers, mock data, types)
  - `types.ts`, `mock.ts`
- `styles/` — Global CSS/Tailwind layers (`app/globals.css`)
- `_INSTRUCTIONS.md` — Where to extend UI and pages

## backend
- `app/` — FastAPI application source code
  - `api/` — Routers and endpoint definitions (`health.py`)
  - `core/` — Settings, security, logging (`config.py`)
  - `models/` — SQLAlchemy models (to add in later steps)
  - `schemas/` — Pydantic v2 models (to add in later steps)
  - `services/` — Business logic (to add in later steps)
  - `workers/` — Background jobs (to add in later steps)
- `_INSTRUCTIONS.md` — Where to add services, models, routes

## docs
- `REPO_MAP.md` — This file
- `API_SPEC.md` — API endpoints, models, and error conventions (stub in Step 1)
- `CLAUDE.md` — Collaboration and editing rules (draft in Step 1)

## Run targets
- Frontend dev: `npm run dev` inside `apps/frontend`
- Backend dev: `uvicorn backend.app.main:app --reload`

## Next steps
Follow the 8-step plan in `PROJECT_BRIEF`.


