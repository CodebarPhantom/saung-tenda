/**
 * UMKM Landing Page Data Configuration - Saung Tenda Ayam & Ikan Nila
 * 
 * Contoh implementasi untuk bisnis Saung Tenda Ayam & Ikan Nila (Bakar - Cobek)
 * Ganti nama file ini menjadi data.js untuk menggunakan data ini
 */

const umkmData = {
  // Business Information
  business: {
    name: "Saung Tenda Ayam & Ikan Nila",
    tagline: "Ayam & Ikan Nila Bakar Cobek • Warung Kuliner Karawang",
    openingHours: "Senin – Sabtu: 10:00 – 16:00",
    priceRange: "Harga Rp 23.000 – Rp 35.000",
    advantages: [
      "Ayam & ikan nila bakar segar",
      "Sambal cobek khas warung",
      "Harga ramah kantong",
      "Suasana santai khas karawang"
    ],
    footerDescription: "Warung kuliner sederhana di Panatayudha 1, Karawang Barat – buka setiap senin - sabtu dari pagi sampai sore."
  },

  // Contact Information
  contact: {
    whatsapp: "6282111688929", // GANTI dengan nomor WhatsApp aktif
    whatsappMessage: "Assalamu’alaikum, mau pesan ayam/ikan bakar.",
    whatsappCTAMessage: "Halo! Saya mau info menu dan order ayam/ikan bakar.",
    mapsUrl: "https://maps.google.com/maps?q=Saung+Tenda+Ayam+%26+Ikan+Nila+Panatayudha+2+Karawang", 
    mapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.679135902015!2d107.30081057457635!3d-6.305820061711298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6977c2fff00141%3A0x16a9478a4415bcbf!2sSaung%20Tenda%20Ayam%20%26%20Ikan%20Nila%20(Bakar%20-%20Cobek)%20-%20Depan%20Sop%20Janda!5e0!3m2!1sen!2sid!4v1770024866086!5m2!1sen!2sid", 
    address: "Jl. Panatayuda I, Nagasari, Kec. Karawang Bar., Karawang, Jawa Barat 41314" 
  },


  // Menu Items (Menu unggulan)
  menu: [
    {
      name: "Paket Ayam Bakar Nasi + Sambal + Lalapan",
      price: 23000,
      description: "Paket ayam bakar dengan nasi, sambal cobek dan lalapan" 
    },
    {
      name: "Paket Ikan Nila Bakar Nasi + Sambal + Lalapan",
      price: 27000,
      description: "Paket ikan nila bakar lengkap nasi, sambal cobek dan lalapan"
    },
    {
      name: "Ayam Bakar aja",
      price: 18000,
      description: "Ayam bakar dengan sambal & lalapan"
    },
    {
      name: "Ikan Nila Bakar aja",
      price: 22000,
      description: "Ikan nila bakar dengan sambal & lalapan"
    },
    {
      name: "Es Jeruk",
      price: 7000,
      description: "Minuman segar untuk teman makan"
    },
    {
      name: "Tahu / Tempe",
      price: 1000,
      description: "Tambahan protein"
    }
  ],

  // Social Media & SEO Metadata
  meta: {
    title: "Saung Tenda Ayam & Ikan Nila Bakar • Warung Kuliner Karawang",
    description: "Nikmati ayam & ikan nila bakar sambal cobek di Saung Tenda Karawang. Harga berkisar Rp22.500 - 33.500. Pesan langsung via WhatsApp!", 
    image: "./assets/facade.jpeg", // GANTI dengan foto keren (1200x630px)
    url: "https://saungtendakarawang.pages.dev", 
    type: "website",
    locale: "id_ID"
  },

  // Visual Assets
  assets: {
    heroBackground: "./assets/facade.jpeg", // Background hero - foto saung/makanan (1920x1080px atau 16:9)
    // Jika file tidak ada, akan menggunakan gradient default
  },

  // Additional Business Details
  services: {
    dineIn: true,
    takeaway: true,
    delivery: true, // Jika ada layanan delivery
    paymentMethods: ["Cash", "QRIS", "GoPay", "OVO", "ShopeePay"]
  },

  // Location Details
  location: {
    landmark: "Dekat Panatayudha 1, Karawang Barat",
    parking: "Parkir motor & mobil tersedia di depan warung"
  }
};

// Make data available globally
if (typeof window !== 'undefined') {
  window.umkmData = umkmData;
}

// For Node.js environments (testing)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = umkmData;
}