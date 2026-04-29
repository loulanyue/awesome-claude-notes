---
source_path: rules/rust/hooks.md
paths: 
---
# Rust Hooks

> This file extends [common/hooks.md](../common/hooks.md) with Rust-specific content.

## PostToolUse Hooks

Configure in `~/.claude/settings.json`:

- **cargo fmt**: Auto-format `.rs` files after edit
- **cargo clippy**: Run lint checks after editing Rust files
- **cargo check**: Verify compilation after changes (faster than `cargo build`)

## 原文
- [英語版の原文](../../../../rules/rust/hooks.md)

## ナビゲーション
- [日本語ドキュメント一覧](../../README.md)
- [rules/README.md](../README.md)
- [貢献ガイド](../../../../CONTRIBUTING.md)
