ASTAWASH

Appointment & Queue Management Platform

For Ethiopia

PRODUCT REQUIREMENTS DOCUMENT

Version 1.0  |  2025

Confidential ΓÇö Internal Use Only

"Let many organizations ΓÇö hospitals, government offices, inspectors, and more ΓÇö

be discovered and booked in one place."

Document Type

Product Requirements Document (PRD)

Platform Name

Astawash (ßèáßê╡ßë│ßïïßê╜)

Target Market

Ethiopia (Multi-sector)

Document Status

Draft ΓÇö Version 1.0

Primary Language

English + Amharic

Date

2025

Astawash Platform  |  Confidential  |  2025

Table of Contents

# 1.  Executive Summary
# 1. Executive Summary
Astawash (ßèáßê╡ßë│ßïïßê╜) ΓÇö meaning "reminder" in Amharic ΓÇö is a unified appointment booking and queue management platform purpose-built for Ethiopia. It enables citizens to discover, book, and track appointments with hospitals, government offices, car inspection centers, banks, educational institutions, and any other service organization, all from a single, accessible interface.

Ethiopia's service sector suffers from chronic inefficiencies: long physical queues, missed appointments, lack of prior preparation by service providers, and near-zero digital visibility for most organizations. Astawash directly addresses all of these by providing:

A centralized discovery layer ΓÇö one place to find any bookable organization.

Configurable scheduling infrastructure ΓÇö any organization, any service type, any rule.

Intelligent automation ΓÇö SMS reminders, no-show alerts, and workflow triggers.

Dual access model ΓÇö organizations with existing systems connect via API; those without use Astawash natively.

Bilingual design ΓÇö full Amharic and English support across all user-facing surfaces.

Platform Vision

Astawash is not just a scheduling tool. It is Ethiopia's first multi-sector service discovery and booking ecosystem ΓÇö positioning itself as the country's operating layer for citizen-to-organization interactions.

# 2.  Product Vision & Strategic Goals
# 2. Product Vision & Strategic Goals
## 2.1 Mission Statement
To eliminate the friction of accessing public and private services in Ethiopia by connecting citizens and organizations through a smart, inclusive, and automated appointment and queue management platform.

## 2.2 Strategic Goals
Reduce average service wait times by 40ΓÇô60% within partnered organizations in Year 1.

Onboard 50+ organizations across at least 4 sectors within the first 6 months post-launch.

Achieve 10,000+ active users booking through the platform within 12 months.

Establish Astawash as the default booking infrastructure for Ethiopian public services.

Generate self-sustaining revenue by Month 18 through tiered subscriptions and value-added services.

## 2.3 Core Principles
Principle

Description

Local Application

Inclusivity

Works for users with low data/tech literacy

SMS fallback, Amharic UI, USSD consideration

Flexibility

Any org type, any service model

Hospitals, inspection centers, NGOs, courts

Automation-first

Reduce manual effort at every touchpoint

Reminders, waitlist triggers, no-show alerts

Reliability

Must work even in low-connectivity zones

Offline-capable PWA, lightweight SMS channel

Transparency

Users always know their queue position

Real-time status updates via SMS or app

# 3.  Target Market & User Personas
# 3. Target Market & User Personas
## 3.1 Target Organization Sectors
Sector

Example Organizations & Use Cases

Healthcare

Government hospitals, private clinics, dental offices, diagnostic labs, pharmacies ΓÇö patient appointments, specialist referrals, lab test slots

Government Services

Kebele offices, immigration, land administration, driving license agencies, tax offices ΓÇö document processing, ID renewals, permit applications

Vehicle Services

Car inspection centers (annual roadworthiness), vehicle registration, driving school bookings

Financial Services

Banks, microfinance institutions, insurance offices ΓÇö loan consultations, claim processing, account services

Education

Universities, vocational schools, exam centers ΓÇö registration slots, consultation hours

Legal & Notary

Courts, notary offices, legal aid centers ΓÇö case submissions, hearing slots

NGOs & Development

Vaccination campaigns, community health visits, social services ΓÇö field scheduling

## 3.2 User Personas
Persona 1 ΓÇö The Citizen User (Selamawit, 31, Addis Ababa)

Smartphone user, prefers Amharic, occasionally uses mobile data.

Needs: Book a hospital appointment without arriving at 5 AM to queue; receive an SMS reminder the day before.

Pain points: Uncertainty about queue position, wasted time, no confirmation of booking.

Preferred channels: Mobile app (Android), SMS fallback.

Persona 2 ΓÇö The Rural User (Girma, 45, Mekelle)

Feature phone user, primarily SMS-literate.

Needs: Receive an appointment confirmation and reminder via SMS with Amharic instructions.

Pain points: No smartphone, unreliable internet, travels long distances for services.

Preferred channels: SMS + USSD (future phase).

Persona 3 ΓÇö The Admin / Staff Operator (Tigist, Hospital Receptionist)

Manages 50ΓÇô100 patient appointments per day manually.

Needs: Dashboard to see daily schedule, add walk-ins, send reminders, mark arrivals.

Pain points: Overcrowded waiting room, patients arriving at wrong times, no-shows wasting doctor slots.

Preferred channels: Web dashboard on desktop/tablet.

Persona 4 ΓÇö The Service Provider (Dr. Haile, Cardiologist)

Sees 15ΓÇô25 patients per day across two hospitals.

Needs: Advance patient list with case notes, SMS reminder to prepare materials.

Pain points: Patients arriving unprepared, interrupted consultations, no-shows.

Preferred channels: Mobile app or daily SMS digest.

Persona 5 ΓÇö The Organization Manager (Ato Mekonnen, Hospital IT Director)

Oversees hospital information systems, evaluates vendor solutions.

