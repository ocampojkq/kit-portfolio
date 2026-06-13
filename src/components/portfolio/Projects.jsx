import useProjects from "../../hooks/useProjects";

export default function Projects({ darkMode }) {
  const projects = useProjects();

  console.log("PROJECT IMAGE:", projects[0]?.image);
  return (
    <section
      id="projects"
      className={`py-16 px-6 ${darkMode ? "bg-gray-800" : "bg-white"}`}
    >
      <div className="max-w-6xl mx-auto">
        <h2
          className={`text-3xl font-bold mb-2 text-center ${darkMode ? "text-white" : "text-gray-900"}`}
        >
          Projects
        </h2>
        <p
          className={`text-center mb-10 ${darkMode ? "text-gray-400" : "text-gray-500"}`}
        >
          Ecommerce projects and n8n Automation
        </p>

        {!projects || projects.length === 0 ? (
          <div className="text-center text-gray-400 py-10">
            Loading projects...
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div
                key={project.title}
                className={`rounded-2xl border overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col ${
                  darkMode
                    ? "bg-gray-900 border-gray-700"
                    : "bg-white border-slate-200 shadow-md"
                }`}
              >
                {/* Image or Video Preview */}
                {project.video ? (
                  <div className="w-full aspect-video">
                    <iframe
                      src={project.video}
                      className="w-full h-full"
                      allowFullScreen
                      title={project.title}
                    />
                  </div>
                ) : project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-80 object-cover"
                  />
                ) : (
                  <div
                    className={`w-full h-100 flex items-center justify-center text-4xl ${
                      darkMode ? "bg-gray-800" : "bg-blue-50"
                    }`}
                  >
                    🚀
                  </div>
                )}

                {/* Card Content */}
                <div className="p-6 flex flex-col flex-1">
                  {/* Title + Featured */}
                  <div className="flex items-center gap-2 mb-1">
                    <h3
                      className={`font-bold text-lg ${darkMode ? "text-white" : "text-gray-800"}`}
                    >
                      {project.title}
                    </h3>
                    {project.featured === "true" && (
                      <span className="bg-blue-500 text-white text-xs px-2 py-0.5 rounded-full font-semibold">
                        Featured
                      </span>
                    )}
                  </div>

                  {/* Description */}
                  <p
                    className={`text-sm mb-4 ${darkMode ? "text-gray-400" : "text-gray-600"}`}
                  >
                    {project.description}
                  </p>

                  {/* Stats Row */}
                  {project.stats && (
                    <div className="flex flex-wrap gap-4 mb-4">
                      {project.stats.split(",").map((stat) => (
                        <div key={stat} className="text-center">
                          <p className="text-sm font-bold text-blue-500">
                            {stat.trim()}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {(typeof project.tech === "string"
                      ? project.tech.split(",")
                      : []
                    ).map((t) => (
                      <span
                        key={t}
                        className={`text-xs px-2 py-0.5 rounded-full ${
                          darkMode
                            ? "bg-gray-700 text-gray-300"
                            : "bg-blue-50 text-blue-700"
                        }`}
                      >
                        {t.trim()}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3 mt-auto">
                    {/* FIXED: Restored missing <a tag for Live Demo */}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 text-center bg-blue-600 text-white px-3 py-2 rounded-lg text-sm hover:bg-blue-700 transition font-medium"
                      >
                        Live Demo
                      </a>
                    )}

                    {/* FIXED: Restored missing <a tag for GitHub */}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className={`flex-1 text-center px-3 py-2 rounded-lg text-sm border transition font-medium ${
                          darkMode
                            ? "border-gray-600 text-gray-300 hover:bg-gray-700"
                            : "border-gray-300 text-gray-700 hover:bg-gray-50"
                        }`}
                      >
                        View Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
