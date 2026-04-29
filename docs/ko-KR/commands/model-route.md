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

## 원문
- [영문 원문](../../../commands/model-route.md)

## 탐색
- [한국어 문서 안내](../README.md)
- [명령어 색인](../commands/README.md)
- [에이전트 색인](../agents/README.md)
- [컨텍스트 색인](../contexts/README.md)
- [Command → Agent / Skill Map](../../COMMAND-AGENT-MAP.md)
- [기여 가이드](../../../CONTRIBUTING.md)
