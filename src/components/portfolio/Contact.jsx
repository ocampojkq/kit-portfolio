export default function Contact({ darkMode }) {
  return (
    <section
      id="contact"
      className={`py-16 px-6 ${darkMode ? "bg-gray-800" : "bg-white"}`}
    >
      <div className="max-w-2xl mx-auto text-center">
        <h2
          className={`text-3xl font-bold mb-4 ${darkMode ? "text-white" : "text-gray-900"}`}
        >
          Let's Work Together
        </h2>
        <p
          className={`mb-8 leading-relaxed ${darkMode ? "text-gray-400" : "text-gray-600"}`}
        >
          Looking for a reliable Ecommerce Virtual Assistant to help manage
          product listings, organize workflows, and support your online store
          operations. I specialize in Shopify product listings, AI-assisted
          ecommerce support, and workflow automation using modern tools like n8n
          and ChatGPT.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          {/* FIXED: Restored missing <a for Email button */}
          <a
            href="mailto:ocampojessekit1@gmail.com"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition font-medium"
          >
            📧 Email Me
          </a>

          {/* FIXED: Restored missing <a for LinkedIn button */}
          <a
            href="https://www.linkedin.com/in/ocampokit"
            target="_blank"
            rel="noreferrer"
            className={`px-6 py-3 rounded-lg border font-medium transition ${
              darkMode
                ? "border-gray-600 text-gray-300 hover:bg-gray-700"
                : "border-gray-300 text-gray-700 hover:bg-gray-50"
            }`}
          >
            LinkedIn
          </a>

          {/* FIXED: Restored missing <a for Facebook button */}
          <a
            href="https://www.facebook.com/sspaniardd"
            target="_blank"
            rel="noreferrer"
            className={`px-6 py-3 rounded-lg border font-medium transition ${
              darkMode
                ? "border-gray-600 text-gray-300 hover:bg-gray-700"
                : "border-gray-300 text-gray-700 hover:bg-gray-50"
            }`}
          >
            Facebook
          </a>
        </div>
      </div>
    </section>
  );
}
