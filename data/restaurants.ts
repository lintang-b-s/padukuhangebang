import { Restaurant } from "@/type/type";
function getRandomLatLon(
  latMin: number,
  latMax: number,
  lonMin: number,
  lonMax: number
) {
  const lat = Math.random() * (latMax - latMin) + latMin;
  const lon = Math.random() * (lonMax - lonMin) + lonMin;
  return { latitude: lat, longitude: lon };
}

function generateLatLonSaptosari() {
  // -8.057157899055724, 110.47588815803144
  // -8.037441263499227, 110.50644388177014
  return getRandomLatLon(
    -8.057157899055724,
    -8.037441263499227,
    110.47588815803144,
    110.50644388177014
  );
}

export let restaurantsData: Restaurant[] = [
  {
    id: 1,
    name: "Warung Makan Jetis 1",
    description: `
    The appreciative handling of food is central to us. This includes the almost complete utilization of food. As diverse as we humans are, so are our food needs. Our meals are therefore of the best quality, as often as possible homemade and carefully prepared to offer even people with food intolerances or allergies the highest pleasure.

The restaurant and guesthouse "fein & sein" are at home in the new building of the Schwarzsee Education & Health Center. The cozy ambience of the restaurant as well as the newly furnished guest rooms of the pension invite you to a relaxing stay in the unique region of the German-Freiburg Pre-Alps. In addition to 50 indoor seats, the restaurant "fein & sein" offers another 50 outdoor seats to enjoy the sun on the terrace in summer & winter. The little guests especially enjoy the outdoor playground and the garden.

Banquets, wedding events, team events, seminar and retreat catering are further services that can be booked at fein & sein.

Note: This text was translated by machine translation software and not by a human translator. It may contain translation errors.
    `,
    openingHours: ["Senin-Jumat, 10:00 - 22:00"],
    address: "Jl. Utama No.1, Jetis, Saptosari, Gunungkidul",
    kelurahan: "Jetis",
    latitude: -8.115,
    longitude: 110.125,
    thumbnail: "/img/rumah-makan-gkd.jpg",
    images: ["/img/rumah-makan-gkd.jpg", "/img/mangengking.webp"],
  },
  {
    id: 2,

    kelurahan: "Jetis",
    name: "Warung Makan Ngloro 2",
    description: "Nikmati hidangan khas Ngloro dengan cita rasa otentik",
    openingHours: ["Senin-Jumat, 10:00 - 22:00"],
    address: "Jl. Raya Ngloro No.2, Ngloro, Saptosari, Gunungkidul",
    latitude: -8.12,
    longitude: 110.13,
    thumbnail: "/img/rumah-makan-gkd2.jpeg",
    images: ["/img/rumah-makan-gkd2.jpeg", "/img/mangengking.webp"],
  },
  {
    id: 3,

    kelurahan: "Jetis",
    name: "Warung Makan Jetis 3",
    description: `
    The appreciative handling of food is central to us. This includes the almost complete utilization of food. As diverse as we humans are, so are our food needs. Our meals are therefore of the best quality, as often as possible homemade and carefully prepared to offer even people with food intolerances or allergies the highest pleasure.

The restaurant and guesthouse "fein & sein" are at home in the new building of the Schwarzsee Education & Health Center. The cozy ambience of the restaurant as well as the newly furnished guest rooms of the pension invite you to a relaxing stay in the unique region of the German-Freiburg Pre-Alps. In addition to 50 indoor seats, the restaurant "fein & sein" offers another 50 outdoor seats to enjoy the sun on the terrace in summer & winter. The little guests especially enjoy the outdoor playground and the garden.

Banquets, wedding events, team events, seminar and retreat catering are further services that can be booked at fein & sein.

Note: This text was translated by machine translation software and not by a human translator. It may contain translation errors.
    `,
    openingHours: ["Setiap hari, 09:00 - 21:00"],
    address: "Jl. Makan Jetis No.3, Jetis, Saptosari, Gunungkidul",
    latitude: -8.118,
    longitude: 110.127,
    thumbnail: "/img/rumah-makan-gkd3.jpg",
    images: ["/img/rumah-makan-gkd3.jpg", "/img/mangengking.webp"],
  },
  {
    id: 4,

    kelurahan: "Jetis",
    name: "Warung Makan Ngloro 4",
    description: "Nikmati hidangan khas Ngloro dengan cita rasa otentik",
    openingHours: ["Senin-Sabtu, 09:30 - 21:30"],
    address: "Jl. Selera Ngloro No.4, Ngloro, Saptosari, Gunungkidul",
    latitude: -8.122,
    longitude: 110.132,
    thumbnail: "/img/rumah-makan-gkd4.jpg",
    images: ["/img/rumah-makan-gkd4.jpg", "/img/mangengking.webp"],
  },
  {
    id: 5,

    kelurahan: "Jetis",
    name: "Warung Makan Jetis 5",
    description: `
    The appreciative handling of food is central to us. This includes the almost complete utilization of food. As diverse as we humans are, so are our food needs. Our meals are therefore of the best quality, as often as possible homemade and carefully prepared to offer even people with food intolerances or allergies the highest pleasure.

The restaurant and guesthouse "fein & sein" are at home in the new building of the Schwarzsee Education & Health Center. The cozy ambience of the restaurant as well as the newly furnished guest rooms of the pension invite you to a relaxing stay in the unique region of the German-Freiburg Pre-Alps. In addition to 50 indoor seats, the restaurant "fein & sein" offers another 50 outdoor seats to enjoy the sun on the terrace in summer & winter. The little guests especially enjoy the outdoor playground and the garden.

Banquets, wedding events, team events, seminar and retreat catering are further services that can be booked at fein & sein.

Note: This text was translated by machine translation software and not by a human translator. It may contain translation errors.
    `,
    openingHours: ["Senin-Jumat, 10:00 - 22:00"],
    address: "Jl. Pojok Jetis No.5, Jetis, Saptosari, Gunungkidul",
    latitude: -8.1165,
    longitude: 110.1265,
    thumbnail: "/img/rumah-makan-gkd.jpg",
    images: ["/img/rumah-makan-gkd.jpg", "/img/mangengking.webp"],
  },
  {
    id: 6,

    kelurahan: "Jetis",
    name: "Warung Makan Ngloro 6",
    description: "Nikmati hidangan khas Ngloro dengan cita rasa otentik",
    openingHours: ["Senin-Jumat, 10:00 - 22:00"],
    address: "Jl. Pusat Ngloro No.6, Ngloro, Saptosari, Gunungkidul",
    latitude: -8.1235,
    longitude: 110.1335,
    thumbnail: "/img/rumah-makan-gkd.jpg",
    images: ["/img/rumah-makan-gkd.jpg", "/img/mangengking.webp"],
  },
  {
    id: 7,

    kelurahan: "Jetis",
    name: "Warung Makan Jetis 7",
    description: `
    The appreciative handling of food is central to us. This includes the almost complete utilization of food. As diverse as we humans are, so are our food needs. Our meals are therefore of the best quality, as often as possible homemade and carefully prepared to offer even people with food intolerances or allergies the highest pleasure.

The restaurant and guesthouse "fein & sein" are at home in the new building of the Schwarzsee Education & Health Center. The cozy ambience of the restaurant as well as the newly furnished guest rooms of the pension invite you to a relaxing stay in the unique region of the German-Freiburg Pre-Alps. In addition to 50 indoor seats, the restaurant "fein & sein" offers another 50 outdoor seats to enjoy the sun on the terrace in summer & winter. The little guests especially enjoy the outdoor playground and the garden.

Banquets, wedding events, team events, seminar and retreat catering are further services that can be booked at fein & sein.

Note: This text was translated by machine translation software and not by a human translator. It may contain translation errors.
    `,
    openingHours: ["Setiap hari, 09:00 - 21:00"],
    address: "Jl. Cita Rasa Jetis No.7, Jetis, Saptosari, Gunungkidul",
    latitude: -8.1172,
    longitude: 110.1242,
    thumbnail: "/img/rumah-makan-gkd.jpg",
    images: ["/img/rumah-makan-gkd.jpg", "/img/mangengking.webp"],
  },
  {
    id: 8,

    kelurahan: "Jetis",
    name: "Warung Makan Ngloro 8",
    description: "Nikmati hidangan khas Ngloro dengan cita rasa otentik",
    openingHours: ["Senin-Sabtu, 09:30 - 21:30"],
    address: "Jl. Rasa Ngloro No.8, Ngloro, Saptosari, Gunungkidul",
    latitude: -8.121,
    longitude: 110.131,
    thumbnail: "/img/rumah-makan-gkd.jpg",
    images: ["/img/rumah-makan-gkd.jpg", "/img/mangengking.webp"],
  },
  {
    id: 9,

    kelurahan: "Jetis",
    name: "Warung Makan Jetis 9",
    description: `
    The appreciative handling of food is central to us. This includes the almost complete utilization of food. As diverse as we humans are, so are our food needs. Our meals are therefore of the best quality, as often as possible homemade and carefully prepared to offer even people with food intolerances or allergies the highest pleasure.

The restaurant and guesthouse "fein & sein" are at home in the new building of the Schwarzsee Education & Health Center. The cozy ambience of the restaurant as well as the newly furnished guest rooms of the pension invite you to a relaxing stay in the unique region of the German-Freiburg Pre-Alps. In addition to 50 indoor seats, the restaurant "fein & sein" offers another 50 outdoor seats to enjoy the sun on the terrace in summer & winter. The little guests especially enjoy the outdoor playground and the garden.

Banquets, wedding events, team events, seminar and retreat catering are further services that can be booked at fein & sein.

Note: This text was translated by machine translation software and not by a human translator. It may contain translation errors.
    `,
    openingHours: ["Senin-Jumat, 10:00 - 22:00"],
    address: "Jl. Selera Jetis No.9, Jetis, Saptosari, Gunungkidul",
    latitude: -8.1158,
    longitude: 110.1258,
    thumbnail: "/img/rumah-makan-gkd.jpg",
    images: ["/img/rumah-makan-gkd.jpg", "/img/mangengking.webp"],
  },
  {
    id: 10,
    kelurahan: "Jetis",
    name: "Warung Makan Ngloro 10",
    description: "Nikmati hidangan khas Ngloro dengan cita rasa otentik",
    openingHours: ["Senin-Jumat, 10:00 - 22:00"],
    address: "Jl. Utama Ngloro No.10, Ngloro, Saptosari, Gunungkidul",
    latitude: -8.1228,
    longitude: 110.1328,
    thumbnail: "/img/rumah-makan-gkd.jpg",
    images: ["/img/rumah-makan-gkd.jpg", "/img/mangengking.webp"],
  },
  {
    id: 11,
    kelurahan: "Jetis",
    name: "Warung Makan Jetis 11",
    description: `
    The appreciative handling of food is central to us. This includes the almost complete utilization of food. As diverse as we humans are, so are our food needs. Our meals are therefore of the best quality, as often as possible homemade and carefully prepared to offer even people with food intolerances or allergies the highest pleasure.

The restaurant and guesthouse "fein & sein" are at home in the new building of the Schwarzsee Education & Health Center. The cozy ambience of the restaurant as well as the newly furnished guest rooms of the pension invite you to a relaxing stay in the unique region of the German-Freiburg Pre-Alps. In addition to 50 indoor seats, the restaurant "fein & sein" offers another 50 outdoor seats to enjoy the sun on the terrace in summer & winter. The little guests especially enjoy the outdoor playground and the garden.

Banquets, wedding events, team events, seminar and retreat catering are further services that can be booked at fein & sein.

Note: This text was translated by machine translation software and not by a human translator. It may contain translation errors.
    `,
    openingHours: ["Setiap hari, 09:00 - 21:00"],
    address: "Jl. Makan Enak No.11, Jetis, Saptosari, Gunungkidul",
    latitude: -8.1163,
    longitude: 110.1253,
    thumbnail: "/img/rumah-makan-gkd.jpg",
    images: ["/img/rumah-makan-gkd.jpg", "/img/mangengking.webp"],
  },
  {
    id: 12,
    kelurahan: "Jetis",
    name: "Warung Makan Ngloro 12",
    description: "Nikmati hidangan khas Ngloro dengan cita rasa otentik",
    openingHours: ["Senin-Sabtu, 09:30 - 21:30"],
    address: "Jl. Lezat Ngloro No.12, Ngloro, Saptosari, Gunungkidul",
    latitude: -8.123,
    longitude: 110.133,
    thumbnail: "/img/rumah-makan-gkd.jpg",
    images: ["/img/rumah-makan-gkd.jpg", "/img/mangengking.webp"],
  },
  {
    id: 13,
    kelurahan: "Jetis",
    name: "Warung Makan Jetis 13",
    description: `
    The appreciative handling of food is central to us. This includes the almost complete utilization of food. As diverse as we humans are, so are our food needs. Our meals are therefore of the best quality, as often as possible homemade and carefully prepared to offer even people with food intolerances or allergies the highest pleasure.

The restaurant and guesthouse "fein & sein" are at home in the new building of the Schwarzsee Education & Health Center. The cozy ambience of the restaurant as well as the newly furnished guest rooms of the pension invite you to a relaxing stay in the unique region of the German-Freiburg Pre-Alps. In addition to 50 indoor seats, the restaurant "fein & sein" offers another 50 outdoor seats to enjoy the sun on the terrace in summer & winter. The little guests especially enjoy the outdoor playground and the garden.

Banquets, wedding events, team events, seminar and retreat catering are further services that can be booked at fein & sein.

Note: This text was translated by machine translation software and not by a human translator. It may contain translation errors.
    `,
    openingHours: ["Senin-Jumat, 10:00 - 22:00"],
    address: "Jl. Rakyat Jetis No.13, Jetis, Saptosari, Gunungkidul",
    latitude: -8.1155,
    longitude: 110.1255,
    thumbnail: "/img/rumah-makan-gkd.jpg",
    images: ["/img/rumah-makan-gkd.jpg", "/img/mangengking.webp"],
  },
  {
    id: 14,
    kelurahan: "Jetis",
    name: "Warung Makan Ngloro 14",
    description: "Nikmati hidangan khas Ngloro dengan cita rasa otentik",
    openingHours: ["Senin-Jumat, 10:00 - 22:00"],
    address: "Jl. Asri Ngloro No.14, Ngloro, Saptosari, Gunungkidul",
    latitude: -8.1225,
    longitude: 110.1325,
    thumbnail: "/img/rumah-makan-gkd.jpg",
    images: ["/img/rumah-makan-gkd.jpg", "/img/mangengking.webp"],
  },
  {
    id: 15,
    kelurahan: "Jetis",
    name: "Warung Makan Jetis 15",
    description: `
    The appreciative handling of food is central to us. This includes the almost complete utilization of food. As diverse as we humans are, so are our food needs. Our meals are therefore of the best quality, as often as possible homemade and carefully prepared to offer even people with food intolerances or allergies the highest pleasure.

The restaurant and guesthouse "fein & sein" are at home in the new building of the Schwarzsee Education & Health Center. The cozy ambience of the restaurant as well as the newly furnished guest rooms of the pension invite you to a relaxing stay in the unique region of the German-Freiburg Pre-Alps. In addition to 50 indoor seats, the restaurant "fein & sein" offers another 50 outdoor seats to enjoy the sun on the terrace in summer & winter. The little guests especially enjoy the outdoor playground and the garden.

Banquets, wedding events, team events, seminar and retreat catering are further services that can be booked at fein & sein.

Note: This text was translated by machine translation software and not by a human translator. It may contain translation errors.
    `,
    openingHours: ["Setiap hari, 09:00 - 21:00"],
    address: "Jl. Pojok Rasa No.15, Jetis, Saptosari, Gunungkidul",
    latitude: -8.1167,
    longitude: 110.1257,
    thumbnail: "/img/rumah-makan-gkd.jpg",
    images: ["/img/rumah-makan-gkd.jpg", "/img/mangengking.webp"],
  },
  {
    id: 16,
    kelurahan: "Jetis",
    name: "Warung Makan Ngloro 16",
    description: "Nikmati hidangan khas Ngloro dengan cita rasa otentik",
    openingHours: ["Senin-Sabtu, 09:30 - 21:30"],
    address: "Jl. Pusat Rasa No.16, Ngloro, Saptosari, Gunungkidul",
    latitude: -8.1232,
    longitude: 110.1332,
    thumbnail: "/img/rumah-makan-gkd.jpg",
    images: ["/img/rumah-makan-gkd.jpg", "/img/mangengking.webp"],
  },
  {
    id: 17,
    kelurahan: "Jetis",
    name: "Warung Makan Jetis 17",
    description: `
    The appreciative handling of food is central to us. This includes the almost complete utilization of food. As diverse as we humans are, so are our food needs. Our meals are therefore of the best quality, as often as possible homemade and carefully prepared to offer even people with food intolerances or allergies the highest pleasure.

The restaurant and guesthouse "fein & sein" are at home in the new building of the Schwarzsee Education & Health Center. The cozy ambience of the restaurant as well as the newly furnished guest rooms of the pension invite you to a relaxing stay in the unique region of the German-Freiburg Pre-Alps. In addition to 50 indoor seats, the restaurant "fein & sein" offers another 50 outdoor seats to enjoy the sun on the terrace in summer & winter. The little guests especially enjoy the outdoor playground and the garden.

Banquets, wedding events, team events, seminar and retreat catering are further services that can be booked at fein & sein.

Note: This text was translated by machine translation software and not by a human translator. It may contain translation errors.
    `,
    openingHours: ["Senin-Jumat, 10:00 - 22:00"],
    address: "Jl. Santap Jetis No.17, Jetis, Saptosari, Gunungkidul",
    latitude: -8.1152,
    longitude: 110.1252,
    thumbnail: "/img/rumah-makan-gkd.jpg",
    images: ["/img/rumah-makan-gkd.jpg", "/img/mangengking.webp"],
  },
  {
    id: 18,
    kelurahan: "Jetis",
    name: "Warung Makan Ngloro 18",
    description: "Nikmati hidangan khas Ngloro dengan cita rasa otentik",
    openingHours: ["Senin-Jumat, 10:00 - 22:00"],
    address: "Jl. Harmoni Ngloro No.18, Ngloro, Saptosari, Gunungkidul",
    latitude: -8.1237,
    longitude: 110.1337,
    thumbnail: "/img/rumah-makan-gkd.jpg",
    images: ["/img/rumah-makan-gkd.jpg", "/img/mangengking.webp"],
  },
  {
    id: 19,
    kelurahan: "Jetis",
    name: "Warung Makan Jetis 19",
    description: `
    The appreciative handling of food is central to us. This includes the almost complete utilization of food. As diverse as we humans are, so are our food needs. Our meals are therefore of the best quality, as often as possible homemade and carefully prepared to offer even people with food intolerances or allergies the highest pleasure.

The restaurant and guesthouse "fein & sein" are at home in the new building of the Schwarzsee Education & Health Center. The cozy ambience of the restaurant as well as the newly furnished guest rooms of the pension invite you to a relaxing stay in the unique region of the German-Freiburg Pre-Alps. In addition to 50 indoor seats, the restaurant "fein & sein" offers another 50 outdoor seats to enjoy the sun on the terrace in summer & winter. The little guests especially enjoy the outdoor playground and the garden.

Banquets, wedding events, team events, seminar and retreat catering are further services that can be booked at fein & sein.

Note: This text was translated by machine translation software and not by a human translator. It may contain translation errors.
    `,
    openingHours: ["Setiap hari, 09:00 - 21:00"],
    address: "Jl. Selera Rakyat No.19, Jetis, Saptosari, Gunungkidul",
    latitude: -8.116,
    longitude: 110.125,
    thumbnail: "/img/rumah-makan-gkd.jpg",
    images: ["/img/rumah-makan-gkd.jpg", "/img/mangengking.webp"],
  },
  {
    id: 20,
    kelurahan: "Jetis",
    name: "Warung Makan Ngloro 20",
    description: "Nikmati hidangan khas Ngloro dengan cita rasa otentik",
    openingHours: ["Senin-Sabtu, 09:30 - 21:30"],
    address: "Jl. Utama Rasa No.20, Ngloro, Saptosari, Gunungkidul",
    latitude: -8.1222,
    longitude: 110.1322,
    thumbnail: "/img/rumah-makan-gkd.jpg",
    images: ["/img/rumah-makan-gkd.jpg", "/img/mangengking.webp"],
  },
  {
    id: 21,
    kelurahan: "Jetis",
    name: "Warung Makan Jetis 21",
    description: `
    The appreciative handling of food is central to us. This includes the almost complete utilization of food. As diverse as we humans are, so are our food needs. Our meals are therefore of the best quality, as often as possible homemade and carefully prepared to offer even people with food intolerances or allergies the highest pleasure.

The restaurant and guesthouse "fein & sein" are at home in the new building of the Schwarzsee Education & Health Center. The cozy ambience of the restaurant as well as the newly furnished guest rooms of the pension invite you to a relaxing stay in the unique region of the German-Freiburg Pre-Alps. In addition to 50 indoor seats, the restaurant "fein & sein" offers another 50 outdoor seats to enjoy the sun on the terrace in summer & winter. The little guests especially enjoy the outdoor playground and the garden.

Banquets, wedding events, team events, seminar and retreat catering are further services that can be booked at fein & sein.

Note: This text was translated by machine translation software and not by a human translator. It may contain translation errors.
    `,
    openingHours: ["Senin-Jumat, 10:00 - 22:00"],
    address: "Jl. Makan & Rasa No.21, Jetis, Saptosari, Gunungkidul",
    latitude: -8.1153,
    longitude: 110.1253,
    thumbnail: "/img/rumah-makan-gkd.jpg",
    images: ["/img/rumah-makan-gkd.jpg", "/img/mangengking.webp"],
  },
  {
    id: 22,
    kelurahan: "Jetis",
    name: "Warung Makan Ngloro 22",
    description: "Nikmati hidangan khas Ngloro dengan cita rasa otentik",
    openingHours: ["Senin-Jumat, 10:00 - 22:00"],
    address: "Jl. Rasa Harmoni No.22, Ngloro, Saptosari, Gunungkidul",
    latitude: -8.1231,
    longitude: 110.1331,
    thumbnail: "/img/rumah-makan-gkd.jpg",
    images: ["/img/rumah-makan-gkd.jpg", "/img/mangengking.webp"],
  },
  {
    id: 23,
    kelurahan: "Jetis",
    name: "Warung Makan Jetis 23",
    description: `
    The appreciative handling of food is central to us. This includes the almost complete utilization of food. As diverse as we humans are, so are our food needs. Our meals are therefore of the best quality, as often as possible homemade and carefully prepared to offer even people with food intolerances or allergies the highest pleasure.

The restaurant and guesthouse "fein & sein" are at home in the new building of the Schwarzsee Education & Health Center. The cozy ambience of the restaurant as well as the newly furnished guest rooms of the pension invite you to a relaxing stay in the unique region of the German-Freiburg Pre-Alps. In addition to 50 indoor seats, the restaurant "fein & sein" offers another 50 outdoor seats to enjoy the sun on the terrace in summer & winter. The little guests especially enjoy the outdoor playground and the garden.

Banquets, wedding events, team events, seminar and retreat catering are further services that can be booked at fein & sein.

Note: This text was translated by machine translation software and not by a human translator. It may contain translation errors.
    `,
    openingHours: ["Setiap hari, 09:00 - 21:00"],
    address: "Jl. Nikmat Jetis No.23, Jetis, Saptosari, Gunungkidul",
    latitude: -8.1161,
    longitude: 110.1251,
    thumbnail: "/img/rumah-makan-gkd.jpg",
    images: ["/img/rumah-makan-gkd.jpg", "/img/mangengking.webp"],
  },
  {
    id: 24,
    kelurahan: "Jetis",
    name: "Warung Makan Ngloro 24",
    description: "Nikmati hidangan khas Ngloro dengan cita rasa otentik",
    openingHours: ["Senin-Sabtu, 09:30 - 21:30"],
    address: "Jl. Mega Rasa No.24, Ngloro, Saptosari, Gunungkidul",
    latitude: -8.1233,
    longitude: 110.1333,
    thumbnail: "/img/rumah-makan-gkd.jpg",
    images: ["/img/rumah-makan-gkd.jpg", "/img/mangengking.webp"],
  },
  {
    id: 25,
    kelurahan: "Jetis",
    name: "Warung Makan Jetis 25",
    description: `
    The appreciative handling of food is central to us. This includes the almost complete utilization of food. As diverse as we humans are, so are our food needs. Our meals are therefore of the best quality, as often as possible homemade and carefully prepared to offer even people with food intolerances or allergies the highest pleasure.

The restaurant and guesthouse "fein & sein" are at home in the new building of the Schwarzsee Education & Health Center. The cozy ambience of the restaurant as well as the newly furnished guest rooms of the pension invite you to a relaxing stay in the unique region of the German-Freiburg Pre-Alps. In addition to 50 indoor seats, the restaurant "fein & sein" offers another 50 outdoor seats to enjoy the sun on the terrace in summer & winter. The little guests especially enjoy the outdoor playground and the garden.

Banquets, wedding events, team events, seminar and retreat catering are further services that can be booked at fein & sein.

Note: This text was translated by machine translation software and not by a human translator. It may contain translation errors.
    `,
    openingHours: ["Senin-Jumat, 10:00 - 22:00"],
    address: "Jl. Rakyat Jetis No.25, Jetis, Saptosari, Gunungkidul",
    latitude: -8.1157,
    longitude: 110.1257,
    thumbnail: "/img/rumah-makan-gkd.jpg",
    images: ["/img/rumah-makan-gkd.jpg", "/img/mangengking.webp"],
  },
  {
    id: 26,
    kelurahan: "Jetis",
    name: "Warung Makan Ngloro 26",
    description: "Nikmati hidangan khas Ngloro dengan cita rasa otentik",
    openingHours: ["Senin-Jumat, 10:00 - 22:00"],
    address: "Jl. Pusat Nikmat No.26, Ngloro, Saptosari, Gunungkidul",
    latitude: -8.1227,
    longitude: 110.1327,
    thumbnail: "/img/rumah-makan-gkd.jpg",
    images: ["/img/rumah-makan-gkd.jpg", "/img/mangengking.webp"],
  },
  {
    id: 27,
    kelurahan: "Jetis",
    name: "Warung Makan Jetis 27",
    description: `
    The appreciative handling of food is central to us. This includes the almost complete utilization of food. As diverse as we humans are, so are our food needs. Our meals are therefore of the best quality, as often as possible homemade and carefully prepared to offer even people with food intolerances or allergies the highest pleasure.

The restaurant and guesthouse "fein & sein" are at home in the new building of the Schwarzsee Education & Health Center. The cozy ambience of the restaurant as well as the newly furnished guest rooms of the pension invite you to a relaxing stay in the unique region of the German-Freiburg Pre-Alps. In addition to 50 indoor seats, the restaurant "fein & sein" offers another 50 outdoor seats to enjoy the sun on the terrace in summer & winter. The little guests especially enjoy the outdoor playground and the garden.

Banquets, wedding events, team events, seminar and retreat catering are further services that can be booked at fein & sein.

Note: This text was translated by machine translation software and not by a human translator. It may contain translation errors.
    `,
    openingHours: ["Setiap hari, 09:00 - 21:00"],
    address: "Jl. Legenda Jetis No.27, Jetis, Saptosari, Gunungkidul",
    latitude: -8.1164,
    longitude: 110.1254,
    thumbnail: "/img/rumah-makan-gkd.jpg",
    images: ["/img/rumah-makan-gkd.jpg", "/img/mangengking.webp"],
  },
  {
    id: 28,
    kelurahan: "Jetis",
    name: "Warung Makan Ngloro 28",
    description: "Nikmati hidangan khas Ngloro dengan cita rasa otentik",
    openingHours: ["Senin-Sabtu, 09:30 - 21:30"],
    address: "Jl. Pesona Ngloro No.28, Ngloro, Saptosari, Gunungkidul",
    latitude: -8.1239,
    longitude: 110.1339,
    thumbnail: "/img/rumah-makan-gkd.jpg",
    images: ["/img/rumah-makan-gkd.jpg", "/img/mangengking.webp"],
  },
  {
    id: 29,
    kelurahan: "Jetis",
    name: "Warung Makan Jetis 29",
    description: `
    The appreciative handling of food is central to us. This includes the almost complete utilization of food. As diverse as we humans are, so are our food needs. Our meals are therefore of the best quality, as often as possible homemade and carefully prepared to offer even people with food intolerances or allergies the highest pleasure.

The restaurant and guesthouse "fein & sein" are at home in the new building of the Schwarzsee Education & Health Center. The cozy ambience of the restaurant as well as the newly furnished guest rooms of the pension invite you to a relaxing stay in the unique region of the German-Freiburg Pre-Alps. In addition to 50 indoor seats, the restaurant "fein & sein" offers another 50 outdoor seats to enjoy the sun on the terrace in summer & winter. The little guests especially enjoy the outdoor playground and the garden.

Banquets, wedding events, team events, seminar and retreat catering are further services that can be booked at fein & sein.

Note: This text was translated by machine translation software and not by a human translator. It may contain translation errors.
    `,
    openingHours: ["Senin-Jumat, 10:00 - 22:00"],
    address: "Jl. Selera Abadi No.29, Jetis, Saptosari, Gunungkidul",
    latitude: -8.1159,
    longitude: 110.1259,
    thumbnail: "/img/rumah-makan-gkd.jpg",
    images: ["/img/rumah-makan-gkd.jpg", "/img/mangengking.webp"],
  },
  {
    id: 30,
    kelurahan: "Jetis",
    name: "Warung Makan Ngloro 30",
    description: "Nikmati hidangan khas Ngloro dengan cita rasa otentik",
    openingHours: ["Senin-Jumat, 10:00 - 22:00"],
    address: "Jl. Harmoni Abadi No.30, Ngloro, Saptosari, Gunungkidul",
    latitude: -8.1229,
    longitude: 110.1329,
    thumbnail: "/img/rumah-makan-gkd.jpg",
    images: ["/img/rumah-makan-gkd.jpg", "/img/mangengking.webp"],
  },
  {
    id: 31,
    kelurahan: "Jetis",
    name: "Warung Makan Jetis 31",
    description: `
    The appreciative handling of food is central to us. This includes the almost complete utilization of food. As diverse as we humans are, so are our food needs. Our meals are therefore of the best quality, as often as possible homemade and carefully prepared to offer even people with food intolerances or allergies the highest pleasure.

The restaurant and guesthouse "fein & sein" are at home in the new building of the Schwarzsee Education & Health Center. The cozy ambience of the restaurant as well as the newly furnished guest rooms of the pension invite you to a relaxing stay in the unique region of the German-Freiburg Pre-Alps. In addition to 50 indoor seats, the restaurant "fein & sein" offers another 50 outdoor seats to enjoy the sun on the terrace in summer & winter. The little guests especially enjoy the outdoor playground and the garden.

Banquets, wedding events, team events, seminar and retreat catering are further services that can be booked at fein & sein.

Note: This text was translated by machine translation software and not by a human translator. It may contain translation errors.
    `,
    openingHours: ["Setiap hari, 09:00 - 21:00"],
    address: "Jl. Nikmat Selalu No.31, Jetis, Saptosari, Gunungkidul",
    latitude: -8.1166,
    longitude: 110.1256,
    thumbnail: "/img/rumah-makan-gkd.jpg",
    images: ["/img/rumah-makan-gkd.jpg", "/img/mangengking.webp"],
  },
  {
    id: 32,
    kelurahan: "Jetis",
    name: "Warung Makan Ngloro 32",
    description: "Nikmati hidangan khas Ngloro dengan cita rasa otentik",
    openingHours: ["Senin-Sabtu, 09:30 - 21:30"],
    address: "Jl. Rasa Selalu No.32, Ngloro, Saptosari, Gunungkidul",
    latitude: -8.1234,
    longitude: 110.1334,
    thumbnail: "/img/rumah-makan-gkd.jpg",
    images: ["/img/rumah-makan-gkd.jpg", "/img/mangengking.webp"],
  },
  {
    id: 33,
    kelurahan: "Jetis",
    name: "Warung Makan Jetis 33",
    description: `
    The appreciative handling of food is central to us. This includes the almost complete utilization of food. As diverse as we humans are, so are our food needs. Our meals are therefore of the best quality, as often as possible homemade and carefully prepared to offer even people with food intolerances or allergies the highest pleasure.

The restaurant and guesthouse "fein & sein" are at home in the new building of the Schwarzsee Education & Health Center. The cozy ambience of the restaurant as well as the newly furnished guest rooms of the pension invite you to a relaxing stay in the unique region of the German-Freiburg Pre-Alps. In addition to 50 indoor seats, the restaurant "fein & sein" offers another 50 outdoor seats to enjoy the sun on the terrace in summer & winter. The little guests especially enjoy the outdoor playground and the garden.

Banquets, wedding events, team events, seminar and retreat catering are further services that can be booked at fein & sein.

Note: This text was translated by machine translation software and not by a human translator. It may contain translation errors.
    `,
    openingHours: ["Senin-Jumat, 10:00 - 22:00"],
    address: "Jl. Cita Rasa Abadi No.33, Jetis, Saptosari, Gunungkidul",
    latitude: -8.1154,
    longitude: 110.1254,
    thumbnail: "/img/rumah-makan-gkd.jpg",
    images: ["/img/rumah-makan-gkd.jpg", "/img/mangengking.webp"],
  },
  {
    id: 34,
    kelurahan: "Jetis",
    name: "Warung Makan Ngloro 34",
    description: "Nikmati hidangan khas Ngloro dengan cita rasa otentik",
    openingHours: ["Senin-Jumat, 10:00 - 22:00"],
    address: "Jl. Utama Sejati No.34, Ngloro, Saptosari, Gunungkidul",
    latitude: -8.1223,
    longitude: 110.1323,
    thumbnail: "/img/rumah-makan-gkd.jpg",
    images: ["/img/rumah-makan-gkd.jpg", "/img/mangengking.webp"],
  },
  {
    id: 35,
    kelurahan: "Jetis",
    name: "Warung Makan Jetis 35",
    description: `
    The appreciative handling of food is central to us. This includes the almost complete utilization of food. As diverse as we humans are, so are our food needs. Our meals are therefore of the best quality, as often as possible homemade and carefully prepared to offer even people with food intolerances or allergies the highest pleasure.

The restaurant and guesthouse "fein & sein" are at home in the new building of the Schwarzsee Education & Health Center. The cozy ambience of the restaurant as well as the newly furnished guest rooms of the pension invite you to a relaxing stay in the unique region of the German-Freiburg Pre-Alps. In addition to 50 indoor seats, the restaurant "fein & sein" offers another 50 outdoor seats to enjoy the sun on the terrace in summer & winter. The little guests especially enjoy the outdoor playground and the garden.

Banquets, wedding events, team events, seminar and retreat catering are further services that can be booked at fein & sein.

Note: This text was translated by machine translation software and not by a human translator. It may contain translation errors.
    `,
    openingHours: ["Setiap hari, 09:00 - 21:00"],
    address: "Jl. Rakyat Sejati No.35, Jetis, Saptosari, Gunungkidul",
    latitude: -8.1168,
    longitude: 110.1258,
    thumbnail: "/img/rumah-makan-gkd.jpg",
    images: ["/img/rumah-makan-gkd.jpg", "/img/mangengking.webp"],
  },
  {
    id: 36,
    kelurahan: "Jetis",
    name: "Warung Makan Ngloro 36",
    description: "Nikmati hidangan khas Ngloro dengan cita rasa otentik",
    openingHours: ["Senin-Sabtu, 09:30 - 21:30"],
    address: "Jl. Mega Sejati No.36, Ngloro, Saptosari, Gunungkidul",
    latitude: -8.1236,
    longitude: 110.1336,
    thumbnail: "/img/rumah-makan-gkd.jpg",
    images: ["/img/rumah-makan-gkd.jpg", "/img/mangengking.webp"],
  },
  {
    id: 37,
    kelurahan: "Jetis",
    name: "Warung Makan Jetis 37",
    description: `
    The appreciative handling of food is central to us. This includes the almost complete utilization of food. As diverse as we humans are, so are our food needs. Our meals are therefore of the best quality, as often as possible homemade and carefully prepared to offer even people with food intolerances or allergies the highest pleasure.

The restaurant and guesthouse "fein & sein" are at home in the new building of the Schwarzsee Education & Health Center. The cozy ambience of the restaurant as well as the newly furnished guest rooms of the pension invite you to a relaxing stay in the unique region of the German-Freiburg Pre-Alps. In addition to 50 indoor seats, the restaurant "fein & sein" offers another 50 outdoor seats to enjoy the sun on the terrace in summer & winter. The little guests especially enjoy the outdoor playground and the garden.

Banquets, wedding events, team events, seminar and retreat catering are further services that can be booked at fein & sein.

Note: This text was translated by machine translation software and not by a human translator. It may contain translation errors.
    `,
    openingHours: ["Senin-Jumat, 10:00 - 22:00"],
    address: "Jl. Selera Rakyat Sejati No.37, Jetis, Saptosari, Gunungkidul",
    latitude: -8.1151,
    longitude: 110.1251,
    thumbnail: "/img/rumah-makan-gkd.jpg",
    images: ["/img/rumah-makan-gkd.jpg", "/img/mangengking.webp"],
  },
  {
    id: 38,
    kelurahan: "Jetis",
    name: "Warung Makan Ngloro 38",
    description: "Nikmati hidangan khas Ngloro dengan cita rasa otentik",
    openingHours: ["Senin-Jumat, 10:00 - 22:00"],
    address: "Jl. Utama Harmoni No.38, Ngloro, Saptosari, Gunungkidul",
    latitude: -8.1221,
    longitude: 110.1321,
    thumbnail: "/img/rumah-makan-gkd.jpg",
    images: ["/img/rumah-makan-gkd.jpg", "/img/mangengking.webp"],
  },
  {
    id: 39,
    kelurahan: "Jetis",
    name: "Warung Makan Jetis 39",
    description: `
    The appreciative handling of food is central to us. This includes the almost complete utilization of food. As diverse as we humans are, so are our food needs. Our meals are therefore of the best quality, as often as possible homemade and carefully prepared to offer even people with food intolerances or allergies the highest pleasure.

The restaurant and guesthouse "fein & sein" are at home in the new building of the Schwarzsee Education & Health Center. The cozy ambience of the restaurant as well as the newly furnished guest rooms of the pension invite you to a relaxing stay in the unique region of the German-Freiburg Pre-Alps. In addition to 50 indoor seats, the restaurant "fein & sein" offers another 50 outdoor seats to enjoy the sun on the terrace in summer & winter. The little guests especially enjoy the outdoor playground and the garden.

Banquets, wedding events, team events, seminar and retreat catering are further services that can be booked at fein & sein.

Note: This text was translated by machine translation software and not by a human translator. It may contain translation errors.
    `,
    openingHours: ["Setiap hari, 09:00 - 21:00"],
    address: "Jl. Nikmat Harmoni No.39, Jetis, Saptosari, Gunungkidul",
    latitude: -8.1162,
    longitude: 110.1252,
    thumbnail: "/img/rumah-makan-gkd.jpg",
    images: ["/img/rumah-makan-gkd.jpg", "/img/mangengking.webp"],
  },
  {
    id: 40,
    kelurahan: "Jetis",
    name: "Warung Makan Ngloro 40",
    description: "Nikmati hidangan khas Ngloro dengan cita rasa otentik",
    openingHours: ["Senin-Sabtu, 09:30 - 21:30"],
    address: "Jl. Rasa Harmoni Sejati No.40, Ngloro, Saptosari, Gunungkidul",
    latitude: -8.1238,
    longitude: 110.1338,
    thumbnail: "/img/rumah-makan-gkd.jpg",
    images: ["/img/rumah-makan-gkd.jpg", "/img/mangengking.webp"],
  },
  {
    id: 41,
    kelurahan: "Jetis",
    name: "Warung Makan Jetis 41",
    description: `
    The appreciative handling of food is central to us. This includes the almost complete utilization of food. As diverse as we humans are, so are our food needs. Our meals are therefore of the best quality, as often as possible homemade and carefully prepared to offer even people with food intolerances or allergies the highest pleasure.

The restaurant and guesthouse "fein & sein" are at home in the new building of the Schwarzsee Education & Health Center. The cozy ambience of the restaurant as well as the newly furnished guest rooms of the pension invite you to a relaxing stay in the unique region of the German-Freiburg Pre-Alps. In addition to 50 indoor seats, the restaurant "fein & sein" offers another 50 outdoor seats to enjoy the sun on the terrace in summer & winter. The little guests especially enjoy the outdoor playground and the garden.

Banquets, wedding events, team events, seminar and retreat catering are further services that can be booked at fein & sein.

Note: This text was translated by machine translation software and not by a human translator. It may contain translation errors.
    `,
    openingHours: ["Senin-Jumat, 10:00 - 22:00"],
    address: "Jl. Makan Sejati No.41, Jetis, Saptosari, Gunungkidul",
    latitude: -8.1156,
    longitude: 110.1256,
    thumbnail: "/img/rumah-makan-gkd.jpg",
    images: ["/img/rumah-makan-gkd.jpg", "/img/mangengking.webp"],
  },
  {
    id: 42,
    kelurahan: "Jetis",
    name: "Warung Makan Ngloro 42",
    description: "Nikmati hidangan khas Ngloro dengan cita rasa otentik",
    openingHours: ["Senin-Jumat, 10:00 - 22:00"],
    address: "Jl. Utama Sejati No.42, Ngloro, Saptosari, Gunungkidul",
    latitude: -8.1224,
    longitude: 110.1324,
    thumbnail: "/img/rumah-makan-gkd.jpg",
    images: ["/img/rumah-makan-gkd.jpg", "/img/mangengking.webp"],
  },
  {
    id: 43,
    kelurahan: "Jetis",
    name: "Warung Makan Jetis 43",
    description: `
    The appreciative handling of food is central to us. This includes the almost complete utilization of food. As diverse as we humans are, so are our food needs. Our meals are therefore of the best quality, as often as possible homemade and carefully prepared to offer even people with food intolerances or allergies the highest pleasure.

The restaurant and guesthouse "fein & sein" are at home in the new building of the Schwarzsee Education & Health Center. The cozy ambience of the restaurant as well as the newly furnished guest rooms of the pension invite you to a relaxing stay in the unique region of the German-Freiburg Pre-Alps. In addition to 50 indoor seats, the restaurant "fein & sein" offers another 50 outdoor seats to enjoy the sun on the terrace in summer & winter. The little guests especially enjoy the outdoor playground and the garden.

Banquets, wedding events, team events, seminar and retreat catering are further services that can be booked at fein & sein.

Note: This text was translated by machine translation software and not by a human translator. It may contain translation errors.
    `,
    openingHours: ["Setiap hari, 09:00 - 21:00"],
    address: "Jl. Rasa Abadi No.43, Jetis, Saptosari, Gunungkidul",
    latitude: -8.1169,
    longitude: 110.1259,
    thumbnail: "/img/rumah-makan-gkd.jpg",
    images: ["/img/rumah-makan-gkd.jpg", "/img/mangengking.webp"],
  },
  {
    id: 44,
    kelurahan: "Jetis",
    name: "Warung Makan Ngloro 44",
    description: "Nikmati hidangan khas Ngloro dengan cita rasa otentik",
    openingHours: ["Senin-Sabtu, 09:30 - 21:30"],
    address: "Jl. Cita Rasa Sejati No.44, Ngloro, Saptosari, Gunungkidul",
    latitude: -8.1235,
    longitude: 110.1335,
    thumbnail: "/img/rumah-makan-gkd.jpg",
    images: ["/img/rumah-makan-gkd.jpg", "/img/mangengking.webp"],
  },
  {
    id: 45,
    kelurahan: "Jetis",
    name: "Warung Makan Jetis 45",
    description: `
    The appreciative handling of food is central to us. This includes the almost complete utilization of food. As diverse as we humans are, so are our food needs. Our meals are therefore of the best quality, as often as possible homemade and carefully prepared to offer even people with food intolerances or allergies the highest pleasure.

The restaurant and guesthouse "fein & sein" are at home in the new building of the Schwarzsee Education & Health Center. The cozy ambience of the restaurant as well as the newly furnished guest rooms of the pension invite you to a relaxing stay in the unique region of the German-Freiburg Pre-Alps. In addition to 50 indoor seats, the restaurant "fein & sein" offers another 50 outdoor seats to enjoy the sun on the terrace in summer & winter. The little guests especially enjoy the outdoor playground and the garden.

Banquets, wedding events, team events, seminar and retreat catering are further services that can be booked at fein & sein.

Note: This text was translated by machine translation software and not by a human translator. It may contain translation errors.
    `,
    openingHours: ["Senin-Jumat, 10:00 - 22:00"],
    address: "Jl. Legenda Sejati No.45, Jetis, Saptosari, Gunungkidul",
    latitude: -8.1158,
    longitude: 110.1258,
    thumbnail: "/img/rumah-makan-gkd.jpg",
    images: ["/img/rumah-makan-gkd.jpg", "/img/mangengking.webp"],
  },
  {
    id: 46,
    kelurahan: "Jetis",
    name: "Warung Makan Ngloro 46",
    description: "Nikmati hidangan khas Ngloro dengan cita rasa otentik",
    openingHours: ["Senin-Jumat, 10:00 - 22:00"],
    address: "Jl. Pusat Legenda No.46, Ngloro, Saptosari, Gunungkidul",
    latitude: -8.1226,
    longitude: 110.1326,
    thumbnail: "/img/rumah-makan-gkd.jpg",
    images: ["/img/rumah-makan-gkd.jpg", "/img/mangengking.webp"],
  },
  {
    id: 47,
    kelurahan: "Jetis",
    name: "Warung Makan Jetis 47",
    description: `
    The appreciative handling of food is central to us. This includes the almost complete utilization of food. As diverse as we humans are, so are our food needs. Our meals are therefore of the best quality, as often as possible homemade and carefully prepared to offer even people with food intolerances or allergies the highest pleasure.

The restaurant and guesthouse "fein & sein" are at home in the new building of the Schwarzsee Education & Health Center. The cozy ambience of the restaurant as well as the newly furnished guest rooms of the pension invite you to a relaxing stay in the unique region of the German-Freiburg Pre-Alps. In addition to 50 indoor seats, the restaurant "fein & sein" offers another 50 outdoor seats to enjoy the sun on the terrace in summer & winter. The little guests especially enjoy the outdoor playground and the garden.

Banquets, wedding events, team events, seminar and retreat catering are further services that can be booked at fein & sein.

Note: This text was translated by machine translation software and not by a human translator. It may contain translation errors.
    `,
    openingHours: ["Setiap hari, 09:00 - 21:00"],
    address: "Jl. Nikmat Legenda No.47, Jetis, Saptosari, Gunungkidul",
    latitude: -8.117,
    longitude: 110.125,
    thumbnail: "/img/rumah-makan-gkd.jpg",
    images: ["/img/rumah-makan-gkd.jpg", "/img/mangengking.webp"],
  },
  {
    id: 48,
    kelurahan: "Jetis",
    name: "Warung Makan Ngloro 48",
    description: "Nikmati hidangan khas Ngloro dengan cita rasa otentik",
    openingHours: ["Senin-Sabtu, 09:30 - 21:30"],
    address: "Jl. Sejati Harmoni No.48, Ngloro, Saptosari, Gunungkidul",
    latitude: -8.1238,
    longitude: 110.1338,
    thumbnail: "/img/rumah-makan-gkd.jpg",
    images: ["/img/rumah-makan-gkd.jpg", "/img/mangengking.webp"],
  },
  {
    id: 49,
    kelurahan: "Jetis",
    name: "Warung Makan Jetis 49",
    description: `
    The appreciative handling of food is central to us. This includes the almost complete utilization of food. As diverse as we humans are, so are our food needs. Our meals are therefore of the best quality, as often as possible homemade and carefully prepared to offer even people with food intolerances or allergies the highest pleasure.

The restaurant and guesthouse "fein & sein" are at home in the new building of the Schwarzsee Education & Health Center. The cozy ambience of the restaurant as well as the newly furnished guest rooms of the pension invite you to a relaxing stay in the unique region of the German-Freiburg Pre-Alps. In addition to 50 indoor seats, the restaurant "fein & sein" offers another 50 outdoor seats to enjoy the sun on the terrace in summer & winter. The little guests especially enjoy the outdoor playground and the garden.

Banquets, wedding events, team events, seminar and retreat catering are further services that can be booked at fein & sein.

Note: This text was translated by machine translation software and not by a human translator. It may contain translation errors.
    `,
    openingHours: ["Senin-Jumat, 10:00 - 22:00"],
    address: "Jl. Rasa Sejati No.49, Jetis, Saptosari, Gunungkidul",
    latitude: -8.1162,
    longitude: 110.1252,
    thumbnail: "/img/rumah-makan-gkd.jpg",
    images: ["/img/rumah-makan-gkd.jpg", "/img/mangengking.webp"],
  },
  {
    id: 50,
    kelurahan: "Jetis",
    name: "Warung Makan Ngloro 50",
    description: "Nikmati hidangan khas Ngloro dengan cita rasa otentik",
    openingHours: ["Senin-Jumat, 10:00 - 22:00"],
    address: "Jl. Utama Sejati No.50, Ngloro, Saptosari, Gunungkidul",
    latitude: -8.123,
    longitude: 110.133,
    thumbnail: "/img/rumah-makan-gkd.jpg",
    images: ["/img/rumah-makan-gkd.jpg", "/img/mangengking.webp"],
  },
];

