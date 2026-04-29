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

## 원문
- [영문 원문](../../../../rules/python/security.md)

## 탐색
- [한국어 문서 안내](../../README.md)
- [rules/README.md](../README.md)
- [기여 가이드](../../../../CONTRIBUTING.md)
