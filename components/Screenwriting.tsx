
import React from 'react';
import { Icons } from '../constants';
import { Link } from 'react-router-dom';

const Screenwriting = () => {
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
          <h1 className="font-serif text-5xl md:text-7xl mb-6">Trabajos de Guionista</h1>
          <p className="text-xl md:text-2xl text-stone-400 max-w-2xl font-light leading-relaxed">
            Selección de guiones, tratamientos y estructuras narrativas.
          </p>
        </header>

        <section className="grid gap-12">
            {/* Aquí es donde pondrás tus trabajos. Puedes copiar y pegar este bloque para cada trabajo */}
            <div className="border-t border-stone-800 py-12 group">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    {/* Imagen del proyecto */}
                    <div className="lg:col-span-4 overflow-hidden rounded-lg bg-stone-900 aspect-video lg:aspect-[4/3]">
                        <img 
                            src="/images/dead_games_roblox.jpg" 
                            alt="El misterio de los Dead Games" 
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                        />
                    </div>
                    
                    {/* Contenido */}
                    <div className="lg:col-span-8 flex flex-col md:flex-row justify-between gap-8">
                        <div className="max-w-2xl">
                            <span className="text-primary text-sm tracking-widest uppercase mb-2 block">Videoensayo / Investigación</span>
                            <h2 className="font-serif text-3xl md:text-4xl mb-4 group-hover:text-primary transition-colors">El misterio de los Dead Games: los mapas perdidos de Roblox</h2>
                            <p className="text-stone-400 leading-relaxed mb-6">
                                Investigación sobre espacios liminales y arquitecturas olvidadas dentro de la plataforma.
                            </p>
                            <div className="flex gap-4">
                                <a 
                                    href="/pdf/El_misterio_de_los_Dead_Games.pdf" 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-6 py-3 bg-stone-100 text-stone-950 rounded-full hover:bg-white transition-colors text-sm uppercase tracking-wider font-bold inline-block"
                                >
                                    Leer Guión
                                </a>
                                <a 
                                    href="https://www.youtube.com/watch?v=InyuLedy-YM" 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-6 py-3 border border-stone-700 text-stone-300 rounded-full hover:bg-stone-800 hover:text-white transition-colors text-sm uppercase tracking-wider font-bold inline-block"
                                >
                                    Ver Video
                                </a>
                            </div>
                        </div>
                        <div className="text-stone-600 font-mono text-sm whitespace-nowrap">
                            2025 — Finalizado
                        </div>
                    </div>
                </div>
            </div>

            <div className="border-t border-stone-800 py-12 group">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    {/* Imagen del proyecto */}
                    <div className="lg:col-span-4 overflow-hidden rounded-lg bg-stone-900 aspect-video lg:aspect-[4/3]">
                        <img 
                            src="/images/terror_juegos_moviles.jpg" 
                            alt="El terror invisible de los juegos móviles" 
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out" // Assuming user wants same grayscale effect
                        />
                    </div>
                    
                    {/* Contenido */}
                    <div className="lg:col-span-8 flex flex-col md:flex-row justify-between gap-8">
                        <div className="max-w-2xl">
                            <span className="text-primary text-sm tracking-widest uppercase mb-2 block">Ensayo Audiovisual / Terror</span>
                            <h2 className="font-serif text-3xl md:text-4xl mb-4 group-hover:text-primary transition-colors">El terror invisible de los juegos móviles</h2>
                            <p className="text-stone-400 leading-relaxed mb-6">
                                Un análisis sobre cómo los juegos móviles utilizan la liminalidad y lo invisible para generar terror.
                            </p>
                            <div className="flex gap-4">
                                <a 
                                    href="/pdf/El_terror_invisible_de_los_juegos_moviles.pdf" 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-6 py-3 bg-stone-100 text-stone-950 rounded-full hover:bg-white transition-colors text-sm uppercase tracking-wider font-bold inline-block"
                                >
                                    Leer Guión
                                </a>
                                <a 
                                    href="https://www.youtube.com/watch?v=D5ityscaQlg" 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-6 py-3 border border-stone-700 text-stone-300 rounded-full hover:bg-stone-800 hover:text-white transition-colors text-sm uppercase tracking-wider font-bold inline-block"
                                >
                                    Ver Video
                                </a>
                            </div>
                        </div>
                        <div className="text-stone-600 font-mono text-sm whitespace-nowrap">
                            2025 — Finalizado
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

export default Screenwriting;
