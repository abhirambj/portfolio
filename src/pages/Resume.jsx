import React, { useState } from "react";
import NavBar from "../components/navbar/NavBar";
import { RiBriefcaseLine } from "react-icons/ri";
import { GiGraduateCap } from "react-icons/gi";
import BottomBar from "../components/navbar/BottomBar";
import WorkExperience from "../components/ui/WorkExperience";
import Education from "../components/ui/Education";
import AnimatedDivider from "../components/ui/AnimatedDivider";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaLinkedin } from "react-icons/fa";

const Resume = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [description, setDescription] = useState(
    "Skilled **full-stack developer** with expertise in diverse programming languages and frameworks. Proven ability to deliver impactful projects on GitHub, fostering a **collaborative environment**. Adept at tackling **complex challenges** and thriving in team settings. Seeking to leverage skills in a dynamic role."
  );

  const handleSave = () => {
    setIsEditing(false);
  };

  return (
    <div className="bg-primary text-white min-h-screen mb-2">
      {/* Navigation Bar */}
      <div className="mt-16 grid place-items-center w-full">
        <NavBar />
      </div>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-8">
        {/* Name and Title */}
        <div className="text-left">
          <h1 className="text-md md:text-4xl font-bold text-white">
            Abhiram Bylahalli Jagadish
          </h1>
          <p className="text-lg md:text-xl text-white mt-2">
            Software Developer
          </p>
        </div>

        {/* Editable Description */}
        <div
          className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-6 mt-6"
          style={{
            boxShadow:
              "0 6px 12px rgba(255, 255, 255, 0.1), 0 4px 10px rgba(0, 0, 0, 0.3)",
          }}
        >
          {isEditing ? (
            <div className="flex flex-col gap-4">
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full p-4 text-white bg-transparent border border-gray-600 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="5"
                placeholder="Edit your description..."
                style={{
                  backdropFilter: "blur(8px)",
                  boxShadow: "inset 0 4px 8px rgba(0, 0, 0, 0.2)",
                }}
              />
              <div className="flex justify-end gap-4">
                <button
                  onClick={() => setIsEditing(false)}
                  className="px-4 py-2 text-sm font-medium text-gray-400 border border-gray-500 rounded-lg hover:bg-gray-700 hover:text-white transition"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSave}
                  className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 active:scale-95 transition-all"
                  style={{
                    boxShadow:
                      "0 4px 8px rgba(0, 123, 255, 0.3), 0 4px 12px rgba(0, 0, 0, 0.2)",
                  }}
                >
                  Save Changes
                </button>
              </div>
            </div>
          ) : (
            <div
              className="text-gray-300 leading-relaxed cursor-pointer"
              onClick={() => setIsEditing(true)}
              style={{
                padding: "0.5rem",
                borderRadius: "0.5rem",
                transition: "all 0.3s ease",
              }}
            >
              <p
                dangerouslySetInnerHTML={{
                  __html: description.replace(
                    /\*\*(.*?)\*\*/g,
                    "<strong>$1</strong>"
                  ),
                }}
              />
              <p className="text-sm text-white mt-2">Click to edit</p>
            </div>
          )}
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-left mt-8">
          {[
            {
              label: "Address",
              value: "USA",
              icon: <FaMapMarkerAlt className="text-white" />
            },
            {
              label: "Email",
              value: "abhiram.bj@gmail.com",
              isLink: true,
              linkType: "mailto",
              icon: <FaEnvelope className="text-white" />
            },
            {
              label: "Phone",
              value: "+1 (312) 877-8160",
              isLink: true,
              linkType: "tel",
              icon: <FaPhoneAlt className="text-white" />
            },
            {
              label: "Linkedin",
              value: "linkedin.com/in/abhirambj",
              isLink: true,
              linkType: "https",
              icon: <FaLinkedin className="text-white" />
            },
          ].map(({ label, value, isLink, linkType, icon }, index) => (
            <div key={index} className="text-gray-400">
              <div className="flex items-center gap-2">
                {icon}
                <p className="font-semibold text-white">{label}</p>
              </div>
              {isLink ? (
                <a
                  href={`${linkType || ""}:${value}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-500 transition"
                >
                  {value}
                </a>
              ) : (
                <p>{value}</p>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12">
          <h2 className="flex items-center text-2xl font-bold text-white mb-4">
            <div
              className="relative flex items-center justify-center w-10 h-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-full p-2 mr-3"
              style={{
                boxShadow:
                  "0 6px 12px rgba(255, 255, 255, 0.1), 0 4px 10px rgba(0, 0, 0, 0.3)",
              }}
            >
              <RiBriefcaseLine className="text-secondary" />
            </div>
            Work Experience
          </h2>
          <AnimatedDivider />
          <div className="mt-8">
            <WorkExperience />
          </div>
        </div>
        <div className="mt-12">
          <h2 className="flex items-center text-2xl font-bold text-white mb-4">
            <div
              className="relative flex items-center justify-center w-10 h-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-full p-2 mr-3"
              style={{
                boxShadow:
                  "0 6px 12px rgba(255, 255, 255, 0.1), 0 4px 10px rgba(0, 0, 0, 0.3)",
              }}
            >
              <GiGraduateCap className="text-secondary" />
            </div>
            Education
          </h2>
          <AnimatedDivider />
          <div className="mt-8">
            <Education />
          </div>
          <AnimatedDivider />
        </div>
        <BottomBar />
      </section>
    </div >
  );
};

export default Resume;
