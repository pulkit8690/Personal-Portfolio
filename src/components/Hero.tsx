import { motion } from 'framer-motion';
import { ArrowRight, Calendar, ShieldCheck, Zap, Layers } from 'lucide-react';

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden bg-ink">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(/hero-bg.png)' }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-ink via-ink/85 to-navy/70" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/40" />

      {/* Animated blobs */}
      <div className="absolute -top-32 -left-24 h-[28rem] w-[28rem] rounded-full bg-azure/25 blur-[120px] animate-float-slow" />
      <div className="absolute bottom-0 right-0 h-[32rem] w-[32rem] rounded-full bg-navy-light/40 blur-[140px] animate-float-slower" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(96,165,250,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(96,165,250,0.6) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 pt-28 pb-16 w-full">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 backdrop-blur px-4 py-1.5 text-[13px] font-500 text-ice"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-sky" />
            </span>
            Available for new freelance projects
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease }}
            className="mt-7 font-display font-800 text-white leading-[1.05] tracking-tight text-[2.6rem] sm:text-[3.6rem] lg:text-[4.4rem]"
          >
            Building Custom Business <br className="hidden sm:block" />
            Software for{' '}
            <span className="text-shimmer">Growing Companies</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease }}
            className="mt-7 max-w-2xl text-[17px] sm:text-[19px] leading-relaxed text-slate-300"
          >
            I help businesses replace manual processes, spreadsheets and registers with
            secure, scalable software solutions that improve efficiency and decision making.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease }}
            className="mt-9 flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-azure to-sky px-7 py-4 font-600 text-white shadow-xl shadow-azure/30 hover:shadow-azure/50 hover:-translate-y-0.5 transition-all"
            >
              <Calendar className="h-5 w-5" />
              Book a Consultation
            </a>
            <a
              href="#services"
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 backdrop-blur px-7 py-4 font-600 text-white hover:bg-white/10 hover:-translate-y-0.5 transition-all"
            >
              Discuss Your Project
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>

          {/* Trust strip */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55, ease }}
            className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-2xl"
          >
            {[
              { icon: Layers, t: 'ERP & Custom Systems', s: 'Built around your operations' },
              { icon: ShieldCheck, t: 'Secure by Design', s: 'Auth & role-based access' },
              { icon: Zap, t: 'Automation First', s: 'Less manual, more output' },
            ].map((f) => (
              <div key={f.t} className="flex items-start gap-3">
                <span className="grid place-items-center h-10 w-10 shrink-0 rounded-xl bg-white/8 border border-white/10 text-sky">
                  <f.icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-[14px] font-700 text-white leading-tight">{f.t}</p>
                  <p className="text-[12.5px] text-slate-400">{f.s}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-white to-transparent z-10" />
    </section>
  );
}
