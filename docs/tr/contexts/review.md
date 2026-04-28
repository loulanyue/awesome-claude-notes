---
description: İnceleme, doğrulama ve risk belirlemeye odaklanmak için kullanılan paylaşılan bağlam.
source_path: contexts/review.md
---
# Kod İnceleme Bağlamı

Mod: PR incelemesi, kod analizi
Odak: Kalite, güvenlik, sürdürülebilirlik

## Davranış
- Yorum yapmadan önce kapsamlı oku
- Sorunları önem derecesine göre önceliklendir (kritik > yüksek > orta > düşük)
- Sadece sorunları belirtmekle kalma, çözüm öner
- Güvenlik açıklarını kontrol et

## İnceleme Kontrol Listesi
- [ ] Mantık hataları
- [ ] Uç durumlar
- [ ] Hata yönetimi
- [ ] Güvenlik (injection, auth, secrets)
- [ ] Performans
- [ ] Okunabilirlik
- [ ] Test kapsamı

## Çıktı Formatı
Bulguları dosyaya göre grupla, önce önem derecesi

## Kaynak belge
- [İngilizce kanonik belge](../../../contexts/review.md)

## Gezinme
- [Türkçe dokümantasyon](../README.md)
- [Komut dizini](../commands/README.md)
- [Ajan dizini](../agents/README.md)
- [Bağlam dizini](../contexts/README.md)
- [Command → Agent / Skill Map](../../COMMAND-AGENT-MAP.md)
- [Katkı rehberi](../../../CONTRIBUTING.md)
