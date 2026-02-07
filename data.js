/**
 * UMKM Landing Page Data Configuration - Saung Tenda Ayam & Ikan Nila
 *
 * Contoh implementasi untuk bisnis Saung Tenda Ayam & Ikan Nila (Bakar - Cobek)
 * Ganti nama file ini menjadi data.js untuk menggunakan data ini
 */

const umkmData = {
  // Business Information
  business: {
    name: 'CCTV Murah AdfuShop Bekasi',
    tagline: 'Solusi CCTV Murah & Setting Pemasangan di Bekasi',
    openingHours: 'Senin – Sabtu: 10:00 – 16:00',
    priceRange: 'Harga mulai dari paket CCTV terjangkau',
    advantages: [
      'Kamera CCTV & perangkat keamanan berkualitas',
      'Layanan instalasi & setting perekaman',
      'Support teknis & bantuan konfigurasi',
      'Solusi pengawasan untuk rumah, toko, & usaha',
    ],
    footerDescription: 'CCTVMurahAdfuShop adalah penyedia CCTV dan layanan pemasangan di Bekasi, siap membantu pengadaan kamera pengawas sampai setup penuh.',
  },

  // Contact Information
  contact: {
    whatsapp: '6287776663940', // GANTI dengan nomor WhatsApp aktif
    whatsappMessage: 'Halo, saya mau info CCTV & jasa pemasangan.',
    whatsappCTAMessage: 'Halo, saya mau konsultasi soal paket CCTV murah & pemasangan.',
    mapsUrl: 'https://maps.app.goo.gl/zUq2epgvVH6vijtGA',
    mapsEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8032.169135696881!2d107.08252249615602!3d-6.4116190622875235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e699793f5a6a4fb%3A0xbcbceef13f6a7cdf!2sAdfushop%20Office!5e0!3m2!1sen!2sid!4v1770434346757!5m2!1sen!2sid',
    address: 'Bumi Cahaya Residence, Blok A13 No. 9C Sindangmulya, Kecamatan Cibarusah Kabupaten Bekasi, Jawa Barat 17530',
  },

  // Gallery Images (1-3 images supported)
  gallery: [
    {
      url: './assets/cctvmurahadfushop-0.jpeg',
      alt: 'Toko CCTV Murah ADFU Shop di Cibarusah Bekasi',
    },
    {
      url: './assets/cctvmurahadfushop-1.jpeg',
      alt: 'Contoh hasil pemasangan CCTV rumah dan toko oleh ADFU Shop',
    },
    {
      url: './assets/cctvmurahadfushop-2.jpeg',
      alt: 'Perangkat CCTV dan aksesoris keamanan di ADFU Shop',
    },
  ],

  // Menu Items (Menu unggulan)
  menu: [
    {
      name: 'Paket CCTV Rumah',
      description: 'Paket pemasangan CCTV untuk rumah tinggal, cocok untuk keamanan harian dengan hasil gambar jernih dan monitoring mudah.',
    },
    {
      name: 'Paket CCTV Toko / UMKM',
      description: 'Solusi CCTV untuk toko, warung, dan usaha kecil agar aktivitas lebih terpantau dan aman.',
    },
    {
      name: 'Paket CCTV Kantor',
      description: 'Paket CCTV untuk kebutuhan kantor, gudang, atau ruang kerja dengan sistem yang rapi dan profesional.',
    },
    {
      name: 'Pemasangan & Setting CCTV',
      description: 'Jasa pemasangan, penarikan kabel, setting DVR/NVR, serta konfigurasi CCTV agar siap digunakan.',
    },
    {
      name: 'Service & Upgrade CCTV',
      description: 'Perbaikan CCTV bermasalah, penggantian kamera, upgrade sistem, dan pengecekan instalasi.',
    },
    {
      name: 'Laptop Bekas Berkualitas',
      description: 'Tersedia laptop bekas layak pakai untuk kerja, sekolah, dan kebutuhan harian (stok terbatas).',
    },
  ],

  // Visual Assets
  meta: {
    title: 'CCTV Murah ADFU Shop • Pemasangan & Service CCTV Bekasi',
    description: 'Spesialis pemasangan dan service CCTV rumah, toko, dan kantor di Bekasi. CCTV jernih, rapi, dan bisa dipantau dari HP. Konsultasi via WhatsApp.',
    image: './assets/cctvmurahadfushop-hero.jpeg', // foto toko / hasil pemasangan CCTV (1200x630)
    url: 'https://cctvmurahadfushop.pages.dev', // ganti sesuai domain
    type: 'website',
    locale: 'id_ID',
  },

  assets: {
    heroBackground: './assets/cctvmurahadfushop-hero.jpeg', // Background hero - foto saung/makanan (1920x1080px atau 16:9)
    // Jika file tidak ada, akan menggunakan gradient default
  },

  // Additional Business Details
  services: {
    paymentMethods: ['Cash', 'Transfer', 'QRIS'],
  },

  // Location Details
  location: {
    landmark: 'Bumi Cahaya Residence, Blok A13 No. 9C Sindangmulya, Kecamatan Cibarusah Kabupaten Bekasi, Jawa Barat 17530',
  },
};

// Make data available globally
if (typeof window !== 'undefined') {
  window.umkmData = umkmData;
}

// For Node.js environments (testing)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = umkmData;
}
