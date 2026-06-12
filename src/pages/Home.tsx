import { Navigation } from '@/sections/Navigation';
import { Hero } from '@/sections/Hero';
import { Services } from '@/sections/Services';
import { AdminPackage } from '@/sections/AdminPackage';
import { Team } from '@/sections/Team';
import { About } from '@/sections/About';
import { Testimonials } from '@/sections/Testimonials';
import { Process } from '@/sections/Process';
import { Contact } from '@/sections/Contact';
import { Footer } from '@/sections/Footer';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { SeoSchema } from '@/components/SeoSchema';

export default function Home() {
  useScrollReveal();

  return (
    <div className="min-h-screen bg-[#fffaf7]">
      <SeoSchema />
      <Navigation />
      <main>
        <Hero />
        <Services />
        <AdminPackage />
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
