/**
 * UMKM Landing Page Data Configuration - Saung Tenda Ayam & Ikan Nila
 *
 * Contoh implementasi untuk bisnis Saung Tenda Ayam & Ikan Nila (Bakar - Cobek)
 * Ganti nama file ini menjadi data.js untuk menggunakan data ini
 */

const umkmData = {
  // Business Information
  business: {
    name: 'AdfuShop CCTV dan Laptop',
    tagline: 'Solusi CCTV Murah & Setting Pemasangan di Bekasi',
    openingHours: 'Senin – Sabtu: 10:00 – 16:00',
    priceRange: 'Harga murah untuk paket CCTV terjangkau',
    advantages: [
      'Perangkat CCTV berkualitas dari berbagai merk terkenal',
      'Layanan instalasi & setting CCTV profesional',
      'Support teknis & konfigurasi hingga monitoring lewat HP',
      'Penjualan laptop bekas berkualitas & perangkat komputer lain',
      'Solusi keamanan untuk rumah, toko, kantor, dan UMKM',
    ],
    footerDescription: 'AdfuShop CCTV & Laptop melayani penjualan, pemasangan, dan service CCTV di Bekasi serta menyediakan laptop bekas berkualitas. Solusi keamanan dan perangkat kerja dengan dukungan teknis berpengalaman.',
  },

  // Contact Information
  contact: {
    whatsapp: '6287776663940', // GANTI dengan nomor WhatsApp aktif
    whatsappMessage: 'Halo, saya mau info CCTV & jasa pemasangan.',
    whatsappCTAMessage: 'Halo, saya mau konsultasi soal paket CCTV murah & pemasangan.',
    mapsUrl: 'https://maps.app.goo.gl/iwubXzQJoVhpywVs9',
    mapsEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.2010271133827!2d107.11487389999999!3d-6.3680252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e699ba34481cf33%3A0x1b8aa247412ba24b!2sAdfushop%20CCTV%20dan%20Laptop!5e0!3m2!1sen!2sid!4v1770437160804!5m2!1sen!2sid',
    address: 'Sukadami, Cikarang Selatan, Bekasi Regency, West Java 17532',
  },

  // Gallery Images (1-3 images supported)
  gallery: [
    {
      url: './assets/adfushopcctv-0.jpeg',
      alt: 'Contoh hasil pemasangan CCTV rumah dan toko oleh ADFU Shop',
    },
    {
      url: './assets/adfushopcctv-1.jpeg',
      alt: 'Toko CCTV Murah ADFU Shop di Cibarusah Bekasi',
    },
    {
      url: './assets/adfushopcctv-2.jpeg',
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
    title: 'CCTV dan Laptop ADFU Shop • Pemasangan & Service CCTV Bekasi',
    description: 'Spesialis pemasangan dan service CCTV rumah, toko, dan kantor di Bekasi. CCTV jernih, rapi, dan bisa dipantau dari HP. Konsultasi via WhatsApp.',
    image: './assets/adfushopcctv-hero.jpeg', // foto toko / hasil pemasangan CCTV (1200x630)
    url: 'https://adfushopcctv.pages.dev', // ganti sesuai domain
    type: 'website',
    locale: 'id_ID',
  },

  assets: {
    heroBackground: './assets/adfushopcctv-hero.jpeg', // Background hero - foto saung/makanan (1920x1080px atau 16:9)
    // Jika file tidak ada, akan menggunakan gradient default
  },

  // Additional Business Details
  services: {
    paymentMethods: ['Cash', 'Transfer', 'QRIS'],
  },

  // Location Details
  // location: {
  //   landmark: 'Bumi Cahaya Residence, Blok A13 No. 9C Sindangmulya, Kecamatan Cibarusah Kabupaten Bekasi, Jawa Barat 17530',
  // },
};

// Make data available globally
if (typeof window !== 'undefined') {
  window.umkmData = umkmData;
}

// For Node.js environments (testing)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = umkmData;
}
