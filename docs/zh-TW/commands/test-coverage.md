---
description: "Analyze test coverage, identify gaps, and generate missing tests to reach 80%+ coverage."
source_path: commands/test-coverage.md
---
# 測試覆蓋率

分析測試覆蓋率並產生缺少的測試：

1. 執行帶覆蓋率的測試：npm test --coverage 或 pnpm test --coverage

2. 分析覆蓋率報告（coverage/coverage-summary.json）

3. 識別低於 80% 覆蓋率閾值的檔案

4. 對每個覆蓋不足的檔案：
   - 分析未測試的程式碼路徑
   - 為函式產生單元測試
   - 為 API 產生整合測試
   - 為關鍵流程產生 E2E 測試

5. 驗證新測試通過

6. 顯示前後覆蓋率指標

7. 確保專案達到 80% 以上整體覆蓋率

專注於：
- 正常流程情境
- 錯誤處理
- 邊界情況（null、undefined、空值）
- 邊界條件

## 原文
- [英文原文](../../../commands/test-coverage.md)

## 導航
- [繁體中文文件導航](../README.md)
- [命令索引](../commands/README.md)
- [代理索引](../agents/README.md)
- [Command → Agent / Skill Map](../../COMMAND-AGENT-MAP.md)
- [貢獻指南](../../../CONTRIBUTING.md)
