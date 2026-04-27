---
description: "Safely identify and remove dead code with test verification at every step."
source_path: commands/refactor-clean.md
---
# Refactor Clean

テスト検証でデッドコードを安全に特定して削除します:

1. デッドコード分析ツールを実行:
   - knip: 未使用のエクスポートとファイルを検出
   - depcheck: 未使用の依存関係を検出
   - ts-prune: 未使用のTypeScriptエクスポートを検出

2. .reports/dead-code-analysis.mdに包括的なレポートを生成

3. 発見を重要度別に分類:
   - SAFE: テストファイル、未使用のユーティリティ
   - CAUTION: APIルート、コンポーネント
   - DANGER: 設定ファイル、メインエントリーポイント

4. 安全な削除のみを提案

5. 各削除の前に:
   - 完全なテストスイートを実行
   - テストが合格することを確認
   - 変更を適用
   - テストを再実行
   - テストが失敗した場合はロールバック

6. クリーンアップされたアイテムのサマリーを表示

まずテストを実行せずにコードを削除しないでください!

## 原文
- [英語版の原文](../../../commands/refactor-clean.md)

## ナビゲーション
- [日本語ドキュメント一覧](../README.md)
- [コマンド一覧](../commands/README.md)
- [エージェント一覧](../agents/README.md)
- [コンテキスト一覧](../contexts/README.md)
- [Command → Agent / Skill Map](../../COMMAND-AGENT-MAP.md)
- [貢献ガイド](../../../CONTRIBUTING.md)
