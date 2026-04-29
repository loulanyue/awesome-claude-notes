---
source_path: rules/python/security.md
paths: 
---
# Python Security

> This file extends [common/security.md](../common/security.md) with Python specific content.

## Secret Management

```python
import os
from dotenv import load_dotenv

load_dotenv()

api_key = os.environ["OPENAI_API_KEY"]  # Raises KeyError if missing
```

## Security Scanning

- Use **bandit** for static security analysis:
  ```bash
  bandit -r src/
  ```

## Reference

See skill: `django-security` for Django-specific security guidelines (if applicable).

## 原文
- [英語版の原文](../../../../rules/python/security.md)

## ナビゲーション
- [日本語ドキュメント一覧](../../README.md)
- [rules/README.md](../README.md)
- [貢献ガイド](../../../../CONTRIBUTING.md)
