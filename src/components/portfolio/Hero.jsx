export default function Hero({ darkMode }) {
  return (
    <section
      className={`py-20 px-6 ${darkMode ? "bg-gray-900" : " from-blue-50 to-white"}`}
    >
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-green-500 font-semibold mb-3 tracking-wide uppercase text-sm">
          Available for Work
        </p>
        <h1
          className={`text-5xl font-bold mb-4 ${darkMode ? "text-white" : "text-gray-900"}`}
        >
          Hi, I am <span className="text-blue-600">Jesse Kit Ocampo</span>
        </h1>
        <p
          className={`text-xl mb-6 ${darkMode ? "text-gray-300" : "text-gray-600"}`}
        >
          Ecommerce Virtual Assistant and Automation Specialist
        </p>
        <p
          className={`text-base max-w-2xl mx-auto mb-8 ${darkMode ? "text-gray-400" : "text-gray-500"}`}
        >
          Shopify VA - Ecommerce Listings - AI-Assisted Workflow Automation
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href="#projects"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition font-medium"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-lg border font-medium transition border-gray-300 text-gray-700 hover:bg-gray-50"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
