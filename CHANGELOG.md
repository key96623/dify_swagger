# Release Notes

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
