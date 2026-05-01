---
source_path: rules/python/coding-style.md
paths: 
---
# Python Coding Style

> This file extends [common/coding-style.md](../common/coding-style.md) with Python specific content.

## Standards

- Follow **PEP 8** conventions
- Use **type annotations** on all function signatures

## Immutability

Prefer immutable data structures:

```python
from dataclasses import dataclass

@dataclass(frozen=True)
class User:
    name: str
    email: str

from typing import NamedTuple

class Point(NamedTuple):
    x: float
    y: float
```

## Formatting

- **black** for code formatting
- **isort** for import sorting
- **ruff** for linting

## Reference

See skill: `python-patterns` for comprehensive Python idioms and patterns.

## 原文
- [英文原文](../../../../rules/python/coding-style.md)

## 導航
- [繁體中文文件導航](../../README.md)
- [rules/README.md](../README.md)
- [貢獻指南](../../../../CONTRIBUTING.md)
