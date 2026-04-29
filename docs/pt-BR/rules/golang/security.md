---
source_path: rules/golang/security.md
paths: 
---
# Go Security

> This file extends [common/security.md](../common/security.md) with Go specific content.

## Secret Management

```go
apiKey := os.Getenv("OPENAI_API_KEY")
if apiKey == "" {
    log.Fatal("OPENAI_API_KEY not configured")
}
```

## Security Scanning

- Use **gosec** for static security analysis:
  ```bash
  gosec ./...
  ```

## Context & Timeouts

Always use `context.Context` for timeout control:

```go
ctx, cancel := context.WithTimeout(ctx, 5*time.Second)
defer cancel()
```

## Fonte canônica
- [Documento original em inglês](../../../../rules/golang/security.md)

## Navegação
- [Documentação em Português (BR)](../../README.md)
- [rules/README.md](../README.md)
- [Guia de contribuição](../../../../CONTRIBUTING.md)
