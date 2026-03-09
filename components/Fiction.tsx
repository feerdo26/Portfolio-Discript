
import React, { useState, useEffect } from 'react';
import { Icons } from '../constants';
import { Link } from 'react-router-dom';

const ImageCarousel = ({ images, alt }: { images: string[], alt: string }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-advance logic
  useEffect(() => {
    if (!images || images.length <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  const nextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  if (!images || images.length === 0) return null;

  return (
    <div className="relative overflow-hidden rounded-lg bg-stone-900 aspect-video lg:aspect-[4/3] group/carousel select-none shadow-2xl">
      {/* Images with transition */}
      {images.map((imgSrc, idx) => (
        <img 
            key={idx}
            src={imgSrc} 
            alt={`${alt} - Image ${idx + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out transform
                ${idx === currentIndex ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-110 z-0'}
                group-hover/carousel:scale-105
            `}
        />
      ))}
      
      {/* Navigation Controls */}
      {images.length > 1 && (
        <>
            <button 
                onClick={prevImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-primary/90 text-white p-2 rounded-full opacity-0 group-hover/carousel:opacity-100 transition-opacity z-20 backdrop-blur-sm"
                aria-label="Previous image"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
            </button>
            <button 
                onClick={nextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-primary/90 text-white p-2 rounded-full opacity-0 group-hover/carousel:opacity-100 transition-opacity z-20 backdrop-blur-sm"
                aria-label="Next image"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </button>
            
            {/* Dots */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
                {images.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={(e) => { e.preventDefault(); setCurrentIndex(idx); }}
                        className={`w-2 h-2 rounded-full transition-all shadow-sm ${idx === currentIndex ? 'bg-primary scale-125 w-4' : 'bg-white/50 hover:bg-white'}`}
                        aria-label={`Go to image ${idx + 1}`}
                    />
                ))}
            </div>
        </>
      )}
    </div>
  );
};

const Fiction = () => {
  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 font-sans selection:bg-primary selection:text-white">
      <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-6 md:px-12 bg-gradient-to-b from-stone-950/90 to-transparent backdrop-blur-sm">
        <Link to="/" className="text-xl font-bold tracking-tighter mix-blend-difference z-50">
          FRANCISCO STEFANINI
        </Link>
        <Link to="/" className="flex items-center gap-2 group cursor-pointer hover:text-primary transition-colors">
            <Icons.ArrowLeft /> 
            <span className="uppercase tracking-widest text-xs hidden md:block group-hover:translate-x-1 transition-all">Volver</span>
        </Link>
      </nav>

      <main className="pt-32 px-6 md:px-24 max-w-7xl mx-auto">
        <header className="mb-20">
          <h1 className="font-serif text-5xl md:text-7xl mb-6">FICCIÓN</h1>
          <p className="text-xl md:text-2xl text-stone-400 max-w-2xl font-light leading-relaxed">
            Narrativa, dirección y proyectos de ficción.
          </p>
        </header>

        <section className="grid gap-12">
            
            {/* Trabajo: El Caballo del Intendente */}
            <div className="border-t border-stone-800 py-12 group">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    {/* Imagen o miniatura */}
                    <div 
                        className="lg:col-span-4 overflow-hidden rounded-lg bg-stone-900 aspect-video lg:aspect-[4/3] flex items-center justify-center relative"
                    >
                        <img 
                            src="/images/caballo.jfif" 
                            alt="El Caballo del Intendente"
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                        />
                    </div>
                    
                    {/* Contenido */}
                    <div className="lg:col-span-8 flex flex-col md:flex-row justify-between gap-8">
                        <div className="max-w-2xl">
                            <span className="text-primary text-sm tracking-widest uppercase mb-2 block">Narrativa / Cuento</span>
                            <h2 className="font-serif text-3xl md:text-4xl mb-4 group-hover:text-primary transition-colors">EL CABALLO DEL INTENDENTE</h2>
                            <p className="text-stone-400 leading-relaxed mb-6">
                                Una historia breve sobre el poder, la lealtad y lo inevitable en el entorno rural.
                            </p>
                            <div className="flex gap-4">
                                <a 
                                    href="/pdf/EL CABALLO DEL INTENDENTE.pdf" 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-6 py-3 bg-stone-100 text-stone-950 rounded-full hover:bg-white transition-colors text-sm uppercase tracking-wider font-bold inline-block"
                                >
                                    Leer Guión
                                </a>
                            </div>
                        </div>
                        <div className="text-stone-600 font-mono text-sm whitespace-nowrap">
                            2023
                        </div>
                    </div>
                </div>
            </div>

            {/* Trabajo: Síncope */}
            <div className="border-t border-stone-800 py-12 group">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    {/* Carrusel de Imagenes */}
                    <div className="lg:col-span-4">
                        <ImageCarousel 
                            images={[
                                '/images/sincope_1.png',
                                '/images/sincope_2.png',
                                '/images/sincope_3.png',
                                '/images/sincope_4.png'
                            ]} 
                            alt="Síncope - Cortometraje" 
                        />
                    </div>
                    
                    {/* Contenido */}
                    <div className="lg:col-span-8 flex flex-col md:flex-row justify-between gap-8">
                        <div className="max-w-2xl">
                            <span className="text-primary text-sm tracking-widest uppercase mb-2 block">Cortometraje / Ficción</span>
                            <h2 className="font-serif text-3xl md:text-4xl mb-4 group-hover:text-primary transition-colors">SÍNCOPE</h2>
                            <p className="text-stone-400 leading-relaxed mb-6">
                                Un cortometraje sobre la fragilidad de la memoria y el instante que lo cambia todo.
                            </p>
                            <div className="flex gap-4">
                                <a 
                                    href="/pdf/sincope.pdf" 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-6 py-3 bg-stone-100 text-stone-950 rounded-full hover:bg-white transition-colors text-sm uppercase tracking-wider font-bold inline-block"
                                >
                                    Leer Guión
                                </a>
                            </div>
                        </div>
                        <div className="text-stone-600 font-mono text-sm whitespace-nowrap">
                            2023
                        </div>
                    </div>
                </div>
            </div>

        </section>
      </main>

      <footer className="mt-32 border-t border-stone-900 py-12 px-6 md:px-24 flex justify-between items-end bg-stone-950">
        <div>
           <p className="text-stone-500 text-sm">Francisco Stefanini &copy; 2026</p>
        </div>
      </footer>
    </div>
  );
};

export default Fiction;
