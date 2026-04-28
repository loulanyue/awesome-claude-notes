---
source_path: rules/typescript/security.md
paths: 
---
# TypeScript/JavaScript Güvenlik

> Bu dosya [common/security.md](../common/security.md) dosyasını TypeScript/JavaScript'e özgü içerikle genişletir.

## Secret Yönetimi

```typescript
// ASLA: Hardcoded secret'lar
const apiKey = "sk-proj-xxxxx"

// DAIMA: Environment variable'lar
const apiKey = process.env.OPENAI_API_KEY

if (!apiKey) {
  throw new Error('OPENAI_API_KEY not configured')
}
```

## Agent Desteği

- Kapsamlı güvenlik denetimleri için **security-reviewer** skill kullan

## Kaynak belge
- [İngilizce kanonik belge](../../../../rules/typescript/security.md)

## Gezinme
- [Türkçe dokümantasyon](../../README.md)
- [rules/README.md](../README.md)
- [Katkı rehberi](../../../../CONTRIBUTING.md)
