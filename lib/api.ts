import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore, query } from "firebase/firestore";
import {
  Article,
  Destination,
  EventSaptosari,
  ObjectLocation,
  UMKMCard,
} from "@/type/type";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const umkmFetcher = async function () {
  let items: ObjectLocation[] = [];
  const q = query(collection(db, "umkm"));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    console.log(doc.id, " => ", doc.data());
    items.push({
      name: doc.data().title,
      latitude: doc.data().latitude,
      longitude: doc.data().longitude,
      hrefLink: `/umkm/${doc.data().title}`,
      thumbnail: doc.data().image,
      summary: doc.data().description,
      address: doc.data().kontak.alamat,
    } as ObjectLocation);
  });

  return items;
};

const umkmFetcherCard = async function () {
  let items: UMKMCard[] = [];
  const q = query(collection(db, "umkm"));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    console.log(doc.id, " => ", doc.data());
    items.push({
      title: doc.data().title,
      latitude: doc.data().latitude,
      longitude: doc.data().longitude,
      hrefLink: `/umkm/${doc.data().title}`,
      image: doc.data().image,
      summary: doc.data().summary,
      address: doc.data().kontak?.alamat,
      alt: doc.data().alt,
      description: doc.data().description,
      dusun: doc.data().dusun,
      images: doc.data().images,
      kontak: doc.data().kontak,
      products: doc.data().products,
      pemilik: doc.data().pemilik,
      kategoriUsaha: doc.data().kategoriUsaha,
      rangeHarga: doc.data().rangeHarga,
      googleMapsLink: doc.data().googleMapsLink,
      id: doc.id,
    } as UMKMCard);
  });
  return items;
};

const fetchArticles = async function () {
  let items: Article[] = [];
  const q = query(collection(db, "artikel"));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    items.push({
      id: doc.id,
      title: doc.data().title,
      content: doc.data().content,
      summary: doc.data().summary,
      thumbnail: doc.data().thumbnail,
      images: doc.data().images,
      postDate: doc.data().postDate.toDate(),
      penulis: doc.data().penulis,
      kategori: doc.data().kategori,
      share: doc.data().share,
    } as Article);
  });

  return items;
};

const fetchEvents = async function () {
  let items: EventSaptosari[] = [];
  const q = query(collection(db, "kegiatan"));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    items.push({
      name: doc.data().name,
      address: doc.data().address,
      kelurahan: doc.data().kelurahan,
      startDate: doc.data().startDate.toDate(),
      endDate: doc.data().endDate.toDate(),
      openingHours: doc.data().openingHours,
      summary: doc.data().summary,
      description: doc.data().description,
      thumbnail: doc.data().thumbnail,
      images: doc.data().images,
      latitude: doc.data().latitude,
      longitude: doc.data().longitude,
      information: doc.data().information,
    } as EventSaptosari);
  });

  return items;
};

const fetchDestinations = async function () {
  let items: Destination[] = [];
  const q = query(collection(db, "wisata"));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    items.push({
      name: doc.data().name,
      thumbnail: doc.data().thumbnail,
      images: doc.data().images,
      summary: doc.data().summary,
      description: doc.data().description,
      latitude: doc.data().latitude,
      longitude: doc.data().longitude,
      address: doc.data().address,
      kelurahan: doc.data().kelurahan,
      openingHours: doc.data().openingHours,
      information: doc.data().information,
    } as Destination);
  });

  return items;
};

export function storageImageURL(path: string) {
  if (!path.startsWith("img/") && !path.startsWith("images/")) {
    console.log("storageImageURL: Invalid path format", path);
    return path;
  }
  const encodedPath = encodeURIComponent(path);
  return `https://firebasestorage.googleapis.com/v0/b/kkn-gebang-c3ff2.firebasestorage.app/o/${encodedPath}?alt=media`;
}

export {
  db,
  umkmFetcher,
  umkmFetcherCard,
  fetchArticles,
  fetchEvents,
  fetchDestinations,
};
