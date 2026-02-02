import { projectsData } from "@/utils/data/projects-data";
import Image from "next/image";

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20"
    >
      {/* Section Header */}
      <div className="mb-12 text-center lg:text-left">
        <p className="text-sm font-semibold uppercase tracking-widest text-emerald-400">
          Projects
        </p>
        <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
          Selected Work
        </h2>
        <p className="mt-3 text-white/70 max-w-2xl mx-auto lg:mx-0">
          I build web applications with a focus on performance, usability, and clean design. Here are some projects that showcase my skills in modern web development.
        </p>
      </div>

      {/* Projects Grid: 2 per row on large screens */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className="group relative hover:cursor-pointer flex flex-col justify-between rounded-2xl bg-[#0f1715] border border-emerald-900/20 p-6 sm:p-8 hover:shadow-xl hover:shadow-emerald-500/20 transition-transform duration-300 hover:-translate-y-1"
          >
            {/* Optional Thumbnail */}
            {project.image && (
              <div className="relative w-full h-44 mb-4 rounded-xl overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover"
                />
              </div>
            )}

            {/* Project Name */}
            <h3 className="text-white text-xl font-semibold tracking-tight mb-2">
              {project.name}
            </h3>

            {/* Description */}
            <p className="text-white/70 text-sm sm:text-base mb-3 leading-relaxed">
              {project.description}
            </p>

            {/* Role */}
            <p className="text-emerald-300 text-sm sm:text-base font-medium mb-4">
              Role: {project.role}
            </p>

            {/* Tools */}
            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tools.map((tool, i) => (
                <span
                  key={i}
                  className="text-xs sm:text-sm bg-emerald-900/10 border border-emerald-900/30 px-3 py-1 rounded-full text-emerald-300 transition-colors duration-300 group-hover:bg-emerald-900/20 group-hover:text-white"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
