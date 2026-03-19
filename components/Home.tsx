
import React, { useEffect, useState } from 'react';
import { PROJECTS, Icons } from '../constants';
import ProjectCard from './ProjectCard';

const Home: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen selection:bg-primary selection:text-white">
      {/* Scroll Bar Indicator */}
      <div className="fixed top-0 left-0 w-1 h-full bg-stone-900 z-50 overflow-hidden">
        <div 
          className="w-full bg-primary transition-all duration-100 ease-out" 
          style={{ height: `${scrollProgress}%` }}
        />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 px-6 py-8 md:px-12 flex justify-between items-center pointer-events-none">
        <div className="flex items-center gap-2 pointer-events-auto">
          <div className="w-8 h-[1px] bg-primary"></div>
          <span className="text-[10px] uppercase tracking-[0.3em] font-light text-stone-500">Dossier v.24</span>
        </div>
        <div className="flex gap-12 text-[10px] uppercase tracking-[0.3em] font-light pointer-events-auto">
          <a href="#projects" className="hover:text-primary transition-colors">Proyectos</a>
          <a href="#about" className="hover:text-primary transition-colors">Autoría</a>
          <a href="#contact" className="hover:text-primary transition-colors">Contacto</a>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center relative">
          <div className="max-w-4xl space-y-12">
            <h1 className="font-black text-6xl md:text-9xl tracking-tighter text-primary leading-none uppercase select-none">
              FRANCISCO <br/> 
              <span className="italic font-serif font-light">STEFANINI</span>
            </h1>
            <div className="h-16 w-[1px] bg-primary mx-auto opacity-50"></div>
            <p className="text-xs md:text-sm tracking-[0.6em] font-bold text-primary/80 max-w-2xl mx-auto leading-relaxed uppercase">
              GUIONISTA - CREADOR DE CONTENIDO - CINEASTA
            </p>
          </div>
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce opacity-20">
            <Icons.ChevronDown />
          </div>
        </section>

        {/* Projects Grid */}
        <section id="projects" className="px-6 py-32 md:px-24">
          <div className="max-w-7xl mx-auto">
            <div className="mb-24 space-y-4">
              <span className="text-primary text-[10px] uppercase tracking-[0.5em] block">Selección</span>
              <h2 className="font-serif text-5xl md:text-6xl text-primary font-extralight italic">Proyectos Recientes</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
              {PROJECTS.map((project, idx) => (
                <ProjectCard 
                  key={project.id} 
                  project={project} 
                  offset={idx % 2 !== 0}
                />
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="px-6 py-48 md:px-24 bg-stone-950/30">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5 lg:sticky lg:top-48">
              <span className="text-primary text-[10px] uppercase tracking-[0.5em] block mb-8">Sobre el Autor</span>
              <h2 className="font-serif text-5xl text-primary font-extralight leading-tight">Información <br/> Personal</h2>
              <div className="w-16 h-[1px] bg-primary mt-12"></div>
            </div>
            
            <div className="lg:col-span-7 space-y-16 font-serif text-xl md:text-2xl font-extralight leading-relaxed text-stone-400">
              <p className="relative">
                <span className="absolute -left-12 top-0 text-7xl font-bold text-primary opacity-30 select-none">T</span>
                Trabajo entre el cine y el videojuego, no porque crea que sean lo mismo, sino porque ahí encuentro preguntas que todavía no sé responder.
              </p>
              
              <p>
                Soy cineasta, guionista y creador de ensayos audiovisuales. Empecé en la crítica no para juzgar obras, sino para entenderlas: entender cómo están hechas, quiénes las hicieron y qué dicen sobre el mundo y sobre mí. Mirar fue siempre una forma de buscarme.
              </p>

              <p className="border-l border-stone-800 pl-8 italic text-stone-500">
                Me interesa la narrativa como experiencia: lo que una historia exige del espectador, lo que le devuelve y lo que le deja cargando después.
              </p>

              <p>
                No busco respuestas cerradas. Busco procesos, tensiones, zonas grises. Este portafolio reúne fragmentos de ese intento por comprender a otros para, tal vez, empezar a entenderme.
              </p>

              <div className="pt-8">
                <a 
                  href="/pdf/CV FRANCISCO STEFANINI.pdf" 
                  download="CV_Francisco_Stefanini.pdf"
                  className="group relative px-10 py-4 border border-stone-800 overflow-hidden rounded inline-block"
                >
                  <span className="relative z-10 text-[10px] uppercase tracking-[0.3em] text-white transition-colors duration-300 group-hover:text-black">
                    Descargar CV
                  </span>
                  <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer id="contact" className="px-6 py-32 md:px-24 border-t border-stone-900 bg-black">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end gap-16">
            <div className="space-y-12 max-w-md w-full">
              <h4 className="font-serif text-4xl text-white italic">¿Hablamos?</h4>
              <p className="text-stone-500 text-sm leading-relaxed max-w-xs">
                Disponible para colaboraciones creativas, guionismo de ficción y proyectos de investigación narrativa.
              </p>
              <div className="group overflow-hidden">
                <a 
                  href="mailto:discriptoficial@gmail.com" 
                  className="text-primary text-2xl md:text-3xl font-serif inline-block transition-transform duration-500 group-hover:translate-x-2"
                >
                  discriptoficial@gmail.com
                </a>
                <div className="h-[1px] bg-primary w-0 group-hover:w-full transition-all duration-700"></div>
              </div>
            </div>

            <div className="flex flex-col items-end gap-12 w-full md:w-auto">
              <div className="flex gap-12 text-[10px] uppercase tracking-[0.3em] text-stone-500">
                <a href="https://boxd.it/gwyf9" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Letterboxd</a>
                <a href="https://www.linkedin.com/in/francisco-stefanini-4a097b319/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
              </div>
              <div className="text-[9px] text-stone-700 uppercase tracking-[0.4em] font-medium border-t border-stone-900 pt-8 w-full text-right">
                © 2024 Francisco Stefanini — Hecho con rigor editorial
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Home;
