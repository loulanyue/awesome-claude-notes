---
description: Look up current documentation for a library or topic via Context7.
source_path: commands/docs.md
---

# /docs

## Purpose

Look up up-to-date documentation for a library, framework, or API and return a summarized answer with relevant code snippets. Uses the Context7 MCP (resolve-library-id and query-docs) so answers reflect current docs, not training data.

## Usage

```
/docs [library name] [question]
```

Use quotes for multi-word arguments so they are parsed as a single token. Example: `/docs "Next.js" "How do I configure middleware?"`

If library or question is omitted, prompt the user for:
1. The library or product name (e.g. Next.js, Prisma, Supabase).
2. The specific question or task (e.g. "How do I set up middleware?", "Auth methods").

## Workflow

1. **Resolve library ID** — Call the Context7 tool `resolve-library-id` with the library name and the user's question to get a Context7-compatible library ID (e.g. `/vercel/next.js`).
2. **Query docs** — Call `query-docs` with that library ID and the user's question.
3. **Summarize** — Return a concise answer and include relevant code examples from the fetched documentation. Mention the library (and version if relevant).

## Output

The user receives a short, accurate answer backed by current docs, plus any code snippets that help. If Context7 is not available, say so and answer from training data with a note that docs may be outdated.

## Navigation

- [Command → Agent / Skill Map](../docs/COMMAND-AGENT-MAP.md)
- [Agents index](../AGENTS.md)
- [Contexts directory](../contexts)
- [Contributing guide](../CONTRIBUTING.md)

## 原文
- [英語版の原文](../../../commands/docs.md)

## ナビゲーション
- [日本語ドキュメント一覧](../README.md)
- [コマンド一覧](../commands/README.md)
- [エージェント一覧](../agents/README.md)
- [コンテキスト一覧](../contexts/README.md)
- [Command → Agent / Skill Map](../../COMMAND-AGENT-MAP.md)
- [貢献ガイド](../../../CONTRIBUTING.md)
