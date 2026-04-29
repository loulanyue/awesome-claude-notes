---
name: ai-first-engineering
description: Engineering operating model for teams where AI agents generate a large share of implementation output.
source_path: skills/ai-first-engineering/SKILL.md
origin: ECC
---

# AI-First Engineering

Use this skill when designing process, reviews, and architecture for teams shipping with AI-assisted code generation.

## Process Shifts

1. Planning quality matters more than typing speed.
2. Eval coverage matters more than anecdotal confidence.
3. Review focus shifts from syntax to system behavior.

## Architecture Requirements

Prefer architectures that are agent-friendly:
- explicit boundaries
- stable contracts
- typed interfaces
- deterministic tests

Avoid implicit behavior spread across hidden conventions.

## Code Review in AI-First Teams

Review for:
- behavior regressions
- security assumptions
- data integrity
- failure handling
- rollout safety

Minimize time spent on style issues already covered by automation.

## Hiring and Evaluation Signals

Strong AI-first engineers:
- decompose ambiguous work cleanly
- define measurable acceptance criteria
- produce high-signal prompts and evals
- enforce risk controls under delivery pressure

## Testing Standard

Raise testing bar for generated code:
- required regression coverage for touched domains
- explicit edge-case assertions
- integration checks for interface boundaries

## 원문
- [영문 원문](../../../../skills/ai-first-engineering/SKILL.md)

## 탐색
- [한국어 문서 안내](../../README.md)
- [기여 가이드](../../../../CONTRIBUTING.md)
