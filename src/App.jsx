import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import ServicesPage from "./pages/ServicesPage";
import ProjectsPage from "./pages/ProjectsPage";
import SkillsPage from "./pages/SkillsPage";
import ContactPage from "./pages/ContactPage";
import PortfolioNavbar from "./components/portfolio/PortfolioNavbar";
import PortfolioFooter from "./components/portfolio/PortfolioFooter";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <div
      className={`min-h-screen ${darkMode ? "dark bg-gray-900" : "bg-white"}`}
    >
      <PortfolioNavbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Routes>
        <Route path="/" element={<Home darkMode={darkMode} />} />
        <Route
          path="/services"
          element={<ServicesPage darkMode={darkMode} />}
        />
        <Route
          path="/projects"
          element={<ProjectsPage darkMode={darkMode} />}
        />
        <Route path="/skills" element={<SkillsPage darkMode={darkMode} />} />
        <Route path="/contact" element={<ContactPage darkMode={darkMode} />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <PortfolioFooter darkMode={darkMode} />
    </div>
  );
}

export default App;
