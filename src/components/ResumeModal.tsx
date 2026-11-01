import { PORTFOLIO_DATA } from '../data/portfolioData';
import { X, Printer, Download, Mail, Phone, MapPin, Github, ExternalLink } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      
      {/* Backdrop */}
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      {/* Modal Container */}
      <div className="relative w-full max-w-4xl bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden z-10 max-h-[94vh] flex flex-col">
        
        {/* Top Control Bar */}
        <div className="p-4 sm:p-5 border-b border-slate-800 bg-slate-950 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
            <span className="text-xs font-mono uppercase tracking-wider text-slate-300">
              Curriculum Vitae &mdash; Mahmoud Mansour
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-emerald-400 text-slate-950 hover:bg-emerald-300 transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save as PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
              aria-label="Close CV"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable CV Content */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 bg-slate-900 text-slate-200 text-xs sm:text-sm print:bg-white print:text-black">
          
          {/* Header Identity */}
          <div className="border-b border-slate-800 pb-6 print:border-black">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-white print:text-black">
                  {PORTFOLIO_DATA.personal.name}
                </h1>
                <p className="text-base text-emerald-400 font-medium mt-1 print:text-emerald-700">
                  {PORTFOLIO_DATA.personal.title}
                </p>
              </div>

              <div className="shrink-0">
                <img
                  src={PORTFOLIO_DATA.personal.avatarUrl}
                  alt="Mahmoud Mansour"
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl object-cover object-top border border-emerald-500/40 shadow-md print:w-16 print:h-16"
                />
              </div>
            </div>
            
            {/* Contact info bar */}
            <div className="mt-4 flex flex-wrap gap-y-2 gap-x-5 text-xs text-slate-400 print:text-gray-700">
              <span className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-emerald-400" />
                <span>{PORTFOLIO_DATA.personal.email}</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>{PORTFOLIO_DATA.personal.phone}</span>
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                <span>{PORTFOLIO_DATA.personal.location}</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Github className="w-3.5 h-3.5 text-emerald-400" />
                <span>github.com/mahmoud-mansour-99</span>
              </span>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold mb-2 print:text-emerald-800">
              Professional Summary
            </h2>
            <p className="text-slate-300 leading-relaxed print:text-gray-800">
              {PORTFOLIO_DATA.personal.bio}
            </p>
          </div>

          {/* Featured Projects */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold mb-3 print:text-emerald-800">
              Key Projects &amp; Applications
            </h2>
            <div className="space-y-4">
              {PORTFOLIO_DATA.projects.map((proj) => (
                <div key={proj.id} className="p-4 bg-slate-950/60 border border-slate-800 rounded-xl print:bg-gray-50 print:border-gray-300">
                  <div className="flex flex-wrap items-center justify-between gap-1 mb-1">
                    <h3 className="font-bold text-white print:text-black text-sm">
                      {proj.title}
                    </h3>
                    <span className="text-xs text-slate-400 font-mono print:text-gray-600">
                      {proj.year} &middot; {proj.role}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 print:text-gray-700 mb-2">
                    {proj.tagline}
                  </p>
                  <div className="text-xs text-slate-400 print:text-gray-600 font-mono">
                    Stack: {proj.techStack.join(', ')}
                  </div>
                  {proj.liveUrl !== '#' && (
                    <div className="mt-2 text-xs text-emerald-400 print:text-emerald-700">
                      Live URL: {proj.liveUrl}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Education & Qualifications */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold mb-3 print:text-emerald-800">
              Education &amp; Credentials
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {PORTFOLIO_DATA.education.map((edu, idx) => (
                <div key={idx} className="p-4 bg-slate-950/60 border border-slate-800 rounded-xl print:bg-gray-50 print:border-gray-300">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-bold text-white print:text-black text-xs sm:text-sm">
                      {edu.institution}
                    </h3>
                  </div>
                  <div className="text-xs font-medium text-emerald-400 print:text-emerald-700 mb-1">
                    {edu.degreeOrTrack}
                  </div>
                  <p className="text-xs text-slate-400 print:text-gray-600">
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold mb-3 print:text-emerald-800">
              Skills Matrix
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div className="p-3 bg-slate-950/40 border border-slate-800 rounded-lg print:border-gray-300">
                <span className="font-semibold text-white print:text-black block mb-1">UI/UX Design</span>
                <span className="text-slate-400 print:text-gray-600 leading-relaxed">
                  Figma, Wireframing, User Research, Design Systems, Information Architecture, Heuristic Usability Audits.
                </span>
              </div>
              <div className="p-3 bg-slate-950/40 border border-slate-800 rounded-lg print:border-gray-300">
                <span className="font-semibold text-white print:text-black block mb-1">Frontend Development</span>
                <span className="text-slate-400 print:text-gray-600 leading-relaxed">
                  HTML5, CSS3, Tailwind CSS, JavaScript (ES6+), React, Responsive Layouts, Git &amp; GitHub, Web Audio.
                </span>
              </div>
              <div className="p-3 bg-slate-950/40 border border-slate-800 rounded-lg print:border-gray-300">
                <span className="font-semibold text-white print:text-black block mb-1">Quality &amp; Standards</span>
                <span className="text-slate-400 print:text-gray-600 leading-relaxed">
                  ISO 17025 Compliance, Systematic QA, Error-Proofing (Poka-Yoke), Accessibility (WCAG AA).
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
