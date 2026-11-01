import { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { 
  ArrowRight, 
  Copy, 
  Check, 
  Phone, 
  Mail, 
  MessageSquare, 
  Sparkles, 
  FlaskConical, 
  ShieldCheck, 
  Palette, 
  Code2, 
  FileText 
} from 'lucide-react';

interface HeroProps {
  onOpenResume: () => void;
}

export function Hero({ onOpenResume }: HeroProps) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [activeLens, setActiveLens] = useState<'chemistry' | 'design' | 'frontend'>('chemistry');

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background radial gradient glow (quiet, non-slop deep teal/emerald) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-teal-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Main Hero Column */}
          <div className="lg:col-span-7 space-y-7">
            
            {/* Personal Profile Header */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-5 pb-2">
              <div className="relative group shrink-0 self-start sm:self-center">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-2 border-emerald-500/50 shadow-2xl shadow-emerald-500/20 bg-slate-900">
                  <img
                   src="/public/assets/aistudio/personal.jpeg"
                    alt="Mahmoud Mansour"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-[#0b0f17] rounded-full flex items-center justify-center">
                  <span className="w-3.5 h-3.5 rounded-full bg-emerald-400 block animate-pulse" title="Available for Hire" />
                </div>
              </div>

              <div className="space-y-1.5">
                {/* Quiet Unboxed Status Bar (zero-pill discipline) */}
                <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400">
                  <span className="inline-flex items-center gap-1.5 font-medium text-emerald-400">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    Available as Freelancer &amp; Part-time Roles
                  </span>
                  <span aria-hidden="true" className="text-slate-600">·</span>
                  <span>Based in Egypt</span>
                  <span aria-hidden="true" className="text-slate-600">·</span>
                  <span>Remote Worldwide</span>
                </div>

                {/* Primary Headline */}
                <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
                  Mahmoud <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-sky-400">Mansour</span>
                </h1>
                <p className="text-lg sm:text-xl font-medium text-slate-300">
                  UI/UX Designer <span className="text-emerald-400">&amp;</span> Frontend Developer
                </p>
              </div>
            </div>

            {/* Value Proposition */}
            <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl">
              Bringing <strong className="text-slate-200 font-semibold">laboratory precision</strong> and <strong className="text-slate-200 font-semibold">ISO 17025 quality discipline</strong> to digital product design and responsive frontend engineering. Grounded in science, certified by <span className="text-slate-200">DEPI in UI/UX</span>, and trained across <span className="text-slate-200">Elzero Web School &amp; Tarmeez Academy</span>.
            </p>

            {/* Unboxed credentials kicker */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-400 border-l-2 border-emerald-500/40 pl-3">
              <span className="font-medium text-slate-300">Faculty of Science</span>
              <span aria-hidden="true" className="text-slate-600">/</span>
              <span>Chemist &amp; ISO 17025 Quality Manager</span>
              <span aria-hidden="true" className="text-slate-600">/</span>
              <span className="text-emerald-400">DEPI UI/UX</span>
              <span aria-hidden="true" className="text-slate-600">/</span>
              <span className="text-teal-400">Elzero &amp; Tarmeez Frontend</span>
            </div>

            {/* Primary CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg shadow-md shadow-emerald-400/20 transition-all hover:translate-y-[-1px]"
              >
                <span>Explore Selected Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-slate-200 bg-slate-800/90 hover:bg-slate-700/90 border border-slate-700 rounded-lg transition-all"
              >
                <span>Get In Touch</span>
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-1.5 px-4 py-3 text-sm font-semibold text-slate-300 hover:text-white transition-colors"
              >
                <FileText className="w-4 h-4 text-emerald-400" />
                <span>View Full CV</span>
              </button>
            </div>

            {/* Fast Quick-Action Contact Bar */}
            <div className="pt-4 border-t border-slate-800/80">
              <span className="block text-xs uppercase tracking-wider text-slate-400 mb-2 font-mono">
                Direct Contact &amp; Verification
              </span>
              <div className="flex flex-wrap gap-2">
                {/* Email Action */}
                <div className="inline-flex items-center bg-slate-900/90 border border-slate-800 rounded-lg text-xs overflow-hidden">
                  <a
                    href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                    className="px-3 py-1.5 text-slate-300 hover:text-emerald-300 transition-colors flex items-center gap-1.5"
                    title="Send an email"
                  >
                    <Mail className="w-3.5 h-3.5 text-slate-400" />
                    <span>{PORTFOLIO_DATA.personal.email}</span>
                  </a>
                  <button
                    onClick={() => copyToClipboard(PORTFOLIO_DATA.personal.email, 'email')}
                    className="px-2 py-1.5 border-l border-slate-800 text-slate-400 hover:text-white transition-colors bg-slate-800/40"
                    title="Copy Email"
                    aria-label="Copy Email"
                  >
                    {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

                {/* Phone / WhatsApp Action */}
                <div className="inline-flex items-center bg-slate-900/90 border border-slate-800 rounded-lg text-xs overflow-hidden">
                  <a
                    href={PORTFOLIO_DATA.personal.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 text-slate-300 hover:text-emerald-300 transition-colors flex items-center gap-1.5"
                    title="Chat on WhatsApp"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{PORTFOLIO_DATA.personal.formattedPhone}</span>
                  </a>
                  <button
                    onClick={() => copyToClipboard(PORTFOLIO_DATA.personal.phone, 'phone')}
                    className="px-2 py-1.5 border-l border-slate-800 text-slate-400 hover:text-white transition-colors bg-slate-800/40"
                    title="Copy Phone"
                    aria-label="Copy Phone"
                  >
                    {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive "The Precision Triad" Showcase */}
          <div className="lg:col-span-5">
            <div className="bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-slate-800 rounded-2xl p-6 sm:p-7 shadow-2xl relative overflow-hidden backdrop-blur-sm">
              
              {/* Header of widget */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800/80 mb-5">
                <div>
                  <span className="text-xs uppercase font-mono tracking-wider text-emerald-400 font-medium">
                    The Multidisciplinary Advantage
                  </span>
                  <h3 className="text-base font-semibold text-white">
                    Analytical Science Meets Digital Craft
                  </h3>
                </div>
                <div className="w-2 h-2 rounded-full bg-emerald-400 shadow-sm shadow-emerald-400" />
              </div>

              {/* Interactive Lens Switcher */}
              <div className="grid grid-cols-3 gap-1 bg-slate-950/80 p-1 rounded-xl border border-slate-800/80 mb-5">
                <button
                  onClick={() => setActiveLens('chemistry')}
                  className={`py-2 px-2 text-xs font-medium rounded-lg transition-all flex items-center justify-center gap-1.5 ${
                    activeLens === 'chemistry'
                      ? 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/30'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <FlaskConical className="w-3.5 h-3.5" />
                  <span>ISO &amp; Science</span>
                </button>
                <button
                  onClick={() => setActiveLens('design')}
                  className={`py-2 px-2 text-xs font-medium rounded-lg transition-all flex items-center justify-center gap-1.5 ${
                    activeLens === 'design'
                      ? 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/30'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Palette className="w-3.5 h-3.5" />
                  <span>DEPI UI/UX</span>
                </button>
                <button
                  onClick={() => setActiveLens('frontend')}
                  className={`py-2 px-2 text-xs font-medium rounded-lg transition-all flex items-center justify-center gap-1.5 ${
                    activeLens === 'frontend'
                      ? 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/30'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Code2 className="w-3.5 h-3.5" />
                  <span>Frontend Dev</span>
                </button>
              </div>

              {/* Dynamic Lens Content */}
              {activeLens === 'chemistry' && (
                <div className="space-y-4 animate-in fade-in duration-300">
                  <div className="flex items-start gap-3">
                    <div className="p-2.5 rounded-lg bg-emerald-950/40 border border-emerald-800/40 text-emerald-400 shrink-0">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white">ISO 17025 Quality Lead Mindset</h4>
                      <p className="text-xs text-slate-400 mt-1">
                        Trained in laboratory accreditation standards where accuracy cannot fail. I treat software bugs, accessibility violations, and UX friction points as quality non-conformances to be prevented by design.
                      </p>
                    </div>
                  </div>
                  <div className="bg-slate-950/60 rounded-xl p-3 border border-slate-800/60 space-y-2 text-xs">
                    <div className="flex items-center justify-between text-slate-400">
                      <span>Method Validation</span>
                      <span className="font-mono text-emerald-400">Zero-Tolerance QA</span>
                    </div>
                    <div className="flex items-center justify-between text-slate-400">
                      <span>Data Traceability</span>
                      <span className="font-mono text-emerald-400">Systematic Audits</span>
                    </div>
                    <div className="flex items-center justify-between text-slate-400">
                      <span>Error Proofing</span>
                      <span className="font-mono text-emerald-400">Poka-Yoke Inputs</span>
                    </div>
                  </div>
                </div>
              )}

              {activeLens === 'design' && (
                <div className="space-y-4 animate-in fade-in duration-300">
                  <div className="flex items-start gap-3">
                    <div className="p-2.5 rounded-lg bg-teal-950/40 border border-teal-800/40 text-teal-400 shrink-0">
                      <Palette className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white">DEPI UI/UX Human-Centered Design</h4>
                      <p className="text-xs text-slate-400 mt-1">
                        Empathy, typography, color harmony, and information architecture. Creating intuitive Figma prototypes and systematic design tokens that developers can build with zero ambiguity.
                      </p>
                    </div>
                  </div>
                  <div className="bg-slate-950/60 rounded-xl p-3 border border-slate-800/60 space-y-2 text-xs">
                    <div className="flex items-center justify-between text-slate-400">
                      <span>Prototyping</span>
                      <span className="font-mono text-teal-400">Figma &amp; Micro-flows</span>
                    </div>
                    <div className="flex items-center justify-between text-slate-400">
                      <span>Typography</span>
                      <span className="font-mono text-teal-400">Bilingual Arabic/Latin</span>
                    </div>
                    <div className="flex items-center justify-between text-slate-400">
                      <span>Heuristic Audit</span>
                      <span className="font-mono text-teal-400">Nielsen Norms</span>
                    </div>
                  </div>
                </div>
              )}

              {activeLens === 'frontend' && (
                <div className="space-y-4 animate-in fade-in duration-300">
                  <div className="flex items-start gap-3">
                    <div className="p-2.5 rounded-lg bg-sky-950/40 border border-sky-800/40 text-sky-400 shrink-0">
                      <Code2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white">Frontend Code Architecture</h4>
                      <p className="text-xs text-slate-400 mt-1">
                        Trained through Elzero Web School and Tarmeez Academy. Writing modern, clean, semantic HTML5, CSS3/Tailwind, JavaScript ES6+, and React components that perform seamlessly on any screen.
                      </p>
                    </div>
                  </div>
                  <div className="bg-slate-950/60 rounded-xl p-3 border border-slate-800/60 space-y-2 text-xs">
                    <div className="flex items-center justify-between text-slate-400">
                      <span>Responsiveness</span>
                      <span className="font-mono text-sky-400">Mobile-First 100%</span>
                    </div>
                    <div className="flex items-center justify-between text-slate-400">
                      <span>Core Stack</span>
                      <span className="font-mono text-sky-400">JS ES6+ / React / Tailwind</span>
                    </div>
                    <div className="flex items-center justify-between text-slate-400">
                      <span>Delivery</span>
                      <span className="font-mono text-sky-400">Clean Git / CI / Pages</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Live Projects Quick Strip */}
              <div className="mt-5 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs">
                <span className="text-slate-500 font-mono">Live Showcases:</span>
                <div className="flex items-center gap-3">
                  <a
                    href="https://mahmoud-mansour-99.github.io/XO-ShoeCleaner/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-300 hover:text-emerald-400 underline decoration-slate-700 hover:decoration-emerald-400 transition-colors"
                  >
                    XO-ShoeCleaner ↗
                  </a>
                  <span className="text-slate-700">·</span>
                  <a
                    href="https://mahmoud-mansour-99.github.io/Quran/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-300 hover:text-emerald-400 underline decoration-slate-700 hover:decoration-emerald-400 transition-colors"
                  >
                    Quran App ↗
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
