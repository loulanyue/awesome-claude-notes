---
source_path: rules/python/security.md
paths: 
---
# Python Güvenlik

> Bu dosya [common/security.md](../common/security.md) dosyasını Python'a özgü içerikle genişletir.

## Secret Yönetimi

```python
import os
from dotenv import load_dotenv

load_dotenv()

api_key = os.environ["OPENAI_API_KEY"]  # Eksikse KeyError hatası verir
```

## Güvenlik Taraması

- Statik güvenlik analizi için **bandit** kullan:
  ```bash
  bandit -r src/
  ```

## Referans

Django'ya özgü güvenlik kuralları için (eğer uygulanabilirse) skill: `django-security` dosyasına bakın.

## Kaynak belge
- [İngilizce kanonik belge](../../../../rules/python/security.md)

## Gezinme
- [Türkçe dokümantasyon](../../README.md)
- [rules/README.md](../README.md)
- [Katkı rehberi](../../../../CONTRIBUTING.md)
