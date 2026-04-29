---
description: "Run the ECC quality pipeline on demand for a file or project scope."
source_path: commands/quality-gate.md
---

# Quality Gate Command

Run the ECC quality pipeline on demand for a file or project scope.

## Usage

`/quality-gate [path|.] [--fix] [--strict]`

- default target: current directory (`.`)
- `--fix`: allow auto-format/fix where configured
- `--strict`: fail on warnings where supported

## Pipeline

1. Detect language/tooling for target.
2. Run formatter checks.
3. Run lint/type checks when available.
4. Produce a concise remediation list.

## Notes

This command mirrors hook behavior but is operator-invoked.

## Arguments

$ARGUMENTS:
- `[path|.]` optional target path
- `--fix` optional
- `--strict` optional

## Navigation

- [Command → Agent / Skill Map](../docs/COMMAND-AGENT-MAP.md)
- [Agents index](../AGENTS.md)
- [Contexts directory](../contexts)
- [Contributing guide](../CONTRIBUTING.md)

## 原文
- [英語版の原文](../../../commands/quality-gate.md)

## ナビゲーション
- [日本語ドキュメント一覧](../README.md)
- [コマンド一覧](../commands/README.md)
- [エージェント一覧](../agents/README.md)
- [コンテキスト一覧](../contexts/README.md)
- [Command → Agent / Skill Map](../../COMMAND-AGENT-MAP.md)
- [貢献ガイド](../../../CONTRIBUTING.md)
