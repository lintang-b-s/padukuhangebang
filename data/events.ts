import { EventSaptosari, PlaceType } from "@/type/type";

export const events: EventSaptosari[] = [
  {
    name: "Mujahadah",
    address:
      "Masjid Gebang, Jalan Kayutowo, Dusun Gebang, Kalurahan Ngloro, Kecamatan Saptosari, Kabupaten Gunungkidul, Daerah Istimewa Yogyakarta",
    tempat: "Masjid Gebang",
    startDate: new Date("2025-08-22T19:00:00.22Z"),
    endDate: new Date("2025-08-22T23:00:00.22Z"),
    openingHours: ["Selasa 22 Juli 2025, 19:00 - 23:00"],
    description: `bertempat di masjid gebang Padukuhan Gebang Kelurahan Saptosari dilaksanakan mujahadah yang dihadiri oleh warga 3 padukuhan, yaitu gebang, pringsurat, dan karangnongko. Rangkaian kegiatan mujahadah terdiri dari: marawisan, ceramah, sima’an al-Qur’an, dan Walikutuban.`,
    thumbnail: `/img/ketoprak-md.jpg`,
    latitude: -8.037750602554931,
    longitude: 110.48918376708208,
    information: {
      organisasi: "Padukuhan Gebang",
      penanggungjawab: "-",
      noTelp: "-",
      umurMasuk: "Semua umur",
      category: ["islam", "suro"],
      tempat: "Masjid Gebang",
      placeType: PlaceType.INDOOR,
    },
  },
];