const baseImages = restaurantsData.slice(0, 4).map((r) => ({
  thumbnail: r.thumbnail,
  images: r.images,
}));

restaurantsData = restaurantsData.map((restaurant, index) => {
  if (index < 4) return restaurant;
  const baseIndex = index % 4;
  return {
    ...restaurant,
    thumbnail: baseImages[baseIndex].thumbnail,
    images: baseImages[baseIndex].images,
  };
});

restaurantsData = restaurantsData.map((restaurant) => {
  const { latitude, longitude } = generateLatLonSaptosari();
  return {
    ...restaurant,
    latitude,
    longitude,
    kontak: {
      namaUsaha: restaurant.name,
      namaPemilik: "Ibu Siti",
      alamat: restaurant.address,
      noTelp: "08123456789",
      email:
        "contact@" + restaurant.name.toLowerCase().replaceAll(/\s/g, "") + ".com",
    },
    masakan: [Cuisine.Asian],
    fasilitas: ["Tempat Parkir", "Teras"],
  };
});

export enum Cuisine {
  Asian,
  Chinese,
  Grills,
  International,
  Italian,
  Japanese,
  Noodles,
  Seafood,
  Thai,
  Vegetarian,
}

// enum cuisine to string

export function cuisineString(cuisine: Cuisine): string {
  switch (cuisine) {
    case Cuisine.Asian:
      return "Asian";
    case Cuisine.Chinese:
      return "Chinese";
    case Cuisine.Grills:
      return "Grills";
    case Cuisine.International:
      return "International";
    case Cuisine.Italian:
      return "Italian";
    case Cuisine.Japanese:
      return "Japanese";
    case Cuisine.Noodles:
      return "Noodles";
    case Cuisine.Seafood:
      return "Seafood";
    case Cuisine.Thai:
      return "Thai";
    case Cuisine.Vegetarian:
      return "Vegetarian";
  }
}

// month index to indonesian month name
export function monthToIndonesianMonthName(monthIndex: number): string {
  switch (monthIndex) {
    case 0:
      return "Januari";
    case 1:
      return "Februari";
    case 2:
      return "Maret";
    case 3:
      return "April";
    case 4:
      return "Mei";
    case 5:
      return "Juni";
    case 6:
      return "Juli";
    case 7:
      return "Agustus";
    case 8:
      return "September";
    case 9:
      return "Oktober";
    case 10:
      return "November";
    case 11:
      return "Desember";
    default:
      return "";
  }
}
