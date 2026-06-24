import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Why from './components/Why';
import Industries from './components/Industries';
import Tech from './components/Tech';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-white text-slate-ink overflow-x-hidden">
      <Nav />
      <main>
        <Hero />
        <About />
        <Services />
        <Why />
        <Industries />
        <Tech />
        <Process />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
