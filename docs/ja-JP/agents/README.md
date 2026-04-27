# エージェント

エージェントは Claude Code が委任に使う専門サブエージェントです。複雑な作業を役割ごとに分割し、計画、レビュー、ビルド修正、ドキュメント整備などを担当します。

## 主なエージェント

- `planner.md` - 複雑な変更の実装計画を作成
- `tdd-guide.md` - テスト駆動開発を主導
- `code-reviewer.md` - 品質と保守性をレビュー
- `security-reviewer.md` - セキュリティ上の懸念を抽出
- `doc-updater.md` - ドキュメントや codemap の更新を支援

## 使い分けの目安

- 実装前の整理: `planner.md`
- 実装中の品質保証: `tdd-guide.md`, `build-error-resolver.md`
- 実装後のレビュー: `code-reviewer.md`, `security-reviewer.md`
- ドキュメント整備: `doc-updater.md`

## ナビゲーション

- [日本語ドキュメント一覧](../README.md)
- [コマンド一覧](../commands/README.md)
- [コンテキスト一覧](../contexts/README.md)
- [Command → Agent / Skill Map](../../COMMAND-AGENT-MAP.md)
- [貢献ガイド](../../../CONTRIBUTING.md)
