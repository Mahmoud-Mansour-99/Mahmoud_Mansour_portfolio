import { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { 
  Mail, 
  MessageSquare, 
  Phone, 
  Copy, 
  Check, 
  ArrowUpRight, 
  Send, 
  Github, 
  Clock, 
  MapPin, 
  Sparkles 
} from 'lucide-react';

export function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  
  // Interactive message builder state
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [projectType, setProjectType] = useState('Full-Time Role / Hiring');
  const [message, setMessage] = useState('');
  const [isSent, setIsSent] = useState(false);

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

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const encodedText = encodeURIComponent(
      `Hi Mahmoud, my name is ${senderName || 'Visitor'} (${senderEmail || 'No email provided'}).\nI'm reaching out regarding: ${projectType}.\n\nMessage: ${message || 'I would like to discuss an opportunity with you.'}`
    );
    window.open(`https://wa.me/201001631979?text=${encodedText}`, '_blank');
    setIsSent(true);
  };

  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Project Inquiry: ${projectType} - from ${senderName || 'Portfolio Visitor'}`);
    const body = encodeURIComponent(
      `Hello Mahmoud,\n\nName: ${senderName}\nEmail: ${senderEmail}\nInterest: ${projectType}\n\n${message}\n\nBest regards,\n${senderName}`
    );
    window.location.href = `mailto:${PORTFOLIO_DATA.personal.email}?subject=${subject}&body=${body}`;
    setIsSent(true);
  };

  return (
    <section id="contact" className="py-24 border-t border-slate-800/80 relative">
      {/* Background glow */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-emerald-400 mb-2">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Call to Action &amp; Connect</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Let's Build Something Exceptional
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-3 leading-relaxed">
            Whether you are hiring for a <strong className="text-slate-200">UI/UX Designer</strong>, a <strong className="text-slate-200">Frontend Developer</strong>, or need an analytical problem solver for your next web application.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Direct Contact Cards Column */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Primary Email Card */}
            <div className="p-5 bg-slate-900/90 border border-slate-800 rounded-2xl hover:border-slate-700 transition-all flex flex-col justify-between">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-mono uppercase">Direct Email</span>
                    <a
                      href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                      className="text-sm sm:text-base font-semibold text-white hover:text-emerald-300 transition-colors"
                    >
                      {PORTFOLIO_DATA.personal.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => copyToClipboard(PORTFOLIO_DATA.personal.email, 'email')}
                  className="p-2 text-slate-400 hover:text-white bg-slate-800 rounded-lg transition-colors border border-slate-700"
                  title="Copy Email Address"
                  aria-label="Copy Email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                <span>Response time: within 24 hours</span>
                <a
                  href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                  className="text-emerald-400 hover:text-emerald-300 inline-flex items-center gap-1 font-medium"
                >
                  <span>Compose Mail</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Primary Phone & WhatsApp Card */}
            <div className="p-5 bg-slate-900/90 border border-slate-800 rounded-2xl hover:border-slate-700 transition-all flex flex-col justify-between">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-mono uppercase">Phone &amp; WhatsApp</span>
                    <a
                      href={PORTFOLIO_DATA.personal.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm sm:text-base font-semibold text-white hover:text-emerald-300 transition-colors"
                    >
                      {PORTFOLIO_DATA.personal.formattedPhone}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => copyToClipboard(PORTFOLIO_DATA.personal.phone, 'phone')}
                  className="p-2 text-slate-400 hover:text-white bg-slate-800 rounded-lg transition-colors border border-slate-700"
                  title="Copy Phone Number"
                  aria-label="Copy Phone"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Direct WhatsApp Available
                </span>
                <a
                  href={PORTFOLIO_DATA.personal.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 inline-flex items-center gap-1 font-medium"
                >
                  <span>Open WhatsApp</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Location & Status Info */}
            <div className="p-5 bg-slate-950/60 border border-slate-800/80 rounded-2xl space-y-3 text-xs text-slate-400">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{PORTFOLIO_DATA.personal.location}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Available for immediate start on full-time or freelance basis</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Github className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={PORTFOLIO_DATA.personal.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-white underline underline-offset-2"
                >
                  github.com/mahmoud-mansour-99
                </a>
              </div>
            </div>

          </div>

          {/* Interactive Fast Inquiry / Dispatch Form */}
          <div className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl">
            <div className="mb-6 pb-4 border-b border-slate-800">
              <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-medium">
                Fast Inquiry Dispatcher
              </span>
              <h3 className="text-lg font-bold text-white mt-1">
                Start a Conversation
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Fill out the quick brief below to dispatch directly via WhatsApp or standard Email.
              </p>
            </div>

            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    placeholder="e.g. Sarah Jenkins"
                    className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-sm text-white placeholder-slate-500 focus:border-emerald-500 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Your Email or Phone
                  </label>
                  <input
                    type="text"
                    value={senderEmail}
                    onChange={(e) => setSenderEmail(e.target.value)}
                    placeholder="e.g. sarah@company.com"
                    className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-sm text-white placeholder-slate-500 focus:border-emerald-500 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  Opportunity Type / Subject
                </label>
                <select
                  value={projectType}
                  onChange={(e) => setProjectType(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-sm text-white focus:border-emerald-500 focus:outline-none transition-colors"
                >
                  <option value="Full-Time UI/UX or Frontend Role">Full-Time UI/UX or Frontend Role</option>
                  <option value="Freelance Web Application Development">Freelance Web Application Development</option>
                  <option value="Figma Design &amp; Prototyping">Figma Design &amp; Prototyping</option>
                  <option value="Frontend Code Audit / Quality Assurance">Frontend Code Audit / Quality Assurance</option>
                  <option value="General Collaboration or Consultation">General Collaboration or Consultation</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  Your Message or Project Details
                </label>
                <textarea
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell me about your team, project timeline, or the problem you're looking to solve..."
                  className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-sm text-white placeholder-slate-500 focus:border-emerald-500 focus:outline-none transition-colors resize-none"
                />
              </div>

              {isSent && (
                <div className="p-3 bg-emerald-950/40 border border-emerald-800/40 rounded-lg text-xs text-emerald-300 flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Dispatcher activated! Connecting you directly to Mahmoud Mansour.</span>
                </div>
              )}

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="button"
                  onClick={handleSendWhatsApp}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-emerald-400 hover:bg-emerald-300 text-slate-950 text-xs font-bold transition-all shadow-md shadow-emerald-400/20"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send via WhatsApp (+201001631979)</span>
                </button>

                <button
                  type="button"
                  onClick={handleSendEmail}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-semibold transition-all"
                >
                  <Mail className="w-4 h-4 text-emerald-400" />
                  <span>Send via Email</span>
                </button>
              </div>
            </form>

          </div>

        </div>

      </div>
    </section>
  );
}
