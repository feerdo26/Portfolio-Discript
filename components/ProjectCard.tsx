
import React from 'react';
import { Link } from 'react-router-dom';
import { Project } from '../types';
import { Icons } from '../constants';

interface Props {
  project: Project;
  offset?: boolean;
}

const ProjectCard: React.FC<Props> = ({ project, offset }) => {
  const className = `block group cursor-pointer ${offset ? 'md:mt-32' : ''}`;
  
  const content = (
    <>
      <div className="overflow-hidden rounded-lg aspect-[16/10] bg-stone-900 mb-6 relative">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
          <span className="text-white font-serif text-lg italic">{project.category}</span>
        </div>
      </div>
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-serif text-2xl mb-1 text-primary group-hover:translate-x-1 transition-transform">{project.title}</h3>
          <p className="text-[10px] uppercase tracking-[0.3em] text-stone-500">{project.category}</p>
        </div>
        <div className="text-stone-700 group-hover:text-primary group-hover:rotate-12 transition-all">
          <Icons.ArrowUpRight />
        </div>
      </div>
    </>
  );

  if (project.link) {
    if (project.link.startsWith('/')) {
        return (
            <Link to={project.link} className={className}>
                {content}
            </Link>
        );
    }
    return (
      <a 
        href={project.link} 
        target="_blank" 
        rel="noopener noreferrer" 
        className={className}
      >
        {content}
      </a>
    );
  }

  return (
    <div className={className}>
      {content}
    </div>
  );
};

export default ProjectCard;
