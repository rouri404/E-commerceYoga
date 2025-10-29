import React, { useEffect, useState } from 'react';

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const staticImages = Array.from({ length: 23 }, (_, i) => ({
      src: `/assets/estudio-yoga-${i + 1}.jpg`,
      alt: `Foto ${i + 1} do estúdio`,
      id: i + 1
    }));
    setImages(staticImages);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeLightbox();
      }
    };

    if (selectedImage) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedImage]);

  const openLightbox = (image) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <section id="galeria" className="py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Conheça nossa estrutura</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Explore nosso espaço acolhedor e inspirador, projetado para proporcionar a melhor experiência em yoga. Clique nas imagens para ver em tamanho completo.</p>
        </div>
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {images.map((image, index) => (
            <div 
              key={index} 
              className="break-inside-avoid cursor-pointer group"
              onClick={() => openLightbox(image)}
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-auto rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:scale-105" 
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4" onClick={closeLightbox}>
          <div className="relative w-full h-full max-w-[95vw] max-h-[95vh] flex items-center justify-center">
            <img 
              src={selectedImage.src} 
              alt={selectedImage.alt} 
              className="max-w-full max-h-full object-contain rounded-2xl" 
            />
            <button 
              className="absolute top-4 right-4 text-white text-2xl bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-75 transition z-10"
              onClick={closeLightbox}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
