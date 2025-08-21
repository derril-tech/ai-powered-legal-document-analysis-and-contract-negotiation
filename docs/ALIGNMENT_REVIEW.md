# Alignment Review (Step 3)

This document verifies that the scaffold matches the product brief, tech specs, and UX goals.

## Navigation ↔ Product Journeys
- Current routes: `/`, `/about`, `/dashboard`
- Planned key routes (per brief): `/documents/:id`, `/negotiations/:id`, `/library`, `/policies`
- Status: base nav in place; domain routes to be added in feature steps

## Components/pages ↔ Required features
- Present: Home, About, Dashboard, `Button` component, mock data
- Planned: Diff Viewer, Clause Browser, Policy Panel, Citations Sidebar, Risk Badges, Approvals Workflow, Export actions

## API coverage for MVP
- Present: `GET /api/health`
- Planned (see `docs/API_SPEC.md`): ingestion, extraction, retrieval, assessment, proposals, negotiation, anchoring, websockets

## Tech stack consistency
- Frontend: Next.js 14, React 18, TS, Tailwind (consistent with brief)
- Backend: FastAPI, Pydantic v2, SQLAlchemy 2, Uvicorn (consistent)
- Data: PostgreSQL + pgvector, Redis (to be wired in later steps)
- Real-time: WebSockets (planned)

## UX direction reflected
- Tailwind and baseline typography; WCAG intent documented in `docs/CLAUDE.md`
- To add: design tokens, density controls, diff monospace styles, risk color semantics

## Checklist
- [x] Navigation structure matches product journeys (base)
- [x] Components/pages map to required features (stubs)
- [x] API endpoints cover MVP needs (spec drafted)
- [x] No contradictory or unused technologies
