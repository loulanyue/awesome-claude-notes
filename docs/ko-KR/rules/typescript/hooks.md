---
source_path: rules/typescript/hooks.md
paths: 
---
# TypeScript/JavaScript Hooks

> This file extends [common/hooks.md](../common/hooks.md) with TypeScript/JavaScript specific content.

## PostToolUse Hooks

Configure in `~/.claude/settings.json`:

- **Prettier**: Auto-format JS/TS files after edit
- **TypeScript check**: Run `tsc` after editing `.ts`/`.tsx` files
- **console.log warning**: Warn about `console.log` in edited files

## Stop Hooks

- **console.log audit**: Check all modified files for `console.log` before session ends

## 원문
- [영문 원문](../../../../rules/typescript/hooks.md)

## 탐색
- [한국어 문서 안내](../../README.md)
- [rules/README.md](../README.md)
- [기여 가이드](../../../../CONTRIBUTING.md)
