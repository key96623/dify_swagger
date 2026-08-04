# Release Notes

## 2.0.3 - 2026-08-04

- Simplified each workflow input schema to only expose parameters used by its default Swagger sample.
- Removed unused optional 主流程 inputs such as `user_input`, `email_input`, `files`, and project overrides from the workflow-specific schemas.
- Kept sample-used options such as `mode`, Email Writer `style`, and Technical Bot `type`.

## 2.0.2 - 2026-08-04

- Reordered the Swagger workflow selector: Technical Bot, Teams Bot, Task Summary, Generate Brief & Suggestion, Email Writer, then the five 主流程 branches.
- Renamed the five 主流程 entries with the `via 主流程` suffix for clearer UI distinction.
- Updated Generate Brief & Suggestion to use the YAML-aligned `issue_id` sample.

## 2.0.1 - 2026-08-04

- Updated the default Swagger samples for Task Create, Task Update, Task Transfer AE.ACL, Task Reject, and Generate Brief & Suggestion.
- Updated the latest mainflow sample values, including raw text inputs, AE.ACL project `auto-2023074099334`, and AE.ACL rejection issue `8965`.
- Added the latest Brief & Suggestion optional start-node fields.

## 2.0.0 - 2026-08-04

- Reorganized the canonical OpenAPI document into the current ten workflow blocks: Technical Bot, Teams Bot, Task Create, Task Update, Task Summary, Task Reassign, Task Transfer AE.ACL, Task Reject, Generate Brief & Suggestion, and Email Writer.
- Documented Task Create, Task Update, Task Reassign, Task Transfer AE.ACL, and Task Reject as branches reached through the 主流程 start-node inputs.
- Merged the AS+ and AE.ACL reassignment routes into one `Task Reassign` schema with a `redmine` selector.
- Updated Task Transfer AE.ACL to use the 主流程 route values `intent=TRANSFER`, `redmine=asplus`, and `target_redmine=aeacl`.
- Added the standalone `Generate Brief & Suggestion` start-node schema and the latest Email Writer `redmine` input.
- Made Technical Bot `type` optional; blank uses the default route, while `product_pm` and `product_ae` select the product routes.
- Removed the obsolete standalone `Task Transfer AS+` block from the canonical schema list.

## 1.1.0 - 2026-07-03

- Combined `Email-Writer - External` and `Email-Writer - Internal` into one `Email-Writer` workflow schema.
- Added `inputs.audience` to `Email-Writer`; use `external` for customer-facing email or `internal` for internal handoff email.
- Added optional `inputs.mode` to `Task Transfer AS+`, `Task Transfer AE.ACL`, `Task Reject`, and `Email-Writer`.
- Documented `inputs.mode=prod` as production Redmine routing; blank or any other value uses the test Redmine site.
