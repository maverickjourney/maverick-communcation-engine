[README.md](https://github.com/user-attachments/files/28990830/README.md)
# Maverick Journey — Slack Communication Layer

This is the standalone Slack informational demo.

## Purpose

This page explains that Slack is not the main dashboard. Slack is the communication layer between the client, Maverick Journey AI, and the trainer.

## Core concept

Maverick Journey acts as the middle-man AI.

Client → Slack → Maverick Journey AI → Trainer Dashboard / Trainer Slack

## What Slack does for the client

The client can use Slack to send:

- Food logs
- Meal photos
- Progress photos
- Weight
- Sleep
- Water intake
- Mood
- Soreness
- Injuries
- Schedule changes
- Questions
- Bloodwork or health documents
- Personal notes the trainer should know

## What Slack does for the trainer

The trainer can use Slack to:

- View client communication by client
- Click into each client’s channels
- Send reminders
- Send workout updates
- Send coaching pointers
- Ask Maverick Journey AI about any client
- Review AI summaries
- Approve AI-drafted messages
- Know when a direct text or call is needed

## Channel structure shown

- Client Log Channel: where the client sends updates
- Coach Updates Channel: where the trainer sends feedback, workout plans, reminders, and pointers
- Reminder Channel: where Maverick Journey sends scheduled reminders
- Trainer Command Center: where the trainer talks to Maverick Journey AI

## Important safety note

Maverick Journey may organize bloodwork or health documents for review, but it should not diagnose, prescribe, or replace medical guidance.

## Repo files

This repo only needs:

- `index.html`
- `README.md`

## Vercel setup

- Framework Preset: Other / No Framework
- Build Command: blank
- Output Directory: blank or `.`
- Install Command: blank
