import React, { useState } from 'react';
import type { GalleryItem } from '../types';
import { X, ZoomIn } from 'lucide-react';

const galleryItems: GalleryItem[] = [
  { id: 1, src: 'https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?q=80&w=800&auto=format&fit=crop', category: 'Floral', alt: 'Flower arm tattoo' },
  { id: 2, src: 'https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?q=80&w=800&auto=format&fit=crop', category: 'Fine Line', alt: 'Back line art' },
  { id: 3, src: 'https://images.unsplash.com/photo-1562962230-16bc46364924?q=80&w=800&auto=format&fit=crop', category: 'Minimalist', alt: 'Minimal wrist' },
  { id: 4, src: 'https://images.unsplash.com/photo-1614252369475-531eba835eb1?q=80&w=800&auto=format&fit=crop', category: 'Couple', alt: 'Hand tattoo' },
  { id: 5, src: 'https://images.unsplash.com/photo-1603504822002-3acaffaddfdb?q=80&w=800&auto=format&fit=crop', category: 'Floral', alt: 'Rose shoulder' },
  { id: 6, src: 'https://images.unsplash.com/photo-1585002047805-4c09268fdfd4?q=80&w=800&auto=format&fit=crop', category: 'Fine Line', alt: 'Geometric' },
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
            alt={selectedImage.alt} 
            className="max-h-[90vh] max-w-full rounded-lg shadow-[0_0_30px_rgba(255,255,255,0.1)]"
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
