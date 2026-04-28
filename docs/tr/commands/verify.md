---
description: "Run comprehensive verification on current codebase state."
source_path: commands/verify.md
---
# Verification Komutu

Mevcut kod tabanı durumu üzerinde kapsamlı doğrulama çalıştır.

## Talimatlar

Doğrulamayı tam olarak bu sırayla yürüt:

1. **Build Kontrolü**
   - Bu proje için build komutunu çalıştır
   - Başarısız olursa, hataları raporla ve DUR

2. **Tip Kontrolü**
   - TypeScript/tip denetleyicisini çalıştır
   - Tüm hataları dosya:satır ile raporla

3. **Lint Kontrolü**
   - Linter'ı çalıştır
   - Uyarıları ve hataları raporla

4. **Test Paketi**
   - Tüm testleri çalıştır
   - Geçti/başarısız sayısını raporla
   - Kapsama yüzdesini raporla

5. **Console.log Denetimi**
   - Kaynak dosyalarda console.log ara
   - Konumları raporla

6. **Git Durumu**
   - Commit edilmemiş değişiklikleri göster
   - Son commit'ten beri değiştirilen dosyaları göster

## Çıktı

Özet bir doğrulama raporu üret:

```
DOĞRULAMA: [GEÇTİ/BAŞARISIZ]

Build:    [TAMAM/BAŞARISIZ]
Tipler:   [TAMAM/X hata]
Lint:     [TAMAM/X sorun]
Testler:  [X/Y geçti, Z% kapsama]
Gizli:    [TAMAM/X bulundu]
Loglar:   [TAMAM/X console.log]

PR için Hazır: [EVET/HAYIR]
```

Herhangi bir kritik sorun varsa, düzeltme önerileriyle listele.

## Argümanlar

$ARGUMENTS şunlar olabilir:
- `quick` - Sadece build + tipler
- `full` - Tüm kontroller (varsayılan)
- `pre-commit` - Commit'ler için ilgili kontroller
- `pre-pr` - Güvenlik taraması artı tam kontroller

## Kaynak belge
- [İngilizce kanonik belge](../../../commands/verify.md)

## Gezinme
- [Türkçe dokümantasyon](../README.md)
- [Komut dizini](../commands/README.md)
- [Ajan dizini](../agents/README.md)
- [Bağlam dizini](../contexts/README.md)
- [Command → Agent / Skill Map](../../COMMAND-AGENT-MAP.md)
- [Katkı rehberi](../../../CONTRIBUTING.md)
