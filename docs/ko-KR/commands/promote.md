---
name: promote
description: Promote project-scoped instincts to global scope
source_path: commands/promote.md
command: true
---

# Promote Command

Promote instincts from project scope to global scope in continuous-learning-v2.

## Implementation

Run the instinct CLI using the plugin root path:

```bash
python3 "${CLAUDE_PLUGIN_ROOT}/skills/continuous-learning-v2/scripts/instinct-cli.py" promote [instinct-id] [--force] [--dry-run]
```

Or if `CLAUDE_PLUGIN_ROOT` is not set (manual installation):

```bash
python3 ~/.claude/skills/continuous-learning-v2/scripts/instinct-cli.py promote [instinct-id] [--force] [--dry-run]
```

## Usage

```bash
/promote                      # Auto-detect promotion candidates
/promote --dry-run            # Preview auto-promotion candidates
/promote --force              # Promote all qualified candidates without prompt
/promote grep-before-edit     # Promote one specific instinct from current project
```

## What to Do

1. Detect current project
2. If `instinct-id` is provided, promote only that instinct (if present in current project)
3. Otherwise, find cross-project candidates that:
   - Appear in at least 2 projects
   - Meet confidence threshold
4. Write promoted instincts to `~/.claude/homunculus/instincts/personal/` with `scope: global`

## Navigation

- [Command → Agent / Skill Map](../docs/COMMAND-AGENT-MAP.md)
- [Agents index](../AGENTS.md)
- [Contexts directory](../contexts)
- [Contributing guide](../CONTRIBUTING.md)

## 원문
- [영문 원문](../../../commands/promote.md)

## 탐색
- [한국어 문서 안내](../README.md)
- [명령어 색인](../commands/README.md)
- [에이전트 색인](../agents/README.md)
- [컨텍스트 색인](../contexts/README.md)
- [Command → Agent / Skill Map](../../COMMAND-AGENT-MAP.md)
- [기여 가이드](../../../CONTRIBUTING.md)
