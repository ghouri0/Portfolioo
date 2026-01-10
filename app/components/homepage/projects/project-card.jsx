// @flow strict

import * as React from 'react';

function ProjectCard({ project }) {

  return (
   <div className="relative w-full rounded-xl border border-[#1f3a34] bg-[#0f172a]/80 backdrop-blur-md transition-all duration-300 hover:border-[#16f2b3]/40">
  {/* top gradient line */}
  <div className="flex">
    <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#16f2b3]/50 to-transparent" />
  </div>

  {/* header */}
  <div className="px-4 lg:px-8 py-4 relative">
    <div className="flex gap-2 absolute top-1/2 -translate-y-1/2 left-4">
      <div className="h-2 w-2 rounded-full bg-red-400" />
      <div className="h-2 w-2 rounded-full bg-yellow-400" />
      <div className="h-2 w-2 rounded-full bg-green-400" />
    </div>

    <p className="text-center text-[#16f2b3] text-sm lg:text-lg font-medium tracking-wide">
      {project.name}
    </p>
  </div>

  {/* body */}
  <div className="border-t border-[#1f3a34] px-4 lg:px-8 py-4 lg:py-6 overflow-hidden">
    <code className="font-mono text-xs md:text-sm lg:text-base leading-relaxed">
      <div>
        <span className="text-[#16f2b3] mr-2">const</span>
        <span className="text-white mr-2">project</span>
        <span className="text-[#16f2b3] mr-2">=</span>
        <span className="text-gray-400">{'{'}</span>
      </div>

      <div className="ml-4">
        <span className="text-white">name:</span>{' '}
        <span className="text-emerald-300">'{project.name}'</span>,
      </div>

      <div className="ml-4">
        <span className="text-white">tools:</span>{' '}
        <span className="text-gray-400">[</span>
        {project.tools.map((tag, i) => (
          <span key={i} className="text-emerald-300">
            {tag}
            {i !== project.tools.length - 1 && ', '}
          </span>
        ))}
        <span className="text-gray-400">],</span>
      </div>

      <div className="ml-4">
        <span className="text-white">myRole:</span>{' '}
        <span className="text-orange-400">{project.role}</span>,
      </div>

      <div className="ml-4">
        <span className="text-white">description:</span>{' '}
        <span className="text-cyan-300">{project.description}</span>,
      </div>

      <div className="text-gray-400">{'};'}</div>
    </code>
  </div>
</div>

  );
};

export default ProjectCard;