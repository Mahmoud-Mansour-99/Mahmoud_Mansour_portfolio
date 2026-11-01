import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { JourneyTimeline } from './components/JourneyTimeline';
import { EducationSection } from './components/EducationSection';
import { SkillsSection } from './components/SkillsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { PORTFOLIO_DATA } from './data/portfolioData';
import { MessageSquare, ArrowUpRight } from 'lucide-react';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0b0f17] text-slate-100 flex flex-col font-sans selection:bg-emerald-500/20 selection:text-emerald-300">
      
      {/* Navigation Header */}
      <Header
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenContactModal={() => {
          const el = document.getElementById('contact');
          el?.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <Projects />
        <JourneyTimeline />
        <EducationSection />
        <SkillsSection />
        <ContactSection />
      </main>

      {/* Minimal Footer */}
      <Footer />

      {/* Interactive Resume / CV Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      {/* Floating Fast WhatsApp Action Button */}
      <aside aria-label="Direct quick contact" className="fixed bottom-5 right-5 z-30">
        <a
          href={PORTFOLIO_DATA.personal.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-xs shadow-xl shadow-emerald-500/25 hover:scale-105 transition-all group"
          title="Direct WhatsApp with Mahmoud"
        >
          <MessageSquare className="w-4 h-4 fill-slate-950" />
          <span className="hidden sm:inline">WhatsApp Mahmoud</span>
          <span className="inline sm:hidden">Chat</span>
        </a>
      </aside>

    </div>
  );
}
