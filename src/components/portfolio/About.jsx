export default function About({ darkMode }) {
  return (
    <section
      className={`py-20 px-6 ${darkMode ? "bg-gray-800" : "bg-gradient-to-br from-blue-50 to-white"}`}
    >
      <div className="flex justify-center mb-6">
        <img
          src="/profile1.png"
          alt="Kit Ocampo"
          className="w-32 h-32 rounded-full object-cover border-4 border-blue-500 shadow-lg"
        />
      </div>
      <div className="max-w-4xl mx-auto">
        <h2
          className={`text-3xl font-bold mb-8 text-center ${darkMode ? "text-white" : "text-gray-900"}`}
        >
          About Me
        </h2>

        <div
          className={`rounded-xl p-8 border ${darkMode ? "bg-gray-900 border-gray-700" : "bg-blue-50 border-blue-100"}`}
        >
          <p
            className={`mb-4 leading-relaxed ${darkMode ? "text-gray-300" : "text-gray-700"}`}
          >
            Hi, I'm <strong>Jesse Kit Ocampo</strong>, an Ecommerce Virtual
            Assistant and Web Developer based in Digos City, Philippines. I help
            businesses manage product listings, streamline ecommerce workflows,
            and maintain accurate store operations.
          </p>
          <p
            className={`mb-4 leading-relaxed ${darkMode ? "text-gray-300" : "text-gray-700"}`}
          >
            My experience includes Shopify product listings, SEO-friendly
            descriptions, image management, collections, variants, and data
            entry workflows using Google Sheets and AI tools like ChatGPT. I
            also build workflow automations with n8n to reduce repetitive manual
            tasks and improve efficiency.
          </p>
          <p
            className={`mb-6 leading-relaxed ${darkMode ? "text-gray-300" : "text-gray-700"}`}
          >
            On the development side, I build full-stack web applications using
            React, Node.js, and PostgreSQL — including authentication, admin
            dashboards, and deployed platforms for real clients. I'm
            detail-oriented and comfortable with structured, accuracy-driven
            work, whether organizing a product catalog or building the system
            behind it.
          </p>

          {/* FIXED: Restored missing <a tag element definition */}
          <a
            href="/jesse-kit-ocampo.pdf"
            download="jesse-kit-ocampo-resume.pdf"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition font-medium"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12 2.25a.75.75 0 01.75.75v11.69l3.22-3.22a.75.75 0 111.06 1.06l-4.5 4.5a.75.75 0 01-1.06 0l-4.5-4.5a.75.75 0 111.06-1.06l3.22 3.22V3a.75.75 0 01.75-.75zm-9 13.5a.75.75 0 01.75.75v2.25a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5V16.5a.75.75 0 011.5 0v2.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V16.5a.75.75 0 01.75-.75z"
                clipRule="evenodd"
              />
            </svg>
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
