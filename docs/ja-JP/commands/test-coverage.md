---
description: "Analyze test coverage, identify gaps, and generate missing tests to reach 80%+ coverage."
source_path: commands/test-coverage.md
---
# テストカバレッジ

テストカバレッジを分析し、不足しているテストを生成します。

1. カバレッジ付きでテストを実行: npm test --coverage または pnpm test --coverage

2. カバレッジレポートを分析 (coverage/coverage-summary.json)

3. カバレッジが80%の閾値を下回るファイルを特定

4. カバレッジ不足の各ファイルに対して:
   - テストされていないコードパスを分析
   - 関数の単体テストを生成
   - APIの統合テストを生成
   - 重要なフローのE2Eテストを生成

5. 新しいテストが合格することを検証

6. カバレッジメトリクスの前後比較を表示

7. プロジェクト全体で80%以上のカバレッジを確保

重点項目:
- ハッピーパスシナリオ
- エラーハンドリング
- エッジケース（null、undefined、空）
- 境界条件

## 原文
- [英語版の原文](../../../commands/test-coverage.md)

## ナビゲーション
- [日本語ドキュメント一覧](../README.md)
- [コマンド一覧](../commands/README.md)
- [エージェント一覧](../agents/README.md)
- [コンテキスト一覧](../contexts/README.md)
- [Command → Agent / Skill Map](../../COMMAND-AGENT-MAP.md)
- [貢献ガイド](../../../CONTRIBUTING.md)
