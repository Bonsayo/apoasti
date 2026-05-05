# INSA-Oriented Security Checklist

## Scope

This checklist is a practical engineering baseline for a pension and payroll system intended for a regulated or government-style environment.

It is informed by publicly visible INSA documentation titles and security direction, including:

- Secure Website Management Standard
- Cyber Security Risk Assessment Framework
- Critical Mass Cyber Security Standard

Important note:

This is not a formal legal interpretation of INSA requirements. It is a build checklist to help you design toward review readiness.

## 1. Governance and Risk

- Define system owner, security owner, and incident owner.
- Maintain an asset inventory for servers, applications, databases, and integrations.
- Classify data by sensitivity.
- Document a risk register for threats, likelihood, impact, and mitigation.
- Reassess risk before go-live and after major architecture changes.

## 2. Environment Separation

- Maintain separate `dev`, `staging`, and `prod` environments.
- Do not reuse production secrets in lower environments.
- Do not use real production citizen data in development.
- Restrict access to production to a limited admin group.
- Apply change approval for production deployments.

## 3. Identity and Access Control

- Enforce unique user accounts.
- Enforce MFA for administrators, finance officers, and auditors.
- Use RBAC with least privilege.
- Separate roles such as operator, approver, auditor, and system admin.
- Review user access periodically.
- Disable dormant accounts automatically.
- Lock accounts after repeated failed login attempts.
- Require re-authentication for high-risk actions.

## 4. Session and Authentication Security

- Use strong password hashing with framework defaults.
- Enforce minimum password quality standards.
- Protect login endpoints with rate limiting.
- Use secure, HTTP-only, same-site cookies if using session auth.
- Set short session lifetimes for privileged users.
- Invalidate sessions on logout, password reset, and privilege change.

## 5. Authorization and Workflow Security

- Enforce authorization on the backend for every sensitive endpoint.
- Use maker-checker approval for payout release.
- Require dual control for critical configuration changes.
- Prevent the same user from creating and approving the same payout batch.
- Lock approved payroll and disbursement records from silent edits.
- Version financial rules and formulas.

## 6. Data Protection

- Encrypt traffic using TLS.
- Encrypt database storage and backups at rest.
- Protect highly sensitive fields such as bank account, phone number, pension ID, and national identifiers.
- Mask sensitive data in UI where full display is not needed.
- Avoid logging secrets or full sensitive identifiers.
- Define retention rules for sensitive records and audit logs.

## 7. Secure Development

- Use code review for all production changes.
- Scan dependencies for known vulnerabilities.
- Apply security patches on a defined schedule.
- Validate all API inputs server-side.
- Use parameterized queries and ORM protections.
- Avoid hard-coded secrets in source code.
- Use environment-specific secret management.
- Add tests for authorization, validation, and financial calculations.

## 8. Web Application Security

- Enable CSRF protection for session-based flows.
- Validate and sanitize uploaded files if attachments are supported.
- Limit upload types and file sizes.
- Set secure security headers.
- Disable debug mode in production.
- Show generic error messages to end users.
- Log detailed server errors internally only.

Recommended headers:

- `Content-Security-Policy`
- `X-Frame-Options`
- `X-Content-Type-Options`
- `Referrer-Policy`
- `Permissions-Policy`
- `Strict-Transport-Security`

## 9. Database Security

- Do not expose PostgreSQL publicly.
- Restrict DB access to application and admin hosts only.
- Use separate DB users by environment.
- Limit database privileges to only what each service needs.
- Enable backup encryption.
- Test backup restoration regularly.
- Monitor failed login attempts and unusual query behavior.

## 10. Infrastructure Security

- Place Nginx in front of application services.
- Keep Redis and PostgreSQL on private network segments.
- Use firewalls or security groups to restrict traffic.
- Use VPN or allowlisting for administrative access if possible.
- Harden server images before deployment.
- Disable unused ports and services.
- Keep system packages updated.

## 11. Logging, Audit, and Monitoring

- Keep immutable audit logs for create, update, approve, release, retry, reverse, export, and config-change actions.
- Log authentication success and failure.
- Log authorization failures.
- Log admin privilege changes.
- Log report exports with actor and timestamp.
- Monitor repeated failed disbursements and suspicious retries.
- Send security-relevant events to centralized monitoring.

Audit log fields should include:

- actor
- role
- action
- target record
- before and after values when applicable
- timestamp
- IP address
- request ID or correlation ID

## 12. Incident Response

- Define incident severity levels.
- Define reporting and escalation contacts.
- Preserve logs and forensic evidence.
- Document containment and recovery steps.
- Test incident response with tabletop exercises.
- Have a regulator and stakeholder notification procedure when required.

## 13. Business Continuity

- Document RPO and RTO targets.
- Keep offline or protected backups.
- Test disaster recovery periodically.
- Identify manual fallback procedures for critical payroll and disbursement operations.
- Maintain deployment rollback procedures.

## 14. Third-Party and Integration Security

- Inventory all third-party libraries and services.
- Review third-party risk before integration.
- Minimize external dependencies for core financial workflows.
- Authenticate and validate inbound integration payloads.
- Use signed requests or IP restrictions where feasible.
- Log every external handoff for payment or notification workflows.

## 15. Testing Before Go-Live

- Run unit tests for calculation logic.
- Run integration tests for approval and payout workflows.
- Run role-based authorization tests.
- Run vulnerability scans on dependencies and servers.
- Run configuration review for production settings.
- Run backup and restore tests.
- Run a penetration test or structured security assessment if possible.

## 16. Must-Have Controls for This Project

These are the non-negotiables I would treat as go-live blockers:

- MFA for privileged users
- backend RBAC enforcement
- maker-checker approval for disbursement release
- immutable audit trail
- encrypted transport
- encrypted backups
- production secrets outside code
- environment separation
- production logging and monitoring
- tested restore process

## Suggested Compliance Workflow

Build in this order:

1. Threat model the system and classify the data.
2. Implement IAM, RBAC, and audit logging first.
3. Add payroll and disbursement logic with approval controls.
4. Harden infrastructure and secrets management.
5. Run security testing before production.
6. Prepare security documentation for review.

## Evidence to Prepare for Review

Keep these artifacts ready:

- architecture diagram
- data flow diagram
- risk register
- access control matrix
- audit log samples
- backup and restore evidence
- vulnerability scan results
- patch management record
- deployment checklist
- incident response procedure

## Final Advice

If you build the security model into the workflow now, review readiness becomes much easier later.

If you build the app first and try to bolt on compliance at the end, it will be slower, more expensive, and harder to defend.
