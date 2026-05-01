---
description: "Analyze the codebase structure and generate token-lean architecture documentation."
source_path: commands/update-codemaps.md
---
# 更新程式碼地圖

分析程式碼庫結構並更新架構文件：

1. 掃描所有原始檔案的 imports、exports 和相依性
2. 以下列格式產生精簡的程式碼地圖：
   - codemaps/architecture.md - 整體架構
   - codemaps/backend.md - 後端結構
   - codemaps/frontend.md - 前端結構
   - codemaps/data.md - 資料模型和結構描述

3. 計算與前一版本的差異百分比
4. 如果變更 > 30%，在更新前請求使用者批准
5. 為每個程式碼地圖新增新鮮度時間戳
6. 將報告儲存到 .reports/codemap-diff.txt

使用 TypeScript/Node.js 進行分析。專注於高階結構，而非實作細節。

## 原文
- [英文原文](../../../commands/update-codemaps.md)

## 導航
- [繁體中文文件導航](../README.md)
- [命令索引](../commands/README.md)
- [代理索引](../agents/README.md)
- [上下文索引](../contexts/README.md)
- [Command → Agent / Skill Map](../../COMMAND-AGENT-MAP.md)
- [貢獻指南](../../../CONTRIBUTING.md)
