---
description: Analyze context window usage across agents, skills, MCP servers, and rules to find optimization opportunities. Helps reduce token overhead and avoid performance warnings.
source_path: commands/context-budget.md
---

# Context Budget Optimizer

Analyze your Claude Code setup's context window consumption and produce actionable recommendations to reduce token overhead.

## Usage

```
/context-budget [--verbose]
```

- Default: summary with top recommendations
- `--verbose`: full breakdown per component

$ARGUMENTS

## What to Do

Run the **context-budget** skill (`skills/context-budget/SKILL.md`) with the following inputs:

1. Pass `--verbose` flag if present in `$ARGUMENTS`
2. Assume a 200K context window (Claude Sonnet default) unless the user specifies otherwise
3. Follow the skill's four phases: Inventory → Classify → Detect Issues → Report
4. Output the formatted Context Budget Report to the user

The skill handles all scanning logic, token estimation, issue detection, and report formatting.

## Navigation

- [Command → Agent / Skill Map](../docs/COMMAND-AGENT-MAP.md)
- [Agents index](../AGENTS.md)
- [Contexts directory](../contexts)
- [Contributing guide](../CONTRIBUTING.md)

## Fonte canônica
- [Documento original em inglês](../../../commands/context-budget.md)

## Navegação
- [Documentação em Português (BR)](../README.md)
- [Índice de comandos](../commands/README.md)
- [Índice de agentes](../agents/README.md)
- [Índice de contextos](../contexts/README.md)
- [Command → Agent / Skill Map](../../COMMAND-AGENT-MAP.md)
- [Guia de contribuição](../../../CONTRIBUTING.md)
