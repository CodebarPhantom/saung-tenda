/**
 * UMKM Landing Page Data Configuration - Saung Tenda Ayam & Ikan Nila
 *
 * Contoh implementasi untuk bisnis Saung Tenda Ayam & Ikan Nila (Bakar - Cobek)
 * Ganti nama file ini menjadi data.js untuk menggunakan data ini
 */

const umkmData = {
  // Business Information
   business: {
    name: 'PT Gomu Gomu Indonesia',
    tagline: 'Terpercaya dan Handal',
    openingHours: 'Hubungi untuk jadwal operasional',
    priceRange: 'Konsultasi sesuai kebutuhan proyek',
    serviceType:'General Supplier, Man Power & Konstruksi Sipil',
    advantages: [
      'Pengadaan general supplier untuk berbagai kebutuhan proyek',
      'Penyediaan tenaga kerja (man power) profesional',
      'Jasa konstruksi sipil dan pekerjaan lapangan',
      'Pengalaman instalasi, servis, dan maintenance',
      'Fokus pada kualitas dan kepuasan pelanggan',
    ],
    footerDescription:
      'PT Gomu Gomu Indonesia adalah perusahaan yang bergerak di bidang pengadaan, penyediaan tenaga kerja, serta jasa konstruksi sipil. Berkomitmen memberikan solusi terbaik dengan layanan profesional dan dapat diandalkan.',
  },


  // Contact Information
  contact: {
    whatsapp: '62895346540472',
    whatsappMessage: 'Halo, saya mau konsultasi terkait layanan PT Gomu Gomu Indonesia.',
    whatsappCTAMessage: 'Halo, saya ingin info layanan pengadaan / konstruksi.',
    mapsUrl: 'https://maps.app.goo.gl/7n7S3RvqkVbHnbso9',
    mapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2335.3587070597937!2d107.28976159796149!3d-6.318338068505554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNsKwMTknMDcuMyJTIDEwN8KwMTcnMjguMCJF!5e0!3m2!1sen!2sid!4v1771898739920!5m2!1sen!2sid',
    address: 'Ruko Pasar Bersih Galuh Mas Blok E-7',
    email: 'ptggi.official@gmail.com',
  },

  // Gallery Images (1-3 images supported)
  gallery: [
    {
      url: './assets/gomu-1.jpeg',
      alt: 'Dokumentasi pelatihan',
    },
    {
      url: './assets/gomu-2.jpeg',
      alt: 'Tim man power di lapangan',
    },
    {
      url: './assets/gomu-3.jpeg',
      alt: 'General Supplier',
    },
  ],

  // Menu Items (Menu unggulan)
  menu: [
  {
    name: 'Pengadaan General Supplier',
    description:
      'Pengadaan berbagai kebutuhan material dan perlengkapan proyek secara efisien dengan standar kualitas tinggi.',
  },
  {
    name: 'Supply Man Power Profesional',
    description:
      'Penyediaan tenaga kerja terlatih untuk mendukung operasional proyek dengan fokus pada produktivitas dan keselamatan.',
  },
  {
    name: 'Jasa Konstruksi Sipil',
    description:
      'Pelaksanaan pekerjaan konstruksi untuk gedung, fasilitas industri, dan infrastruktur secara profesional dan tepat waktu.',
  },
  {
    name: 'Layanan Berkualitas & Kepuasan Klien',
    description:
      'Komitmen memberikan layanan terbaik dengan standar mutu tinggi dan fokus pada kepuasan pelanggan.',
  },
  {
    name: 'Integrasi Teknologi & Inovasi',
    description:
      'Penerapan solusi modern dan teknologi untuk meningkatkan efisiensi serta kualitas pelaksanaan proyek.',
  },
  {
    name: 'Pengembangan SDM & Kemitraan',
    description:
      'Penguatan kompetensi tim dan membangun hubungan kerja sama jangka panjang yang terpercaya.',
  },
],

  meta: {
    title: 'PT Gomu Gomu Indonesia • General Contractor & Supplier',
    description:
      'Jasa pengadaan, supply tenaga kerja, dan konstruksi sipil terpercaya. Konsultasi kebutuhan proyek bersama PT Gomu Gomu Indonesia.',
    image: './assets/gomu-hero.jpg',
    url: 'https://gomugomuindonesia.pages.dev',
    type: 'website',
    locale: 'id_ID',
  },

  assets: {
    heroBackground: './assets/gomu-hero.jpg', // Background hero - foto saung/makanan (1920x1080px atau 16:9)
    // Jika file tidak ada, akan menggunakan gradient default
  },

  // Additional Business Details
  services: {
    paymentMethods: ['Cash', 'Transfer'],
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
