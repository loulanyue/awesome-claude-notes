---
source_path: rules/python/security.md
paths: 
---

# Python 安全

> 本文档基于 [通用安全指南](../common/security.md) 扩展，补充了 Python 相关的内容。

## 密钥管理

```python
import os
from dotenv import load_dotenv

load_dotenv()

api_key = os.environ["OPENAI_API_KEY"]  # Raises KeyError if missing
```

## 安全扫描

* 使用 **bandit** 进行静态安全分析：
  ```bash
  bandit -r src/
  ```

## 参考

查看技能：`django-security` 以获取 Django 特定的安全指南（如适用）。

## 原文
- [英文原文](../../../../rules/python/security.md)

## 导航
- [中文文档导航](../../README.md)
- [rules/README.md](../README.md)
- [贡献指南](../../../../CONTRIBUTING.md)
