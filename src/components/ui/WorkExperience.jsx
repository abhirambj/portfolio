import React from "react";
import { FaUser } from "react-icons/fa";
import { workExperiences } from "../../utils/index";

const WorkExperience = () => {
	return (
		<div className="space-y-4">
			{workExperiences.map((experience, index) => (
				<div
					key={index}
					className="flex gap-4 bg-white bg-opacity-10 backdrop-blur-md rounded-xl border border-white/30 p-6 hover:scale-105 transition-all duration-300 ease-in-out"
				>
					<div className="mt-1 flex-shrink-0">
						<div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
							<FaUser className="w-5 h-5 text-gray-500" />
						</div>
					</div>
					<div className="flex-grow">
						<div className="flex items-baseline justify-between mb-1">
							<h3 className="font-medium text-white">
								{experience.company}
							</h3>
							<div className="text-sm text-gray-400">
								{experience.period}{" "}
								<span>{experience.duration}</span>
							</div>
						</div>
						<div className="flex items-baseline justify-between mb-2">
							<div className="text-gray-400">
								{experience.role}
								<span className="mx-1">-</span>
								<span>{experience.type}</span>
								<span className="mx-1">-</span>
								<span>{experience.location}</span>
							</div>
						</div>
						<div className="flex flex-wrap gap-2 mb-3">
							{experience.technologies.map((tech, i) => (
								<span
									key={i}
									className="px-2 py-1 text-sm rounded-md bg-white/20 border border-white/20 backdrop-blur-md text-white shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out"
								>
									{tech}
								</span>
							))}
						</div>
						<ul className="space-y-2">
							{experience.achievements.map((achievement, i) => (
								<li key={i} className="text-gray-300 text-sm">
									- {achievement}
								</li>
							))}
						</ul>
					</div>
				</div>
			))}
		</div>
	);
};

export default WorkExperience;
