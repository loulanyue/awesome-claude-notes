---
description: "Analyze the current session and extract any patterns worth saving as skills."
source_path: commands/learn.md
---
# /learn - Yeniden Kullanılabilir Desenleri Çıkar

Mevcut oturumu analiz et ve skill olarak kaydetmeye değer desenleri çıkar.

## Tetikleyici

Önemsiz olmayan bir sorunu çözdüğünüzde, oturum sırasında herhangi bir noktada `/learn` komutunu çalıştırın.

## Ne Çıkarılmalı

Şunları arayın:

1. **Hata Çözüm Desenleri**
   - Hangi hata oluştu?
   - Kök neden neydi?
   - Onu ne düzeltti?
   - Bu benzer hatalar için yeniden kullanılabilir mi?

2. **Hata Ayıklama Teknikleri**
   - Bariz olmayan hata ayıklama adımları
   - İşe yarayan araç kombinasyonları
   - Tanılama desenleri

3. **Geçici Çözümler**
   - Kütüphane gariplikleri
   - API sınırlamaları
   - Versiyona özel düzeltmeler

4. **Projeye Özgü Desenler**
   - Keşfedilen kod tabanı kuralları
   - Verilen mimari kararlar
   - Entegrasyon desenleri

## Çıktı Formatı

`~/.claude/skills/learned/[desen-adi].md` konumunda bir skill dosyası oluştur:

```markdown
# [Açıklayıcı Desen Adı]

**Çıkarıldı:** [Tarih]
**Bağlam:** [Bunun ne zaman geçerli olduğunun kısa açıklaması]

## Sorun
[Bunun çözdüğü sorun - spesifik olun]

## Çözüm
[Desen/teknik/geçici çözüm]

## Örnek
[Uygulanabilirse kod örneği]

## Ne Zaman Kullanılır
[Tetikleyici koşullar - bu skill'i neyin etkinleştirmesi gerektiği]
```

## Süreç

1. Çıkarılabilir desenler için oturumu incele
2. En değerli/yeniden kullanılabilir içgörüyü tanımla
3. Skill dosyasını taslak olarak hazırla
4. Kaydetmeden önce kullanıcıdan onay iste
5. `~/.claude/skills/learned/` konumuna kaydet

## Notlar

- Önemsiz düzeltmeleri çıkarmayın (yazım hataları, basit sözdizimi hataları)
- Tek seferlik sorunları çıkarmayın (belirli API kesintileri, vb.)
- Gelecekteki oturumlarda zaman kazandıracak desenlere odaklanın
- Skill'leri odaklı tutun - skill başına bir desen

## Kaynak belge
- [İngilizce kanonik belge](../../../commands/learn.md)

## Gezinme
- [Türkçe dokümantasyon](../README.md)
- [Komut dizini](../commands/README.md)
- [Ajan dizini](../agents/README.md)
- [Bağlam dizini](../contexts/README.md)
- [Command → Agent / Skill Map](../../COMMAND-AGENT-MAP.md)
- [Katkı rehberi](../../../CONTRIBUTING.md)