Needs: API integration with existing HIS (Hospital Information System), analytics dashboard, data export.

Pain points: Siloed systems, no patient flow visibility, inability to forecast resource needs.

Preferred channels: Web dashboard, REST API, CSV exports.

# 4.  Platform Architecture Overview
# 4. Platform Architecture Overview
## 4.1 High-Level Architecture
Astawash is built on a multi-tenant SaaS architecture with the following primary layers:

Layer

Description

Discovery Layer

Public-facing search and browse interface where citizens find and explore organizations by sector, location, rating, and availability.

Booking Engine

Core scheduling logic ΓÇö handles appointment creation, slot management, conflict detection, waitlists, and walk-in integration.

Queue Manager

Real-time queue state tracking. Manages both online-booked and walk-in queues with live position updates.

Notification Engine

Automated multi-channel notification dispatch: SMS (Ethio Telecom/Safaricom), in-app push, WhatsApp, and email.

Organization Portal

Web and mobile dashboard for each organization's staff: schedule view, patient management, analytics, settings.

Integration API

RESTful API layer allowing organizations with existing systems (HIS, EDMS, etc.) to sync data bidirectionally.

Admin Console

Astawash super-admin panel for managing organizations, subscriptions, system health, and platform analytics.

Analytics Engine

Aggregated and per-organization insights: appointment volumes, wait times, no-show rates, peak hours, and resource utilization.

## 4.2 Deployment Model
Cloud-hosted on AWS or Azure (with consideration for Ethiopian data residency requirements).

Progressive Web App (PWA) for mobile ΓÇö downloadable from Google Play and Apple App Store.

SMS Gateway integration via Ethio Telecom API or third-party (AfricasTalking, Infobip).

WhatsApp Business API integration for richer notification content.

USSD gateway support in Phase 2 for feature phone access.

## 4.3 Multi-Tenancy
Each organization on Astawash operates as an isolated tenant with:

Dedicated subdomain (e.g., blacklion.astawash.et) or white-label domain.

Configurable branding (logo, accent color) within the Astawash visual system.

Role-based access control (RBAC) for staff and administrators.

Data isolation ΓÇö organization data is never shared across tenants.

# 5.  User Roles & Permissions
# 5. User Roles & Permissions
## 5.1 Role Hierarchy
Role

Scope

Key Capabilities

Super Admin

Platform-wide (Astawash team)

Manage all organizations, billing, system config, global analytics, platform health

Organization Admin

Single organization

Full config of services, staff, schedules; view all bookings; export data; manage subscriptions

Department Manager

One or more departments within org

Manage staff schedules within department, view department analytics, configure service rules

Staff Operator

Assigned service queue or desk

Check-in walk-ins, mark arrivals/no-shows, add notes, view daily schedule, send manual reminders

Service Provider

Individual provider (doctor, inspector)

View own schedule, see upcoming client profiles, receive notifications, update availability

End User (Citizen)

Self only

Search orgs, book appointments, view booking history, cancel/reschedule, receive notifications

Guest User

Limited (no login required)

Browse organizations, view availability, complete one-time booking with phone number

## 5.2 Permission Matrix
Action

End User

Staff / Provider

Org Admin

Search & view organizations

Yes

Yes

Yes

Book appointment

Yes

On behalf of user

On behalf of user

Cancel / reschedule

Own only

Any (within org)

Any (within org)

Add walk-in to queue

No

Yes

Yes

View analytics dashboard

No

Limited (own stats)

Full org analytics

Configure service types

No

No

Yes

Send bulk notifications

No

No

Yes

Export data (CSV / API)

No

No

Yes

Manage staff accounts

No

No

Yes

API key management

No

No

Yes

Billing & subscription

No

No

Yes (Super Admin final)

# 6.  Core Features ΓÇö Detailed Specifications
# 6. Core Features ΓÇö Detailed Specifications
## 6.1 Discovery & Search Engine
The discovery layer is the public face of Astawash ΓÇö the entry point for all citizens.

Search & Filter

Full-text search in Amharic and English (organization name, service type, location).

Filters: Sector (healthcare, government, inspection, etc.), city/sub-city, distance (GPS-based), availability (today, tomorrow, this week), rating, language supported.

Promoted/featured listings for premium-tier organizations (revenue opportunity).

Organization Profiles

Name, logo, description (Amharic + English), address with map link (Google Maps).

List of available services with estimated durations and available time slots.

Operating hours, public holidays (pre-loaded Ethiopian holiday calendar).

User ratings and reviews (moderated, star rating 1ΓÇô5 with comment).

Real-time availability indicator: "Available Today," "Next Available: Thursday 2 PM."

Contact information: phone, verified WhatsApp link, email.

## 6.2 Universal Scheduling Engine
The scheduling engine is the core of Astawash ΓÇö highly configurable to serve any organization type.

Service Type Configuration

Organizations define service types (e.g., "General Consultation," "Annual Car Inspection," "Driving License Renewal").

Each service type has: duration, capacity per slot (1-to-1 or group), buffer time between slots, preparation notes for the provider, and required documents list (shown to the user at booking).

Multi-step services: a booking can span multiple appointments (e.g., preliminary inspection + final inspection).

Scheduling Rules

Provider-level availability: each doctor/officer/inspector sets their own hours independently.

Blackout periods: holidays, staff training days, or system maintenance windows block new bookings automatically.

Booking lead time: organizations set minimum notice (e.g., "Must book at least 2 hours in advance") and maximum horizon (e.g., "Up to 30 days in advance").

Recurring appointments: weekly, bi-weekly, or monthly repeat bookings (e.g., physiotherapy, chronic disease follow-up).

Priority slots: reserve slots for elderly, pregnant women, or emergency patients ΓÇö flagged at booking.

