---
description: 優先するパッケージマネージャーを設定（npm/pnpm/yarn/bun）
source_path: commands/setup-pm.md
disable-model-invocation: true
---

# パッケージマネージャーの設定

このプロジェクトまたはグローバルで優先するパッケージマネージャーを設定します。

## 使用方法

```bash
# 現在のパッケージマネージャーを検出
node scripts/setup-package-manager.js --detect

# グローバル設定を指定
node scripts/setup-package-manager.js --global pnpm

# プロジェクト設定を指定
node scripts/setup-package-manager.js --project bun

# 利用可能なパッケージマネージャーをリスト表示
node scripts/setup-package-manager.js --list
```

## 検出の優先順位

使用するパッケージマネージャーを決定する際、以下の順序でチェックされます:

1. **環境変数**: `CLAUDE_PACKAGE_MANAGER`
2. **プロジェクト設定**: `.claude/package-manager.json`
3. **package.json**: `packageManager` フィールド
4. **ロックファイル**: package-lock.json、yarn.lock、pnpm-lock.yaml、bun.lockbの存在
5. **グローバル設定**: `~/.claude/package-manager.json`
6. **フォールバック**: 最初に利用可能なパッケージマネージャー（pnpm > bun > yarn > npm）

## 設定ファイル

### グローバル設定
```json
// ~/.claude/package-manager.json
{
  "packageManager": "pnpm"
}
```

### プロジェクト設定
```json
// .claude/package-manager.json
{
  "packageManager": "bun"
}
```

### package.json
```json
{
  "packageManager": "pnpm@8.6.0"
}
```

## 環境変数

`CLAUDE_PACKAGE_MANAGER` を設定すると、他のすべての検出方法を上書きします:

```bash
# Windows (PowerShell)
$env:CLAUDE_PACKAGE_MANAGER = "pnpm"

# macOS/Linux
export CLAUDE_PACKAGE_MANAGER=pnpm
```

## 検出の実行

現在のパッケージマネージャー検出結果を確認するには、次を実行します:

```bash
node scripts/setup-package-manager.js --detect
```

## 原文
- [英語版の原文](../../../commands/setup-pm.md)

## ナビゲーション
- [日本語ドキュメント一覧](../README.md)
- [コマンド一覧](../commands/README.md)
- [エージェント一覧](../agents/README.md)
- [コンテキスト一覧](../contexts/README.md)
- [Command → Agent / Skill Map](../../COMMAND-AGENT-MAP.md)
- [貢献ガイド](../../../CONTRIBUTING.md)
