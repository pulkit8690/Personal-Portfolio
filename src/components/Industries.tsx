import Reveal from './Reveal';
import SectionLabel from './SectionLabel';
import { industries } from '../lib/data';

export default function Industries() {
  return (
    <section id="industries" className="relative py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <Reveal><SectionLabel>Industries I Help</SectionLabel></Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 font-display font-800 text-navy text-[2rem] sm:text-[2.8rem] leading-[1.1] tracking-tight">
              Built for the businesses that build things
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-[16px] sm:text-[17px] text-slate-600 leading-relaxed">
              Deep focus on operational, process-driven organizations that need software shaped to their reality.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind, i) => (
            <Reveal key={ind.name} delay={i * 0.06}>
              <div className="group relative flex items-center gap-5 rounded-2xl border border-slate-200 bg-gradient-to-br from-mist to-white p-6 transition-all hover:border-azure/40 hover:shadow-[0_25px_45px_-25px_rgba(37,99,235,0.45)] hover:-translate-y-1">
                <span className="grid place-items-center h-14 w-14 shrink-0 rounded-2xl bg-gradient-to-br from-navy to-azure text-white shadow-lg shadow-azure/25 p-3.5 transition-transform group-hover:scale-105">
                  <ind.icon className="h-full w-full" />
                </span>
                <div>
                  <h3 className="font-display font-700 text-navy text-[18px]">{ind.name}</h3>
                  <p className="text-[13.5px] text-slate-500 mt-0.5">{ind.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
