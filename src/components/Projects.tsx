import { useState } from 'react';
import { PORTFOLIO_DATA, Project } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';
import { 
  ExternalLink, 
  Github, 
  ArrowUpRight, 
  Sparkles, 
  CheckCircle2, 
  Laptop, 
  Eye, 
  Maximize2 
} from 'lucide-react';

export function Projects() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'frontend' | 'uiux'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = PORTFOLIO_DATA.projects.filter((p) => {
    if (activeFilter === 'all') return true;
    return p.category === activeFilter;
  });

  return (
    <section id="projects" className="py-24 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-emerald-400 mb-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Selected Portfolio Work</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Crafted with Precision &amp; Purpose
            </h2>
            <p className="text-sm sm:text-base text-slate-400 mt-2 max-w-xl">
              Live web applications and user interfaces engineered with modern frontend standards, responsive ergonomics, and strict quality verification.
            </p>
          </div>

          {/* Interactive Filter Tabs (Zero-pill button style) */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-xl self-start md:self-auto">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all ${
                activeFilter === 'all'
                  ? 'bg-slate-800 text-white shadow-sm border border-slate-700'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              All Projects ({PORTFOLIO_DATA.projects.length})
            </button>
            <button
              onClick={() => setActiveFilter('frontend')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all ${
                activeFilter === 'frontend'
                  ? 'bg-slate-800 text-white shadow-sm border border-slate-700'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Frontend Applications
            </button>
            <button
              onClick={() => setActiveFilter('uiux')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all ${
                activeFilter === 'uiux'
                  ? 'bg-slate-800 text-white shadow-sm border border-slate-700'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              UI/UX &amp; Quality Systems
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-slate-800 hover:border-slate-700 rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/5 hover:-translate-y-1"
            >
              {/* Simulated Browser Window Top Frame */}
              <div className="p-4 bg-slate-950/80 border-b border-slate-800/80 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
                  <span className="ml-2 text-[11px] font-mono text-slate-500 truncate max-w-[170px]">
                    {project.liveUrl !== '#' ? project.liveUrl.replace('https://', '') : 'concept://iso-lab'}
                  </span>
                </div>

                <div className="flex items-center gap-1.5">
                  {project.liveUrl !== '#' && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1 text-slate-400 hover:text-emerald-400 transition-colors"
                      title="Open Live Website"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  )}
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="p-1 text-slate-400 hover:text-white transition-colors"
                    title="Expand Case Study"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Card Visual Hero Graphic */}
              <div 
                className="relative h-60 w-full bg-slate-950 border-b border-slate-800/60 overflow-hidden cursor-pointer group/img"
                onClick={() => setSelectedProject(project)}
              >
                {project.imageUrl ? (
                  <div className="w-full h-full relative overflow-hidden">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover object-top group-hover/img:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-60 group-hover/img:opacity-40 transition-opacity" />
                  </div>
                ) : (
                  <div className="w-full h-full bg-slate-900 flex items-center justify-center text-slate-500">
                    No preview available
                  </div>
                )}

                {/* Hover overlay hint */}
                <div className="absolute bottom-3 right-3 opacity-90 group-hover/img:opacity-100 transition-opacity flex items-center gap-1.5 text-[11px] font-mono text-emerald-300 bg-slate-950/80 backdrop-blur-md px-2.5 py-1 rounded-md border border-slate-700/80 shadow-md">
                  <Eye className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Inspect Case Study</span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex-1 flex flex-col">
                {/* Quiet unboxed metadata (zero-pill rule) */}
                <div className="flex items-center gap-2 text-xs text-slate-400 mb-2">
                  <span className="text-emerald-400 font-medium">{project.categoryLabel}</span>
                  <span aria-hidden="true" className="text-slate-600">·</span>
                  <span>{project.year}</span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                  {project.title}
                </h3>

                <p className="text-xs text-slate-400 mt-2 line-clamp-3 leading-relaxed">
                  {project.tagline}
                </p>

                {/* Highlights */}
                <div className="mt-4 pt-4 border-t border-slate-800/80 space-y-1.5 flex-1">
                  {project.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                {/* Tech tags */}
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {project.techStack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 text-[11px] font-mono bg-slate-950 text-slate-400 rounded border border-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Card Action Buttons */}
                <div className="mt-6 pt-4 border-t border-slate-800 flex items-center gap-2">
                  {project.liveUrl !== '#' ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-lg bg-emerald-400 text-slate-950 hover:bg-emerald-300 transition-colors shadow-sm"
                    >
                      <span>Live Demo</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-lg bg-amber-400 text-slate-950 hover:bg-amber-300 transition-colors shadow-sm"
                    >
                      <span>View Case Study</span>
                    </button>
                  )}

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="px-3 py-2 text-xs font-semibold rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors"
                  >
                    Deep Dive
                  </button>

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-700 rounded-lg border border-slate-700 transition-colors"
                      title="GitHub Repository"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
