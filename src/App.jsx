import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Portfolio from "./pages/Portfolio";
import PortfolioNavbar from "./components/portfolio/PortfolioNavbar";
import PortfolioFooter from "./components/portfolio/PortfolioFooter";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark bg-gray-900" : "bg-white"}>
      <PortfolioNavbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Routes>
        <Route path="/" element={<Portfolio darkMode={darkMode} />} />
      </Routes>
      <PortfolioFooter darkMode={darkMode} />
    </div>
  );
}

export default App;