Slot Management

Visual calendar grid view for organization admins.

Drag-and-drop reschedule within the admin dashboard.

Overbooking protection with configurable waitlist automatically filling cancelled slots.

## 6.3 Queue Management
Real-Time Queue State

Live queue dashboard visible to both admins and users (via app or SMS).

Queue position counter: "You are number 4 in line. Estimated wait: 35 minutes."

Automatic queue advancement when the current client is marked "served" or "called."

Display board mode: organizations can cast a TV display showing current queue numbers in the waiting room.

Walk-In Integration

Staff can add walk-in clients via a quick-entry form (name + phone number).

Walk-ins are inserted into the queue after pre-booked appointments or via a configurable priority rule.

Walk-in clients receive an SMS with their queue ticket number and estimated wait time.

Queue Notifications

"Your turn is approaching" SMS sent when the user is 2ΓÇô3 positions away.

"You've been called" notification with desk/room number.

"Slot expired" warning if the user does not arrive within a configurable window (default: 10 minutes).

## 6.4 Notification & Automation Engine
The notification engine is a strategic differentiator for Astawash ΓÇö reducing no-shows, improving provider preparation, and maintaining engagement.

Notification Channels

SMS ΓÇö primary channel; supported via Ethio Telecom, AfricasTalking, or Infobip gateway.

In-App Push ΓÇö for users with the mobile app installed.

WhatsApp ΓÇö via WhatsApp Business API (richer media: appointment cards, maps).

Email ΓÇö optional secondary channel for organizations that provide client emails.

Automated Notification Sequences

Booking Confirmation: Sent immediately upon booking. Includes: service type, date/time, location, booking reference code, required documents, and cancellation instructions.

Reminder T-24: Sent 24 hours before the appointment. Personalized: user's name, service name, provider name, any preparation instructions.

Reminder T-2: Sent 2 hours before. Includes current queue estimate and a "Confirm attendance" link/SMS reply code.

Provider Preparation Alert: Sent to the service provider (doctor, inspector, officer) the evening before, listing next-day appointments with client names, case types, and preparation notes.

No-Show Alert: Triggered when a booked client does not arrive within the tolerance window. Staff are notified, the slot is released, and the next waitlisted client is auto-promoted.

Post-Service Follow-Up: Sent 1ΓÇô2 hours after the appointment: satisfaction rating request (1-tap SMS reply: "Reply 1-5 to rate your experience") and optional feedback message.

Notification Personalization

All messages are personalized using dynamic variables: {client_name}, {service_type}, {provider_name}, {appointment_date}, {appointment_time}, {organization_name}, {queue_number}, {required_documents}.

Organizations can customize message templates (within character limits for SMS) in both Amharic and English.

Bilingual auto-detect: the system sends notifications in the user's preferred language.

Randomized message variants: organizations can define 2ΓÇô3 versions of a reminder and the system rotates them to avoid message fatigue.

Bulk & Campaign Notifications

Admin-triggered broadcast: send an announcement to all booked users for a given day (e.g., "Due to a public holiday, your appointment has been rescheduled. New time: ...").

Waitlist broadcasts: when a cancellation opens a slot, notify the top N waitlisted users simultaneously; first to confirm gets the slot.

## 6.5 Organization Portal (Admin Dashboard)
Schedule View

Day, week, and month views with provider-level filtering.

Color-coded appointment states: Confirmed (blue), Arrived (green), No-Show (red), Cancelled (gray), Walk-In (orange).

One-click actions: mark arrived, mark no-show, add note, send manual reminder, reschedule.

Staff & Provider Management

Add/remove staff accounts with role assignments.

Provider availability management: set recurring schedules, block specific dates, assign to service types.

Performance metrics per provider: average appointments per day, no-show rate, rating average.

Resource Preparation Module (Suggested Feature)

A feature likely not considered by the founder: proactive resource planning based on upcoming bookings.

For hospitals: the system surfaces expected patient counts per day by department, anticipated medication or equipment needs flagged from appointment notes.

For inspection centers: list of vehicles due for inspection including registration plate, vehicle type, and previous inspection outcomes.

For government offices: document types expected per upcoming appointment, allowing pre-staging of required stamps, forms, or system access.

## 6.6 Integration API
REST API Capabilities

POST /appointments ΓÇö create a new appointment from an external system.

GET /slots ΓÇö query available slots for a service type and date range.

GET /queue ΓÇö retrieve current queue state for a department.

PATCH /appointments/{id} ΓÇö update appointment status (arrived, no-show, completed).

POST /notifications/send ΓÇö trigger a notification to a specific client.

GET /reports ΓÇö pull appointment analytics for a given date range.

Webhook Support

Organizations receive real-time webhooks for events: new booking, cancellation, no-show, queue position update.

Payload format: JSON with event type, timestamp, appointment details, and client reference.

Integration Modes

Mode

Description

Native Mode

Organization uses Astawash's web/mobile dashboard exclusively. No external system needed. Best for small clinics, new government offices.

API-Connected Mode

Organization's existing system (HIS, ERP, EDMS) sends and receives appointment data via Astawash API. Astawash handles notifications and queue display.

Hybrid Mode

Core operations in existing system; Astawash overlay handles public discovery, notification automation, and queue display board.

## 6.7 Client Records (Lightweight)
User profile: full name (Amharic optional), phone number (primary identifier), email (optional), preferred language, date of birth (optional).

Booking history: all past and upcoming appointments across all organizations.

Document checklist history: which documents the user last brought for a given service type (time-saving for repeat visits).

Privacy controls: users can delete their account and all associated data (GDPR-aligned, good practice).

Organization-side client record: notes per client (visible to staff only within that organization), flagging for VIP or vulnerable users, visit count.

