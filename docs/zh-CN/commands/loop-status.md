---
description: "Inspect active loop state, progress, and failure signals."
source_path: commands/loop-status.md
---
# 循环状态命令

检查活动循环状态、进度和故障信号。

## 用法

`/loop-status [--watch]`

## 报告内容

* 活动循环模式
* 当前阶段和最后一个成功的检查点
* 失败的检查（如果有）
* 预计的时间/成本偏差
* 建议的干预措施（继续/暂停/停止）

## 监视模式

当 `--watch` 存在时，定期刷新状态并显示状态变化。

## 参数

$ARGUMENTS:

* `--watch` 可选

## 原文
- [英文原文](../../../commands/loop-status.md)

## 导航
- [中文文档导航](../README.md)
- [命令索引](../commands/README.md)
- [代理索引](../agents/README.md)
- [上下文索引](../contexts/README.md)
- [Command → Agent / Skill Map](../../COMMAND-AGENT-MAP.md)
- [贡献指南](../../../CONTRIBUTING.md)
