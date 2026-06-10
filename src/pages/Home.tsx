import { Navigation } from '@/sections/Navigation';
import { Hero } from '@/sections/Hero';
import { Services } from '@/sections/Services';
import { Team } from '@/sections/Team';
import { About } from '@/sections/About';
import { Testimonials } from '@/sections/Testimonials';
import { Process } from '@/sections/Process';
import { Contact } from '@/sections/Contact';
import { Footer } from '@/sections/Footer';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Home() {
  useScrollReveal();

  return (
    <div className="min-h-screen bg-[#fffaf7]">
      <Navigation />
      <main>
        <Hero />
        <Services />
        <Team />
        <About />
        <Testimonials />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
