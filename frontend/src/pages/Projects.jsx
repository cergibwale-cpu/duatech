import React from 'react';

const Projects = () => {
  return (
    <div className="min-h-screen bg-[#0A1F44] py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-4xl font-black text-center mb-16 uppercase tracking-tighter">
          PROJECT <span className="text-[#00FF88]">PORTFOLIO</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((project) => (
            <div key={project} className="glass-card overflow-hidden group">
              <div className="h-64 img-placeholder w-full group-hover:scale-110 transition-transform duration-500">
                 PROJECT CASE STUDY {project}
              </div>
              <div className="p-6">
                <span className="text-[#00FF88] text-xs font-bold uppercase tracking-widest">Completed</span>
                <h3 className="text-xl font-bold mt-2">MW Scale Factory Installation</h3>
                <p className="text-gray-500 text-sm mt-1">Location: Industrial Area, Phase-II</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
