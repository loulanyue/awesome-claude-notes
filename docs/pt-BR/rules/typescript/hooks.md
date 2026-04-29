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

## Fonte canônica
- [Documento original em inglês](../../../../rules/typescript/hooks.md)

## Navegação
- [Documentação em Português (BR)](../../README.md)
- [rules/README.md](../README.md)
- [Guia de contribuição](../../../../CONTRIBUTING.md)
