import React, { useState } from 'react';
import type { GalleryItem } from '../types';
import { X, ZoomIn } from 'lucide-react';

const galleryItems: GalleryItem[] = [
  { id: 1, src: 'https://images.unsplash.com/photo-1660820221710-84319d0e2e96?q=80&w=1200', category: 'Fine Line Floral', alt: 'Flower arm tattoo' },
  { id: 2, src: 'https://images.unsplash.com/photo-1547754145-ef9ff306e3f3?q=80&w=1200', category: 'Minimalist Flower', alt: 'Delicate flower tattoo' },
  { id: 3, src: 'https://images.unsplash.com/photo-1508764356915-704089a634e2?q=80&w=1200', category: 'Delicate Detail', alt: 'Intricate design' },
  { id: 4, src: 'https://images.unsplash.com/photo-1695226304152-931956f4a474?q=80&w=1200', category: 'Butterfly', alt: 'Butterfly wrist tattoo' },
  { id: 5, src: 'https://images.unsplash.com/photo-1570168918437-5f25c140bd84?q=80&w=1200', category: 'Aesthetic Bouquet', alt: 'Rose shoulder piece' },
  { id: 6, src: 'https://images.unsplash.com/photo-1568515045052-f9a854d70bfd?q=80&w=1200', category: 'In-Action', alt: 'Tattoo process' },
];

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  return (
    <section id="gallery" className="py-24 relative bg-black">
       <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-30"></div>
       
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-2 text-white">Our Masterpieces</h2>
            <p className="text-gray-400 font-light">Curated ink on beautiful canvases.</p>
          </div>
          <button className="hidden md:block px-6 py-2 rounded-full border border-rose-500/50 text-rose-300 hover:bg-rose-500/10 transition-all">
            Follow on Instagram
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryItems.map((item) => (
            <div 
              key={item.id} 
              className="relative group cursor-pointer overflow-hidden rounded-xl aspect-[3/4]"
              onClick={() => setSelectedImage(item)}
            >
              <img 
                src={item.src} 
                crossOrigin="anonymous"
                alt={item.alt} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-rose-300 font-serif text-lg italic">{item.category}</p>
                  <ZoomIn className="mx-auto mt-2 text-white" size={24} />
                </div>
              </div>
            </div>
          ))}
        </div>
       </div>

       {/* Lightbox Modal */}
       {selectedImage && (
         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm" onClick={() => setSelectedImage(null)}>
           <button className="absolute top-6 right-6 text-white hover:text-rose-400">
             <X size={32} />
           </button>
           <img 
            src={selectedImage.src} 
            crossOrigin="anonymous"
            alt={selectedImage.alt} 
            className="w-full h-auto max-h-[80vh] rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()} 
           />
           <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white font-serif text-xl tracking-widest">
             {selectedImage.category}
           </div>
         </div>
       )}
    </section>
  );
};

export default Gallery;
