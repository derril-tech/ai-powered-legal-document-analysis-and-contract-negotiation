# Prompt Audit (Step 6)

## Consistency & Duplicates
- Removed overlapping definitions between `PROMPT_DECLARATION.md` and `API_SPEC.md`; `API_SPEC.md` is contract source of truth.
- Clarified FE/BE boundaries (REST + WS) and moved all models to `API_SPEC.md`.

## Stack ↔ Product ↔ Scaffold Alignment
- Stack matches brief (Next 14, FastAPI, Postgres+pgvector, Redis) — ok
- Scaffold includes routes, API health, docs — ok
- Missing pieces noted for later steps: RAG service, LangGraph skeleton, WebSockets wiring

## UI/UX & Accessibility Details
- States required for all async flows; diff monospace; risk color semantics
- To add: design tokens and print-friendly exports

## Editing Boundaries
- Source paths editable by Claude: `apps/frontend/**/*`, `backend/app/**/*`, `docs/**/*` (except this audit once finalized)
- Avoid lockfiles and CI changes unless requested

## Syntax Style
- Use clear, imperative instructions; strong typing; deterministic helpers
