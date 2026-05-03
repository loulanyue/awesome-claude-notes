---
description: "Run the ECC quality pipeline on demand for a file or project scope."
source_path: commands/quality-gate.md
---

# Quality Gate Command

Run the ECC quality pipeline on demand for a file or project scope.

## Usage

`/quality-gate [path|.] [--fix] [--strict]`

- default target: current directory (`.`)
- `--fix`: allow auto-format/fix where configured
- `--strict`: fail on warnings where supported

## Pipeline

1. Detect language/tooling for target.
2. Run formatter checks.
3. Run lint/type checks when available.
4. Produce a concise remediation list.

## Notes

This command mirrors hook behavior but is operator-invoked.

## Arguments

$ARGUMENTS:
- `[path|.]` optional target path
- `--fix` optional
- `--strict` optional

## Navigation

- [Command → Agent / Skill Map](../docs/COMMAND-AGENT-MAP.md)
- [Agents index](../AGENTS.md)
- [Contexts directory](../contexts)
- [Contributing guide](../CONTRIBUTING.md)

## Kaynak belge
- [İngilizce kanonik belge](../../../commands/quality-gate.md)

## Gezinme
- [Türkçe dokümantasyon](../README.md)
- [Komut dizini](../commands/README.md)
- [Ajan dizini](../agents/README.md)
- [Bağlam dizini](../contexts/README.md)
- [Command → Agent / Skill Map](../../COMMAND-AGENT-MAP.md)
- [Katkı rehberi](../../../CONTRIBUTING.md)
