
import { useEffect } from 'react';
import { Toaster } from "@/components/ui/sonner";
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Resume from '../components/Resume';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  useEffect(() => {
    document.title = "Periyanan P - Full-Stack Developer & AI Integrator";
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Toaster position="top-right" />
      <main className="flex-grow">
        <Hero />
        <Experience />
        <Skills />
        <Projects />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
