/**
 * UMKM Landing Page Data Configuration - Saung Tenda Ayam & Ikan Nila
 *
 * Contoh implementasi untuk bisnis Saung Tenda Ayam & Ikan Nila (Bakar - Cobek)
 * Ganti nama file ini menjadi data.js untuk menggunakan data ini
 */

const umkmData = {
  // Business Information
  business: {
    name: 'UmrahBISA Karawang',
    tagline: 'Berangkat Umrah Lebih Tenang Bersama UmrahBISA',
    openingHours: 'Senin – Sabtu: 09:00 – 17:00',
    priceRange: 'Paket mulai dari Rp 24,5 Juta',
    advantages: ['Pilihan paket umrah hemat & reguler', 'Pendampingan sebelum keberangkatan', 'Legal & berpengalaman', 'Kantor resmi di Karawang'],
    footerDescription: 'UmrahBISA Karawang melayani perjalanan umrah dengan berbagai pilihan paket, fokus pada kemudahan, transparansi, dan pelayanan amanah.',
  },

  // Contact Information
  contact: {
    whatsapp: '6281219356371',
    whatsappMessage: 'Assalamu’alaikum, saya mau tanya paket umrah UmrahBISA Karawang.',
    whatsappCTAMessage: 'Assalamu’alaikum, mohon info paket umrah terbaru.',
    mapsUrl: 'https://goo.gl/maps/Dgh2oBZQNbnURSHFA?g_st=aw',
    mapsEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3965.5313657736915!2d107.34171607499125!3d-6.325110993664392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNsKwMTknMzAuNCJTIDEwN8KwMjAnMzkuNSJF!5e0!3m2!1sen!2sid!4v1770264468358!5m2!1sen!2sid',
    address: 'Ruko depan Griya Tahfiz Bersanad Al-Istiqomah, Jl. Tamelang Timur RT15/07, Desa Bengle, Kec. Majalaya, Karawang 41370',
  },

  // Gallery Images (1-3 images supported)
  gallery: [
    {
      url: './assets/umrah-bisa-karawang-sertifikat.jpeg',
      alt: 'UmrahBISA Karawang - Sertifikat Akreditasi A',
    }
  ],

  // Menu Items (Menu unggulan)
  menu: [
    {
      name: 'Umrah Promo Plus Hainan China',
      price: 24500000,
      description: 'Paket umrah hemat dengan tambahan perjalanan ke Hainan, China.',
    },
    {
      name: 'Umrah Hemat Liburan Sekolah',
      price: 26500000,
      description: 'Cocok untuk keluarga, jadwal menyesuaikan libur sekolah.',
    },
    {
      name: 'Umrah Hemat Plus Thaif',
      price: 28500000,
      description: 'Paket umrah dengan ziarah tambahan ke kota Thaif.',
    },
  ],

  // Social Media & SEO Metadata
  meta: {
    title: 'UmrahBISA Karawang • Paket Umrah Hemat & Terpercaya',
    description: 'Penyedia paket umrah di Karawang. Harga mulai 24,5 juta. Kantor resmi, pelayanan amanah. Hubungi via WhatsApp.',
    image: './assets/umrah-bisa-karawang-facade.jpeg',
    url: 'https://umrahbisakarawang.pages.dev',
    type: 'website',
    locale: 'id_ID',
  },

  // Visual Assets
  assets: {
    heroBackground: './assets/umrah-bisa-karawang-facade.jpeg', // Background hero - foto saung/makanan (1920x1080px atau 16:9)
    // Jika file tidak ada, akan menggunakan gradient default
  },

  // Additional Business Details
  services: {
    dineIn: true,
    takeaway: true,
    delivery: true, // Jika ada layanan delivery
    paymentMethods: ['Cash', 'QRIS'],
  },

  // Location Details
  location: {
    landmark: 'Ruko depan Griya Tahfiz Bersanad Al-Istiqomah',
    parking: 'Ruko depan Griya Tahfiz Bersanad Al-Istiqomah',
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
