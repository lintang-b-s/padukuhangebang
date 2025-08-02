import { dataUMKMUnggulan } from "@/data/umkm";
import { db } from "./api";
import { collection, doc, setDoc } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { events } from "@/data/events";
import { Client, Databases, ID } from "appwrite";
import { articles } from "@/data/articles";
import { destinations } from "@/data/destinations";

export async function addDataUMKM() {
  const umkmCollection = collection(db, "umkm");

  for (const umkm of dataUMKMUnggulan) {
    try {
      const umkmDoc = doc(umkmCollection, umkm.id.toString());
      await setDoc(umkmDoc, umkm);
      console.log(`added data umkm: ${umkm.title}`);
    } catch (err) {
      console.error("error: ", err);
    }
  }
}

export async function addDataEvents() {
  const umkmCollection = collection(db, "kegiatan");

  for (const umkm of events) {
    try {
      const umkmDoc = doc(umkmCollection, umkm.id.toString());
      await setDoc(umkmDoc, umkm);
      console.log(`added data kegiatan: ${umkm.name}`);
    } catch (err) {
      console.error("error: ", err);
    }
  }
}

export async function addDataArticles() {
  const artikelCollection = collection(db, "artikel");

  for (const article of articles) {
    try {
      const articleDoc = doc(artikelCollection, article.id.toString());
      await setDoc(articleDoc, article);
      console.log(`added data artikel: ${article.title}`);
    } catch (err) {
      console.error("error: ", err);
    }
  }
}

export async function addDataDestinations() {
  const destinationsCollection = collection(db, "wisata");

  for (const destination of destinations) {
    try {
      const destinationDoc = doc(
        destinationsCollection,
        destination.id.toString()
      );
      await setDoc(destinationDoc, destination);
      console.log(`added data wisata: ${destination.name}`);
    } catch (err) {
      console.error("error: ", err);
    }
  }
}
