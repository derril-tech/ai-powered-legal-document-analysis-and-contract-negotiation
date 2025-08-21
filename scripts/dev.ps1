# Runs backend (Uvicorn) and frontend (Next.js) in parallel
Start-Job -ScriptBlock { uvicorn backend.app.main:app --reload }
Start-Job -ScriptBlock { cd apps/frontend; npm run dev }
Write-Host "Started backend and frontend in background jobs. Use Get-Job to see status."
