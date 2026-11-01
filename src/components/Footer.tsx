import { PORTFOLIO_DATA } from '../data/portfolioData';
import { ArrowUp, Github, Mail, MessageSquare, Heart } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800/80 bg-slate-950 py-12 text-xs text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Identity & Statement */}
          <div className="space-y-1 text-center md:text-left">
            <div className="font-semibold text-white text-sm">
              {PORTFOLIO_DATA.personal.name}
            </div>
            <p className="text-slate-500">
              UI/UX Designer &amp; Frontend Developer &middot; Science &amp; ISO 17025 Quality Foundation
            </p>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-slate-400 font-medium">
            <a href="#projects" className="hover:text-emerald-400 transition-colors">Work</a>
            <a href="#journey" className="hover:text-emerald-400 transition-colors">Journey</a>
            <a href="#education" className="hover:text-emerald-400 transition-colors">Education</a>
            <a href="#skills" className="hover:text-emerald-400 transition-colors">Skills</a>
            <a href="#contact" className="hover:text-emerald-400 transition-colors">Contact</a>
          </div>

          {/* Actions & Back To Top */}
          <div className="flex items-center gap-4">
            <a
              href={PORTFOLIO_DATA.personal.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-400 hover:text-white bg-slate-900 rounded-lg border border-slate-800 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={PORTFOLIO_DATA.personal.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-400 hover:text-emerald-400 bg-slate-900 rounded-lg border border-slate-800 transition-colors"
              aria-label="WhatsApp"
            >
              <MessageSquare className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PORTFOLIO_DATA.personal.email}`}
              className="p-2 text-slate-400 hover:text-emerald-400 bg-slate-900 rounded-lg border border-slate-800 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2 text-slate-400 hover:text-white bg-slate-900 rounded-lg border border-slate-800 transition-colors flex items-center gap-1 ml-2"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        <div className="mt-8 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-600 text-[11px]">
          <div>
            &copy; {new Date().getFullYear()} Mahmoud Mansour. All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            <span>Built with React, TypeScript &amp; Tailwind</span>
            <span aria-hidden="true">&middot;</span>
            <span className="text-emerald-500/80 font-mono">ISO 17025 Quality Standard</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
