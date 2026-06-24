import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, Menu, X } from 'lucide-react';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Industries', href: '#industries' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass border-b border-slate-200/70 shadow-[0_4px_30px_rgba(8,15,40,0.06)]' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto max-w-7xl px-5 sm:px-8 h-16 sm:h-20 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5 group" aria-label="Pulkit Arora Portfolio Home">
          <span className="grid place-items-center h-9 w-9 rounded-xl bg-gradient-to-br from-azure to-navy shadow-lg shadow-azure/30">
            <Code2 className="h-5 w-5 text-white" />
          </span>
          <span className={`font-display font-700 text-[15px] tracking-tight ${scrolled ? 'text-navy' : 'text-white'}`}>
            Pulkit Arora
          </span>
        </a>

        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`px-4 py-2 text-[14px] font-500 rounded-lg transition-colors ${
                scrolled ? 'text-slate-600 hover:text-azure hover:bg-azure/5' : 'text-ice/90 hover:text-white hover:bg-white/10'
              }`}
            >
              {l.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center px-5 py-2.5 rounded-full text-[14px] font-600 text-white bg-gradient-to-r from-azure to-navy-light shadow-lg shadow-azure/30 hover:shadow-azure/50 hover:-translate-y-0.5 transition-all"
        >
          Book a Consultation
        </a>

        <button
          onClick={() => setOpen((v) => !v)}
          className={`md:hidden grid place-items-center h-10 w-10 rounded-lg ${scrolled ? 'text-navy' : 'text-white'}`}
          aria-label="Menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          className="md:hidden glass border-t border-slate-200/70 overflow-hidden"
        >
          <div className="px-5 py-4 flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-4 py-3 rounded-lg text-slate-700 font-500 hover:bg-azure/5 hover:text-azure"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 text-center px-5 py-3 rounded-full text-white font-600 bg-gradient-to-r from-azure to-navy-light"
            >
              Book a Consultation
            </a>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
