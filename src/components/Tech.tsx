import Reveal from './Reveal';
import SectionLabel from './SectionLabel';
import { techStack } from '../lib/data';

export default function Tech() {
  return (
    <section className="relative py-24 sm:py-32 bg-mist overflow-hidden">
      <div className="absolute bottom-0 left-0 h-96 w-96 bg-navy/5 rounded-full blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <Reveal><SectionLabel>Technology Stack</SectionLabel></Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 font-display font-800 text-navy text-[2rem] sm:text-[2.8rem] leading-[1.1] tracking-tight">
              Modern, proven and production-grade
            </h2>
          </Reveal>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {techStack.map((t, i) => (
            <Reveal key={t.group} delay={i * 0.07}>
              <div className="h-full rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:border-azure/40 hover:shadow-lg hover:-translate-y-1">
                <p className="text-[12px] font-700 uppercase tracking-[0.18em] text-azure">{t.group}</p>
                <div className="mt-4 space-y-2.5">
                  {t.items.map((it) => (
                    <div key={it} className="flex items-center gap-2.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-azure to-navy" />
                      <span className="font-display font-600 text-navy text-[15px]">{it}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
