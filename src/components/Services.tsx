import Reveal from './Reveal';
import SectionLabel from './SectionLabel';
import { services } from '../lib/data';
import { ArrowUpRight } from 'lucide-react';

export default function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32 bg-mist overflow-hidden">
      <div className="absolute top-0 right-0 h-96 w-96 bg-azure/5 rounded-full blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <Reveal><SectionLabel>Services</SectionLabel></Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 font-display font-800 text-navy text-[2rem] sm:text-[2.8rem] leading-[1.1] tracking-tight">
              Software that solves real operational problems
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-[16px] sm:text-[17px] text-slate-600 leading-relaxed">
              From custom ERP platforms to mobile apps and automation \u2014 each engagement is engineered around the way your business actually runs.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.07}>
              <div className="group relative h-full rounded-[1.5rem] border border-slate-200 bg-white p-7 transition-all duration-300 hover:border-azure/40 hover:shadow-[0_30px_50px_-25px_rgba(37,99,235,0.4)] hover:-translate-y-1">
                <div className="flex items-center justify-between">
                  <span className="grid place-items-center h-13 w-13 rounded-2xl bg-gradient-to-br from-navy to-azure text-white shadow-lg shadow-azure/25 p-3.5">
                    <s.icon className="h-full w-full" />
                  </span>
                  <ArrowUpRight className="h-5 w-5 text-slate-300 transition-all group-hover:text-azure group-hover:rotate-45" />
                </div>
                <h3 className="mt-6 font-display font-700 text-navy text-[19px] leading-snug">{s.title}</h3>
                <p className="mt-3 text-[14.5px] text-slate-600 leading-relaxed">{s.desc}</p>
                <div className="mt-5 pt-5 border-t border-slate-100 flex flex-wrap gap-2">
                  {s.items.map((it) => (
                    <span key={it} className="text-[12px] font-600 text-azure bg-azure/8 rounded-full px-3 py-1">{it}</span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
          <Reveal delay={services.length * 0.07}>
            <a href="#contact" className="group relative h-full min-h-[260px] flex flex-col justify-between rounded-[1.5rem] bg-gradient-to-br from-navy to-azure p-7 text-white overflow-hidden transition-all hover:-translate-y-1 shadow-xl shadow-azure/30">
              <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
              <p className="relative font-display font-800 text-[22px] leading-tight">Have something specific in mind?</p>
              <div className="relative">
                <p className="text-ice/90 text-[14.5px] mb-5">  Let's scope it together and find the most cost-effective path.</p>
                <span className="inline-flex items-center gap-2 font-600">Start a conversation <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></span>
              </div>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
