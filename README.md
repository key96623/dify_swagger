# Dify Swagger Documents

This folder documents the original Dify workflow API, not the local proxy routes.

All workflows call the same Dify endpoint:

```http
POST https://subectodermal-obstinately-dalila.ngrok-free.dev/dify/v1/workflows/run
Authorization: Bearer <workflow API key>
Content-Type: application/json
```

The Bearer API key selects the workflow, and each workflow expects different `inputs`.

## Files

- `dify-swagger.html` opens Swagger UI with a workflow selector.
- `CHANGELOG.md` records release notes for the Swagger schema.
- `dify-api-key-list.md` lists the Dify workflow API keys and matching request inputs for UI developers.
- `openapi/dify-all-workflows.openapi.json` is the canonical 2.0.2 document. It contains the ten workflow request schemas in the same `oneOf` request body, ordered for UI development.
- `openapi/dify-all-workflows.openapi.js` is the generated, dereferenced browser wrapper used by `dify-swagger.html`.
- The other files under `openapi/` are historical split documents. Use the canonical total file for the current API contract.

OpenAPI does not allow multiple `post` operations with the exact same path in a single document. The split workflow files keep the real Dify URL while making each workflow easy to inspect in Swagger UI.

## Local Preview

The Swagger HTML can be opened directly from the filesystem. It loads the generated JavaScript wrapper at `openapi/dify-all-workflows.openapi.js`.

After changing `openapi/dify-all-workflows.openapi.json`, synchronize the wrapper:

```powershell
node scripts/sync-swagger-spec.js
```

If the default `8765` port is already used, start this workspace on another port:

```powershell
node server.js --port=8776
```

Then open:

```text
http://127.0.0.1:8776/docs/dify-swagger.html
```
