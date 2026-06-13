import { MdDarkMode, MdLightMode } from "react-icons/md";
import { FaGithubSquare, FaFacebookSquare } from "react-icons/fa";

export default function PortfolioNavbar({ darkMode, setDarkMode }) {
  return (
    <nav
      className={`shadow-md sticky top-0 z-50 ${darkMode ? "bg-gray-900 text-white" : "bg-white"}`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">
          <span className={darkMode ? "text-white" : "text-gray-900"}>
            Ecommerce{" "}
          </span>
          <span className="bg-blue-600 text-white px-2 py-0.5 rounded-md">
            VA
          </span>
        </h1>

        <div className="hidden md:flex gap-6 text-sm font-medium">
          {["about", "services", "projects", "skills", "contact"].map((s) => (
            <a
              key={s}
              href={`#${s}`}
              className={`capitalize hover:text-blue-600 transition ${darkMode ? "text-gray-300" : "text-gray-600"}`}
            >
              {s}
            </a>
          ))}
        </div>

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
            className="hover:text-blue-500"
          >
            <FaFacebookSquare size={28} />
          </a>
          <a
            href="https://github.com/ocampojkq"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-500"
          >
            <FaGithubSquare size={28} />
          </a>
        </div>
      </div>
    </nav>
  );
}
