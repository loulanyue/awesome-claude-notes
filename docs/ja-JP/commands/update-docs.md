---
description: "Sync documentation with the codebase, generating from source-of-truth files."
source_path: commands/update-docs.md
---
# Update Documentation

信頼できる情報源からドキュメントを同期:

1. package.jsonのscriptsセクションを読み取る
   - スクリプト参照テーブルを生成
   - コメントからの説明を含める

2. .env.exampleを読み取る
   - すべての環境変数を抽出
   - 目的とフォーマットを文書化

3. docs/CONTRIB.mdを生成:
   - 開発ワークフロー
   - 利用可能なスクリプト
   - 環境セットアップ
   - テスト手順

4. docs/RUNBOOK.mdを生成:
   - デプロイ手順
   - 監視とアラート
   - 一般的な問題と修正
   - ロールバック手順

5. 古いドキュメントを特定:
   - 90日以上変更されていないドキュメントを検出
   - 手動レビュー用にリスト化

6. 差分サマリーを表示

信頼できる唯一の情報源: package.jsonと.env.example

## 原文
- [英語版の原文](../../../commands/update-docs.md)

## ナビゲーション
- [日本語ドキュメント一覧](../README.md)
- [コマンド一覧](../commands/README.md)
- [エージェント一覧](../agents/README.md)
- [コンテキスト一覧](../contexts/README.md)
- [Command → Agent / Skill Map](../../COMMAND-AGENT-MAP.md)
- [貢献ガイド](../../../CONTRIBUTING.md)
