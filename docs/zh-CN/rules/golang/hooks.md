---
source_path: rules/golang/hooks.md
paths: 
---

# Go 钩子

> 本文件通过 Go 特定内容扩展了 [common/hooks.md](../common/hooks.md)。

## PostToolUse 钩子

在 `~/.claude/settings.json` 中配置：

* **gofmt/goimports**：编辑后自动格式化 `.go` 文件
* **go vet**：编辑 `.go` 文件后运行静态分析
* **staticcheck**：对修改的包运行扩展静态检查

## 原文
- [英文原文](../../../../rules/golang/hooks.md)

## 导航
- [中文文档导航](../../README.md)
- [rules/README.md](../README.md)
- [贡献指南](../../../../CONTRIBUTING.md)
