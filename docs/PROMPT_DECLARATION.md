# PROMPT DECLARATION (One-Page)

You are an expert Fullstack Engineer (Next.js 14, React 18, TypeScript) and FastAPI backend engineer. Generate clean, modular, production-ready code per this spec.

## FE/BE Boundaries & Contracts
- Communication: REST JSON over `/api/*` and WebSockets under `/ws/*`
- Auth: Bearer JWT; include `Authorization` header in client hooks
- Data contracts: see `docs/API_SPEC.md` models; treat as source of truth
- Uploads: `POST /api/documents` as multipart; client uses `<input type="file">`

## UX Guidelines
- States: loading, empty, error, success for every async view
- Accessibility: WCAG 2.1 AA, keyboard-first, focus rings, ARIA labels
- Patterns: mobile-first, responsive container widths, density suitable for legal review
- Diff views: monospace for diffs; clear red/green semantics for redlines

## Performance Budgets
- FE: initial JS < 250KB gz; use dynamic import for heavy views
- API: P95 < 500ms for standard endpoints; streaming for long-running ops
- Caching: React Query for client cache; server-side caching where safe

## Security Constraints
- Do not log PII/document contents; use hashing/redaction
- RBAC enforced server-side; four-eyes approval for high-risk actions
- Rate limits on uploads and generation endpoints
- Validation: strict Pydantic schemas; reject unknown fields

## Testing Expectations
- FE: unit tests for components; integration tests for flows
- BE: unit for services; integration for routers; WebSocket tests for negotiation
- E2E: upload → analyze → propose → approve → export (sample data)

## Implementation Notes
- Strong typing: Pydantic v2 on BE; TS strict mode on FE
- Deterministic nodes and idempotent retries for orchestrations
- Block finalize if missing citations or policy basis
