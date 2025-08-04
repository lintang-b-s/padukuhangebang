import type { FeatureCollection } from "geojson";

export type UMKMCard = {
  id?: string;
  title: string;
  image: string;
  alt: string;
  summary: string;
  description: string;
  dusun: string;
  images: string[];
  latitude: number;
  longitude: number;
  kontak: UMKMContact;
  googleMapsLink?: string;
  products: Product[];
  kategoriUsaha: string;
  rangeHarga: string;
};

export type UMKMUnggulan = {
  title: string;
  image: string;
  description: string;
};

export type Product = {
  nama: string;
  deskripsi: string;
  images: string[];
  harga: string;
  labels: string[];
};

export type MediaSosial = {
  platform: string;
  link: string;
  nama: string;
};

export type UMKMContact = {
  namaUsaha: string;
  namaPemilik: string;
  alamat: string;
  noTelp?: string;
  email?: string;
  mediaSosial?: MediaSosial[];
  onlineShop?: OnlineShop[];
};

export type ImageModal = {
  original: string;
  thumbnail: string;
};

export type OnlineShop = {
  namaToko: string;
  link: string;
  platform: string;
};

export type ObjectLocation = {
  name: string;
  latitude: number;
  longitude: number;
  hrefLink?: string;
  thumbnail?: string;
  summary?: string;
  address: string;
  startDate?: Date;
};

export type MapsProps = {
  places: ObjectLocation[];
  largeScreen: boolean;
  centerLatitude: number;
  centerLongitude: number;
};

export type EventSaptosari = {
  id?: string;
  name: string;
  address: string;
  kelurahan: string;
  startDate: Date;
  endDate: Date;
  openingHours: string[]; // informasi
  description: string;
  thumbnail?: string;
  summary: string;
  images?: string[];
  latitude: number;
  longitude: number;
  information?: EventInformation;
};

export enum PlaceType {
  INDOOR = "Indoor",
  OUTDOOR = "Outdoor",
}

export type EventInformation = {
  organisasi: string;
  penanggungjawab: string;
  noTelp: string;
  email: string;
  umurMasuk: string;
  category: string[];
  tempat: string;
  placeType: PlaceType; // indoor, outdoor, etc.
};

export type CalendarEvent = {
  title: string;
  start: Date;
  end: Date;
  allDay?: boolean;
  resource?: any;
};

export type MapsPlaceProps = {
  latitude: number;
  longitude: number;
  centerUsingDataCoord: boolean;
  geojson: FeatureCollection;
};

export type Destination = {
  id?: string;
  name: string;
  thumbnail: string;
  images: string[];
  summary: string;
  description: string;
  latitude: number;
  longitude: number;
  address: string;
  kelurahan: string;
  openingHours: string[];
  information?: DestinationInformation;
};

export type DestinationInformation = {
  organisasi: string;
  penanggungjawab: string;
  noTelp: string;
  email: string;
  suitableFor: string; // Children, Families, Groups, Individual, Couples
  category: string[]; // Education, Nature, Active
  placeType: PlaceType; // indoor, outdoor, etc.
};
export type UserLocation = {
  latitude: number;
  longitude: number;
};

export type Article = {
  id?: string;
  title: string;
  summary: string;
  content: string;
  thumbnail: string;
  postDate: Date;
  penulis: string;
  images?: string[];
  kategori: string;
  share: {
    whatsapp?: string;
    facebook?: string;
    twitter?: string;
    telegram?: string;
  };
};

export type ActivityGallery = {
  name: string;
  images: string[];
};
