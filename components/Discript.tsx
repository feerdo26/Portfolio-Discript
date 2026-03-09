
import React from 'react';
import { Icons } from '../constants';
import { Link } from 'react-router-dom';

const Discript = () => {
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
          <h1 className="font-serif text-5xl md:text-7xl mb-6">DISCRIPT</h1>
          <p className="text-xl md:text-2xl text-stone-400 max-w-2xl font-light leading-relaxed">
            Ensayos audiovisuales sobre cine, videojuegos y cultura digital.
          </p>
        </header>

        <section className="grid gap-12">
            
            {/* Trabajo: Batman vs The Crow */}
            <div className="border-t border-stone-800 py-12 group">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    {/* Imagen o miniatura */}
                    <a 
                        href="https://www.youtube.com/watch?v=J_utUAJ0mzk"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="lg:col-span-4 overflow-hidden rounded-lg bg-stone-900 aspect-video lg:aspect-[4/3] flex items-center justify-center relative cursor-pointer"
                    >
                        <img 
                            src="/images/batman_crow.png" 
                            alt="Batman vs El Cuervo anatomía de un personaje"
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                        />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                             <div className="bg-primary/90 text-white rounded-full p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                             </div>
                        </div>
                    </a>
                    
                    {/* Contenido */}
                    <div className="lg:col-span-8 flex flex-col md:flex-row justify-between gap-8">
                        <div className="max-w-2xl">
                            <span className="text-primary text-sm tracking-widest uppercase mb-2 block">Videoensayo / Cine</span>
                            <h2 className="font-serif text-3xl md:text-4xl mb-4 group-hover:text-primary transition-colors">por que BATMAN y EL CUERVO se sienten tan PARECIDOS | anatomia de un personaje</h2>
                            <p className="text-stone-400 leading-relaxed mb-6">
                                Comparativa semiótica y estética entre dos arquetipos oscuros del cómic y el cine, y cómo cada uno aborda la venganza y el duelo.
                            </p>
                            <div className="flex gap-4">
                                <a 
                                    href="https://www.youtube.com/watch?v=J_utUAJ0mzk" 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-6 py-3 bg-stone-100 text-stone-950 rounded-full hover:bg-white transition-colors text-sm uppercase tracking-wider font-bold inline-block"
                                >
                                    Ver en YouTube
                                </a>
                            </div>
                        </div>
                        <div className="text-stone-600 font-mono text-sm whitespace-nowrap">
                            2026
                        </div>
                    </div>
                </div>
            </div>

            {/* Trabajo: Scorsese */}
            <div className="border-t border-stone-800 py-12 group">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    {/* Imagen o miniatura */}
                    <a 
                        href="https://www.youtube.com/watch?v=l-mKDhcbL68"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="lg:col-span-4 overflow-hidden rounded-lg bg-stone-900 aspect-video lg:aspect-[4/3] flex items-center justify-center relative cursor-pointer"
                    >
                        <img 
                            src="/images/scorsese_gangster.png" 
                            alt="Qué muestra Scorsese de la psiquis del gánster"
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                        />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                             <div className="bg-primary/90 text-white rounded-full p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                             </div>
                        </div>
                    </a>
                    
                    {/* Contenido */}
                    <div className="lg:col-span-8 flex flex-col md:flex-row justify-between gap-8">
                        <div className="max-w-2xl">
                            <span className="text-primary text-sm tracking-widest uppercase mb-2 block">Videoensayo / Cine</span>
                            <h2 className="font-serif text-3xl md:text-4xl mb-4 group-hover:text-primary transition-colors">QUÉ MUESTRA SCORSESE DE LA PSIQUIS DEL GÁNSTER</h2>
                            <p className="text-stone-400 leading-relaxed mb-6">
                                Un análisis sobre la construcción psicológica de los personajes criminales en la filmografía de Martin Scorsese.
                            </p>
                            <div className="flex gap-4">
                                <a 
                                    href="https://www.youtube.com/watch?v=l-mKDhcbL68" 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-6 py-3 bg-stone-100 text-stone-950 rounded-full hover:bg-white transition-colors text-sm uppercase tracking-wider font-bold inline-block"
                                >
                                    Ver en YouTube
                                </a>
                            </div>
                        </div>
                        <div className="text-stone-600 font-mono text-sm whitespace-nowrap">
                            2025
                        </div>
                    </div>
                </div>
            </div>

            {/* Trabajo: Batman Noir */}
            <div className="border-t border-stone-800 py-12 group">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    {/* Imagen o miniatura */}
                    <a 
                        href="https://www.youtube.com/watch?v=7xp3oa1ZJCA"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="lg:col-span-4 overflow-hidden rounded-lg bg-stone-900 aspect-video lg:aspect-[4/3] flex items-center justify-center relative cursor-pointer"
                    >
                        <img 
                            src="/images/batman_noir.png" 
                            alt="Cómo Matt Reeves convirtió a BATMAN en una HISTORIA NOIR"
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                        />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                             <div className="bg-primary/90 text-white rounded-full p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                             </div>
                        </div>
                    </a>
                    
                    {/* Contenido */}
                    <div className="lg:col-span-8 flex flex-col md:flex-row justify-between gap-8">
                        <div className="max-w-2xl">
                            <span className="text-primary text-sm tracking-widest uppercase mb-2 block">Videoensayo / Cine</span>
                            <h2 className="font-serif text-3xl md:text-4xl mb-4 group-hover:text-primary transition-colors">Cómo Matt Reeves convirtió a BATMAN en una HISTORIA NOIR | BACKSTORY</h2>
                            <p className="text-stone-400 leading-relaxed mb-6">
                                Un análisis sobre la estética noir, la detective story y la construcción de Gotham en la visión de Matt Reeves.
                            </p>
                            <div className="flex gap-4">
                                <a 
                                    href="https://www.youtube.com/watch?v=7xp3oa1ZJCA" 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-6 py-3 bg-stone-100 text-stone-950 rounded-full hover:bg-white transition-colors text-sm uppercase tracking-wider font-bold inline-block"
                                >
                                    Ver en YouTube
                                </a>
                            </div>
                        </div>
                        <div className="text-stone-600 font-mono text-sm whitespace-nowrap">
                            2025
                        </div>
                    </div>
                </div>
            </div>

            {/* Trabajo: Blade Runner Backstory */}
            <div className="border-t border-stone-800 py-12 group">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    {/* Imagen o miniatura */}
                    <a 
                        href="https://www.youtube.com/watch?v=383NwYLHKik"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="lg:col-span-4 overflow-hidden rounded-lg bg-stone-900 aspect-video lg:aspect-[4/3] flex items-center justify-center relative cursor-pointer"
                    >
                        <img 
                            src="/images/blade_runner_backstory.jpg" 
                            alt="Blade Runner 2049 secuela perfecta"
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                        />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                             <div className="bg-primary/90 text-white rounded-full p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                             </div>
                        </div>
                    </a>
                    
                    {/* Contenido */}
                    <div className="lg:col-span-8 flex flex-col md:flex-row justify-between gap-8">
                        <div className="max-w-2xl">
                            <span className="text-primary text-sm tracking-widest uppercase mb-2 block">Videoensayo / Cine</span>
                            <h2 className="font-serif text-3xl md:text-4xl mb-4 group-hover:text-primary transition-colors">Como un FANATICO hizo la secuela PERFECTA 35 años despues de la original | [backstory]</h2>
                            <p className="text-stone-400 leading-relaxed mb-6">
                                Un análisis sobre cómo Denis Villeneuve logró expandir el universo de Blade Runner respetando su esencia original.
                            </p>
                            <div className="flex gap-4">
                                <a 
                                    href="https://www.youtube.com/watch?v=383NwYLHKik" 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-6 py-3 bg-stone-100 text-stone-950 rounded-full hover:bg-white transition-colors text-sm uppercase tracking-wider font-bold inline-block"
                                >
                                    Ver en YouTube
                                </a>
                            </div>
                        </div>
                        <div className="text-stone-600 font-mono text-sm whitespace-nowrap">
                            2025
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="border-t border-stone-800 py-12">
                 <p className="text-stone-500 italic">Más ensayos disponibles en el canal...</p>
                 <a href="https://www.youtube.com/@chpan-nc2fe" target="_blank" rel="noopener noreferrer" className="text-primary mt-4 inline-block hover:underline">
                    Visitar Canal de YouTube &rarr;
                 </a>
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

export default Discript;