## 6.8 Reporting & Analytics
Organization-Level Dashboard

Daily, weekly, and monthly appointment volumes.

No-show rate by service type and provider.

Average wait time vs. booked time (punctuality score).

Peak hour analysis: heatmap of bookings by day of week and hour.

Client return rate: % of clients who booked again within 30/90 days.

Staff utilization rate: how full each provider's schedule is.

Platform-Level Analytics (Astawash Admin)

Organization growth and activation metrics.

Cross-sector booking volume trends.

SMS delivery rates and notification engagement rates.

Top-performing organizations by booking volume and client satisfaction.

Exportable Reports

CSV and PDF export for all report types.

Scheduled report delivery: organizations receive a weekly PDF summary by email every Monday morning.

# 7.  Detailed User Flows
# 7. Detailed User Flows
## 7.1 Citizen Booking Flow
End-to-end flow for a citizen booking a hospital appointment via the Astawash mobile app:

User opens Astawash app ΓåÆ lands on home screen with search bar and sector tiles (Healthcare, Government, Inspection, etc.).

User taps 'Healthcare' ΓåÆ sees list of hospitals filtered by proximity (GPS-requested) or city selection.

User selects Black Lion Hospital ΓåÆ views profile: services, providers, ratings, operating hours.

User taps 'Book Appointment' ΓåÆ selects service type (e.g., 'Cardiology Consultation').

System shows available dates/times for the next 14 days. User selects a slot.

User is prompted: select preferred provider (optional) or 'Any available provider.'

Booking summary shown: date, time, provider, estimated duration, required documents checklist.

User confirms. If not logged in: prompted to enter phone number ΓåÆ receives OTP ΓåÆ verified.

Booking confirmed. User receives: in-app confirmation card + SMS confirmation in Amharic with booking reference.

T-24 reminder SMS sent. T-2 reminder with queue estimate sent. User arrives and checks in via app QR scan or by giving name to receptionist.

User receives queue position SMS. Notified when 2 positions away. Enters with provider.

Post-service: receives feedback SMS 1 hour after appointment.

## 7.2 Walk-In Queue Flow
Walk-in client arrives at hospital reception and requests to be added to the queue.

Staff opens Astawash Staff app ΓåÆ taps 'Add Walk-In' ΓåÆ enters client name and phone number, selects service type.

System assigns a queue number and estimated wait time. Walk-in ticket displayed on screen and sent via SMS to client.

Client is free to wait in the waiting area; receives SMS when 2 positions away.

Staff marks client as 'Arrived' when they approach the desk. System advances the queue.

## 7.3 Organization Onboarding Flow
Organization representative visits astawash.et ΓåÆ clicks 'Register Your Organization.'

Fills onboarding form: organization name (Amharic + English), sector, contact info, TIN number, verification document upload.

Astawash admin reviews and approves within 24ΓÇô48 hours (manual verification in MVP, auto in future).

Organization admin receives credentials. Logs into Organization Portal.

Setup wizard: add departments, add service types with durations, add staff accounts, set operating hours, upload logo.

Organization goes live on the discovery page. Admin shares their Astawash booking link.

## 7.4 Provider Daily Preparation Flow
Service provider (e.g., Dr. Haile) receives an automated SMS/app notification at 7:30 PM the day before: 'Tomorrow you have 18 appointments. Tap to view your schedule.'

Provider opens app ΓåÆ sees list of tomorrow's appointments with: patient name, appointment time, service type, and any notes added by the patient during booking.

Provider can add a preparation note to any appointment (e.g., 'Request lab results be ready').

On the day: provider marks each patient as 'In Session,' 'Completed,' or 'No-Show' from the app.

## 7.5 Cancellation & Rescheduling Flow
User taps 'My Bookings' ΓåÆ selects the upcoming appointment ΓåÆ taps 'Cancel' or 'Reschedule.'

If cancelling: confirmation prompt with cancellation policy shown. On confirm: slot is released, user receives cancellation SMS, waitlisted user (if any) is auto-notified of the open slot.

If rescheduling: calendar shown with next available slots. User selects new time. Original slot released. New confirmation SMS sent.

Organization admin receives a notification of the cancellation/reschedule for their records.

# 8.  Wireframe & Layout Suggestions
# 8. Wireframe & Layout Suggestions
## 8.1 Mobile App ΓÇö Screen Layouts
Screen

Key Layout Elements

Home / Discovery

Search bar (top), Sector icon grid (6 tiles: Health, Gov, Inspection, Bank, Education, Other), 'Nearby Organizations' card list, 'Recently Booked' horizontal scroll, bottom nav: Home / My Bookings / Notifications / Profile

Organization Profile

Header image + logo, name/rating row, 'Book Now' CTA button (sticky bottom), tabs: Services | About | Reviews, availability calendar preview

Booking ΓÇö Slot Selection

Month calendar (top), time slot grid (bottom half), selected slot highlighted in #2563EB, 'Continue' button

Booking ΓÇö Confirmation

Summary card: org logo, service, date/time, provider, document checklist, 'Confirm Booking' button, cancel link

My Bookings

Upcoming tab + Past tab, each appointment shown as a card: org logo, date/time, status badge, action buttons (Reschedule / Cancel)

Queue Tracker

Large queue position number, progress bar, estimated wait time, 'Notify me when near' toggle, organization address + map link

Notifications

Chronological list of notifications with icons by type (reminder = bell, confirmation = check, alert = exclamation)

## 8.2 Web Dashboard ΓÇö Organization Portal
Panel

Layout Description

Left Sidebar

Organization logo, nav items: Dashboard / Schedule / Clients / Staff / Notifications / Reports / Settings. Collapse to icon-only on small screens.

Dashboard Overview

