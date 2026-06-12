import Hero from "../components/portfolio/Hero";
import About from "../components/portfolio/About";
import Services from "../components/portfolio/Services";
import Projects from "../components/portfolio/Projects";
import Skills from "../components/portfolio/Skills";
import Contact from "../components/portfolio/Contact";

export default function Portfolio({ darkMode }) {
  return (
    <div>
      <Hero darkMode={darkMode} />
      <About darkMode={darkMode} />
      <Services darkMode={darkMode} />
      <Projects darkMode={darkMode} />
      <Skills darkMode={darkMode} />
      <Contact darkMode={darkMode} />
    </div>
  );
}
