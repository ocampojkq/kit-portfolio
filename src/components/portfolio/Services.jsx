const services = [
  {
    icon: "🛍️",
    title: "Shopify Product Listing Management",
    items: [
      "Bulk product uploads via CSV/spreadsheets",
      "SEO-optimized titles and descriptions using ChatGPT",
      "Image optimization and variant management",
      "Inventory sync and real-time updates",
      "Product categorization and collection management",
    ],
  },
  {
    icon: "🏪",
    title: "Store Management & Optimization",
    items: [
      "Daily store operations and maintenance",
      "Order processing and fulfillment coordination",
      "Customer support and inquiry management",
      "Theme customization using HTML/CSS/JavaScript",
      "Performance optimization and speed improvements",
    ],
  },
  {
    icon: "⚡",
    title: "Ecommerce Automation",
    items: [
      "Social media automation with Make.com and n8n",
      "Content calendar management (365 days pre-scheduled)",
      "Multi-platform posting workflows",
      "Email marketing automation",
      "Analytics tracking and automated reporting",
    ],
  },
  {
    icon: "🤖",
    title: "AI Automation & Workflow Development",
    items: [
      "Business automation workflows using n8n",
      "AI tools and Google Sheets integrations",
      "API connections and custom automations",
      "Reducing repetitive manual tasks",
      "AI-powered content creation with ChatGPT",
    ],
  },
  {
    icon: "💼",
    title: "Virtual Assistance",
    items: [
      "Google Sheets organization and automation",
      "Product research (Amazon, Shopify, AliExpress)",
      "Competitor analysis and market research",
      "Data entry and database management",
      "AI-powered content creation with ChatGPT",
    ],
  },
  {
    icon: "🔧",
    title: "Shopify Store Support",
    items: [
      "Custom Shopify theme modifications",
      "HTML5/CSS3/JavaScript code fixes",
      "Responsive design optimization",
      "App integration and setup",
      "Technical troubleshooting and debugging",
    ],
  },
];

export default function Services({ darkMode }) {
  return (
    <section
      id="services"
      className={`py-16 px-6 ${darkMode ? "bg-gray-900" : "bg-gray-50"}`}
    >
      <div className="max-w-6xl mx-auto">
        <h2
          className={`text-3xl font-bold mb-2 text-center ${darkMode ? "text-white" : "text-gray-900"}`}
        >
          What I Do
        </h2>
        <p
          className={`text-center mb-10 ${darkMode ? "text-gray-400" : "text-gray-500"}`}
        >
          Services I offer to help your business grow
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className={`rounded-xl p-6 border hover:border-blue-500 hover:shadow-lg transition-all duration-300 ${
                darkMode
                  ? "bg-gray-800 border-gray-700"
                  : "bg-white border-slate-200"
              }`}
            >
              <div className="text-3xl mb-3">{service.icon}</div>
              <h3
                className={`font-bold text-lg mb-3 ${darkMode ? "text-white" : "text-gray-800"}`}
              >
                {service.title}
              </h3>
              <ul className="space-y-1">
                {service.items.map((item) => (
                  <li
                    key={item}
                    className={`text-sm flex items-start gap-2 ${darkMode ? "text-gray-400" : "text-gray-600"}`}
                  >
                    <span className="text-blue-500 mt-0.5">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
