---
source_path: rules/swift/hooks.md
paths: 
---
# Swift Hooks

> This file extends [common/hooks.md](../common/hooks.md) with Swift specific content.

## PostToolUse Hooks

Configure in `~/.claude/settings.json`:

- **SwiftFormat**: Auto-format `.swift` files after edit
- **SwiftLint**: Run lint checks after editing `.swift` files
- **swift build**: Type-check modified packages after edit

## Warning

Flag `print()` statements — use `os.Logger` or structured logging instead for production code.

## 原文
- [英語版の原文](../../../../rules/swift/hooks.md)

## ナビゲーション
- [日本語ドキュメント一覧](../../README.md)
- [rules/README.md](../README.md)
- [貢献ガイド](../../../../CONTRIBUTING.md)
