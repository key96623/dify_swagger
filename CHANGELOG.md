# Release Notes

## 1.1.0 - 2026-07-03

- Combined `Email-Writer - External` and `Email-Writer - Internal` into one `Email-Writer` workflow schema.
- Added `inputs.audience` to `Email-Writer`; use `external` for customer-facing email or `internal` for internal handoff email.
- Added optional `inputs.mode` to `Task Transfer AS+`, `Task Transfer AE.ACL`, `Task Reject`, and `Email-Writer`.
- Documented `inputs.mode=prod` as production Redmine routing; blank or any other value uses the test Redmine site.
