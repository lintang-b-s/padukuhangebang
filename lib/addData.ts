import { dataUMKMUnggulan } from "@/data/umkm";
import { db } from "./api";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { events } from "@/data/events";
import { articles } from "@/data/articles";
import { destinations } from "@/data/destinations";

export async function addDataUMKM() {
  const umkmCollection = collection(db, "umkm");

  for (const umkm of dataUMKMUnggulan) {
    try {
      await addDoc(umkmCollection, umkm);
      console.log(`added data umkm: ${umkm.title}`);
    } catch (err) {
      console.error("error: ", err);
    }
  }
}

export async function addDataEvents() {
  const eventCollection = collection(db, "kegiatan");

  for (const event of events) {
    try {
      await addDoc(eventCollection, event);
    } catch (err) {
      console.error("error: ", err);
    }
  }
}

export async function addDataArticles() {
  const artikelCollection = collection(db, "artikel");

  for (const article of articles) {
    try {
      await addDoc(artikelCollection, article);
    } catch (err) {
      console.error("error: ", err);
    }
  }
}

export async function addDataDestinations() {
  const destinationsCollection = collection(db, "wisata");

  for (const destination of destinations) {
    try {
      await addDoc(destinationsCollection, destination);
      console.log(`added data wisata: ${destination.name}`);
    } catch (err) {
      console.error("error: ", err);
    }
  }
}
