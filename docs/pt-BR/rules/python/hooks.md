---
source_path: rules/python/hooks.md
paths: 
---
# Python Hooks

> This file extends [common/hooks.md](../common/hooks.md) with Python specific content.

## PostToolUse Hooks

Configure in `~/.claude/settings.json`:

- **black/ruff**: Auto-format `.py` files after edit
- **mypy/pyright**: Run type checking after editing `.py` files

## Warnings

- Warn about `print()` statements in edited files (use `logging` module instead)

## Fonte canônica
- [Documento original em inglês](../../../../rules/python/hooks.md)

## Navegação
- [Documentação em Português (BR)](../../README.md)
- [rules/README.md](../README.md)
- [Guia de contribuição](../../../../CONTRIBUTING.md)
