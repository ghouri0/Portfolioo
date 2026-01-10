import { projectsData } from '@/utils/data/projects-data';
import ProjectCard from './project-card';

const Projects = () => {

  return (
  <div
  id="projects"
  className="relative z-40 my-12 lg:my-24 pt-24"
>
  {/* Section Header */}
  <div className='relative'>
  <div className="sticky top-[88px] z-30 bg-transparent">
    {/* ambient glow */}
    <div className="w-[100px] h-[100px] bg-[#16f2b3]/15 rounded-full absolute -top-6 left-0 blur-3xl pointer-events-none" />

    <div className="flex items-center relative">
      <span className="bg-[#0f1e1a] text-[#16f2b3] px-6 py-2 text-sm tracking-widest uppercase rounded-md border border-[#16f2b3]/20">
        Projects
      </span>
      <span className="ml-4 w-full h-[1px] bg-gradient-to-r from-[#16f2b3]/40 to-transparent"></span>
    </div>
  </div>
  </div>

  {/* Cards */}
  <div className="pt-24">
    <div className="flex flex-col gap-8">
      {projectsData.slice(0, 4).map((project, index) => (
        <div
          id={`sticky-card-${index + 1}`}
          key={index}
          className="sticky-card sticky w-full mx-auto max-w-2xl"
        >
          <ProjectCard project={project} />
        </div>
      ))}
    </div>
  </div>
</div>

  );
};

export default Projects;