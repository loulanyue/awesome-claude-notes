---
source_path: rules/php/hooks.md
paths: 
---
# PHP Hooks

> This file extends [common/hooks.md](../common/hooks.md) with PHP specific content.

## PostToolUse Hooks

Configure in `~/.claude/settings.json`:

- **Pint / PHP-CS-Fixer**: Auto-format edited `.php` files.
- **PHPStan / Psalm**: Run static analysis after PHP edits in typed codebases.
- **PHPUnit / Pest**: Run targeted tests for touched files or modules when edits affect behavior.

## Warnings

- Warn on `var_dump`, `dd`, `dump`, or `die()` left in edited files.
- Warn when edited PHP files add raw SQL or disable CSRF/session protections.

## 原文
- [英文原文](../../../../rules/php/hooks.md)

## 導航
- [繁體中文文件導航](../../README.md)
- [rules/README.md](../README.md)
- [貢獻指南](../../../../CONTRIBUTING.md)
