import { UMKMCard, UMKMUnggulan } from "@/type/type";

export const dataUMKMUnggulan: UMKMCard[] = [
  {
    title: "DR Snack",
    image: "/img/dr-snack/marsini.jpeg",
    alt: "DR Snack",
    dusun: "Gebang",
    summary: `DR Snack adalah UMKM yang bergerak di bidang kuliner, khususnya makanan olahan hasil tani lokal, jajanan pasar, dan makanan oleh-oleh. Menyediakan berbagai pilihan camilan tradisional seperti arem-arem, prastel, risol, puding, sosis solo, dan aneka jajanan lainnya, DR Snack melayani pemesanan sesuai kebutuhan pelanggan, baik untuk acara keluarga, hajatan, maupun konsumsi harian. Dengan bahan berkualitas dan cita rasa rumahan, DR Snack turut mendukung pemanfaatan hasil pertanian lokal serta pelestarian kuliner tradisional.`,
    description: `DR Snack adalah sebuah usaha mikro, kecil, dan menengah (UMKM) yang bergerak di bidang kuliner tradisional, dengan fokus utama pada pengolahan makanan berbahan dasar hasil tani lokal. UMKM ini berdiri dengan semangat untuk memberdayakan potensi lokal sekaligus melestarikan kekayaan kuliner Nusantara yang kini semakin digemari berbagai kalangan. Menggunakan bahan-bahan seperti singkong, kacang tolo, dan hasil tani lainnya, DR Snack memproduksi aneka jajanan khas yang tidak hanya lezat, tetapi juga sehat dan terjangkau.

Produk yang ditawarkan DR Snack mencakup berbagai jenis jajanan pasar dan makanan oleh-oleh yang biasa dijumpai di momen-momen spesial masyarakat Indonesia. Beberapa di antaranya adalah arem-arem, prastel, risol, puding, dan sosis solo. Semua menu dibuat secara rumahan, dengan cita rasa autentik dan tekstur yang pas, menjadikan DR Snack pilihan tepat untuk suguhan di berbagai acara seperti arisan, hajatan, pengajian, hingga rapat dan kegiatan komunitas.

Salah satu keunggulan DR Snack adalah kemampuannya dalam menyesuaikan pesanan pelanggan. Pelanggan dapat memesan berbagai jenis produk sesuai jumlah, variasi, dan kebutuhan acara. Fleksibilitas ini menjadikan DR Snack tidak hanya sebagai penyedia makanan, tetapi juga mitra dalam memenuhi kebutuhan konsumsi yang praktis dan berkualitas.

Dengan komitmen pada mutu dan pelayanan, DR Snack terus berinovasi dalam penyajian produk, kemasan, serta sistem pemesanan, agar tetap relevan dengan perkembangan zaman. Tidak hanya menjajakan rasa tradisional, DR Snack juga membawa nilai-nilai keberlanjutan dengan mendukung petani lokal dan mengurangi ketergantungan pada bahan baku impor.
              `,
    images: [
      "/img/dr-snack/bakpia.jpeg",
      "/img/dr-snack/brownis-singkong.jpeg",
      "/img/dr-snack/kue-bundar2.jpeg",
      "/img/dr-snack/kue-keju.jpeg",
    ],
    latitude: -8.060680347649244,
    longitude: 110.49309062176623,
    rangeHarga: "Rp1.000-Rp100.000",
    googleMapsLink: "https://maps.app.goo.gl/QfxhVNEvjTRMXiTCA",
    kontak: {
      namaUsaha: "DR Snack",
      namaPemilik: "Ibu Marsini",
      alamat:
        "JL Sidowayah, Gebang, Ngloro, Kec. Saptosari, Kabupaten Gunungkidul, Daerah Istimewa Yogyakarta 55871",
      noTelp: "081280545709",
      email: "",
      mediaSosial: [],
      onlineShop: [],
    },
    kategoriUsaha: "Makanan",
    products: [
      {
        nama: "Bakpia",
        deskripsi:
          "Bakpia adalah salah satu produk unggulan DR Snack yang menjadi favorit banyak pelanggan. Makanan khas ini berbentuk bulat pipih dengan tekstur kulit lembut dan isian manis di dalamnya, seperti kacang hijau, cokelat, atau keju. Diproduksi secara higienis dan dikemas rapi, bakpia sangat cocok sebagai camilan keluarga maupun oleh-oleh khas. ",
        images: ["/img/dr-snack/bakpia.jpeg"],
        harga: "Rp 100.000",
        labels: ["Oleh-Oleh", "Camilan", "Kuliner Lokal"],
      },
      {
        nama: "Brownis Singkong",
        deskripsi: `Brownis Singkong merupakan salah satu produk andalan dari UMKM "DR Snack" yang menghadirkan cita rasa unik dari olahan bahan lokal. Dibuat dari singkong pilihan yang diolah menjadi kue brownis lembut dan legit, produk ini menjadi alternatif sehat tanpa mengurangi kenikmatan rasa. Dengan sentuhan cokelat yang kaya dan aroma khas singkong, Brownis Singkong cocok dinikmati sebagai camilan harian maupun suguhan spesial. `,
        images: ["/img/dr-snack/brownis-singkong.jpeg"],
        harga: "Rp 100.000",
        labels: ["Camilan", "Bahan Lokal", "Kuliner Lokal"],
      },
      {
        nama: "Kue Bolu Singkong Keju",
        deskripsi: `Kue Bolu Singkong Keju dari DR Snack merupakan perpaduan sempurna antara cita rasa tradisional dan sentuhan modern. Terbuat dari singkong pilihan sebagai bahan utama, kue ini memiliki tekstur lembut dan aroma khas yang menggugah selera. Taburan keju di atasnya menambah rasa gurih yang lezat, menjadikannya camilan sehat dan nikmat untuk segala usia. `,
        images: [
          "/img/dr-snack/kue-keju.jpeg",
          "/img/dr-snack/kue-keju2.jpeg",
          "/img/dr-snack/kue-keju3.jpeg",
        ],
        harga: "Rp 80.000",
        labels: ["Camilan", "Bahan Lokal", "Kuliner Lokal"],
      },
      {
        nama: "Kue Tar Singkong",
        deskripsi: `Kue Tar Singkong dari DR Snack merupakan kreasi unik yang mengangkat bahan lokal menjadi sajian istimewa. Dibuat dari singkong pilihan yang diolah dengan resep khas, kue ini menghadirkan rasa manis yang lembut dengan tekstur yang moist dan padat. Topping krim dan hiasan menarik di atasnya menambah daya tarik visual sekaligus cita rasa. Cocok untuk hidangan di berbagai momen spesial, Kue Tar Singkong tidak hanya lezat tetapi juga menjadi alternatif sehat dari olahan tepung terigu.`,
        images: [
          "/img/dr-snack/kue-meesis-keju.jpeg",
          "/img/dr-snack/kue-mesis-keju.jpeg",
          "/img/dr-snack/kue-oreo.jpeg",
          "/img/dr-snack/kue-tar.jpeg",
          "/img/dr-snack/kue-tar2.jpeg",
        ],
        harga: "Rp 50.000",
        labels: ["Camilan", "Bahan Lokal", "Kuliner Lokal"],
      },
      {
        nama: "Lumpia",
        deskripsi: `Lumpia Isi Ayam dari DR Snack adalah camilan gurih yang menggugah selera dengan isian ayam berbumbu khas yang kaya rasa. Dibungkus dengan kulit lumpia yang renyah saat digoreng, setiap gigitan menghadirkan perpaduan tekstur dan cita rasa yang lezat. Cocok disajikan sebagai snack harian maupun pelengkap hidangan di berbagai acara, Lumpia Isi Ayam ini menjadi pilihan favorit bagi pencinta makanan ringan yang praktis dan menggoda.`,
        images: ["/img/dr-snack/lumpia.jpeg"],
        harga: "Rp 1.000",
        labels: ["Camilan", "Bahan Lokal", "Kuliner Lokal"],
      },
      {
        nama: "Molen",
        deskripsi: `Lumpia Isi Ayam dari DR Snack adalah camilan gurih yang menggugah selera dengan isian ayam berbumbu khas yang kaya rasa. Dibungkus dengan kulit lumpia yang renyah saat digoreng, setiap gigitan menghadirkan perpaduan tekstur dan cita rasa yang lezat. Cocok disajikan sebagai snack harian maupun pelengkap hidangan di berbagai acara, Lumpia Isi Ayam ini menjadi pilihan favorit bagi pencinta makanan ringan yang praktis dan menggoda.`,
        images: ["/img/dr-snack/molen.jpeg"],
        harga: "Rp 1.000",
        labels: ["Camilan", "Bahan Lokal", "Kuliner Lokal"],
      },
      {
        nama: "Onde-Onde",
        deskripsi: `Onde-onde dari DR Snack merupakan jajanan tradisional yang tetap digemari sepanjang masa. Terbuat dari tepung ketan yang dibentuk bulat dan diisi dengan kacang hijau manis, onde-onde ini dibalut dengan taburan wijen di bagian luar, lalu digoreng hingga renyah keemasan. Teksturnya yang kenyal berpadu sempurna dengan isian lembut dan gurih, menjadikannya camilan khas yang cocok dinikmati kapan saja. Onde-onde DR Snack adalah pilihan tepat untuk pecinta cita rasa nusantara yang autentik.`,
        images: ["/img/dr-snack/onde-onde.jpeg"],
        harga: "Rp 1.000",
        labels: ["Camilan", "Bahan Lokal", "Kuliner Lokal"],
      },
      {
        nama: "Putu Ayu",
        deskripsi: `Putu Ayu dari DR Snack adalah kue tradisional yang lembut dan manis dengan tampilan cantik berwarna hijau serta taburan kelapa parut di bagian atasnya. Terbuat dari campuran tepung, santan, dan daun pandan, kue ini memiliki aroma harum khas yang menggugah selera. Teksturnya yang empuk dan rasa gurih manis yang seimbang membuat Putu Ayu menjadi camilan favorit untuk segala usia. Cocok disajikan dalam berbagai acara, kue ini menjadi pilihan sempurna bagi pencinta kudapan tradisional berkualitas.`,
        images: ["/img/dr-snack/putu-ayu.jpeg"],
        harga: "Rp 1.000",
        labels: ["Camilan", "Bahan Lokal", "Kuliner Lokal"],
      },
      {
        nama: "Sosis Risol Singkong",
        deskripsi: `Sosis Risol Singkong dari DR Snack adalah camilan gurih yang menggoda selera dengan perpaduan unik antara sosis lezat dan kulit risol berbahan dasar singkong. Dibuat dari singkong pilihan yang diolah hingga menghasilkan tekstur renyah di luar dan lembut di dalam, risol ini menawarkan rasa nikmat yang pas untuk segala usia. Cocok sebagai bekal, sajian acara, atau teman santai, Sosis Risol Singkong menjadi pilihan tepat bagi pencinta camilan praktis dengan cita rasa khas olahan lokal.`,
        images: [
          "/img/dr-snack/risol-mayo.jpeg",
          "/img/dr-snack/sosis-risol.jpeg",
        ],
        harga: "Rp 1.000",
        labels: ["Camilan", "Bahan Lokal", "Kuliner Lokal"],
      },
    ],
  },
  {
    title: "Dapur Sasha",
    image: "/img/dapur-sasha/kue-tar.jpeg",
    alt: "Dapur Sasha",
    dusun: "Gebang",
    summary: `Dapur Sasha adalah usaha mikro yang lahir dari kecintaan keluarga pada cita rasa tradisional dan semangat menghadirkan kue pesta yang berkesan. Berawal dari dapur rumahan, UMKM ini kini dikenal sebagai penyedia jajanan pasar autentik—mulai dari arem-arem berisi sayur dan ayam berbumbu, prastel nan lembut, risol renyah berisi ragout gurih, hingga pudding aneka rasa yang segar—semuanya dibuat setiap hari dari bahan segar pilihan agar kualitas rasa tetap terjaga.`,
    description: `Dapur Sasha adalah usaha mikro yang lahir dari kecintaan keluarga pada cita rasa tradisional dan semangat menghadirkan kue pesta yang berkesan. Berawal dari dapur rumahan, UMKM ini kini dikenal sebagai penyedia jajanan pasar autentik—mulai dari arem-arem berisi sayur dan ayam berbumbu, prastel nan lembut, risol renyah berisi ragout gurih, hingga pudding aneka rasa yang segar—semuanya dibuat setiap hari dari bahan segar pilihan agar kualitas rasa tetap terjaga.
 Selain jajanan klasik, Dapur Sasha juga menerima pembuatan kue ulang tahun custom. Pelanggan bebas menentukan desain, kombinasi rasa, serta ukuran, sehingga setiap kue benar-benar merefleksikan momen spesial yang dirayakan. Tim Dapur Sasha mengutamakan kebersihan, teknik dekorasi modern, dan penggunaan butter serta cokelat premium untuk menghasilkan tekstur lembut dan tampilan memukau.
 Dengan layanan pemesanan fleksibel—mulai dari porsi arisan kecil hingga catering untuk acara besar—Dapur Sasha berkomitmen menghadirkan produk “fresh from the oven” yang halal dan ramah kantong. Didukung tenaga terampil bersertifikat, usaha ini tak hanya menyajikan rasa nostalgia jajanan pasar, tetapi juga memberi sentuhan kreatif pada kue pesta masa kini, menjadikan Dapur Sasha mitra kuliner tepercaya bagi setiap perayaan Anda.`,
    images: [
      "/img/dapur-sasha/aneka-puding.jpeg",
      "/img/dapur-sasha/kue-tar2.jpeg",
      "/img/dapur-sasha/kue-tar3.jpeg",
    ],
    latitude: -8.059950745475506,
    longitude: 110.49443860759116,
    rangeHarga: "Rp10.000-Rp100.000",
    kontak: {
      namaUsaha: "Dapur Sasha",
      namaPemilik: "Ibu Linda",
      alamat:
        "Gebang, Ngloro, Kec. Saptosari, Kabupaten Gunungkidul, Daerah Istimewa Yogyakarta",
      noTelp: "089690607900",
      mediaSosial: [],
      onlineShop: [],
    },
    kategoriUsaha: "Kuliner",
    products: [
      {
        nama: "Kue Tar Ulang Tahun",
        deskripsi:
          "Kue Tar Ulang Tahun dari Dapur Sasha merupakan sajian spesial yang dibuat dengan penuh cinta dan ketelitian untuk merayakan momen istimewa Anda. Menggunakan bahan-bahan berkualitas seperti tepung pilihan, mentega premium, dan hiasan krim yang lembut, kue ini hadir dalam berbagai varian rasa—cokelat, vanila, stroberi, dan lainnya—yang dapat disesuaikan dengan selera pelanggan. Dengan desain yang cantik dan dapat dipesan secara custom sesuai tema acara.",
        images: [
          "/img/dapur-sasha/kue-tar.jpeg",
          "/img/dapur-sasha/kue-tar2.jpeg",
          "/img/dapur-sasha/kue-tar3.jpeg",
          "/img/dapur-sasha/kue-tar4.jpeg",
          "/img/dapur-sasha/kue-tar5.jpeg",
          "/img/dapur-sasha/kue-tar6.jpeg",
        ],
        harga: "Rp 15.000",
        labels: ["Kue Ulang Tahun", "Kue", "Manis"],
      },
      {
        nama: "Aneka Pudding",
        deskripsi:
          "Aneka Pudding dari Dapur Sasha merupakan hidangan penutup yang lembut, segar, dan menggugah selera. Dibuat dari bahan berkualitas seperti susu segar, agar-agar, dan aneka topping pilihan, pudding ini tersedia dalam berbagai varian rasa, seperti cokelat, vanila, mangga, stroberi, dan pandan. Cocok disajikan untuk berbagai acara, mulai dari hajatan keluarga, arisan, hingga bekal sekolah.",
        images: [
          "/img/dapur-sasha/pudding.jpeg",
          "/img/dapur-sasha/aneka-puding.jpeg",
        ],
        harga: "Rp 15.000",
        labels: ["Jajanan Pasar", "Makanan Ringan", "Camilan"],
      },
    ],
  },
  {
    title: "Peyek",
    image: "/img/peyek.jpeg",
    summary: `Peyek Gunungkidul adalah camilan tradisional yang renyah dan gurih, dibuat dari tepung beras dengan tambahan kacang atau bahan lain seperti rebon, yang digoreng tipis dan kering. Makanan ini menjadi salah satu oleh-oleh khas dari daerah Gunungkidul, Yogyakarta, karena kelezatan dan keunikan rasanya yang khas.`,
    description: `Peyek Gunungkidul adalah camilan tradisional khas dari Kabupaten Gunungkidul, Daerah Istimewa Yogyakarta, yang terkenal dengan cita rasanya yang gurih dan renyah. Makanan ini dibuat dari adonan tepung beras yang dicampur dengan bumbu-bumbu khas, seperti bawang putih, ketumbar, dan garam, kemudian diberi tambahan kacang tanah, kedelai, atau rebon (udang kecil) di permukaannya. Setelah itu, adonan digoreng tipis hingga kering dan renyah. Ciri khas peyek dari Gunungkidul terletak pada teksturnya yang renyah dan rasa bumbunya yang kuat, sering kali dimasak dengan resep turun-temurun oleh masyarakat setempat. Peyek ini biasanya disajikan sebagai pelengkap hidangan utama seperti nasi, atau dinikmati sebagai camilan sehari-hari.`,
    latitude: -8.062865005585818,
    longitude: 110.49600616489971,
    alt: "Peyek",
    images: ["/img/peyek.jpeg"],
    dusun: "Gebang",
    rangeHarga: "Rp10.000-Rp100.000",
    kontak: {
      namaPemilik: "Ibu Nurul",
      namaUsaha: "Peyek Ngloro",
      alamat: "Jl. Peyek Ngloro No. 1, Ngloro, Gunungkidul, Yogyakarta",
      noTelp: "081234567890",
      mediaSosial: [],
      onlineShop: [],
    },
    kategoriUsaha: "Kuliner",
    products: [
      {
        nama: "Peyek Kacang",
        deskripsi: "Peyek renyah dengan isian kacang tanah yang gurih.",
        images: ["/img/peyek.jpeg"],
        harga: "Rp 15.000",
        labels: ["Kuliner Tradisional", "Renyah", "Gurih"],
      },
    ],
  },
  {
    title: "Toko Kelontong Ibu Isti",
    image: "/img/kelontong-isti/kelontong-isti4.jpeg",
    summary: `Toko Kelontong Bu Isti adalah usaha mikro yang menyediakan berbagai kebutuhan pokok dan perlengkapan rumah tangga untuk warga desa. Dengan harga terjangkau dan lokasi yang mudah dijangkau, toko ini menjadi pilihan utama masyarakat dalam memenuhi kebutuhan sehari-hari secara praktis dan cepat.`,
    description: `Toko Kelontong Bu Isti merupakan salah satu UMKM yang tumbuh dan berkembang di tengah masyarakat desa, menyediakan berbagai kebutuhan pokok dan perlengkapan rumah tangga sehari-hari. Usaha ini dikelola langsung oleh Ibu Isti, seorang pelaku usaha lokal yang dengan telaten melayani warga sekitar dengan produk yang lengkap dan harga yang bersahabat. Mulai dari sembako seperti beras, gula, minyak goreng, hingga kebutuhan dapur, sabun, dan alat tulis, semuanya tersedia dalam satu tempat.
 Berlokasi strategis di tengah permukiman warga, toko ini memudahkan masyarakat dalam berbelanja kebutuhan harian tanpa harus bepergian jauh ke pusat kota. Pelayanan yang ramah dan suasana kekeluargaan menjadi ciri khas Toko Kelontong Bu Isti, menjadikannya tidak hanya tempat belanja, tetapi juga tempat berkumpul dan berbagi informasi antarwarga.
 Keberadaan Toko Kelontong Bu Isti memberikan kontribusi positif terhadap perekonomian desa. Selain menyuplai kebutuhan warga, toko ini juga menjadi tempat distribusi produk-produk lokal seperti jajanan rumahan, telur ayam kampung, atau sayuran hasil kebun warga sekitar. Dengan semangat kewirausahaan dan kepedulian terhadap lingkungan sekitar, Toko Kelontong Bu Isti terus berkembang sebagai bagian penting dari ekosistem ekonomi desa yang mandiri dan berdaya saing.`,
    latitude: -8.06199439198048,
    longitude: 110.49574741138358,
    alt: "Kelontong",
    images: [
      "/img/kelontong-isti/kelontong-isti4.jpeg",
      "/img/kelontong-isti/kelontong-isti.jpeg",
      "/img/kelontong-isti/kelontong-isti2.jpeg",
      "/img/kelontong-isti/kelontong-isti3.jpeg",
    ],
    dusun: "Gebang",
    rangeHarga: "Rp1.000-Rp100.000",
    kontak: {
      namaPemilik: "Ibu Isti",
      namaUsaha: "Toko Kelontong Bu Isti",
      alamat:
        "Jl. Gebang RT 16 ,Gebang, Ngloro, Kec. Saptosari, Kabupaten Gunungkidul, Daerah Istimewa Yogyakarta 55871",
      noTelp: "",
      mediaSosial: [],
      onlineShop: [],
    },
    kategoriUsaha: "Toko Kelontong",
    products: [],
  },
  {
    title: "Kelontong Abi",
    image: "/img/kelontong-abi/kelontong-abi.jpeg",
    summary: `Toko Kelontong Abi merupakan usaha mikro yang menyediakan berbagai kebutuhan sehari-hari bagi warga sekitar, mulai dari bahan makanan pokok, alat mandi, hingga perlengkapan rumah tangga. Berlokasi di tengah desa, Toko Kelontong Abi menjadi andalan masyarakat dalam memenuhi kebutuhan harian dengan harga terjangkau dan pelayanan ramah.`,
    description: `Toko Kelontong Abi adalah salah satu UMKM unggulan di desa yang menyediakan berbagai macam kebutuhan pokok dan perlengkapan rumah tangga bagi masyarakat. Dikelola secara mandiri oleh warga lokal, toko ini hadir sebagai solusi praktis bagi warga desa untuk mendapatkan barang kebutuhan sehari-hari tanpa harus bepergian jauh ke kota. Produk yang tersedia cukup lengkap, mulai dari beras, gula, minyak goreng, mie instan, sabun, hingga perlengkapan kebersihan rumah tangga lainnya.
  Dengan lokasi yang strategis di tengah pemukiman warga, Toko Kelontong Abi menjadi tempat belanja andalan masyarakat sekitar. Selain menawarkan harga yang bersaing, toko ini juga dikenal dengan pelayanan yang ramah dan suasana kekeluargaan yang hangat, mencerminkan semangat gotong royong khas desa. Keberadaan toko ini turut mendukung roda perekonomian lokal dengan memberdayakan produk-produk dari petani dan pelaku usaha desa.

UMKM ini juga terbuka terhadap inovasi dan perkembangan zaman, termasuk menjajaki peluang digitalisasi dalam layanan pemesanan dan pembayaran. Ke depan, Toko Kelontong Abi diharapkan terus tumbuh dan berkembang, menjadi contoh usaha kecil yang mampu bertahan dan beradaptasi, sekaligus memperkuat ketahanan ekonomi desa melalui pelayanan yang berkualitas dan berorientasi pada kebutuhan masyarakat.`,
    latitude: -8.062070596237543,
    longitude: 110.49378329602115,
    alt: "Kelontong",
    images: [
      "/img/kelontong-abi/kelontong-abi.jpeg",
      "/img/kelontong-abi/kelontong-abi2.jpeg",
    ],
    dusun: "Gebang",
    rangeHarga: "Rp1.000-Rp100.000",
    kontak: {
      namaPemilik: "Ibu Hesti",
      namaUsaha: "Toko Kelontong Abi",
      alamat:
        "RT 18 ,Gebang, Ngloro, Kec. Saptosari, Kabupaten Gunungkidul, Daerah Istimewa Yogyakarta 55871",
      noTelp: "",
      mediaSosial: [],
      onlineShop: [],
    },
    kategoriUsaha: "Toko Kelontong",
    products: [],
  },
];

