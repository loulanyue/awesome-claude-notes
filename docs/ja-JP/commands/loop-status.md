---
description: "Inspect active loop state, progress, and failure signals."
source_path: commands/loop-status.md
---

# Loop Status Command

Inspect active loop state, progress, and failure signals.

## Usage

`/loop-status [--watch]`

## What to Report

- active loop pattern
- current phase and last successful checkpoint
- failing checks (if any)
- estimated time/cost drift
- recommended intervention (continue/pause/stop)

## Watch Mode

When `--watch` is present, refresh status periodically and surface state changes.

## Arguments

$ARGUMENTS:
- `--watch` optional

## Navigation

- [Command → Agent / Skill Map](../docs/COMMAND-AGENT-MAP.md)
- [Agents index](../AGENTS.md)
- [Contexts directory](../contexts)
- [Contributing guide](../CONTRIBUTING.md)

## 原文
- [英語版の原文](../../../commands/loop-status.md)

## ナビゲーション
- [日本語ドキュメント一覧](../README.md)
- [コマンド一覧](../commands/README.md)
- [エージェント一覧](../agents/README.md)
- [コンテキスト一覧](../contexts/README.md)
- [Command → Agent / Skill Map](../../COMMAND-AGENT-MAP.md)
- [貢献ガイド](../../../CONTRIBUTING.md)
