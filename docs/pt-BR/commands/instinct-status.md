---
name: instinct-status
description: Show learned instincts (project + global) with confidence
source_path: commands/instinct-status.md
command: true
---

# Instinct Status Command

Shows learned instincts for the current project plus global instincts, grouped by domain.

## Implementation

Run the instinct CLI using the plugin root path:

```bash
python3 "${CLAUDE_PLUGIN_ROOT}/skills/continuous-learning-v2/scripts/instinct-cli.py" status
```

Or if `CLAUDE_PLUGIN_ROOT` is not set (manual installation), use:

```bash
python3 ~/.claude/skills/continuous-learning-v2/scripts/instinct-cli.py status
```

## Usage

```
/instinct-status
```

## What to Do

1. Detect current project context (git remote/path hash)
2. Read project instincts from `~/.claude/homunculus/projects/<project-id>/instincts/`
3. Read global instincts from `~/.claude/homunculus/instincts/`
4. Merge with precedence rules (project overrides global when IDs collide)
5. Display grouped by domain with confidence bars and observation stats

## Output Format

```
============================================================
  INSTINCT STATUS - 12 total
============================================================

  Project: my-app (a1b2c3d4e5f6)
  Project instincts: 8
  Global instincts:  4

## PROJECT-SCOPED (my-app)
  ### WORKFLOW (3)
    ███████░░░  70%  grep-before-edit [project]
              trigger: when modifying code

## GLOBAL (apply to all projects)
  ### SECURITY (2)
    █████████░  85%  validate-user-input [global]
              trigger: when handling user input
```

## Navigation

- [Command → Agent / Skill Map](../docs/COMMAND-AGENT-MAP.md)
- [Agents index](../AGENTS.md)
- [Contexts directory](../contexts)
- [Contributing guide](../CONTRIBUTING.md)

## Fonte canônica
- [Documento original em inglês](../../../commands/instinct-status.md)

## Navegação
- [Documentação em Português (BR)](../README.md)
- [Índice de comandos](../commands/README.md)
- [Índice de agentes](../agents/README.md)
- [Índice de contextos](../contexts/README.md)
- [Command → Agent / Skill Map](../../COMMAND-AGENT-MAP.md)
- [Guia de contribuição](../../../CONTRIBUTING.md)
