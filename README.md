[README.md](https://github.com/user-attachments/files/29164940/README.md)
# Maverick Journey Communication Engine Demo

This replaces the old Slack-first demo positioning.

## New product direction

Maverick Journey is web-based first.

The MVP should be built around:

- Trainer dashboard
- Client portal
- In-app messaging
- Client check-ins
- Urgent AI alerts
- AI suggested replies
- Trainer tasks and accountability
- Click-to-text from the trainer's real phone
- Supabase/database as the source of truth
- Slack only as an optional notification integration later

## Vercel settings

Framework Preset: Other
Build Command: npm run build
Output Directory: public
Install Command: npm install

## Important architecture note

Slack should not own the core client history, messages, uploads, alerts, AI summaries, check-ins, or trainer tasks.

The database should own everything. Slack can later receive optional notifications only.
