import React from "react";
import { educationHistory } from "../../utils";
import { FaSchool } from "react-icons/fa";

const Education = () => {
  return (
    <div className="space-y-4">
      {educationHistory.map((education, index) => (
        <div
          key={index}
          className="relative flex gap-4 bg-white bg-opacity-10 backdrop-blur-md rounded-xl border border-white/30 p-6 hover:scale-105 transition-all duration-300 ease-in-out"
        >
          <div className="mt-1 flex-shrink-0">
            <div className="w-10 h-10 rounded-full bg-white text-gray-400 flex items-center justify-center">
              <FaSchool alt="school" className="w-5 h-5" />
            </div>
          </div>

          <div className="flex-grow">
            <div className="flex items-baseline justify-between mb-1">
              <h3 className="font-medium text-white">{education.institution}</h3>
              <div className="text-sm text-gray-400">
                {education.duration} <span>{education.location}</span>
              </div>
            </div>

            <div className="text-gray-400 mb-2">
              <span className="font-medium">{education.degree}</span>
            </div>

            <div className="flex flex-wrap gap-2">
              {education.courses.map((tech, i) => (
                <span
                  key={i}
                  className="px-2 py-1 text-sm rounded-md bg-white/20 border border-white/20 backdrop-blur-md text-white shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out"                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Education;
