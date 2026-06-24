import Reveal from './Reveal';
import SectionLabel from './SectionLabel';
import { whyCards } from '../lib/data';

export default function Why() {
  return (
    <section className="relative py-24 sm:py-32 bg-ink overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-25"
        style={{ backgroundImage: 'url(/section-texture.png)' }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/90 to-ink" />
      <div className="absolute top-1/3 left-1/4 h-80 w-80 bg-azure/20 rounded-full blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <Reveal><SectionLabel>Why Work With Me</SectionLabel></Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 font-display font-800 text-white text-[2rem] sm:text-[2.8rem] leading-[1.1] tracking-tight">
              The advantages of hiring a dedicated consultant
            </h2>
          </Reveal>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyCards.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.08}>
              <div className="group h-full rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur p-7 transition-all hover:bg-white/[0.07] hover:border-azure/40 hover:-translate-y-1">
                <span className="grid place-items-center h-12 w-12 rounded-xl bg-gradient-to-br from-azure to-sky text-white shadow-lg shadow-azure/30 p-3">
                  <c.icon className="h-full w-full" />
                </span>
                <h3 className="mt-6 font-display font-700 text-white text-[18px]">{c.title}</h3>
                <p className="mt-3 text-[14px] text-slate-400 leading-relaxed">{c.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
