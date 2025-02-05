import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import React from "react";

const ProjectCard = ({ project, isMobile, onClick, isSelected }) => {
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isMobile && isSelected) {
      setIsHovered(true);
    }
  }, [isMobile, isSelected]);

  return (
    <motion.div
      className="relative group w-[22rem] h-[22rem] rounded-xl overflow-hidden shadow-lg backdrop-blur-lg bg-white/10 border border-white/20 transition-all"
      onClick={isMobile ? onClick : null}
      onMouseEnter={!isMobile ? () => setIsHovered(true) : null}
      onMouseLeave={!isMobile ? () => setIsHovered(false) : null}
    >
      <div
        className={`absolute inset-0 p-4 flex flex-col justify-center items-center transition-all duration-500 ${isHovered || isSelected ? "opacity-0" : "opacity-100"
          }`}
      >
        <h3 className="text-xl font-semibold text-white">{project.title}</h3>
        <p className="text-base text-gray-300 mt-2">{project.description}</p>
      </div>

      <div
        className={`absolute inset-0 p-6 flex flex-col justify-between items-start transition-all duration-500 ${isHovered || isSelected ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
      >
        <h3 className="text-xl font-semibold text-white">{project.title}</h3>
        <p className="text-sm text-gray-300 mt-2">{project.description}</p>
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-32 object-cover p-2 mt-4 rounded-xl transition-transform duration-500 transform group-hover:scale-110"
        />
        <div className="flex justify-between items-center mt-4 w-full">
          {project.linkOnline && (
            <Link
              to={project.linkOnline}
              className="px-4 py-2 rounded-lg text-white shadow-lg flex items-center justify-center space-x-2 transform transition-transform"
              style={{
                background: "linear-gradient(135deg, rgba(138, 43, 226, 0.4), rgba(0, 123, 255, 0.4))",
                border: "1px solid rgba(255, 255, 255, 0.3)",
                backdropFilter: "blur(12px)",
                transition: "all 0.3s ease-in-out",
              }}
              onMouseEnter={(e) => {
                e.target.style.boxShadow =
                  "0 6px 12px rgba(138, 43, 226, 0.5), 0 4px 10px rgba(0, 123, 255, 0.4)";
                e.target.style.transform = "scale(1.05)";
              }}
              onMouseLeave={(e) => {
                e.target.style.boxShadow = "none";
                e.target.style.transform = "scale(1)";
              }}
            >
              <span>Demo</span>
            </Link>
          )}

          {project.linkGithub && (
            <Link
              to={project.linkGithub}
              className="px-4 py-2 rounded-lg text-white shadow-lg flex items-center space-x-2 transform transition-transform"
              style={{
                background: "linear-gradient(135deg, rgba(50, 50, 50, 0.5), rgba(100, 100, 100, 0.3))",
                border: "1px solid rgba(255, 255, 255, 0.3)",
                backdropFilter: "blur(12px)",
                transition: "all 0.3s ease-in-out",
              }}
              onMouseEnter={(e) => {
                e.target.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.4), 0 4px 10px rgba(50, 50, 50, 0.3)";
                e.target.style.transform = "scale(1.05)";
              }}
              onMouseLeave={(e) => {
                e.target.style.boxShadow = "none";
                e.target.style.transform = "scale(1)";
              }}
            >
              <FaGithub />
              <span>GitHub</span>
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