4 metric cards (Today's Appointments, No-Show Rate, Avg Wait Time, Open Slots), Bar chart (this week vs last week), Quick actions (Add Walk-In, Send Reminder, Export Today's List)

Schedule View

Horizontal provider columns (each doctor/officer/inspector as a column), vertical time axis, appointment blocks color-coded by status, right-click context menu on each block

Client List

Searchable table: Name, Phone, Last Visit, Upcoming Appointment, Visit Count, Notes icon. Click row to expand client detail panel.

Reports Page

Date range picker, KPI summary row, Line chart (bookings trend), Pie chart (service type breakdown), Table (provider performance), Export buttons

Settings

Tabs: Organization Profile / Service Types / Staff / Notifications / Integrations / Billing

## 8.3 Brand & Visual Guidelines
Element

Specification

Notes

Primary Color

#2563EB (Blue)

CTAs, active states, links, highlights

Secondary Color

#000000 (Black)

Headings, body text, icons

Background

#FFFFFF (White)

All page backgrounds

Success

#16A34A (Green)

Confirmed, arrived, completed states

Warning

#D97706 (Amber)

Pending, approaching, low availability

Danger

#DC2626 (Red)

No-show, cancelled, overdue

Typography

Inter or Noto Sans (includes Ethiopic)

Noto Sans Ethiopic for Amharic support

Logo Mark

Stylized 'A' + calendar/clock icon

SVG format, white on blue or blue on white

Org Theming

Each org can set one accent color

Only applied to their profile page, within system constraints

# 9.  Technical Requirements
# 9. Technical Requirements
## 9.1 Frontend
Mobile App: React Native (iOS + Android) or Flutter ΓÇö prioritize Android first (dominant in Ethiopia).

Web App (Organization Portal): React.js with TypeScript ΓÇö responsive, works on tablet and desktop.

PWA: The citizen web app should be installable as a PWA for users who don't want to download the full app.

Amharic support: use Noto Sans Ethiopic font; input fields must support Ge'ez script keyboard input.

Accessibility: minimum WCAG 2.1 AA compliance; support screen readers; large touch targets.

## 9.2 Backend
API Framework: Node.js (Express/Fastify) or Python (FastAPI) ΓÇö RESTful + WebSocket for real-time queue updates.

Database: PostgreSQL (relational, multi-tenant, strong consistency for scheduling) + Redis (caching, real-time queue state, session management).

Search: Elasticsearch or PostgreSQL full-text search for organization discovery (with Amharic tokenizer).

Authentication: JWT-based auth with OTP verification via SMS (phone number as primary identity, no email required for citizens).

File Storage: AWS S3 or equivalent for organization logos, document uploads, and report files.

## 9.3 SMS & Notification Infrastructure
Primary SMS Gateway: AfricasTalking (Ethiopian coverage, competitive rates) or direct Ethio Telecom API partnership.

WhatsApp: WhatsApp Business API via Twilio or 360dialog.

Push Notifications: Firebase Cloud Messaging (FCM) for Android; APNs for iOS.

Notification Queue: RabbitMQ or AWS SQS to handle burst notification volumes (e.g., mass appointment reminders at 7 AM).

Delivery tracking: log all notification send attempts, delivery receipts, and failures. Retry failed SMS up to 3 times.

## 9.4 Integration & API
REST API with OpenAPI (Swagger) documentation.

Webhook delivery with HMAC signature verification.

OAuth 2.0 for third-party integrations.

Rate limiting: 1,000 requests/minute per API key; adjustable per organization tier.

Sandbox environment for integration testing.

## 9.5 Scalability & Reliability
Target SLA: 99.9% uptime (8.7 hours downtime/year maximum).

Horizontal scaling via containerized microservices (Docker + Kubernetes).

CDN for static assets (Cloudflare recommended for Ethiopian performance).

Database read replicas for analytics queries to avoid impacting transactional performance.

Daily automated backups with 30-day retention. Point-in-time recovery for databases.

## 9.6 Security & Privacy
All data encrypted in transit (TLS 1.3) and at rest (AES-256).

Phone numbers hashed before storage; full number only visible to authorized staff within the relevant organization.

Role-based access control enforced at the API level.

Audit logging for all sensitive actions (booking creation/deletion, data export, staff login).

OWASP Top 10 compliance; penetration testing before launch.

Compliance with Ethiopian data protection regulations (upcoming PDPA alignment).

# 10.  MVP Feature Prioritization
# 10. MVP Feature Prioritization for Ethiopia Launch
## 10.1 MVP Scope (Launch in 3ΓÇô4 Months)
MVP Philosophy

The MVP must prove the core value proposition: that organizations can be discovered and booked in one place, and that automated SMS reminders measurably reduce no-shows. Everything else is Phase 2+.

Priority

Feature

Rationale

P0 ΓÇö Must Have

Organization discovery & search

Core value proposition. Without this, there is no platform.

P0 ΓÇö Must Have

Appointment booking (web + mobile)

Must work for at least 2 sectors at launch (hospital + government).

P0 ΓÇö Must Have

SMS confirmation + reminder (T-24, T-2)

Highest-impact feature for reducing no-shows ΓÇö proven in local context.

P0 ΓÇö Must Have

Organization admin dashboard (web)

Organizations must be able to manage their schedule to onboard.

P0 ΓÇö Must Have

Walk-in queue management

Essential for hospital context ΓÇö walk-ins are the norm in Ethiopia.

P0 ΓÇö Must Have

Phone number OTP login

No email required; SMS OTP is standard for Ethiopian mobile users.

P1 ΓÇö Should Have

Provider schedule & prep notifications

Differentiates Astawash from a simple booking form.

P1 ΓÇö Should Have

Waitlist management

Reduces wasted slots from cancellations.

P1 ΓÇö Should Have

