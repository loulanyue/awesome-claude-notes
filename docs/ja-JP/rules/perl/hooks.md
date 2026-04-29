---
source_path: rules/perl/hooks.md
paths: 
---
# Perl Hooks

> This file extends [common/hooks.md](../common/hooks.md) with Perl-specific content.

## PostToolUse Hooks

Configure in `~/.claude/settings.json`:

- **perltidy**: Auto-format `.pl` and `.pm` files after edit
- **perlcritic**: Run lint check after editing `.pm` files

## Warnings

- Warn about `print` in non-script `.pm` files — use `say` or a logging module (e.g., `Log::Any`)

## 原文
- [英語版の原文](../../../../rules/perl/hooks.md)

## ナビゲーション
- [日本語ドキュメント一覧](../../README.md)
- [rules/README.md](../README.md)
- [貢献ガイド](../../../../CONTRIBUTING.md)
