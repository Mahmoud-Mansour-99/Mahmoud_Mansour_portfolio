import { PORTFOLIO_DATA } from '../data/portfolioData';
import { GraduationCap, Award, CheckCircle, BookOpen, Building2 } from 'lucide-react';

export function EducationSection() {
  return (
    <section id="education" className="py-24 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-emerald-400 mb-2">
              <GraduationCap className="w-4 h-4" />
              <span>Academic &amp; Professional Credentials</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Education &amp; Accreditations
            </h2>
            <p className="text-sm sm:text-base text-slate-400 mt-2 max-w-xl">
              A dual foundation of rigorous scientific academia and specialized digital design and frontend engineering academies.
            </p>
          </div>

          <div className="text-xs font-mono text-slate-400">
            <span>Verified Credentials</span>
            <span className="mx-2">·</span>
            <span className="text-emerald-400 font-semibold">Continuous Learning</span>
          </div>
        </div>

        {/* Education Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PORTFOLIO_DATA.education.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-900/60 border border-slate-800 hover:border-slate-700 rounded-2xl p-6 sm:p-7 transition-all flex flex-col justify-between group hover:shadow-xl hover:shadow-emerald-500/5"
            >
              <div>
                {/* Unboxed Metadata Header (No pill badge slop) */}
                <div className="flex items-center justify-between text-xs text-slate-400 pb-3 border-b border-slate-800/80 mb-4">
                  <span className="text-emerald-400 font-medium font-mono">
                    {item.badge}
                  </span>
                  <span>{item.period}</span>
                </div>

                <div className="space-y-1 mb-3">
                  <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                    {item.institution}
                  </h3>
                  <div className="text-sm font-medium text-slate-300">
                    {item.degreeOrTrack}
                  </div>
                  <div className="text-xs text-slate-400">
                    {item.location}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-5">
                  {item.description}
                </p>
              </div>

              {/* Key Focus Points */}
              <div className="pt-4 border-t border-slate-800/80">
                <span className="block text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-2">
                  Specialized Competencies
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {item.keyFocus.map((focus) => (
                    <span
                      key={focus}
                      className="px-2 py-0.5 text-xs text-slate-300 bg-slate-950/80 rounded border border-slate-800"
                    >
                      {focus}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
