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

## 원문
- [영문 원문](../../../commands/loop-status.md)

## 탐색
- [한국어 문서 안내](../README.md)
- [명령어 색인](../commands/README.md)
- [에이전트 색인](../agents/README.md)
- [컨텍스트 색인](../contexts/README.md)
- [Command → Agent / Skill Map](../../COMMAND-AGENT-MAP.md)
- [기여 가이드](../../../CONTRIBUTING.md)
