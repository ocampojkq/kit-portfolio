export default function About({ darkMode }) {
  return (
    <section
      className={`py-20 px-6 ${darkMode ? "bg-gray-800" : "bg-gradient-to-br from-blue-50 to-white"}`}
    >
      <div className="flex justify-center mb-6">
        <img
          src="/profile.png"
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
            Assistant based in Digos City, Philippines. I help businesses manage
            product listings, organize ecommerce workflows, and maintain
            accurate online store operations.
          </p>
          <p
            className={`mb-4 leading-relaxed ${darkMode ? "text-gray-300" : "text-gray-700"}`}
          >
            I have experience with Shopify product listings, product
            organization, SEO-friendly descriptions, image management,
            collections, variants, and data entry workflows using Google Sheets
            and AI tools like ChatGPT.
          </p>
          <p
            className={`leading-relaxed ${darkMode ? "text-gray-300" : "text-gray-700"}`}
          >
            I also work with workflow automation using n8n and AI-assisted
            systems to help improve efficiency and reduce repetitive manual
            tasks. I am detail-oriented, organized, and comfortable handling
            structured workflows that require consistency and accuracy.
          </p>
        </div>
      </div>
    </section>
  );
}
