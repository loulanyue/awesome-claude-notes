---
source_path: rules/typescript/hooks.md
paths: 
---

# TypeScript/JavaScript 钩子

> 此文件扩展了 [common/hooks.md](../common/hooks.md)，并添加了 TypeScript/JavaScript 特有的内容。

## PostToolUse 钩子

在 `~/.claude/settings.json` 中配置：

* **Prettier**：编辑后自动格式化 JS/TS 文件
* **TypeScript 检查**：编辑 `.ts`/`.tsx` 文件后运行 `tsc`
* **console.log 警告**：警告编辑过的文件中存在 `console.log`

## Stop 钩子

* **console.log 审计**：在会话结束前，检查所有修改过的文件中是否存在 `console.log`

## 原文
- [英文原文](../../../../rules/typescript/hooks.md)

## 导航
- [中文文档导航](../../README.md)
- [rules/README.md](../README.md)
- [贡献指南](../../../../CONTRIBUTING.md)
