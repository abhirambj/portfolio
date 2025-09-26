import React, { useState } from "react";
import NavBar from "../components/navbar/NavBar";
import { RiBriefcaseLine } from "react-icons/ri";
import { GiGraduateCap } from "react-icons/gi";
import BottomBar from "../components/navbar/BottomBar";
import WorkExperience from "../components/ui/WorkExperience";
import Education from "../components/ui/Education";
import AnimatedDivider from "../components/ui/AnimatedDivider";
import {
	FaMapMarkerAlt,
	FaEnvelope,
	FaPhoneAlt,
	FaLinkedin,
	FaGithub,
} from "react-icons/fa";

const Resume = () => {
	const [isEditing, setIsEditing] = useState(false);
	const [description, setDescription] = useState(
		"Hey there! I'm Abhiram — Full Stack Developer with 3+ years building fintech, ERP, e-commerce, and health-tech fun. <br><br> Powered by Java, Spring Boot, React, AWS, and lots of coffee, I'm happiest shipping low-latency features, scaling APIs, and sneaking ML ideas into production. From tuning microservices that practically teleport to battling CI/CD dragons and delighting users, I love turning challenges into code and teams into friends.<br><br>If you enjoy systems that scale, code memes, or a good tabs-vs-spaces debate, say hi!"
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
						Full Stack Developer
					</p>
				</div>

				{/* Editable Description */}
				<div className="relative bg-[#1e2536] backdrop-blur-md border border-white/20 rounded-lg mt-6">
					<div className="flex items-center gap-2 px-4 py-2 border-b border-white/20 bg-black/20">
						<div className="flex gap-1">
							<div className="w-3 h-3 rounded-full bg-red-500"></div>
							<div className="w-3 h-3 rounded-full bg-yellow-500"></div>
							<div className="w-3 h-3 rounded-full bg-green-500"></div>
						</div>
						<span className="text-sm text-white/60">
							summary.txt
						</span>
						{isEditing && (
							<span className="text-xs text-secondary ml-auto">
								editing...
							</span>
						)}
					</div>
					{isEditing ? (
						<div className="p-4">
							<div className="flex items-center text-white/60 text-sm mb-2">
								<span className="mr-2">$</span>
								<span className="animate-pulse">|</span>
							</div>
							<textarea
								value={description}
								onChange={(e) => setDescription(e.target.value)}
								className="w-full bg-transparent text-white/90 resize-none focus:outline-none font-mono text-sm leading-relaxed"
								rows="8"
								placeholder="Edit your description..."
								autoFocus
							/>
							<div className="flex justify-end gap-3 mt-4 font-mono text-sm">
								<button
									onClick={() => setIsEditing(false)}
									className="px-3 py-1 text-white/60 hover:text-white/90 transition-colors"
								>
									:q!
								</button>
								<button
									onClick={handleSave}
									className="px-3 py-1 text-secondary hover:text-secondary/90 transition-colors"
								>
									:wq
								</button>
							</div>
						</div>
					) : (
						<div
							onClick={() => setIsEditing(true)}
							className="p-6 cursor-pointer group"
						>
							<div className="text-white/80 leading-relaxed font-mono text-sm">
								<p
									dangerouslySetInnerHTML={{
										__html: description,
									}}
								/>
							</div>
							<div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
								<span className="text-xs text-white/40">
									press to edit
								</span>
							</div>
						</div>
					)}
				</div>

				{/* Contact Information */}
				<div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-4 mt-6">
					{[
						{
							label: "Address",
							value: "USA",
							icon: <FaMapMarkerAlt className="text-secondary" />,
						},
						{
							label: "Email",
							value: "abhiram.bj@gmail.com",
							isLink: true,
							linkType: "mailto:",
							icon: <FaEnvelope className="text-secondary" />,
						},
						{
							label: "Phone",
							value: "+1 (312) 877-8160",
							isLink: true,
							linkType: "tel:",
							icon: <FaPhoneAlt className="text-secondary" />,
						},
						{
							label: "LinkedIn",
							value: "linkedin.com/in/abhirambj",
							isLink: true,
							linkType: "https://",
							icon: <FaLinkedin className="text-secondary" />,
						},
						{
							label: "GitHub",
							value: "github.com/abhirambj",
							isLink: true,
							linkType: "https://",
							icon: <FaGithub className="text-secondary" />,
						},
					].map(({ label, value, isLink, linkType, icon }, index) => (
						<div key={index} className="relative group">
							{isLink ? (
								<a
									href={`${linkType || ""}${value}`}
									target="_blank"
									rel="noopener noreferrer"
									className="absolute inset-0 z-10 cursor-pointer"
									aria-label={`${label}: ${value}`}
								></a>
							) : null}
							<div className="flex flex-col items-center text-center p-4 rounded-lg bg-white/10 transition-all duration-300 h-full group-hover:scale-105 group-hover:bg-[#323b57] border border-white/20">
								<div className="bg-white/10 backdrop-blur-md w-12 h-12 rounded-full flex items-center justify-center mb-2">
									{icon}
								</div>
								<p className="font-semibold text-white text-sm">
									{label}
								</p>
								<p className="text-gray-400 text-sm mt-1">
									{value}
								</p>
							</div>
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
		</div>
	);
};

export default Resume;
