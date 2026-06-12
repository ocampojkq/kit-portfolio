const skillGroups = [
  {
    title: "Ecommerce & Shopify",
    skills: [
      "Shopify",
      "Product Listings",
      "Store Management",
      "SEO Optimization",
      "Product Research",
      "Ecommerce Support",
    ],
  },
  {
    title: "Automation & Workflows",
    skills: ["n8n", "Make.com", "Google Sheets", "API Integration", "ChatGPT"],
  },
  {
    title: "Design & Content",
    skills: [
      "Canva",
      "Product Descriptions",
      "Content Organization",
      "Product Image Management",
    ],
  },
  {
    title: "Technical Skills",
    skills: [
      "HTML5",
      "CSS3 / Tailwind",
      "JavaScript / React",
      "Shopify Liquid",
    ],
  },
  {
    title: "General",
    skills: [
      "Virtual Assistance",
      "Data Entry",
      "Online Research",
      "Workflow Organization",
    ],
  },
];

export default function Skills({ darkMode }) {
  return (
    <section
      id="skills"
      className={`py-16 px-6 ${darkMode ? "bg-gray-900" : "bg-gray-50"}`}
    >
      <div className="max-w-6xl mx-auto">
        <h2
          className={`text-3xl font-bold mb-2 text-center ${darkMode ? "text-white" : "text-gray-900"}`}
        >
          Skills & Tools
        </h2>
        <p
          className={`text-center mb-10 ${darkMode ? "text-gray-400" : "text-gray-500"}`}
        >
          Tools and technologies I work with
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className={`rounded-xl p-6 border ${
                darkMode
                  ? "bg-gray-800 border-gray-700"
                  : "bg-white border-slate-200"
              }`}
            >
              <h3 className={`font-bold mb-4 text-blue-500`}>{group.title}</h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`text-sm px-3 py-1 rounded-full ${
                      darkMode
                        ? "bg-gray-700 text-gray-300"
                        : "bg-blue-50 text-blue-700"
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
