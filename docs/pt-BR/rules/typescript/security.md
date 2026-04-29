---
source_path: rules/typescript/security.md
paths: 
---
# TypeScript/JavaScript Security

> This file extends [common/security.md](../common/security.md) with TypeScript/JavaScript specific content.

## Secret Management

```typescript
// NEVER: Hardcoded secrets
const apiKey = "sk-proj-xxxxx"

// ALWAYS: Environment variables
const apiKey = process.env.OPENAI_API_KEY

if (!apiKey) {
  throw new Error('OPENAI_API_KEY not configured')
}
```

## Agent Support

- Use **security-reviewer** skill for comprehensive security audits

## Fonte canônica
- [Documento original em inglês](../../../../rules/typescript/security.md)

## Navegação
- [Documentação em Português (BR)](../../README.md)
- [rules/README.md](../README.md)
- [Guia de contribuição](../../../../CONTRIBUTING.md)
