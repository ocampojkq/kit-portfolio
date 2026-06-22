import Hero from "../components/portfolio/Hero";
import About from "../components/portfolio/About";

export default function Home({ darkMode }) {
  return (
    <div>
      <Hero darkMode={darkMode} />
      <About darkMode={darkMode} />
    </div>
  );
}
