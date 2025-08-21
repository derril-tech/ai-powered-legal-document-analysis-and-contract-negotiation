# CLAUDE.md — Collaboration & Editing Guidelines (Final)

## Project Overview
ClauseGuard AI accelerates legal review and negotiation by extracting clauses, scoring risk, proposing redlines, and maintaining an audit-ready trail. Stack: Next.js 14 (TS, Tailwind, shadcn/ui), FastAPI (async SQLAlchemy 2.0, Pydantic v2), PostgreSQL + pgvector, Redis, LangGraph + LangChain, WebSockets.

## Folder & File Structure (Editable vs Do-Not-Touch)
- Editable: `apps/frontend/**/*`, `backend/app/**/*`, `docs/**/*` (except this section without approval)
- Avoid: lockfiles, CI configs, auto-generated files, migrations unless asked

## Coding Conventions
- Frontend: React 18, App Router; server-first; React Query on client; TS strict
- Backend: FastAPI routers; async SQLAlchemy 2.0; Pydantic v2; settings via env
- Naming: descriptive; functions=verbs; variables=nouns; no `any`
- Comments: brief, explain “why”; avoid trivial comments
- Formatting: match existing style; wrap long lines

## AI Collaboration Rules
- Keep edits minimal and focused; preserve imports and types
- Ask up to 2 clarifying questions if ambiguous; otherwise proceed with assumptions
- Provide full file rewrites if >30 lines change; otherwise targeted edits
- Do not remove error handling or logging without improvement

## Editing Rules
- FE/BE boundary per `docs/PROMPT_DECLARATION.md`
- Data contracts per `docs/API_SPEC.md`; treat as authoritative
- No confidential text in logs/prompts; hash/redact

## Dependencies & Setup
- FE: Next.js 14, React 18, Tailwind; `npm install && npm run dev`
- BE: FastAPI; `pip install -r requirements.txt && uvicorn backend.app.main:app --reload`
- Env: copy `env.example` to `.env(.local)` in FE/BE

## Workflow & Tools
- Run locally: `scripts/dev.ps1` on Windows to start both
- Deployment: Vercel (FE), Render (BE) — configs added later
- Testing: Jest/RTL (FE), Pytest (BE), Playwright/Cypress (E2E)

## Contextual Knowledge
- Risk scoring, policy conformance, jurisdiction packs, fallback ladders
- RAG grounded over tenant policies, clause library, precedent, regs
- Approval gates; block finalize if missing citations/policy basis

## Examples
- Good: concise explanation, complete code, clear assumptions
- Bad: vague, partial code, missing types or states
