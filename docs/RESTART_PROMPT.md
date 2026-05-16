# Restart Prompt

Paste this at the start of a new Claude session to get back to work on naturaobe.

---

I'm working on **naturaobe**, a static Next.js 14 site for the NaturaO brand, hosted on GitHub Pages at https://ahripou.github.io/naturaobe. The repo is at `/Users/georges/Library/Mobile Documents/com~apple~CloudDocs/CLAUDE/naturaobe`.

Before doing anything:

1. Read `docs/PROJECT_STATE.md`, `docs/CLAUDE_CONTEXT.md`, `docs/DECISIONS.md`, and `docs/TODO.md`.
2. Note: data flows from Supabase project `vedopibxnomcafbqgnqk` through `lib/getProducers.ts` at build time only — there are no runtime DB calls.
3. The public site shows no prices and no stock; do not reintroduce them.
4. Push to `main` triggers GH Actions deploy (`.github/workflows/deploy.yml`).

Today I want to: **<describe the task here>**

If the task involves Supabase data, use the Supabase MCP tools against project `vedopibxnomcafbqgnqk` rather than guessing schema — the schema has drifted from what older code assumed.
