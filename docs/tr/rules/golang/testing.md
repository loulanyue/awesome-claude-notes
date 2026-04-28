---
source_path: rules/golang/testing.md
paths: 
---
# Go Testing

> Bu dosya [common/testing.md](../common/testing.md) dosyasını Go'ya özgü içerikle genişletir.

## Framework

**Table-driven testler** ile standart `go test` kullan.

## Race Detection

Daima `-race` flag'i ile çalıştır:

```bash
go test -race ./...
```

## Coverage

```bash
go test -cover ./...
```

## Referans

Detaylı Go test pattern'leri ve helper'lar için skill: `golang-testing` dosyasına bakın.

## Kaynak belge
- [İngilizce kanonik belge](../../../../rules/golang/testing.md)

## Gezinme
- [Türkçe dokümantasyon](../../README.md)
- [rules/README.md](../README.md)
- [Katkı rehberi](../../../../CONTRIBUTING.md)