Basic analytics dashboard

Needed to demonstrate value to organization admins.

P1 ΓÇö Should Have

Amharic language toggle

Non-negotiable for Ethiopian users; can be simplified at MVP.

P1 ΓÇö Should Have

REST API (basic)

Needed to onboard hospitals with existing HIS systems.

P2 ΓÇö Nice to Have

WhatsApp notifications

High value but requires Business API setup ΓÇö Phase 2.

P2 ΓÇö Nice to Have

Post-service feedback (SMS rating)

Valuable for reputation building but not blocking.

P2 ΓÇö Nice to Have

TV queue display board

Needed for large hospitals ΓÇö Phase 2 after MVP validation.

P2 ΓÇö Nice to Have

USSD access

High impact for rural users ΓÇö significant dev effort; Phase 2.

P3 ΓÇö Future

Resource preparation module

High strategic value; requires more org-specific customization.

P3 ΓÇö Future

Multi-step appointment flows

Complex; required for referral chains in healthcare.

P3 ΓÇö Future

Marketplace / premium listings

Monetization lever; requires sufficient org volume first.

## 10.2 Launch Sector Recommendation
Launch with two sectors to prove cross-sector value, but keep scope tight:

Sector 1 ΓÇö Private Hospitals & Clinics: faster adoption, willing to pay, clear ROI (reduced no-shows). Pilot partner: 2ΓÇô3 Addis Ababa private hospitals.

Sector 2 ΓÇö Car Inspection Centers: high volume of repeat customers, standardized service type, ideal for testing queue management. Pilot partner: 1ΓÇô2 NTSA-registered inspection centers.

Sector 3 (Phase 2) ΓÇö Government Offices: high social impact but require procurement processes and government approvals.

# 11.  Suggested Additional Features
# 11. Suggested Additional Features (Strategic Additions)
The following features go beyond the initial brief and represent high-value additions the founder may not have considered. Each is grounded in the Ethiopian service context.

## 11.1 Smart No-Show Prediction
Use historical booking data to predict the likelihood of a no-show for any given appointment. Factors include: day of week, booking lead time, whether the user has no-showed before, and weather (during rainy season). Organizations can use this score to:

Send an extra reminder to high-risk bookings.

Apply a "soft overbooking" policy: allow 1ΓÇô2 extra bookings for slots with high no-show probability.

Auto-promote the top waitlisted client for high-risk slots.

## 11.2 Referral & Transfer Bookings
Critical for healthcare: a doctor at one hospital can refer a patient to a specialist at another hospital directly within Astawash.

Physician initiates a referral booking, pre-filling patient info and clinical summary.

Patient receives an SMS: 'Dr. Haile referred you to Dr. Almaz (Neurologist) at St. Paul's Hospital. Your appointment is Thursday at 10 AM. Tap to confirm.'

Referral chain tracked for analytics: measure referral acceptance rates and cross-organization patient flow.

## 11.3 Digital Queue Ticket (QR Code)
Upon booking, generate a QR code that the user presents at the organization for instant check-in.

Staff scan the QR with the Astawash Staff app ΓÇö instantly marks the patient as arrived and advances the queue.

Eliminates the need for the user to give their name verbally ΓÇö faster, more private.

QR can be printed (shared via WhatsApp to someone who will print for the user ΓÇö relevant for non-smartphone users).

## 11.4 Service Provider Ratings & Performance Scorecard
Allow users to rate not just the organization but the specific provider they interacted with.

Aggregate provider ratings visible to the organization admin only (not publicly shown unless the org opts in).

Monthly provider scorecard automatically emailed to organization admin: punctuality rate, patient satisfaction, no-show rate on their slots.

Creates a positive performance feedback loop within the organization.

## 11.5 Appointment Marketplace / Premium Discovery
Allow organizations to boost their visibility on the Astawash discovery page.

"Available Today" badge for organizations that pay a small daily boost fee.

"Verified" badge for organizations that complete identity verification.

"Top Rated" section showing organizations with the highest satisfaction scores.

Seasonal promotions: during Enkutatash (Ethiopian New Year) or other holidays, organizations can send broadcast notifications to all past clients.

## 11.6 Family / Group Account Management
Many Ethiopian household heads manage appointments for their family members, particularly for elderly parents or children.

One account can manage up to 5 family profiles.

Each family member has their own booking history and reminder preference.

Bulk family booking: book appointments for multiple family members in a single session (e.g., family vaccination day).

## 11.7 Offline-First Mobile Experience
Internet connectivity is inconsistent across Ethiopia. The app must degrade gracefully:

Cache the user's upcoming appointments and organization details for offline viewing.

Allow the user to view their queue ticket and QR code without internet.

Queue the booking request locally and sync when connectivity is restored.

## 11.8 Government Integration Gateway
Position Astawash as the national digital front door for government services.

Pre-built connectors for common government systems (e.g., DARS for driving licenses, land administration offices).

National ID (Fayda ID) verification integration at booking ΓÇö reduces fraudulent bookings and speeds up in-person verification.

Ministry-level analytics dashboard: the Ministry of Health, for example, could see aggregate appointment trends across all hospitals on the platform (with organizational consent).

## 11.9 Appointment Chatbot (SMS & WhatsApp)
For organizations with high SMS volume, deploy a simple conversational booking interface:

User sends "Book" to a short code ΓåÆ receives: "Reply with the name of the service you need" ΓåÆ guided SMS flow to complete booking without opening an app.

WhatsApp chatbot with rich messages: appointment cards, location pins, and confirmation buttons.

Powered by a rule-based dialog engine (no AI needed for MVP; can layer in NLP later).

## 11.10 Astawash for Campaigns (Health Programs)
A dedicated module for NGOs, government health agencies, and charities running one-time or recurring service campaigns:

