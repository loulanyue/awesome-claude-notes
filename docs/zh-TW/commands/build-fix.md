---
description: "Incrementally fix build and type errors with minimal, safe changes."
source_path: commands/build-fix.md
---
# 建置與修復

增量修復 TypeScript 和建置錯誤：

1. 執行建置：npm run build 或 pnpm build

2. 解析錯誤輸出：
   - 依檔案分組
   - 依嚴重性排序

3. 對每個錯誤：
   - 顯示錯誤上下文（前後 5 行）
   - 解釋問題
   - 提出修復方案
   - 套用修復
   - 重新執行建置
   - 驗證錯誤已解決

4. 停止條件：
   - 修復引入新錯誤
   - 3 次嘗試後同樣錯誤仍存在
   - 使用者要求暫停

5. 顯示摘要：
   - 已修復的錯誤
   - 剩餘的錯誤
   - 新引入的錯誤

為了安全，一次修復一個錯誤！

## 原文
- [英文原文](../../../commands/build-fix.md)

## 導航
- [繁體中文文件導航](../README.md)
- [命令索引](../commands/README.md)
- [代理索引](../agents/README.md)
- [上下文索引](../contexts/README.md)
- [Command → Agent / Skill Map](../../COMMAND-AGENT-MAP.md)
- [貢獻指南](../../../CONTRIBUTING.md)
