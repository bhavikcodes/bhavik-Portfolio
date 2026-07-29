import Nav from '../components/Nav';
import Hero from '../components/Hero';
import Statement from '../components/Statement';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Achievements from '../components/Achievements';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="bg-[#0A0A0B] min-h-screen text-[#F5F3F0]">
      <Nav />
      <Hero />
      <Statement />
      <Skills />
      <Experience />
      <Projects />
      <Achievements />
      <Footer />
    </div>
  );
}
