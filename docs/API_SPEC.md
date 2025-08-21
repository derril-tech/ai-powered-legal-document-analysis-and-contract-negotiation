# API_SPEC (MVP)

## Conventions
- Base URL: `/api`
- Content-Type: `application/json`
- Auth: Bearer JWT (roles: admin, counsel, reviewer, guest)
- Errors: `{ error: { code: string, message: string, details?: any } }`

## Health
- GET `/api/health` → `{ status: "ok"|"degraded"|"down", version: string }`

## Documents
- POST `/api/documents` (multipart/form-data)
  - Form fields: `file`, `type?` (NDA|MSA|DPA|SOW|Terms)
  - 201 → `{ id: string, title: string, type: string }`
- GET `/api/documents/{id}` → `{ id, title, type, status, versions: DocVersion[] }`
- POST `/api/documents/{id}/ingest` → `{ version_id: string, status: "queued"|"processing"|"ready" }`

## Clauses & Extractions
- GET `/api/documents/{versionId}/clauses` → `Clause[]`
- GET `/api/documents/{versionId}/extractions` → `Extraction[]`

## Retrieval (RAG)
- POST `/api/retrieve` { `doc_version_id`, `query?`, `limit?` }
  - 200 → `{ citations: Citation[] }`

## Assessment
- POST `/api/assess` { `doc_version_id` }
  - 200 → `{ risk_score: RiskScore, issues: Issue[] }`

## Proposals
- POST `/api/propose` { `doc_version_id` }
  - 200 → `{ proposals: Proposal[], rationale: string, citations: Citation[] }`

## Negotiations
- POST `/api/negotiations` { `document_id` }
  - 201 → `{ id: string, state: string }`
- GET `/api/negotiations/{id}` → `{ id, state, participants, redlines: Redline[] }`
- POST `/api/negotiations/{id}/redlines` { `diff` } → `{ id, diff, created_at }`
- WS `/ws/negotiations/{id}` → presence, comments, tasks, approvals events

## Anchoring (optional)
- POST `/api/anchor/{versionId}` → `{ tx_hash, anchor_hash, chain }`

## Models
- `DocVersion` { `id`, `hash`, `created_at`, `author_id` }
- `Clause` { `id`, `type`, `text`, `confidence?` }
- `Extraction` { `id`, `clause_type`, `entities`, `confidence` }
- `Citation` { `id`, `source`, `location`, `excerpt` }
- `RiskScore` { `total`, `jurisdiction?`, `regulatory?`, `data?`, `liability?` }
- `Issue` { `id`, `severity`, `message`, `clause_id?` }
- `Proposal` { `id`, `clause_id`, `diff`, `rationale` }
- `Redline` { `id`, `diff`, `author_id`, `created_at` }
