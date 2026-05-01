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

## 原文
- [英文原文](../../../../rules/golang/security.md)

## 導航
- [繁體中文文件導航](../../README.md)
- [rules/README.md](../README.md)
- [貢獻指南](../../../../CONTRIBUTING.md)
