# Producer content files

One Markdown file per producer, named by the Supabase `producers.code` (uppercase).

Loaded at build time by `lib/getProducerContent.ts` and merged into the `Producer`
objects from `lib/getProducers.ts`. If a file is missing, the producer renders
with empty/default copy — nothing breaks.

## File format

```markdown
---
accroche: One sentence shown on the producer card and at the top of the producer page.
engagement: Short paragraph rendered below the histoire on the producer page.
methode:
  - First pillar of the method (one short sentence)
  - Second pillar
  - Third pillar
---

The body of the file is the `histoire` — the long-form story rendered in the
"L'histoire" section of the producer page. Plain text only for now (no Markdown
formatting beyond paragraph breaks).
```

## Fields

| Field | Where it shows | Notes |
|---|---|---|
| `accroche` | Producer card on `/producteurs` + page hero | 1 sentence, ~80–120 chars |
| `engagement` | After the histoire on the producer page | 1–2 sentences |
| `methode` | "La méthode" section — three numbered blocks | **Exactly 3 items.** Fewer = filler defaults; more = truncated |
| body (after `---`) | "L'histoire" section | Plain text, written like editorial copy |

## Tone

Per `CLAUDE.md` at the repo root: sober, premium, incarné, never marketing-speak.
Write like a magazine editor describing the producer to a curious reader.

## Codes

The filename must match `producers.code` exactly (uppercase). To list all codes:

```sql
SELECT code, name FROM producers ORDER BY name;
```
