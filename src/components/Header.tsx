import { useState, useEffect } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { FileText, MessageSquare, Menu, X, ArrowUpRight, Github } from 'lucide-react';

interface HeaderProps {
  onOpenResume: () => void;
  onOpenContactModal: () => void;
}

export function Header({ onOpenResume, onOpenContactModal }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Selected Work', href: '#projects' },
    { label: 'The Journey', href: '#journey' },
    { label: 'Education', href: '#education' },
    { label: 'Expertise', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0b0f17]/90 backdrop-blur-md border-b border-slate-800/80 py-3 shadow-lg shadow-black/20'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Identity */}
          <a
            href="#"
            className="group flex items-center gap-3 text-left focus:outline-none"
            aria-label="Mahmoud Mansour Portfolio Home"
          >
            <div className="relative">
              <img
                src="/public/assets/aistudio/personal.jpeg"
                alt="Mahmoud Mansour"
                className="w-10 h-10 rounded-xl object-cover object-top border border-emerald-500/50 shadow-md shadow-emerald-500/20 group-hover:scale-105 transition-transform"
              />
              <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-400 border-2 border-[#0b0f17] block" />
            </div>
            <div>
              <span className="block font-semibold text-white text-base tracking-tight group-hover:text-emerald-400 transition-colors">
                {PORTFOLIO_DATA.personal.name}
              </span>
              <div className="flex items-center gap-1.5 text-xs text-slate-400 font-normal">
                <span>UI/UX &middot; Frontend</span>
              </div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-emerald-400 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-emerald-400 hover:after:w-full after:transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={PORTFOLIO_DATA.personal.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800/60 rounded-lg transition-colors"
              aria-label="GitHub Profile"
              title="View GitHub Profile"
            >
              <Github className="w-5 h-5" />
            </a>

            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-slate-200 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700/80 rounded-lg transition-all"
            >
              <FileText className="w-3.5 h-3.5 text-emerald-400" />
              <span>Resume</span>
            </button>

            <a
              href={PORTFOLIO_DATA.personal.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg shadow-sm shadow-emerald-400/20 transition-all hover:scale-[1.02]"
            >
              <span>Quick Chat</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={onOpenResume}
              className="p-2 text-slate-300 bg-slate-800/80 rounded-lg border border-slate-700 text-xs font-medium inline-flex items-center gap-1"
            >
              <FileText className="w-3.5 h-3.5 text-emerald-400" />
              <span>CV</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white bg-slate-800/60 rounded-lg focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pt-3 pb-4 border-t border-slate-800/80 bg-[#0b0f17] rounded-xl px-2 space-y-2 shadow-2xl">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-200 hover:bg-slate-800/60 hover:text-emerald-400"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
              <a
                href={PORTFOLIO_DATA.personal.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-2 px-3 text-xs font-semibold rounded-lg bg-emerald-400 text-slate-950"
              >
                WhatsApp (+20 100 163 1979)
              </a>
              <a
                href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                className="w-full text-center py-2 px-3 text-xs font-semibold rounded-lg bg-slate-800 text-slate-200 border border-slate-700"
              >
                Email: {PORTFOLIO_DATA.personal.email}
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
