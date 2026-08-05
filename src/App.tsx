import NeuralNetworkBackground from './components/NeuralNetworkBackground';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import TechStack from './sections/TechStack';
import AcademicPerformance from './sections/AcademicPerformance';
import Contact from './sections/Contact';

export default function App() {
  return (
    <>
      <NeuralNetworkBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <TechStack />
        <AcademicPerformance />
        <Contact />
      </main>
    </>
  );
}
