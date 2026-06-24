import Reveal from './Reveal';
import SectionLabel from './SectionLabel';
import { Quote, Clock } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="relative py-24 sm:py-32 bg-mist overflow-hidden">
      <div className="absolute top-0 right-1/4 h-80 w-80 bg-azure/5 rounded-full blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <Reveal className="flex justify-center"><SectionLabel>Testimonials</SectionLabel></Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 font-display font-800 text-navy text-[2rem] sm:text-[2.8rem] leading-[1.1] tracking-tight">
              Client Feedback Coming Soon
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-[16px] text-slate-600 leading-relaxed">
              Genuine reviews from real engagements will appear here \u2014 no fabricated logos or fake praise.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {[0, 1, 2].map((i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="relative h-full rounded-2xl border border-dashed border-slate-300 bg-white/60 backdrop-blur p-7 overflow-hidden">
                <Quote className="h-9 w-9 text-azure/20" />
                <div className="mt-5 space-y-2.5">
                  <div className="h-2.5 rounded-full bg-slate-200 w-full" />
                  <div className="h-2.5 rounded-full bg-slate-200 w-[88%]" />
                  <div className="h-2.5 rounded-full bg-slate-200 w-[70%]" />
                </div>
                <div className="mt-7 flex items-center gap-3">
                  <div className="h-11 w-11 rounded-full bg-gradient-to-br from-slate-200 to-slate-300" />
                  <div className="space-y-1.5">
                    <div className="h-2.5 w-24 rounded-full bg-slate-200" />
                    <div className="h-2 w-16 rounded-full bg-slate-100" />
                  </div>
                </div>
                <span className="absolute top-6 right-6 inline-flex items-center gap-1.5 text-[11px] font-700 text-azure bg-azure/8 rounded-full px-2.5 py-1">
                  <Clock className="h-3 w-3" /> Coming soon
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
