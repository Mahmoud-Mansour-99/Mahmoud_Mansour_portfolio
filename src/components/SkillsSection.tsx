import { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { 
  Palette, 
  Code2, 
  ShieldCheck, 
  Binary, 
  HeartHandshake, 
  CheckCircle2, 
  Layers,
  Sparkles
} from 'lucide-react';

export function SkillsSection() {
  const [activeTab, setActiveTab] = useState<'all' | 'design' | 'frontend' | 'quality'>('all');

  const getValueIcon = (iconName: string) => {
    switch (iconName) {
      case 'Binary':
        return <Binary className="w-5 h-5 text-emerald-400" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-5 h-5 text-teal-400" />;
      case 'CheckCircle2':
        return <CheckCircle2 className="w-5 h-5 text-amber-400" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-sky-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-emerald-400" />;
    }
  };

  return (
    <section id="skills" className="py-24 border-t border-slate-800/80 bg-slate-950/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-emerald-400 mb-2">
            <Layers className="w-3.5 h-3.5" />
            <span>Core Tooling &amp; Methodologies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills &amp; Precision Standards
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-3 leading-relaxed">
            The intersection of creative interface design, resilient frontend code, and accredited quality management systems.
          </p>
        </div>

        {/* 3 Major Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          
          {/* Design & UX */}
          <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 flex flex-col">
            <div className="flex items-center gap-3 pb-4 border-b border-slate-800/80 mb-5">
              <div className="p-2.5 rounded-xl bg-teal-500/10 text-teal-400 border border-teal-500/20">
                <Palette className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white">UI/UX Design</h3>
                <span className="text-xs text-slate-400">DEPI Track &amp; Systems</span>
              </div>
            </div>

            <div className="space-y-3 flex-1">
              {PORTFOLIO_DATA.skills.design.map((skill) => (
                <div key={skill.name} className="flex items-center justify-between text-xs">
                  <span className="text-slate-300">{skill.name}</span>
                  <span className="font-mono text-slate-400 text-[11px]">{skill.level}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80 text-[11px] text-slate-400 font-mono">
              Tools: Figma, FigJam, Miro, Adobe Creative Suite
            </div>
          </div>

          {/* Frontend Engineering */}
          <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 flex flex-col">
            <div className="flex items-center gap-3 pb-4 border-b border-slate-800/80 mb-5">
              <div className="p-2.5 rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/20">
                <Code2 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white">Frontend Dev</h3>
                <span className="text-xs text-slate-400">Elzero &amp; Tarmeez Core</span>
              </div>
            </div>

            <div className="space-y-3 flex-1">
              {PORTFOLIO_DATA.skills.frontend.map((skill) => (
                <div key={skill.name} className="flex items-center justify-between text-xs">
                  <span className="text-slate-300">{skill.name}</span>
                  <span className="font-mono text-slate-400 text-[11px]">{skill.level}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80 text-[11px] text-slate-400 font-mono">
              Stack: HTML5, CSS3, JS ES6+, Tailwind, React, Git
            </div>
          </div>

          {/* Scientific Quality & ISO 17025 */}
          <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 flex flex-col">
            <div className="flex items-center gap-3 pb-4 border-b border-slate-800/80 mb-5">
              <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white">Quality &amp; Standards</h3>
                <span className="text-xs text-slate-400">ISO 17025 &amp; Science</span>
              </div>
            </div>

            <div className="space-y-3 flex-1">
              {PORTFOLIO_DATA.skills.scientificQuality.map((skill) => (
                <div key={skill.name} className="flex items-center justify-between text-xs">
                  <span className="text-slate-300">{skill.name}</span>
                  <span className="font-mono text-slate-400 text-[11px]">{skill.level}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80 text-[11px] text-slate-400 font-mono">
              Principles: Traceability, Poka-Yoke, Zero-Defect QA
            </div>
          </div>

        </div>

        {/* Core Philosophy / Working Values */}
        <div className="border-t border-slate-800 pt-16">
          <div className="text-center mb-10">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
              Guiding Principles
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
              How I Approach Every Interface
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PORTFOLIO_DATA.values.map((val) => (
              <div
                key={val.title}
                className="p-5 rounded-xl bg-slate-900/50 border border-slate-800/70 hover:border-slate-700 transition-colors"
              >
                <div className="mb-3">{getValueIcon(val.icon)}</div>
                <h4 className="text-sm font-bold text-white mb-2">{val.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
