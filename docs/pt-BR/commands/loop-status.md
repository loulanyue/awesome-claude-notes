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

## Fonte canônica
- [Documento original em inglês](../../../commands/loop-status.md)

## Navegação
- [Documentação em Português (BR)](../README.md)
- [Índice de comandos](../commands/README.md)
- [Índice de agentes](../agents/README.md)
- [Índice de contextos](../contexts/README.md)
- [Command → Agent / Skill Map](../../COMMAND-AGENT-MAP.md)
- [Guia de contribuição](../../../CONTRIBUTING.md)
