---
source_path: rules/golang/testing.md
paths: 
---

# Go 测试

> 本文档在 [common/testing.md](../common/testing.md) 的基础上扩展了 Go 特定的内容。

## 框架

使用标准的 `go test` 并采用 **表格驱动测试**。

## 竞态检测

始终使用 `-race` 标志运行：

```bash
go test -race ./...
```

## 覆盖率

```bash
go test -cover ./...
```

## 参考

查看技能：`golang-testing` 以获取详细的 Go 测试模式和辅助工具。

## 原文
- [英文原文](../../../../rules/golang/testing.md)

## 导航
- [中文文档导航](../../README.md)
- [rules/README.md](../README.md)
- [贡献指南](../../../../CONTRIBUTING.md)
