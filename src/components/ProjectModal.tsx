import { useState } from 'react';
import { Project } from '../data/portfolioData';
import { 
  X, 
  ExternalLink, 
  Github, 
  CheckCircle2, 
  Layers, 
  Sparkles, 
  Smartphone, 
  Monitor, 
  Code2, 
  ShieldCheck, 
  Palette,
  Maximize2
} from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [previewMode, setPreviewMode] = useState<'desktop' | 'mobile'>('desktop');
  const [activeTab, setActiveTab] = useState<'overview' | 'architecture' | 'preview'>('overview');

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      
      {/* Backdrop click dismiss */}
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      {/* Modal Container */}
      <div className="relative w-full max-w-4xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden z-10 max-h-[92vh] flex flex-col">
        
        {/* Top Header Bar */}
        <div className="p-4 sm:p-5 border-b border-slate-800 bg-slate-950/60 flex items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <span className="text-emerald-400 font-medium">{project.categoryLabel}</span>
              <span aria-hidden="true">·</span>
              <span>{project.role}</span>
              <span aria-hidden="true">·</span>
              <span>{project.year}</span>
            </div>
            <h2 className="text-lg sm:text-xl font-bold text-white mt-0.5">
              {project.title}
            </h2>
          </div>

          <div className="flex items-center gap-2">
            {project.liveUrl !== '#' && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-emerald-400 text-slate-950 hover:bg-emerald-300 transition-colors"
              >
                <span>Launch App</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Navigation Tabs */}
        <div className="px-5 pt-3 pb-2 border-b border-slate-800/80 bg-slate-900/90 flex gap-2 overflow-x-auto">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
              activeTab === 'overview'
                ? 'bg-slate-800 text-emerald-400 border border-slate-700'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Case Study Overview
          </button>
          <button
            onClick={() => setActiveTab('architecture')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
              activeTab === 'architecture'
                ? 'bg-slate-800 text-emerald-400 border border-slate-700'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            UI/UX &amp; Technical Architecture
          </button>
          {project.liveUrl !== '#' && (
            <button
              onClick={() => setActiveTab('preview')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                activeTab === 'preview'
                  ? 'bg-slate-800 text-emerald-400 border border-slate-700'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Live Interactive Embed
            </button>
          )}
        </div>

        {/* Modal Body Scrollable Content */}
        <div className="p-5 sm:p-7 overflow-y-auto space-y-6">
          
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Project Visual Showcase */}
              {project.imageUrl && (
                <div className="rounded-xl overflow-hidden border border-slate-800 bg-slate-950 p-4 sm:p-5 flex flex-col sm:flex-row items-center gap-6 shadow-xl">
                  <div className="w-48 sm:w-56 max-h-[380px] rounded-2xl overflow-hidden border-2 border-slate-700 shadow-2xl bg-black shrink-0 relative group">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-auto object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-2">
                      <a
                        href={project.imageUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1.5 rounded-lg bg-emerald-400 text-slate-950 text-xs font-semibold shadow"
                      >
                        Open Full Screenshot ↗
                      </a>
                    </div>
                  </div>

                  <div className="space-y-3 text-left flex-1">
                    <div className="flex items-center gap-2 text-xs text-emerald-400 font-mono">
                      <span className="w-2 h-2 rounded-full bg-emerald-400" />
                      <span>Authentic Production Screen</span>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-white">
                      Live App Interface Capture
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Captured directly from Mahmoud's live deployed application on GitHub Pages. Highlights real Arabic and Latin typography, responsive mobile-first hierarchy, and interactive interface states.
                    </p>
                    {project.liveUrl !== '#' && (
                      <div className="pt-1">
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-slate-800 text-slate-200 hover:bg-slate-700 border border-slate-700 transition-colors"
                        >
                          <span>Test Live App</span>
                          <ExternalLink className="w-3.5 h-3.5 text-emerald-400" />
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Tagline & Summary */}
              <div className="bg-slate-950/70 p-4 sm:p-5 rounded-xl border border-slate-800/80">
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {project.overview}
                </p>
              </div>

              {/* Challenge vs Solution Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-slate-950/50 rounded-xl border border-slate-800/60">
                  <span className="block text-xs font-mono uppercase tracking-wider text-amber-400 mb-1">
                    The Problem &amp; Friction
                  </span>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {project.challenge}
                  </p>
                </div>

                <div className="p-4 bg-slate-950/50 rounded-xl border border-slate-800/60">
                  <span className="block text-xs font-mono uppercase tracking-wider text-emerald-400 mb-1">
                    The Design &amp; Code Solution
                  </span>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              </div>

              {/* Key Features List */}
              <div className="space-y-3">
                <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  Engineered Features &amp; User Touchpoints
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {project.keyFeatures.map((feat, idx) => (
                    <div
                      key={idx}
                      className="p-3 bg-slate-950/40 rounded-lg border border-slate-800/60 flex items-start gap-2.5 text-xs text-slate-300"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack List */}
              <div className="space-y-2 pt-2 border-t border-slate-800">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  Tech Stack &amp; Methodologies
                </span>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-mono bg-slate-800 text-slate-300 rounded border border-slate-700/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'architecture' && (
            <div className="space-y-6">
              {/* Design Specifications & Deliverables */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-slate-950/50 rounded-xl border border-slate-800">
                  <span className="text-xs text-slate-400 block mb-1">Theme Accent</span>
                  <div className="flex items-center gap-2">
                    <div
                      className="w-4 h-4 rounded-full border border-white/20"
                      style={{ backgroundColor: project.designSpecs.primaryColor }}
                    />
                    <span className="font-mono text-xs text-white">
                      {project.designSpecs.primaryColor}
                    </span>
                  </div>
                </div>

                <div className="p-4 bg-slate-950/50 rounded-xl border border-slate-800">
                  <span className="text-xs text-slate-400 block mb-1">Typography Architecture</span>
                  <span className="font-mono text-xs text-white">
                    {project.designSpecs.fontFamily}
                  </span>
                </div>

                <div className="p-4 bg-slate-950/50 rounded-xl border border-slate-800">
                  <span className="text-xs text-slate-400 block mb-1">Quality Standard</span>
                  <span className="font-mono text-xs text-emerald-400">
                    WCAG AA &amp; ISO Precision
                  </span>
                </div>
              </div>

              {/* Deliverables List */}
              <div className="p-4 bg-slate-950/60 rounded-xl border border-slate-800 space-y-2">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  Delivered Artifacts &amp; Assets
                </span>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  {project.designSpecs.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Mahmoud's Dual Advantage in this project */}
              <div className="p-4 bg-gradient-to-r from-emerald-950/20 to-teal-950/20 border border-emerald-800/30 rounded-xl text-xs space-y-1.5">
                <span className="font-semibold text-emerald-300 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4" />
                  Mahmoud's Engineering &amp; Design Footprint
                </span>
                <p className="text-slate-300 leading-relaxed">
                  Every interaction was evaluated for cognitive load and accessibility. From input boundary validation to keyboard navigation and responsive breakpoints, this application balances visual appeal with structural robustness.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'preview' && project.liveUrl !== '#' && (
            <div className="space-y-3">
              {/* Preview controls */}
              <div className="flex items-center justify-between text-xs text-slate-400 pb-2">
                <div className="flex items-center gap-2">
                  <span>Viewport:</span>
                  <div className="inline-flex bg-slate-950 border border-slate-800 rounded-lg p-0.5">
                    <button
                      onClick={() => setPreviewMode('desktop')}
                      className={`px-2 py-1 rounded flex items-center gap-1 transition-colors ${
                        previewMode === 'desktop' ? 'bg-slate-800 text-white' : 'text-slate-400'
                      }`}
                    >
                      <Monitor className="w-3.5 h-3.5" />
                      <span>Desktop</span>
                    </button>
                    <button
                      onClick={() => setPreviewMode('mobile')}
                      className={`px-2 py-1 rounded flex items-center gap-1 transition-colors ${
                        previewMode === 'mobile' ? 'bg-slate-800 text-white' : 'text-slate-400'
                      }`}
                    >
                      <Smartphone className="w-3.5 h-3.5" />
                      <span>Mobile</span>
                    </button>
                  </div>
                </div>

                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-emerald-400 hover:text-emerald-300 underline"
                >
                  <span>Open in full tab</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Iframe wrapper */}
              <div
                className={`mx-auto bg-white rounded-xl overflow-hidden border border-slate-700 shadow-2xl transition-all duration-300 ${
                  previewMode === 'desktop' ? 'w-full h-[520px]' : 'w-[375px] h-[580px]'
                }`}
              >
                <iframe
                  src={project.liveUrl}
                  title={`${project.title} live demo`}
                  className="w-full h-full border-0"
                  loading="lazy"
                  sandbox="allow-scripts allow-same-origin allow-forms"
                />
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 sm:p-5 border-t border-slate-800 bg-slate-950/80 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            {project.liveUrl !== '#' && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg bg-emerald-400 text-slate-950 hover:bg-emerald-300 transition-colors"
              >
                <span>Visit Live Website</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-lg bg-slate-800 text-slate-200 hover:bg-slate-700 border border-slate-700 transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>Source Code</span>
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-slate-400 hover:text-white transition-colors"
          >
            Close Details
          </button>
        </div>

      </div>
    </div>
  );
}
