# Dify Workflow Swagger

Swagger UI for the original Dify workflow endpoint:

```text
POST /dify/v1/workflows/run
```

Each workflow uses the same endpoint and is selected by its Bearer API key. No real API keys are stored in this public repository.

## Website

https://key96623.github.io/dify_swagger/

## Release Notes

See `CHANGELOG.md`.

### 1.1.0 - 2026-07-03

- Unified `Email-Writer - External` and `Email-Writer - Internal` into one `Email-Writer` schema.
- Added `audience` for `Email-Writer` with `external` and `internal` options.
- Added optional `mode` to task transfer, task reject, and email writer workflows. Use `prod` for production Redmine; blank or any other value uses test Redmine.

## Update the generated spec

After editing `openapi/dify-all-workflows.openapi.json`, run:

```powershell
node scripts/sync-swagger-spec.js
```

Commit both the JSON source and generated JavaScript wrapper.
