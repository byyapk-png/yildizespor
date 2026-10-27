# Yıldız E-Spor: Ortak Proje Kuralları

Bu dosya Claude Code ve Codex için **tek ortak referanstır**. Bir talimat çelişkiliyse kullanıcı isteği ve güvenlik ilkeleri önceliklidir; belirsizliği kullanıcıya açıkça bildir.

## Mevcut proje
- Bu depo **Yıldız E-Spor tanıtım web sitesidir**. Kasa, stok, veresiye veya CCBoot'un yönetim sistemi değildir.
- Teknolojiler: kökte tek sayfa **index.html** (HTML, dahili CSS/JavaScript), **manifest.json**, **sw.js**.
- Yayın hedefi GitHub Pages ve alt yol **/yildizespor/**. Proje köküne göre mutlak adresleri değiştirmeden önce yolu doğrula.
- Yeni framework, paket yöneticisi, sunucu, veritabanı veya ücretli API ancak açık ihtiyaç ve kullanıcı onayıyla eklensin.
- Var olan PWA manifesti ve service worker önbellek davranışı dikkate alınsın.

## Uygulama kuralları
1. Her görevde önce ilgili mevcut kodu oku; ihtiyacın olmayan dosyaları değiştirme.
2. Kullanıcının onayladığı marka, fiyat ve donanım bilgisini koru. Gerçekte doğrulanmamış sayısal reklam iddiaları ekleme.
3. Mobil görünüm, menü, tema geçişi, hesaplayıcı, WhatsApp rezervasyonu ve iletişim bağlantıları bozulmamalı.
4. Kişisel müşteri verisi, şifre, API anahtarı, erişim tokeni, gerçek kasa/veresiye kayıtları ve sunucu IP/parolalarını **bu herkese açık depoya ekleme**.
5. Özellik geliştirmede önce kısa plan, sonra küçük kapsamlı değişiklik yap. Gereksiz tüm sayfa yeniden yazımlarından kaçın.
6. Hata düzeltirken nedenini, etkilenen yeri ve varsa regresyon riskini belirt. Var olan davranışı bilinçli değiştirdiysen açıkla.
7. Sürüm numarası veya önbellek anahtarı yalnızca gerçekten sürüm/asset güncellemesi gerektiriyorsa değişsin.
8. Varsayımsal test sonucunu gerçekmiş gibi söyleme. Çalıştırabildiğin testleri ve çalıştıramadıklarını ayrı raporla.

## Dal ve onay kuralları
- **main**: yayın dalı. Doğrudan commit/push yapma.
- Claude Code: **claude/<gorev-kisa-adi>**.
- Codex: **codex/<gorev-kisa-adi>**.
- Kurulum ve idari belgeler: **setup/<gorev-kisa-adi>**.
- Her değişiklik için pull request (PR) aç. PR onaylanmadan merge etme; silme, force-push, yayınlama ya da gizlilik ayarı değiştirme.
- Claude ve Codex **aynı dalda eş zamanlı yazmasın**. Önce biri yazsın, diğeri PR diff'ini incelesin.
- Çatışma varsa otomatik karar verme; hangi davranışın korunacağını kullanıcıya sor.
- Repo herkese açık olduğundan ticari açıdan özel yeni uygulamalar için önce özel (private) depo öner.

## Değişiklik kabul kontrol listesi
- Otomatik PR kontrolleri yeşil mi? (Yalnızca temel sözdizimi/yapı kontrolüdür.)
- 360px civarı dar ekran ve masaüstü görünümü elle denetlendi mi?
- Hesaplayıcı, tema, hamburger menü, sekmeler, rezervasyon, WhatsApp bağlantıları elle denetlendi mi?
- JSON, JavaScript ve PWA dosya yolları korundu mu?
- Değişiklik özeti, test kanıtı ve olası riskler PR içinde yazıldı mı?

İş akışı ve örnek komutlar: [AI-WORKFLOW.md](AI-WORKFLOW.md).