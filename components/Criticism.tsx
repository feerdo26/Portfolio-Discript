
import React from 'react';
import { Icons } from '../constants';
import { Link } from 'react-router-dom';

const Criticism = () => {
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
          <h1 className="font-serif text-5xl md:text-7xl mb-6">CRÍTICA</h1>
          <p className="text-xl md:text-2xl text-stone-400 max-w-2xl font-light leading-relaxed">
            Análisis teórico, reseñas y crítica cinematográfica.
          </p>
        </header>

        <section className="grid gap-12">
            
            {/* Crítica: Bugonia */}
            <div className="border-t border-stone-800 py-12 group">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    {/* Imagen o miniatura */}
                    <div 
                        className="lg:col-span-4 overflow-hidden rounded-lg bg-stone-900 aspect-video lg:aspect-[4/3] flex items-center justify-center relative cursor-pointer"
                    >
                         <img 
                            src="/images/BUGONIA.png" 
                            alt="Bugonia - La mejor crítica de Yorgos Lanthimos"
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                        />
                    </div>
                    
                    {/* Contenido */}
                    <div className="lg:col-span-8 flex flex-col md:flex-row justify-between gap-8">
                        <div className="max-w-2xl">
                            <span className="text-primary text-sm tracking-widest uppercase mb-2 block">Reseña / Cine</span>
                            <h2 className="font-serif text-3xl md:text-4xl mb-4 group-hover:text-primary transition-colors">BUGONIA: LA MEJOR CRÍTICA DE YORGOS LANTHIMOS</h2>
                            <p className="text-stone-400 leading-relaxed mb-6">
                                Un análisis sobre la última obra de Yorgos Lanthimos y su evolución autoral.
                            </p>
                            <div className="flex gap-4">
                                <a 
                                    href="/pdf/BUGONIA - LA MEJOR CRITICA DE YORGOS LANTHIMOS.pdf" 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-6 py-3 bg-stone-100 text-stone-950 rounded-full hover:bg-white transition-colors text-sm uppercase tracking-wider font-bold inline-block"
                                >
                                    Leer Crítica
                                </a>
                            </div>
                        </div>
                        <div className="text-stone-600 font-mono text-sm whitespace-nowrap">
                            2025
                        </div>
                    </div>
                </div>
            </div>

            {/* Crítica: La Sustancia */}
            <div className="border-t border-stone-800 py-12 group">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    {/* Imagen o miniatura */}
                    <div 
                        className="lg:col-span-4 overflow-hidden rounded-lg bg-stone-900 aspect-video lg:aspect-[4/3] flex items-center justify-center relative cursor-pointer"
                    >
                         <img 
                            src="/images/la_sustancia.jpg" 
                            alt="La Sustancia - Un terror clásico"
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                        />
                    </div>
                    
                    {/* Contenido */}
                    <div className="lg:col-span-8 flex flex-col md:flex-row justify-between gap-8">
                        <div className="max-w-2xl">
                            <span className="text-primary text-sm tracking-widest uppercase mb-2 block">Reseña / Cine</span>
                            <h2 className="font-serif text-3xl md:text-4xl mb-4 group-hover:text-primary transition-colors">LA SUSTANCIA: UN TERROR CLÁSICO DESDE UNA PERSPECTIVA MODERNA</h2>
                            <p className="text-stone-400 leading-relaxed mb-6">
                                Un análisis sobre la película 'The Substance' y su resignificación del body horror y la obsesión por la juventud.
                            </p>
                            <div className="flex gap-4">
                                <a 
                                    href="/pdf/LA SUSTANCIA UN TERROR CLASICO DESDE UNA PERSPECTIVA MODERNA.pdf" 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-6 py-3 bg-stone-100 text-stone-950 rounded-full hover:bg-white transition-colors text-sm uppercase tracking-wider font-bold inline-block"
                                >
                                    Leer Crítica
                                </a>
                            </div>
                        </div>
                        <div className="text-stone-600 font-mono text-sm whitespace-nowrap">
                            2025
                        </div>
                    </div>
                </div>
            </div>

            {/* Crítica: Ciclo del Terror */}
            <div className="border-t border-stone-800 py-12 group">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    {/* Imagen o miniatura */}
                    <div 
                        className="lg:col-span-4 overflow-hidden rounded-lg bg-stone-900 aspect-video lg:aspect-[4/3] flex items-center justify-center relative cursor-pointer"
                    >
                         <img 
                            src="/images/el_ciclo_del_terror.jpg" 
                            alt="El Ciclo del Terror Cinematográfico"
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                        />
                    </div>
                    
                    {/* Contenido */}
                    <div className="lg:col-span-8 flex flex-col md:flex-row justify-between gap-8">
                        <div className="max-w-2xl">
                            <span className="text-primary text-sm tracking-widest uppercase mb-2 block">Ensayo / Cine</span>
                            <h2 className="font-serif text-3xl md:text-4xl mb-4 group-hover:text-primary transition-colors">EL CICLO DEL TERROR CINEMATOGRÁFICO</h2>
                            <p className="text-stone-400 leading-relaxed mb-6">
                                Un recorrido por las tendencias cíclicas del género de terror y cómo reflejan los miedos de cada época.
                            </p>
                            <div className="flex gap-4">
                                <a 
                                    href="/pdf/el_ciclo_anual_del_terror_cinematografico.pdf" 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-6 py-3 bg-stone-100 text-stone-950 rounded-full hover:bg-white transition-colors text-sm uppercase tracking-wider font-bold inline-block"
                                >
                                    Leer Ensayo
                                </a>
                            </div>
                        </div>
                        <div className="text-stone-600 font-mono text-sm whitespace-nowrap">
                            2025
                        </div>
                    </div>
                </div>
            </div>

            {/* Crítica: Anton Chigurh */}
            <div className="border-t border-stone-800 py-12 group">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    {/* Imagen o miniatura */}
                    <div 
                        className="lg:col-span-4 overflow-hidden rounded-lg bg-stone-900 aspect-video lg:aspect-[4/3] flex items-center justify-center relative cursor-pointer"
                    >
                         <img 
                            src="/images/anton_chigurh.jpg" 
                            alt="Anton Chigurh: Violencia y Frialdad"
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                        />
                    </div>
                    
                    {/* Contenido */}
                    <div className="lg:col-span-8 flex flex-col md:flex-row justify-between gap-8">
                        <div className="max-w-2xl">
                            <span className="text-primary text-sm tracking-widest uppercase mb-2 block">Ensayo / Cine</span>
                            <h2 className="font-serif text-3xl md:text-4xl mb-4 group-hover:text-primary transition-colors">ANTON CHIGURH: UN REFLEJO DE LA VIOLENCIA Y FRIALDAD DE UN MUNDO ROTO</h2>
                            <p className="text-stone-400 leading-relaxed mb-6">
                                Un análisis sobre el antagonista de 'No Country for Old Men' como representación del caos imparable y la moralidad ausente.
                            </p>
                            <div className="flex gap-4">
                                <a 
                                    href="/pdf/anton_chigurh.pdf" 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-6 py-3 bg-stone-100 text-stone-950 rounded-full hover:bg-white transition-colors text-sm uppercase tracking-wider font-bold inline-block"
                                >
                                    Leer Ensayo
                                </a>
                            </div>
                        </div>
                        <div className="text-stone-600 font-mono text-sm whitespace-nowrap">
                            2025
                        </div>
                    </div>
                </div>
            </div>

            {/* Crítica: Stalker */}
            <div className="border-t border-stone-800 py-12 group">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    {/* Imagen o miniatura */}
                    <div 
                        className="lg:col-span-4 overflow-hidden rounded-lg bg-stone-900 aspect-video lg:aspect-[4/3] flex items-center justify-center relative cursor-pointer"
                    >
                         <img 
                            src="/images/stalker.jpg" 
                            alt="Stalker y el Poder de la Esperanza"
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                        />
                    </div>
                    
                    {/* Contenido */}
                    <div className="lg:col-span-8 flex flex-col md:flex-row justify-between gap-8">
                        <div className="max-w-2xl">
                            <span className="text-primary text-sm tracking-widest uppercase mb-2 block">Ensayo / Cine</span>
                            <h2 className="font-serif text-3xl md:text-4xl mb-4 group-hover:text-primary transition-colors">STALKER Y EL PODER DE LA ESPERANZA</h2>
                            <p className="text-stone-400 leading-relaxed mb-6">
                                Un análisis sobre la fe, el deseo y la búsqueda de significado en la obra maestra de Andrei Tarkovsky.
                            </p>
                            <div className="flex gap-4">
                                <a 
                                    href="/pdf/stalker.pdf" 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-6 py-3 bg-stone-100 text-stone-950 rounded-full hover:bg-white transition-colors text-sm uppercase tracking-wider font-bold inline-block"
                                >
                                    Leer Ensayo
                                </a>
                            </div>
                        </div>
                        <div className="text-stone-600 font-mono text-sm whitespace-nowrap">
                            2025
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

export default Criticism;
