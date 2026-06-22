import { useState } from "react";
import { Link } from "react-router-dom";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { FaGithubSquare, FaFacebookSquare } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";

const NAV_LINKS = [
  { label: "about", path: "/" },
  { label: "services", path: "/services" },
  { label: "projects", path: "/projects" },
  { label: "skills", path: "/skills" },
  { label: "contact", path: "/contact" },
];

export default function PortfolioNavbar({ darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className={`shadow-md sticky top-0 z-50 ${darkMode ? "bg-gray-900 text-white" : "bg-white"}`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          <span className={darkMode ? "text-white" : "text-gray-900"}>
            Ecommerce{" "}
          </span>
          <span className="bg-blue-600 text-white px-2 py-0.5 rounded-md">
            VA
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6 text-sm font-medium">
          {NAV_LINKS.map(({ label, path }) => (
            <Link
              key={label}
              to={path}
              className={`capitalize hover:text-blue-600 transition ${darkMode ? "text-gray-300" : "text-gray-600"}`}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Action Controls & Socials */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 rounded-full transition ${darkMode ? "bg-gray-700 text-yellow-400" : "bg-gray-100 text-gray-700"}`}
          >
            {darkMode ? <MdLightMode size={20} /> : <MdDarkMode size={20} />}
          </button>

          <a
            href="https://www.facebook.com/sspaniardd"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline hover:text-blue-500"
          >
            <FaFacebookSquare size={28} />
          </a>

          <a
            href="https://github.com/ocampojkq"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline hover:text-blue-500"
          >
            <FaGithubSquare size={28} />
          </a>

          {/* Mobile Hamburger Trigger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`md:hidden p-2 rounded-md ${darkMode ? "text-white" : "text-gray-900"}`}
          >
            {menuOpen ? <HiX size={26} /> : <HiMenu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {menuOpen && (
        <div
          className={`md:hidden px-6 pb-4 flex flex-col gap-4 text-sm font-medium ${darkMode ? "bg-gray-900" : "bg-white"}`}
        >
          {NAV_LINKS.map(({ label, path }) => (
            <Link
              key={label}
              to={path}
              onClick={() => setMenuOpen(false)}
              className={`capitalize hover:text-blue-600 transition ${darkMode ? "text-gray-300" : "text-gray-600"}`}
            >
              {label}
            </Link>
          ))}
          <div className="flex gap-4 pt-2">
            <a
              href="https://www.facebook.com/sspaniardd"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-500"
            >
              <FaFacebookSquare size={24} />
            </a>

            <a
              href="https://github.com/ocampojkq"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-500"
            >
              <FaGithubSquare size={24} />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
