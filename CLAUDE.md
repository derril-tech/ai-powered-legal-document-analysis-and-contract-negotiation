# CLAUDE.md — Collaboration & Editing Guidelines

This document is Claude’s onboarding guide.  
It defines the **purpose of the project, coding conventions, editing rules, and collaboration workflow**.  
Claude should always respect these boundaries when generating code.

---

## 📌 Project Overview
- **Name:** <Project Name>  
- **Purpose:** <One-paragraph description of what this app does>  
- **Target Users:** <Who the app is for>  
- **Goals:** <Business/technical goals of the app>  
- **Tech Stack:**  
  - Frontend: <React/Next.js/Vite + TS + UI Kit>  
  - Backend: <FastAPI/Django/Nest + DB + Auth>  
  - Services: <3rd party APIs, integrations>  

---

## 📂 Folder & File Structure
- **frontend/** → All UI code (React/TS components, pages, hooks, styles)  
- **backend/** → API, models, services, database, config  
- **docs/** → Specs (`REPO_MAP.md`, `API_SPEC.md`, `PROMPT_DECLARATION.md`, `CLAUDE.md`)  
- **scripts/** → Utility scripts (dev runner, seeders)  
- **.github/** → CI/CD workflows  

### Editable by Claude
- `frontend/src/**/*` (except `_INSTRUCTIONS.md`)  
- `backend/app/**/*` (except migrations unless asked)  
- Tests in `frontend/tests/` and `backend/tests/`  

### Do Not Touch
- Lockfiles (`package-lock.json`, `poetry.lock`, etc.)  
- CI/CD configs (`.github/workflows/*`) unless explicitly requested  
- Auto-generated code or migrations  
- This file (`CLAUDE.md`)  

---

## 🎨 Coding Conventions
- **Languages:** TypeScript (frontend), Python (backend)  
- **Style Guides:**  
  - Frontend: Prettier + ESLint (Airbnb rules)  
  - Backend: Black + ruff (PEP8)  
- **Naming:**  
  - Components: `PascalCase`  
  - Variables: `camelCase` (TS), `snake_case` (Python)  
  - Branches: `feature/…`, `fix/…`  
- **Commenting:**  
  - Document public components, functions, and non-obvious logic  
  - Use `// TODO:` or `# TODO:` for clear tasks  

---

## 🤝 AI Collaboration Rules
- Always respond with **full file rewrites** if >30 lines are changed.  
- Keep responses **concise in explanation, complete in code**.  
- Never remove error handling, logging, or comments unless replacing them with better versions.  
- Preserve imports and typing.  
- If ambiguity arises:  
  1. Ask up to **2 clarifying questions**  
  2. If unanswered, proceed with best guess and note assumptions  

---

## ✍️ Editing Rules
- **Editable Files:** All app source code under `frontend/src/` and `backend/app/`  
- **Avoid:** lockfiles, auto-generated files, CI configs  
- **Format of Responses:**  
  - Full file rewrites for large changes  
  - Patches (with clear diff context) for small fixes  
- **Error Handling:** must remain in place at all times  

---

## 📦 Project Dependencies
- **Frontend:** React, TypeScript, Vite, <UI Kit>, <State Manager>  
- **Backend:** FastAPI, Pydantic, Uvicorn, <ORM/DB>, <Auth Library>  
- **Services:** <list external APIs>  
- **Environment:**  
  - Variables in `.env.example` must be respected  
  - Secrets should never be hardcoded  

---

## 🛠️ Workflow & Tools
- **Run locally:**  
  - Frontend: `npm run dev`  
  - Backend: `uvicorn backend.app.main:app --reload`  
- **FE ↔ BE boundary:** REST JSON via `/api/v1/*`  
- **Testing:**  
  - Frontend: Jest/RTL  
  - Backend: Pytest  
- **CI/CD:** GitHub Actions (lint, type-check, test, build)  
- **Deployment:** <e.g., Vercel (FE) + Render (BE)>  

---

## 📚 Contextual Knowledge
- **Design System:** <list tokens, colors, typography>  
- **Domain Rules:** <business logic quirks Claude must respect>  
- **Scaffolding Rules:** e.g. scalability categories mirror design categories  
- **UX Principles:** accessibility (a11y), empty/loading/error states required  

---

## ✅ Examples

**Good Answer Example**
```tsx
// Good: Full file rewrite, assumptions stated, comments kept
import { useEffect, useState } from "react";
import { fetchUsers } from "../lib/api";

// CLAUDE_TASK: Fetch and display user list with loading/error states
export default function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchUsers()
      .then(setUsers)
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  return <ul>{users.map(u => <li key={u.id}>{u.name}</li>)}</ul>;
}