export const dataUMKMUnggulanHome: UMKMUnggulan[] = [
  {
    title: "DR Snack",
    description:
      "DR Snack adalah UMKM yang bergerak di bidang kuliner, khususnya makanan olahan hasil tani lokal, jajanan pasar, dan makanan oleh-oleh. Menyediakan berbagai pilihan camilan tradisional seperti arem-arem, prastel, risol, puding, sosis solo, dan aneka jajanan lainnya, DR Snack melayani pemesanan sesuai kebutuhan pelanggan, baik untuk acara keluarga, hajatan, maupun konsumsi harian. Dengan bahan berkualitas dan cita rasa rumahan, DR Snack turut mendukung pemanfaatan hasil pertanian lokal serta pelestarian kuliner tradisional.",
    image: "/img/dr-snack/marsini.jpeg",
  },
  {
    title: "Dapur Sasha",
    description:
      "Dapur Sasha adalah usaha mikro yang lahir dari kecintaan keluarga pada cita rasa tradisional dan semangat menghadirkan kue pesta yang berkesan. Berawal dari dapur rumahan, UMKM ini kini dikenal sebagai penyedia jajanan pasar autentik—mulai dari arem-arem berisi sayur dan ayam berbumbu, prastel nan lembut, risol renyah berisi ragout gurih, hingga pudding aneka rasa yang segar—semuanya dibuat setiap hari dari bahan segar pilihan agar kualitas rasa tetap terjaga.",
    image: "/img/dapur-sasha/kue-tar.jpeg",
  },
  {
    title: "Kerajinan Bambu Pak Yanto",
    description:
      "Pak Yanto adalah salah satu pengrajin bambu unggulan dari Padukuhan Gebang yang telah menekuni seni kerajinan ini selama lebih dari 5 tahun. Dengan keterampilan tangan yang terasah dan pengalaman panjang, beliau mampu menciptakan berbagai produk bernilai seni tinggi, mulai dari anyaman tradisional, perabot rumah tangga, hingga hiasan dekoratif yang ramah lingkungan.",
    image: "/img/bambu-yanto1.jpeg",
  },
];

