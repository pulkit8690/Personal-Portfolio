import Reveal from './Reveal';
import SectionLabel from './SectionLabel';
import { Mail, Phone, Linkedin, Github, ArrowRight, Calendar } from 'lucide-react';

const channels = [
  { icon: Mail, label: 'Email', value: 'pulkitarora8690@gmail.com', href: 'mailto:pulkitarora8690@gmail.com' },
  { icon: Phone, label: 'Phone', value: '+91 8847412522', href: 'tel:+918847412522' },
  { icon: Linkedin, label: 'LinkedIn', value: 'in/pulkitt-arora', href: 'https://www.linkedin.com/in/pulkitt-arora/' },
  { icon: Github, label: 'GitHub', value: 'github.com/pulkit8690', href: 'https://github.com/pulkit8690' },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-ink overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: 'url(/hero-bg.png)' }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-ink via-ink/90 to-navy/80" />
      <div className="absolute -bottom-32 left-1/4 h-[26rem] w-[26rem] bg-azure/25 rounded-full blur-[130px] animate-float-slow" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <Reveal><SectionLabel>Contact</SectionLabel></Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-5 font-display font-800 text-white text-[2.2rem] sm:text-[3rem] leading-[1.08] tracking-tight">
                Let's Build Something <span className="text-shimmer">Great Together</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 text-[16px] sm:text-[17px] text-slate-300 leading-relaxed max-w-lg">
                Tell me about your operations, the manual work slowing you down, or the system you've been meaning to build. I'll help you map the most effective path forward.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-9 flex flex-col sm:flex-row gap-4">
                <a href="mailto:pulkitarora8690@gmail.com" aria-label="Schedule a project discussion via email" className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-azure to-sky px-7 py-4 font-600 text-white shadow-xl shadow-azure/30 hover:-translate-y-0.5 transition-all">
                  <Calendar className="h-5 w-5" /> Schedule a Project Discussion
                </a>
                <a href="mailto:pulkitarora8690@gmail.com" aria-label="Get a free consultation via email" className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 backdrop-blur px-7 py-4 font-600 text-white hover:bg-white/10 hover:-translate-y-0.5 transition-all">
                  Get a Free Consultation <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <div className="grid sm:grid-cols-2 gap-4">
              {channels.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  aria-label={c.label}
                  className="group rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur p-6 transition-all hover:bg-white/[0.08] hover:border-azure/40 hover:-translate-y-1"
                >
                  <span className="grid place-items-center h-11 w-11 rounded-xl bg-gradient-to-br from-azure to-sky text-white p-2.5 shadow-lg shadow-azure/30">
                    <c.icon className="h-full w-full" />
                  </span>
                  <p className="mt-4 text-[12px] font-700 uppercase tracking-wider text-sky">{c.label}</p>
                  <p className="mt-1 text-white font-600 text-[14px] break-words group-hover:text-sky transition-colors">{c.value}</p>
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
