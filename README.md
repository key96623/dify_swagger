# Dify Workflow Swagger

Swagger UI for the original Dify workflow endpoint:

```text
POST /dify/v1/workflows/run
```

Each workflow uses the same endpoint and is selected by its Bearer API key. No real API keys are stored in this public repository.

## Website

https://key96623.github.io/dify_swagger/

## Update the generated spec

After editing `openapi/dify-all-workflows.openapi.json`, run:

```powershell
node scripts/sync-swagger-spec.js
```

Commit both the JSON source and generated JavaScript wrapper.
