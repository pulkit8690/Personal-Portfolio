import { Code2, Mail, Phone, Linkedin, Github } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-ink-2 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-14">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid place-items-center h-9 w-9 rounded-xl bg-gradient-to-br from-azure to-navy">
                <Code2 className="h-5 w-5 text-white" />
              </span>
              <span className="font-display font-700 text-white text-[16px]">Pulkit Arora</span>
            </div>
            <p className="mt-4 text-slate-400 text-[14px]">Custom Software Development</p>
            <p className="mt-1 text-slate-500 text-[13px] font-500">Spring Boot | Flutter | ERP Systems | Business Automation</p>
          </div>

          <div className="md:text-right">
            <div className="flex md:justify-end gap-3">
              {[
                { icon: Mail, href: 'mailto:pulkitarora8690@gmail.com' },
                { icon: Phone, href: 'tel:+918847412522' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/pulkitt-arora/' },
                { icon: Github, href: 'https://github.com/pulkit8690' },
              ].map((s, i) => (
                <a key={i} href={s.href} target={s.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="grid place-items-center h-10 w-10 rounded-xl border border-white/10 bg-white/5 text-slate-300 hover:text-white hover:bg-azure/20 hover:border-azure/40 transition-all">
                  <s.icon className="h-4.5 w-4.5" />
                </a>
              ))}
            </div>
            <div className="mt-6 flex md:justify-end gap-5 text-[13px] text-slate-400">
              <a href="#about" className="hover:text-white transition-colors">About</a>
              <a href="#services" className="hover:text-white transition-colors">Services</a>
              <a href="#process" className="hover:text-white transition-colors">Process</a>
              <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-7 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-3 text-[13px] text-slate-500">
          <p>\u00A9 {year} Pulkit Arora. All rights reserved.</p>
          <p>Designed &amp; built for businesses that mean business.</p>
        </div>
      </div>
    </footer>
  );
}
