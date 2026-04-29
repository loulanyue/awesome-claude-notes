---
source_path: rules/golang/testing.md
paths: 
---
# Go Testing

> This file extends [common/testing.md](../common/testing.md) with Go specific content.

## Framework

Use the standard `go test` with **table-driven tests**.

## Race Detection

Always run with the `-race` flag:

```bash
go test -race ./...
```

## Coverage

```bash
go test -cover ./...
```

## Reference

See skill: `golang-testing` for detailed Go testing patterns and helpers.

## 원문
- [영문 원문](../../../../rules/golang/testing.md)

## 탐색
- [한국어 문서 안내](../../README.md)
- [rules/README.md](../README.md)
- [기여 가이드](../../../../CONTRIBUTING.md)
