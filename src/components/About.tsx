import Reveal from './Reveal';
import SectionLabel from './SectionLabel';
import { CheckCircle2 } from 'lucide-react';

const points = [
  'Spring Boot & backend engineering',
  'Flutter mobile development',
  'Custom ERP systems',
  'API development & integrations',
  'Business automation',
  'Database design & architecture',
];

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <div>
            <Reveal><SectionLabel>About</SectionLabel></Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-5 font-display font-800 text-navy text-[2rem] sm:text-[2.8rem] leading-[1.1] tracking-tight">
                Software Solutions Built Around Your Business
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mt-7 space-y-5 text-[16px] sm:text-[17px] leading-relaxed text-slate-600">
                <p>
                  I am a Software Developer specializing in <strong className="text-slate-800">Spring Boot, Flutter, ERP systems, API development</strong> and business automation solutions.
                </p>
                <p>
                  With experience in backend engineering and modern software development, I help companies digitize operations, automate workflows and build systems tailored to their business processes.
                </p>
                <p className="text-navy font-600">
                  My focus is delivering practical business value rather than generic software.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-azure/10 to-navy/10 rounded-[2rem] blur-2xl" />
              <div className="relative rounded-[1.75rem] border border-slate-200 bg-gradient-to-br from-mist to-white p-8 sm:p-10 shadow-[0_30px_60px_-20px_rgba(11,31,77,0.25)]">
                <div className="flex items-center gap-3 mb-7">
                  <span className="grid place-items-center h-12 w-12 rounded-2xl bg-gradient-to-br from-navy to-azure text-white font-display font-800 text-lg shadow-lg shadow-azure/30">PA</span>
                  <div>
                    <p className="font-display font-700 text-navy text-lg">Pulkit Arora</p>
                    <p className="text-[13px] text-slate-500">Software Developer & Consultant</p>
                  </div>
                </div>
                <p className="text-[13px] font-700 uppercase tracking-wider text-azure mb-4">Core Expertise</p>
                <ul className="grid sm:grid-cols-2 gap-3.5">
                  {points.map((p) => (
                    <li key={p} className="flex items-start gap-2.5 text-[14.5px] text-slate-700">
                      <CheckCircle2 className="h-5 w-5 text-azure shrink-0 mt-px" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
