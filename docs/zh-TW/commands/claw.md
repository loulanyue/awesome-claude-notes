---
description: Start NanoClaw v2 — ECC's persistent, zero-dependency REPL with model routing, skill hot-load, branching, compaction, export, and metrics.
source_path: commands/claw.md
---

# Claw Command

Start an interactive AI agent session with persistent markdown history and operational controls.

## Usage

```bash
node scripts/claw.js
```

Or via npm:

```bash
npm run claw
```

## Environment Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `CLAW_SESSION` | `default` | Session name (alphanumeric + hyphens) |
| `CLAW_SKILLS` | *(empty)* | Comma-separated skills loaded at startup |
| `CLAW_MODEL` | `sonnet` | Default model for the session |

## REPL Commands

```text
/help                          Show help
/clear                         Clear current session history
/history                       Print full conversation history
/sessions                      List saved sessions
/model [name]                  Show/set model
/load <skill-name>             Hot-load a skill into context
/branch <session-name>         Branch current session
/search <query>                Search query across sessions
/compact                       Compact old turns, keep recent context
/export <md|json|txt> [path]   Export session
/metrics                       Show session metrics
exit                           Quit
```

## Notes

- NanoClaw remains zero-dependency.
- Sessions are stored at `~/.claude/claw/<session>.md`.
- Compaction keeps the most recent turns and writes a compaction header.
- Export supports markdown, JSON turns, and plain text.

## Navigation

- [Command → Agent / Skill Map](../docs/COMMAND-AGENT-MAP.md)
- [Agents index](../AGENTS.md)
- [Contexts directory](../contexts)
- [Contributing guide](../CONTRIBUTING.md)

## 原文
- [英文原文](../../../commands/claw.md)

## 導航
- [繁體中文文件導航](../README.md)
- [命令索引](../commands/README.md)
- [代理索引](../agents/README.md)
- [上下文索引](../contexts/README.md)
- [Command → Agent / Skill Map](../../COMMAND-AGENT-MAP.md)
- [貢獻指南](../../../CONTRIBUTING.md)