Create a campaign (e.g., mass COVID vaccination, TB screening, eye checkup camp) with a specific date, location, and capacity.

Publish on the Astawash discovery page as a "Campaign" tile.

Citizens register by SMS or app; receive reminders and directions.

Field staff manage arrivals via the staff app in real-time.

# 12.  Business Model Recommendations
# 12. Business Model Recommendations
## 12.1 Pricing Strategy Overview
Astawash should pursue a freemium-to-subscription model with usage-based upsells. Ethiopian organizations are cost-conscious; pricing must demonstrate clear ROI and offer a low-risk entry point.

## 12.2 Tier Structure
Tier

Free (Starter)

Professional

Enterprise

Target Org

Small clinics, NGOs, new offices

Mid-size hospitals, inspection centers, banks

Large hospitals, chains, government agencies

Price (Monthly)

Free forever

ETB 1,500ΓÇô3,500 / month

ETB 8,000ΓÇô20,000+ / month (negotiated)

Appointments/Month

Up to 100

Unlimited

Unlimited

SMS Notifications

50 SMS/month included

500 SMS/month included

Custom SMS bundle

Staff Accounts

2 accounts

Up to 10 accounts

Unlimited + SSO

Analytics

Basic (last 30 days)

Advanced + export

Custom reports + API access

API Access

Not included

Read-only

Full read/write + webhooks

Branding

Astawash branding

Org logo on profile

White-label subdomain option

Support

Community / Email

Email + Chat (48h SLA)

Dedicated account manager

## 12.3 Revenue Streams
Revenue Stream

Description & Potential

Subscription Fees

Core recurring revenue. Targeting 100 Professional orgs by Year 1 = ETB 150,000ΓÇô350,000/month (approx. USD 1,100ΓÇô2,600/month).

SMS Bundles (Add-On)

Organizations can purchase additional SMS packages beyond their tier. ETB 0.80ΓÇô1.50/SMS. High-volume hospitals send 5,000+ SMS/month ΓÇö significant recurring revenue.

Premium Discovery / Listing Boost

Organizations pay ETB 500ΓÇô2,000 to appear at the top of search results for their sector for a given period.

Setup & Onboarding Fee

One-time fee of ETB 2,000ΓÇô5,000 for Enterprise/Professional orgs needing custom integration, staff training, and onboarding support.

API Access & Integration Fee

Monthly API access fee for connected mode organizations (those integrating with existing HIS/ERP systems).

White-Label Licensing

Large hospital chains or government agencies that want Astawash technology under their own brand ΓÇö significant contract value.

Data & Analytics Reports

Anonymized aggregate reports (sector-level wait time analysis, appointment demand by area) sold to health ministries, urban planners, or research institutions.

NGO / Campaign Module

Annual licensing for NGOs running vaccination or health campaigns. Bundled with capacity management features.

## 12.4 Unit Economics (Year 1 Target)
Metric

Target

Organizations onboarded

75ΓÇô100 (across all tiers)

Paying organizations (Professional+)

30ΓÇô50

Average revenue per paying org/month

ETB 2,500

Monthly Recurring Revenue (MRR) at 12 months

ETB 75,000ΓÇô125,000 (~USD 560ΓÇô930)

SMS add-on revenue (est.)

ETB 20,000ΓÇô40,000/month

Total Monthly Revenue at 12 months

ETB 95,000ΓÇô165,000 (~USD 700ΓÇô1,230)

Path to profitability

Month 18ΓÇô24, assuming <5 full-time team members

## 12.5 Go-to-Market Strategy
### Phase 1 (0ΓÇô3 months): Pilot with 3ΓÇô5 private hospitals and 2 inspection centers in Addis Ababa. Offer free onboarding and 3-month waived fees in exchange for testimonials and case studies.
### Phase 2 (3ΓÇô9 months): Scale to 20ΓÇô30 organizations across 4 sectors. Launch referral incentive for organizations that bring in other organizations.
### Phase 3 (9ΓÇô18 months): Enter government sector with proven case studies. Apply for government procurement programs or public-private partnership with relevant ministries.
Partnership: Partner with Ethiopian Hospitals Association, Chamber of Commerce, and trade associations for co-marketing and bulk onboarding.

Citizen acquisition: Social media (Telegram channels ΓÇö dominant in Ethiopia), radio (Amharic stations for non-digital users), and word-of-mouth via early users.

