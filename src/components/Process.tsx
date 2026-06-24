import Reveal from './Reveal';
import SectionLabel from './SectionLabel';
import { process } from '../lib/data';

export default function Process() {
  return (
    <section id="process" className="relative py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <Reveal><SectionLabel>How We Work</SectionLabel></Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 font-display font-800 text-navy text-[2rem] sm:text-[2.8rem] leading-[1.1] tracking-tight">
              A clear, structured path from idea to launch
            </h2>
          </Reveal>
        </div>

        <div className="mt-16 relative">
          <div className="hidden lg:block absolute left-0 right-0 top-[44px] h-px bg-gradient-to-r from-transparent via-azure/30 to-transparent" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
            {process.map((p, i) => (
              <Reveal key={p.n} delay={i * 0.06}>
                <div className="relative">
                  <div className="flex items-center gap-4">
                    <span className="relative z-10 grid place-items-center h-[88px] w-[88px] rounded-2xl bg-gradient-to-br from-navy to-azure text-white font-display font-800 text-2xl shadow-xl shadow-azure/25">
                      {p.n}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display font-700 text-navy text-[19px]">{p.title}</h3>
                  <p className="mt-2.5 text-[14.5px] text-slate-600 leading-relaxed pr-4">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
