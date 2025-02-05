import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import ProjectCard from "../cards/ProjectCard";
import SectionHeader from "../ui/SectionHeader";
import { projects } from "../../utils";
import React from "react";
import { SiGithub } from "react-icons/si";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", checkScreenSize);
    checkScreenSize();

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const handleClick = (project) => {
    if (isMobile) {
      setSelectedProject(selectedProject === project ? null : project);
    }
  };

  const gridVariants = {
    initial: { opacity: 0, y: 50 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 flex items-center justify-center py-16"
      id="projects"
    >
      <div className="flex flex-col items-center justify-center w-full">
        <SectionHeader title={"Featured Projects."} subtitle={"Innovations in Motion: My Latest Creations"} />

        <motion.div
          className="flex flex-wrap justify-center gap-8 max-w-full"
          variants={gridVariants}
          initial="initial"
          animate="animate"
        >
          {projects.length > 0 ? (
            projects.map((project, idx) => (
              <motion.div
                key={idx}
                variants={cardVariants}
                className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 max-w-[350px] mx-auto"
              >
                <ProjectCard
                  project={project}
                  onClick={() => handleClick(project)}
                  isSelected={selectedProject === project}
                  isMobile={isMobile}
                />
                {selectedProject === project && isMobile && (
                  <motion.div
                    className="absolute inset-0 p-6 flex flex-col justify-between items-start bg-gray-800 bg-opacity-90 rounded-lg transition-all duration-300 z-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                    <p className="text-sm text-gray-300 mt-2">{project.description}</p>
                    <div className="mt-4 flex space-x-4">
                      {project.linkOnline && (
                        <a
                          href={project.linkOnline}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 rounded-lg text-white bg-blue-600"
                        >
                          Demo
                        </a>
                      )}
                      {project.linkGithub && (
                        <a
                          href={project.linkGithub}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 rounded-lg text-white bg-gray-600"
                        >
                          GitHub
                        </a>
                      )}
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))
          ) : (
            <div className="flex flex-col items-center justify-center space-y-6 text-center">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-600 dark:text-gray-300">
                No Projects Yet
              </h3>
              <p className="text-lg text-gray-500 dark:text-gray-400">
                Looks like I haven’t shared any projects yet. Check back soon for some amazing work!
              </p>
            </div>
          )}
        </motion.div>

        <motion.div className="mt-12 w-full flex justify-center">
          <a
            href="https://github.com/abhirambj"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 p-2 text-secondary text-center transition-all transform hover:scale-105 hover:border-secondary hover:bg-opacity-10 hover:text-white cursor-pointer rounded-md"
          >
            <div className="flex items-center gap-2">
              <SiGithub size={24} />
              <span className="whitespace-normal font-semibold text-xs text-center">
                View More on GitHub
              </span>
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
