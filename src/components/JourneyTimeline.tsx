import { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { 
  FlaskConical, 
  ShieldCheck, 
  Palette, 
  Code2, 
  ArrowRight, 
  Check, 
  Sparkles,
  Award
} from 'lucide-react';

export function JourneyTimeline() {
  const [activeStep, setActiveStep] = useState<number>(0);

  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'FlaskConical':
        return <FlaskConical className="w-5 h-5" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5" />;
      case 'Palette':
        return <Palette className="w-5 h-5" />;
      case 'Code2':
        return <Code2 className="w-5 h-5" />;
      default:
        return <Sparkles className="w-5 h-5" />;
    }
  };

  const getStepColor = (type: string) => {
    switch (type) {
      case 'science':
        return {
          bg: 'bg-emerald-500/10',
          border: 'border-emerald-500/30',
          text: 'text-emerald-400',
          badge: 'text-emerald-400',
          line: 'from-emerald-500',
        };
      case 'quality':
        return {
          bg: 'bg-amber-500/10',
          border: 'border-amber-500/30',
          text: 'text-amber-400',
          badge: 'text-amber-400',
          line: 'from-amber-500',
        };
      case 'design':
        return {
          bg: 'bg-teal-500/10',
          border: 'border-teal-500/30',
          text: 'text-teal-400',
          badge: 'text-teal-400',
          line: 'from-teal-500',
        };
      case 'code':
        return {
          bg: 'bg-sky-500/10',
          border: 'border-sky-500/30',
          text: 'text-sky-400',
          badge: 'text-sky-400',
          line: 'from-sky-500',
        };
      default:
        return {
          bg: 'bg-slate-800',
          border: 'border-slate-700',
          text: 'text-white',
          badge: 'text-slate-400',
          line: 'from-slate-700',
        };
    }
  };

  return (
    <section id="journey" className="py-24 border-t border-slate-800/80 bg-slate-950/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-emerald-400 mb-2">
            <Award className="w-3.5 h-3.5" />
            <span>The Origin Story &amp; Differentiation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            The Chemist-to-Coder Evolution
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-3 leading-relaxed">
            Most developers come from computer science; most designers come from graphic art. Mahmoud Mansour brings <strong className="text-slate-200">ISO 17025 accredited quality management and laboratory science</strong> to digital creation.
          </p>
        </div>

        {/* Interactive Stepper Navigation (zero-pill styling) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
          {PORTFOLIO_DATA.journeySteps.map((step, idx) => {
            const colors = getStepColor(step.type);
            const isSelected = activeStep === idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`text-left p-4 rounded-xl border transition-all ${
                  isSelected
                    ? `${colors.bg} ${colors.border} shadow-lg shadow-black/40`
                    : 'bg-slate-900/50 border-slate-800/80 hover:bg-slate-900 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className={`p-2 rounded-lg ${isSelected ? colors.bg : 'bg-slate-800'} ${colors.text}`}>
                    {getStepIcon(step.iconName)}
                  </div>
                  <span className="font-mono text-xs text-slate-400">
                    Phase 0{idx + 1}
                  </span>
                </div>
                <h3 className={`text-sm font-semibold truncate ${isSelected ? 'text-white' : 'text-slate-300'}`}>
                  {step.title}
                </h3>
                <span className="text-xs text-slate-400 block mt-0.5 truncate">
                  {step.organization}
                </span>
              </button>
            );
          })}
        </div>

        {/* Detailed Showcase for Current Step */}
        {(() => {
          const current = PORTFOLIO_DATA.journeySteps[activeStep];
          const colors = getStepColor(current.type);
          return (
            <div className="bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 rounded-2xl p-6 sm:p-9 shadow-xl">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left Overview */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <span className={`font-mono font-medium ${colors.badge}`}>
                      Phase 0{activeStep + 1} of 04
                    </span>
                    <span aria-hidden="true">·</span>
                    <span>{current.period}</span>
                  </div>

                  <h3 className="text-2xl font-bold text-white">
                    {current.title}
                  </h3>
                  
                  <div className="text-sm font-medium text-slate-300">
                    {current.role} &mdash; <span className="text-slate-400">{current.organization}</span>
                  </div>

                  <p className="text-sm text-slate-400 leading-relaxed pt-2 border-t border-slate-800">
                    {current.summary}
                  </p>

                  {/* Navigation controls */}
                  <div className="flex items-center gap-3 pt-3">
                    <button
                      onClick={() => setActiveStep((prev) => (prev > 0 ? prev - 1 : 3))}
                      className="px-3 py-1.5 text-xs font-medium rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
                    >
                      &larr; Previous Phase
                    </button>
                    <button
                      onClick={() => setActiveStep((prev) => (prev < 3 ? prev + 1 : 0))}
                      className="px-3 py-1.5 text-xs font-medium rounded-lg bg-emerald-400 text-slate-950 font-semibold hover:bg-emerald-300 transition-colors inline-flex items-center gap-1"
                    >
                      <span>Next Phase</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Right Bulleted Takeaways */}
                <div className="lg:col-span-7 bg-slate-950/60 rounded-xl p-5 sm:p-6 border border-slate-800/80 space-y-4">
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block">
                    Core Competencies &amp; Mindset Instilled
                  </span>
                  
                  <div className="space-y-3">
                    {current.bullets.map((bullet, i) => (
                      <div key={i} className="flex items-start gap-3 text-sm text-slate-300">
                        <div className={`p-1 rounded-md ${colors.bg} ${colors.text} shrink-0 mt-0.5`}>
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <p className="leading-relaxed">{bullet}</p>
                      </div>
                    ))}
                  </div>

                  {/* Translation to Web Engineering */}
                  <div className="mt-4 pt-4 border-t border-slate-800/80 text-xs text-slate-400 flex items-start gap-2">
                    <span className="text-emerald-400 font-mono font-semibold shrink-0">
                      The Product Benefit:
                    </span>
                    <span>
                      {activeStep === 0 && 'Clear analytical modeling, zero guesswork in logic, and systematic scientific validation of edge conditions.'}
                      {activeStep === 1 && 'ISO 17025 rigor translates to zero-defect UI systems, error-proof input validation, and high-reliability production standards.'}
                      {activeStep === 2 && 'Deep human empathy, clear visual hierarchy, accessible color contrast, and production-ready Figma design systems.'}
                      {activeStep === 3 && 'Modern responsive code, clean semantic HTML5, robust CSS architecture, and fast load performance.'}
                    </span>
                  </div>
                </div>

              </div>
            </div>
          );
        })()}

      </div>
    </section>
  );
}
