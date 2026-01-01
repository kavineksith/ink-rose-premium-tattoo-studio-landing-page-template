export interface Artist {
  id: number;
  name: string;
  specialty: string;
  quote: string;
  image: string;
}

export interface Review {
  id: number;
  name: string;
  rating: number;
  text: string;
  tattooImage: string;
}

export interface TattooStyle {
  id: number;
  title: string;
  icon: string;
  description: string;
}

export interface GalleryItem {
  id: number;
  src: string;
  category: string;
  alt: string;
}

export interface Service {
  id: number;
  title: string;
  price: string;
  description: string;
}