# 13.  Ethiopian Context & Localization
# 13. Ethiopian Context & Localization
## 13.1 Language Strategy
All user-facing copy in both Amharic (Ge'ez script) and English. Language toggle on every screen.

Default language: detect from device OS language setting. If OS is Amharic ΓåÆ default Amharic.

SMS notifications: sent in the user's preferred language. Default to Amharic if unset.

Organization portal: primarily English for admin functions, with Amharic display name fields.

Future: Tigrinya, Oromiffa, Somali support for regional expansion.

## 13.2 Calendar System
Ethiopian calendar (Ge'ez calendar) support is essential. Display dates in both Ethiopian and Gregorian calendars, user-selectable.

Pre-loaded Ethiopian public holidays (including Timkat, Fasika, Enkutatash, Meskel, etc.) block bookings automatically unless overridden by the organization.

Working week consideration: some government offices operate Saturday; scheduling rules must be flexible.

## 13.3 Payment Integration (Future)
No online payment at MVP (trust barrier). Organizations bill patients/clients directly.

### Phase 2: integrate with Telebirr (Ethio Telecom mobile money) and CBEBirr for appointment deposits or pre-payment for high no-show services.
Payment deposit feature: organizations can optionally require a refundable deposit (ETB 50ΓÇô200) to reduce no-shows for high-demand slots.

## 13.4 Connectivity Considerations
SMS as the primary fallback channel ΓÇö assume many users have intermittent data access.

Optimize app bundle size (<20 MB initial download) for slower networks.

Lazy-load images in organization profiles to save data.

Progressive Web App as an alternative to a full app download.

USSD booking (#123# style) in Phase 2 for feature phone users in rural areas ΓÇö extremely high impact for government health programs.

## 13.5 Trust & Verification
Organization verification badge (manual review by Astawash team) builds trust with citizens.

Display government registration number or license number on organization profiles (where applicable).

User reviews moderated to prevent spam; flag-and-review system.

Astawash to publish a public transparency report on moderation actions.

# 14.  Risks & Mitigations
# 14. Risks & Mitigations
Risk

Impact

Mitigation

Low smartphone penetration in rural areas

High

SMS-first design; USSD in Phase 2; partner with health extension workers as booking intermediaries

Organizational resistance to digital change

High

Assign dedicated onboarding support; show ROI data from pilot orgs within 30 days of go-live

SMS gateway reliability / cost

Medium

Multi-gateway redundancy (AfricasTalking + backup); negotiate volume discounts; monitor delivery rates

Data privacy concerns (patient data)

High

Minimal data collection; encryption; audit logging; clear privacy policy in Amharic

Competition from global platforms (Zocdoc, etc.)

Low

Deep local context, Amharic support, and Ethiopian-specific features are a moat global players won't invest in quickly

No-show culture not changing

Medium

Payment deposit feature (Phase 2); consistent reminder automation; public messaging on platform benefits

Government procurement delays

Medium

Prioritize private sector first; use case studies to accelerate public sector conversations

Technical scalability on launch day

Medium

Load test before launch; staged rollout; auto-scaling infrastructure from day 1

# 15.  Product Roadmap
# 15. Product Roadmap
Phase

Timeline

Deliverables

### Phase 0 ΓÇö Foundation
Month 1ΓÇô2

Architecture setup, design system, SMS gateway integration, basic organization onboarding, appointment booking core, admin dashboard MVP

### Phase 1 ΓÇö MVP Launch
Month 3ΓÇô4

Public discovery page, citizen booking app (Android), walk-in queue management, automated SMS reminders, analytics basic, 5 pilot organizations live

### Phase 2 ΓÇö Growth
Month 5ΓÇô8

iOS app, WhatsApp notifications, API (full), waitlist management, provider prep notifications, post-service feedback, payment deposit, 30 orgs live

### Phase 3 ΓÇö Expansion
Month 9ΓÇô14

USSD channel, TV queue display board, Ethiopian calendar full integration, Telebirr payment, government sector push, referral bookings, campaign module

### Phase 4 ΓÇö Scale
Month 15ΓÇô24

AI-powered no-show prediction, NLP chatbot (Amharic), regional language support, ministry-level analytics, white-label offering, 100+ organizations

# 16.  Success Metrics & KPIs
# 16. Success Metrics & KPIs
## 16.1 Platform Health Metrics
KPI

Target (12 months post-launch)

Organizations onboarded

75ΓÇô100

Active organizations (booked in last 30 days)

>80% of onboarded

Total appointments booked via platform

50,000+

Monthly Active Users (citizens)

10,000+

SMS delivery rate

>95%

Average no-show rate (platform-wide)

<15% (down from 30ΓÇô40% baseline)

App store rating

>4.2 stars (Android)

System uptime

>99.5%

## 16.2 Business Metrics
KPI

Target

Monthly Recurring Revenue (MRR)

ETB 100,000+ by Month 12

Paying organization conversion rate

>40% of onboarded orgs on paid plan

Churn rate (monthly, paying orgs)

<5%

Customer Acquisition Cost (org)

<ETB 3,000

Lifetime Value (org, Professional tier)

>ETB 30,000

NPS (organizations)

>40

NPS (citizens)

>50

Appendix  ΓÇö  Glossary & Reference

Appendix ΓÇö Glossary

Term

Definition

Astawash (ßèáßê╡ßë│ßïïßê╜)

Amharic for 'reminder' or 'one who reminds.' The platform name.

Tenant

An organization registered on the Astawash platform (e.g., Black Lion Hospital).

Slot

A specific time window during which a service can be delivered (e.g., 9:00ΓÇô9:30 AM).

Walk-In

A client who arrives without a prior online booking and is added to the queue on-site.

No-Show

A client who booked an appointment but did not arrive within the tolerance window.

Waitlist

A queue of clients who want an appointment for a full slot; auto-promoted when a cancellation occurs.

Queue Ticket

A unique identifier (number or QR code) given to a client upon arrival, indicating their position.

OTP

One-Time Password ΓÇö a 4ΓÇô6 digit code sent via SMS for phone number verification and login.

PWA

Progressive Web App ΓÇö a website that can be installed and used like a native app.

HIS

Hospital Information System ΓÇö existing electronic records system used by many Ethiopian hospitals.

USSD

Unstructured Supplementary Service Data ΓÇö a mobile protocol enabling menu-driven interactions via GSM without data.

T-24 / T-2

Shorthand for 24 hours before / 2 hours before an appointment, used for reminder timing.

ETB

Ethiopian Birr ΓÇö the national currency.

Fayda ID

Ethiopia's national digital ID system, currently being rolled out.

AfricasTalking

A leading African SMS gateway service with Ethiopia coverage.

Ge'ez

The script used to write Amharic, Tigrinya, and other Ethiopian languages.

This document represents Version 1.0 of the Astawash PRD and should be reviewed and updated at each major product milestone. All strategic suggestions in Section 11 are advisory and subject to validation with target users and organizations before development commitment.

ΓÇö End of Document ΓÇö

Astawash  |  astawash.et  |  info@astawash.et

