# Tuel Enerji - Modern Kurumsal Web Sitesi

Profesyonel beyaz tema ile tasarlanmış, çok sayfalı modern kurumsal web sitesi. Vanilla HTML, CSS ve JavaScript ile geliştirilmiştir.

## 🚀 Tasarım Özellikleri

### Modern Kurumsal Tasarım
- **Beyaz Tema**: Temiz beyaz arka plan üzerine mavi, yeşil ve turuncu aksentler
- **Subtle Background**: Hafif parçacık animasyonları ile dinamik atmosfer
- **Clean Effects**: Profesyonel gölge efektleri ve gradient geçişler
- **Responsive Layout**: Tüm cihazlarda mükemmel görünüm

### Teknik Özellikler
- **Vanilla JavaScript**: Framework kullanılmadan geliştirildi
- **SEO Optimized**: Meta etiketleri ve semantic HTML yapısı
- **Accessibility**: WCAG standartlarına uygun erişilebilirlik
- **Performance**: Optimize edilmiş kod ve lazy loading
- **Cross-browser**: Tüm modern tarayıcılarda uyumlu

### Çok Sayfalı Yapı
1. **Ana Sayfa (index.html)**: Hero section ve hızlı erişim kartları
2. **Hizmetler (hizmetler.html)**: 7 ana hizmet detayları ve özellikler
3. **Hakkımızda (hakkimizda.html)**: Firma misyonu, vizyonu, değerler ve sertifikalar
4. **İletişim (iletisim.html)**: İletişim formu, bilgiler ve harita
5. **Responsive Navigation**: Tüm sayfalar arası geçiş

## 📁 Dosya Yapısı

```
tuelenerji/
├── index.html              # Ana HTML dosyası
├── css/
│   └── style.css           # Tüm CSS stilleri
├── js/
│   └── script.js           # JavaScript fonksiyonları
├── images/                 # Görsel dosyaları
│   ├── 1.jpg              # Hero section görseli
│   ├── 2.jpg              # Hakkımızda görseli
│   ├── 3.jpg              # Ek görsel
│   ├── 4.jpg              # Ek görsel
│   └── 5.jpg              # Ek görsel
└── README.md              # Proje dokümantasyonu
```

## 🛠️ Kullanılan Teknolojiler

- **HTML5**: Semantic markup ve modern HTML yapısı
- **CSS3**: Modern animations, Custom properties, Professional gradients
- **JavaScript (ES6+)**: Multi-page navigation, Form validation, Smooth animations
- **Google Fonts**: Inter (primary) ve Poppins (secondary) font aileleri
- **Font Awesome**: İkonlar için CDN

## 🎨 Renk Paleti

- **Primary Background**: #ffffff (Beyaz)
- **Secondary Background**: #f8f9fa (Açık gri)
- **Accent Background**: #f1f3f4 (Vurgu gri)
- **Primary Blue**: #2563eb (Ana mavi)
- **Primary Green**: #059669 (Ana yeşil)
- **Primary Orange**: #ea580c (Ana turuncu)
- **Text Primary**: #1f2937 (Koyu gri metin)
- **Text Secondary**: #6b7280 (Orta gri metin)

## 📱 Responsive Breakpoints

- **Desktop**: 1024px ve üzeri
- **Tablet**: 768px - 1023px
- **Mobile**: 480px - 767px
- **Small Mobile**: 320px - 479px

## ⚡ Performans Optimizasyonları

- **Lazy Loading**: Görseller için native lazy loading
- **CSS Optimizations**: Efficient selectors ve minimal reflows
- **JavaScript Optimizations**: Event delegation ve throttling
- **Image Optimization**: Optimize edilmiş görsel boyutları
- **Font Loading**: Google Fonts display=swap

## 🔧 Form Validasyonu

İletişim formu aşağıdaki validasyonları içerir:

- **Ad Soyad**: Minimum 2 karakter, sadece harf ve boşluk
- **E-posta**: Geçerli e-posta formatı kontrolü
- **Telefon**: Opsiyonel, geçerli telefon formatı
- **Mesaj**: Minimum 10 karakter

## 🌐 Tarayıcı Desteği

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+
- Opera 47+

## 📋 Kurulum ve Kullanım

1. **Dosyaları İndirin**: Tüm proje dosyalarını bilgisayarınıza indirin
2. **Web Sunucusu**: Dosyaları bir web sunucusuna yükleyin veya local server kullanın
3. **Tarayıcıda Açın**: index.html dosyasını tarayıcınızda açın

### Local Development

```bash
# Python ile basit HTTP server
python -m http.server 8000

# Node.js ile live-server (npm install -g live-server)
live-server

# PHP ile built-in server
php -S localhost:8000
```

## 🎯 Özelleştirme

### Renkleri Değiştirme
CSS dosyasındaki CSS custom properties (variables) kullanarak renkleri kolayca değiştirebilirsiniz:

```css
:root {
    --primary-color: #2c5aa0;
    --secondary-color: #1e3f73;
    --text-color: #333;
}
```

### İçerik Güncelleme
- **Firma Bilgileri**: index.html dosyasındaki ilgili bölümleri düzenleyin
- **Hizmetler**: Services section'daki service-card'ları güncelleyin
- **İletişim Bilgileri**: Footer ve contact section'ı düzenleyin

### Görseller
- images/ klasöründeki görselleri değiştirin
- CSS'te background-image özelliklerini güncelleyin
- Alt text'leri uygun şekilde düzenleyin

## 🔒 Güvenlik

- **Form Validation**: Client-side ve server-side validation önerilir
- **HTTPS**: Production'da HTTPS kullanın
- **Content Security Policy**: CSP header'ları ekleyin
- **Input Sanitization**: Form verilerini sanitize edin

## 📈 SEO Optimizasyonları

- **Meta Tags**: Comprehensive meta tag setup
- **Structured Data**: Schema.org markup eklenebilir
- **Sitemap**: XML sitemap oluşturun
- **Analytics**: Google Analytics entegrasyonu
- **Page Speed**: Core Web Vitals optimizasyonu

## 🤝 Katkıda Bulunma

1. Fork yapın
2. Feature branch oluşturun (`git checkout -b feature/AmazingFeature`)
3. Commit yapın (`git commit -m 'Add some AmazingFeature'`)
4. Branch'i push edin (`git push origin feature/AmazingFeature`)
5. Pull Request oluşturun

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır. Detaylar için LICENSE dosyasına bakın.

## 📞 İletişim

**Tuel Enerji**
- Website: https://www.tuelenerji.com
- Email: info@tuelenerji.com
- Phone: +90 535 922 28 94

---

**Not**: Bu web sitesi demo amaçlı oluşturulmuştur. Production kullanımı için ek güvenlik önlemleri ve server-side validasyon eklenmesi önerilir.
