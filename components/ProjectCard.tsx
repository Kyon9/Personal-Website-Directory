
import React from 'react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block"
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl blur-xl`}></div>
      <div className="glass glass-hover p-6 rounded-2xl h-full flex flex-col transition-all duration-300 transform group-hover:-translate-y-2 group-hover:scale-[1.02]">
        <div className="flex items-center justify-between mb-4">
          <div className="text-4xl group-hover:scale-125 transition-transform duration-300">
            {project.icon}
          </div>
          <div className="flex space-x-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-white/50 font-medium tracking-wider"
              >
                {tag.toUpperCase()}
              </span>
            ))}
          </div>
        </div>
        
        <h3 className="text-xl font-bold font-display mb-2 group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>
        
        <p className="text-gray-400 text-sm leading-relaxed flex-grow">
          {project.description}
        </p>
        
        <div className="mt-6 flex items-center text-xs font-semibold text-white/30 group-hover:text-white/60 transition-colors uppercase tracking-[0.2em]">
          Visit Website 
          <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
