import { Destination, PlaceType } from "@/type/type";

export const destinations: Destination[] = [
  {
    name: "Pantai Ngrenehan",
    thumbnail: "/img/pantai-ngrenehan.jpg",
    images: ["/img/pantai-ngrenehan.jpg"],
    summary: `Pantai Ngrenehan adalah salah satu permata tersembunyi di pesisir selatan Kabupaten Gunungkidul, Daerah Istimewa Yogyakarta. Terletak di Kalurahan Kanigoro, Kapanewon Saptosari, pantai ini menawarkan pesona eksotis yang berpadu dengan kehidupan nelayan tradisional. Nama "Ngrenehan" konon berasal dari kata "ngrena" yang berarti "mari ke sini", dipercaya sebagai seruan dari Sultan atau tokoh penting yang mencari ketenangan di tempat ini. Pantai ini menyimpan nilai sejarah, budaya, serta potensi wisata bahari yang unik dan berbeda dibandingkan pantai-pantai populer lainnya di Yogyakarta.`,
    description: `Pantai Ngrenehan adalah salah satu destinasi wisata yang memikat di kawasan selatan Kabupaten Gunungkidul, Daerah Istimewa Yogyakarta. Terletak di Kalurahan Kanigoro, Kapanewon Saptosari, pantai ini menawarkan perpaduan keindahan alam yang memukau, kekayaan budaya lokal, serta aktivitas kehidupan masyarakat pesisir yang masih sangat kental. Berbeda dengan pantai-pantai besar dan ramai seperti Parangtritis atau Baron, Pantai Ngrenehan menawarkan suasana yang lebih tenang dan alami, menjadikannya tempat ideal untuk mencari kedamaian sekaligus mengenal kehidupan tradisional nelayan Jawa.

Pantai ini memiliki bentuk teluk kecil yang dikelilingi perbukitan kapur (karst) yang menjulang. Bentuk geografisnya yang menyerupai ceruk ini menjadikan ombak di Ngrenehan relatif tenang dibandingkan pantai lain di pesisir selatan yang langsung berbatasan dengan Samudra Hindia. Air laut di pantai ini jernih, berwarna biru kehijauan, dan berpadu indah dengan pasir putih yang halus. Bukit-bukit di sekelilingnya menyuguhkan pemandangan yang menyejukkan mata dan menambah kesan alami dan tersembunyi dari pantai ini.

Salah satu keistimewaan Pantai Ngrenehan adalah fungsinya sebagai pelabuhan perahu nelayan tradisional. Setiap harinya, pengunjung dapat menyaksikan deretan perahu warna-warni yang bersandar setelah melaut. Aktivitas bongkar muat ikan dan hasil laut lainnya menjadi pemandangan sehari-hari yang mencerminkan dinamika ekonomi lokal berbasis sumber daya laut. Wisatawan juga bisa berinteraksi langsung dengan para nelayan, membeli ikan segar hasil tangkapan, atau menikmati sajian seafood di warung makan yang ada di sekitar pantai dengan harga yang terjangkau.

Pantai ini juga memiliki nilai budaya dan spiritual yang cukup kuat. Salah satu tradisi yang rutin dilaksanakan adalah sedekah laut, atau labuhan, sebuah upacara adat sebagai bentuk rasa syukur kepada Tuhan atas hasil laut yang melimpah serta permohonan keselamatan dalam berlayar. Upacara ini biasanya dilakukan dengan prosesi melarung sesaji ke tengah laut dan diiringi doa-doa serta kesenian tradisional. Tradisi ini menjadi daya tarik tersendiri bagi wisatawan yang ingin melihat langsung kekayaan budaya lokal masyarakat pesisir Jawa.

Dari segi fasilitas, Pantai Ngrenehan sudah cukup tertata. Tersedia area parkir, kamar mandi umum, mushola, dan warung makan yang menjual aneka hasil laut olahan. Akses jalan menuju lokasi memang sedikit menantang karena harus melewati jalur perbukitan, namun sudah beraspal dan bisa dilalui kendaraan roda dua maupun roda empat. Justru perjalanan ini memberi pengalaman tersendiri karena menyuguhkan pemandangan perbukitan karst khas Gunungkidul.
    `,
    latitude: -8.121135216366559,
    longitude: 110.51424399351228,
    address: "Jl. Pantai Ngrenehan, Saptosari",
    kelurahan: "Saptosari",
    openingHours: ["06:00 AM - 06:00 PM"],
    information: {
      organisasi: "Pengurus Pantai Ngrenehan",
      penanggungjawab: "Bapak Rahmad",
      noTelp: "081234567890",
      suitableFor: "Family outings, Photography, Romantic dates",
      category: ["Nature", "Relaxation"],
      placeType: PlaceType.OUTDOOR,
    },
  },
  {
    name: "Pantai Ngobaran",
    thumbnail: "/img/pantai-ngobaran.jpg",
    images: ["/img/pantai-ngobaran.jpg"],
    summary: "A lively beach perfect for water sports and group activities.",
    description:
      "Pantai Ngobaran is known for its vibrant atmosphere and clean, clear water, making it ideal for surfing and beach volleyball.",
    latitude: -8.118714515582006,
    longitude: 110.50339387200366,
    address: "Jl. Pantai Ngobaran, Saptosari",
    kelurahan: "Saptosari",
    openingHours: ["07:00 AM - 07:00 PM"],
    information: {
      organisasi: "Komunitas Pantai Ngobaran",
      penanggungjawab: "Ibu Sari",
      noTelp: "082345678901",
      suitableFor: "Water sports, Group activities",
      category: ["Active", "Sports"],
      placeType: PlaceType.OUTDOOR,
    },
  },
  {
    name: "Pantai Nguyahan",
    thumbnail: "/img/pantai-nguyahan.jpg",
    images: ["/img/pantai-nguyahan.jpg"],
    summary: "A quiet retreat with mesmerizing natural rock formations.",
    description:
      "Nestled off the beaten path, Pantai Nguyahan is a hidden gem that offers tranquility and natural beauty, perfect for those seeking solitude.",
    latitude: -8.118459874759028,
    longitude: 110.5030658657855,
    address: "Jl. Pantai Nguyahan, Saptosari",
    kelurahan: "Saptosari",
    openingHours: ["05:30 AM - 05:30 PM"],
    information: {
      organisasi: "Kelompok Pecinta Alam Nguyahan",
      penanggungjawab: "Bapak Joko",
      noTelp: "083456789012",
      suitableFor: "Quiet retreats, Nature walks",
      category: ["Nature", "Relaxation"],
      placeType: PlaceType.OUTDOOR,
    },
  },
  {
    name: "Pantai Butuh",
    thumbnail: "/img/pantai-butuh.jpg",
    images: ["/img/pantai-butuh.jpg"],
    summary: "A family-friendly beach with shallow waters and fun activities.",
    description:
      "Pantai Butuh is perfect for families looking for a safe and enjoyable day at the beach. Local vendors offer snacks and games.",
    latitude: -8.111761662893416,
    longitude: 110.48554195124697,
    address: "Jl. Pantai Butuh, Saptosari",
    kelurahan: "Saptosari",
    openingHours: ["08:00 AM - 08:00 PM"],
    information: {
      organisasi: "Yayasan Keluarga Bahagia",
      penanggungjawab: "Ibu Lina",
      noTelp: "084567890123",
      suitableFor: "Family outings, Kids activities",
      category: ["Family", "Nature"],
      placeType: PlaceType.OUTDOOR,
    },
  },
  {
    name: "Pantai Torohudan",
    thumbnail: "/img/pantai-torohudan.webp",
    images: ["/img/pantai-torohudan.webp"],
    summary: "A trendy beach spot known for its modern facilities and cafes.",
    description:
      "Pantai Torohudan blends natural beauty with modern comforts. Enjoy a mix of beach relaxation and city amenities.",
    latitude: -8.122543269006616,
    longitude: 110.51625761506241,
    address: "Jl. Pantai Torohudan, Saptosari",
    kelurahan: "Saptosari",
    openingHours: ["09:00 AM - 09:00 PM"],
    information: {
      organisasi: "Pengelola Pantai Torohudan",
      penanggungjawab: "Bapak Dedi",
      noTelp: "085678901234",
      suitableFor: "Trendy hangouts, Cafe lovers",
      category: ["Modern", "Leisure"],
      placeType: PlaceType.OUTDOOR,
    },
  },
  {
    name: "Pantai Pringjono",
    thumbnail: "/img/pantai-pringjono.jpg",
    images: ["/img/pantai-pringjono.jpg"],
    summary: "A secluded beach offering a peaceful environment for reflection.",
    description:
      "Embrace the calm at Pantai Pringjono where the gentle sea breeze and untouched nature create a perfect spot for meditation and relaxation.",
    latitude: -8.117855876282796,
    longitude: 110.49947976555578,
    address: "Jl. Pantai Pringjono, Saptosari",
    kelurahan: "Saptosari",
    openingHours: ["06:30 AM - 06:30 PM"],
    information: {
      organisasi: "Komunitas Meditasi Pantai Pringjono",
      penanggungjawab: "Ibu Tia",
      noTelp: "086789012345",
      suitableFor: "Meditation, Quiet walks",
      category: ["Nature", "Relaxation"],
      placeType: PlaceType.OUTDOOR,
    },
  },
  {
    name: "Pantai Nglangkap",
    thumbnail: "/img/pantai-nglangkap.jpg",
    images: ["/img/pantai-nglangkap.jpg"],
    summary:
      "A popular beach destination celebrated for its vibrant sunsets and lively atmosphere.",
    description:
      "Pantai Nglangkap offers visitors an energetic vibe along with breathtaking sunsets. Enjoy beach parties and local culinary delights.",
    latitude: -8.110574342122785,
    longitude: 110.4792892009592,
    address: "Jl. Pantai Nglangkap, Saptosari",
    kelurahan: "Saptosari",
    openingHours: ["07:30 AM - 07:30 PM"],
    information: {
      organisasi: "Komunitas Pantai Nglangkap",
      penanggungjawab: "Bapak Agus",
      noTelp: "087890123456",
      suitableFor: "Beach parties, Social events",
      category: ["Active", "Social"],
      placeType: PlaceType.OUTDOOR,
    },
  },
  {
    name: "Pantai Jugala",
    thumbnail: "/img/pantai-jugala.jpg",
    images: ["/img/pantai-jugala.jpg"],
    summary:
      "A charming beach with untouched beauty perfect for adventurous spirits.",
    description:
      "Pantai Jugala is a wonder for explorers. The rugged coastline and natural rock pools offer a unique adventure for those seeking offbeat experiences.",
    latitude: -8.079026441919357,
    longitude: 110.40871806061446,
    address: "Jl. Pantai Jugala, Saptosari",
    kelurahan: "Saptosari",
    openingHours: ["08:30 AM - 08:30 PM"],
    information: {
      organisasi: "Alumni Petualang Jugala",
      penanggungjawab: "Ibu Rina",
      noTelp: "088901234567",
      suitableFor: "Adventure, Exploration",
      category: ["Adventure", "Nature"],
      placeType: PlaceType.OUTDOOR,
    },
  },
];
