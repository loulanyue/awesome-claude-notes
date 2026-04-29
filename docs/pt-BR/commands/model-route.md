---
description: "Recommend the best model tier for the current task by complexity and budget."
source_path: commands/model-route.md
---

# Model Route Command

Recommend the best model tier for the current task by complexity and budget.

## Usage

`/model-route [task-description] [--budget low|med|high]`

## Routing Heuristic

- `haiku`: deterministic, low-risk mechanical changes
- `sonnet`: default for implementation and refactors
- `opus`: architecture, deep review, ambiguous requirements

## Required Output

- recommended model
- confidence level
- why this model fits
- fallback model if first attempt fails

## Arguments

$ARGUMENTS:
- `[task-description]` optional free-text
- `--budget low|med|high` optional

## Navigation

- [Command → Agent / Skill Map](../docs/COMMAND-AGENT-MAP.md)
- [Agents index](../AGENTS.md)
- [Contexts directory](../contexts)
- [Contributing guide](../CONTRIBUTING.md)

## Fonte canônica
- [Documento original em inglês](../../../commands/model-route.md)

## Navegação
- [Documentação em Português (BR)](../README.md)
- [Índice de comandos](../commands/README.md)
- [Índice de agentes](../agents/README.md)
- [Índice de contextos](../contexts/README.md)
- [Command → Agent / Skill Map](../../COMMAND-AGENT-MAP.md)
- [Guia de contribuição](../../../CONTRIBUTING.md)