export const saranaPrasarana = [
  {
    nama: "Balai Padukuhan",
    gambar: "/img/balai-dusun-gebang/balai-dusun-gebang1.jpeg",
    deskripsi:
      "Balai Padukuhan merupakan fasilitas umum yang digunakan sebagai tempat pertemuan, musyawarah warga, kegiatan Posyandu, serta berbagai acara dan kegiatan lainnya di tingkat padukuhan. Balai ini berlokasi di RT 16 (Kayutowo) Padukuhan Gebang.",
  },
  {
    nama: "Lapangan Voli",
    gambar: "/img/lapangan-voli.jpeg",
    deskripsi:
      "Lapangan Padukuhan Gebang merupakan fasilitas umum yang digunakan sebagai tempat kegiatan olahraga dan berkumpulnya warga, seperti bermain voli, sepak bola, dan kegiatan senam. Selain itu, lapangan ini juga menjadi lokasi pelaksanaan acara masyarakat, seperti lomba Agustusan dan kegiatan lainnya yang bersifat komunal. Lapangan ini berada di samping jalan utama Padukuhan Gebang, sehingga mudah diakses oleh seluruh warga.",
  },
  {
    nama: "MADRASAH Ibtidaiyah Negeri (MIN) 10",
    gambar: "/img/mi-10.jpeg",
    deskripsi:
      "Madrasah Ibtidaiyah Negeri (MIN) 10 Gunungkidul merupakan lembaga pendidikan dasar formal yang berada di bawah naungan Kementerian Agama. Sekolah ini menyediakan pendidikan berbasis agama Islam untuk jenjang pendidikan dasar (setara SD), dengan kurikulum terpadu antara pelajaran umum dan keagamaan. MIN 10 tidak hanya berfokus pada pengembangan akademik, tetapi juga membentuk karakter siswa melalui kegiatan keagamaan dan sosial. Madrasah ini menjadi salah satu pusat pendidikan penting di wilayah Padukuhan Gebang dan sekitarnya. MIN 10 ini terletak di RT 17 Padukuhan Gebang.",
  },
  {
    nama: "Mushola RT 16",
    gambar: "/img/mushola-rt16.jpg",
    deskripsi:
      "Mushola RT 16 merupakan sarana ibadah yang digunakan oleh warga Padukuhan Gebang, khususnya di wilayah Kayutowo, untuk melaksanakan salat berjamaah dan kegiatan keagamaan lainnya. Mushola ini menjadi tempat penting bagi warga untuk mempererat silaturahmi, terutama dalam kegiatan keagamaan seperti pengajian dan salat tarawih saat Ramadan. Letaknya yang strategis di lingkungan RT 16 membuat mushola ini mudah diakses dan aktif digunakan oleh masyarakat sekitar.",
  },
  {
    nama: "Masjid Gebang",
    gambar: "/img/masjid-gebang.jpg",
    deskripsi:
      "Masjid Gebang adalah masjid utama di Padukuhan Gebang yang berperan sebagai pusat kegiatan ibadah dan keagamaan masyarakat. Selain digunakan untuk salat lima waktu dan salat Jumat, masjid ini juga menyelenggarakan kegiatan TPA (Taman Pendidikan Al-Qur'an) secara rutin, yang menjadi wadah bagi anak-anak untuk belajar membaca Al-Qur'an dan memahami ajaran Islam. Kegiatan TPA ini menjadi bagian penting dalam pembinaan karakter islami generasi muda di dusun. Masjid ini terletak di lokasi yang mudah dijangkau dan menjadi simbol keagamaan masyarakat Padukuhan Gebang.",
  },
  {
    nama: "Mushola RT 18 & 19",
    gambar: "/img/mushola-sidowayah.jpeg",
    deskripsi:
      "Mushola yang terletak di wilayah RT 18 dan RT 19, dikenal juga sebagai Mushola Sidowayah, menjadi tempat ibadah sekaligus pusat kegiatan keagamaan warga di sekitar wilayah tersebut. Selain digunakan untuk salat berjamaah, mushola ini aktif menyelenggarakan kegiatan TPA (Taman Pendidikan Al-Qur'an) secara rutin setiap minggunya. TPA ini memberikan pendidikan Al-Qur’an bagi anak-anak dan remaja, sehingga berperan penting dalam pembinaan rohani generasi muda. Mushola ini juga menjadi tempat berkumpul warga dalam kegiatan-kegiatan keagamaan seperti pengajian dan doa bersama.",
  },
];
