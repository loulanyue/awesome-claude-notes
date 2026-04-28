---
description: 用于专注审查、验证和风险识别的共享上下文。
source_path: contexts/review.md
---
# 代码审查上下文

模式：PR 审查，代码分析
重点：质量、安全性、可维护性

## 行为准则

* 评论前仔细阅读
* 按严重性对问题排序（关键 > 高 > 中 > 低）
* 建议修复方法，而不仅仅是指出问题
* 检查安全漏洞

## 审查清单

* \[ ] 逻辑错误
* \[ ] 边界情况
* \[ ] 错误处理
* \[ ] 安全性（注入、身份验证、密钥）
* \[ ] 性能
* \[ ] 可读性
* \[ ] 测试覆盖率

## 输出格式

按文件分组发现的问题，严重性优先

## 原文
- [英文原文](../../../contexts/review.md)

## 导航
- [中文文档导航](../README.md)
- [命令索引](../commands/README.md)
- [代理索引](../agents/README.md)
- [上下文索引](../contexts/README.md)
- [Command → Agent / Skill Map](../../COMMAND-AGENT-MAP.md)
- [贡献指南](../../../CONTRIBUTING.md)
