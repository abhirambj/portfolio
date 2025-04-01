import { motion, useAnimation } from "framer-motion";
import { useState, useEffect } from "react";
import {
	FaCode,
	FaReact,
	FaNodeJs,
	FaJava,
	FaPython,
	FaJsSquare,
	FaHtml5,
	FaCss3Alt,
	FaBootstrap,
	FaAws,
} from "react-icons/fa";
import { MdOutlineDataObject, MdArchitecture } from "react-icons/md";
import {
	SiTailwindcss,
	SiDocker,
	SiAmazoncloudwatch,
	SiTypescript,
	SiRedux,
	SiPrometheus,
	SiGrafana,
	SiKubernetes,
	SiAmazonec2,
	SiAwslambda,
	SiRedis,
	SiMongodb,
	SiPostman,
	SiPostgresql,
	SiJenkins,
	SiMysql,
	SiSpring,
	SiCypress,
	SiStorybook,
	SiAmazondynamodb,
	SiApachekafka,
	SiJunit5,
	SiGithubactions,
	SiJsonwebtokens,
	SiAuth0,
} from "react-icons/si";
import { DiOpensource } from "react-icons/di";
import SectionHeader from "../ui/SectionHeader";
import { skillsWork, certificates } from "../../utils";
import React from "react";
import { useInView } from "react-intersection-observer";
import { GrOracle } from "react-icons/gr";
import { TbBrandNextjs, TbRouteSquare2 } from "react-icons/tb";
import { BiGitBranch } from "react-icons/bi";
import { BsKanbanFill } from "react-icons/bs";

const skillIcons = {
	ReactJS: <FaReact size={36} />,
	JUnit: <SiJunit5 size={36} />,
	NodeJS: <FaNodeJs size={36} />,
	Java: <FaJava size={36} />,
	Python: <FaPython size={36} />,
	Redis: <SiRedis size={36} />,
	"AWS EC2": <SiAmazonec2 size={36} />,
	"AWS S3": <FaAws size={36} />,
	"AWS EBS": <FaAws size={36} />,
	JavaScript: <FaJsSquare size={36} />,
	HTML: <FaHtml5 size={36} />,
	CSS: <FaCss3Alt size={36} />,
	"Tailwind CSS": <SiTailwindcss size={36} />,
	Bootstrap: <FaBootstrap size={36} />,
	Docker: <SiDocker size={36} />,
	Kubernetes: <SiKubernetes size={36} />,
	"AWS Lambda": <SiAwslambda size={36} />,
	MongoDB: <SiMongodb size={36} />,
	Postman: <SiPostman size={36} />,
	Jenkins: <SiJenkins size={36} />,
	PostgreSQL: <SiPostgresql size={36} />,
	Storybook: <SiStorybook size={36} />,
	MySQL: <SiMysql size={36} />,
	Git: <BiGitBranch size={36} />,
	"Object-Oriented Programming": <MdOutlineDataObject size={36} />,
	Cypress: <SiCypress size={36} />,
	"CI/CD Pipelines": <SiJenkins size={36} />,
	"Distributed Systems": <SiGithubactions size={36} />,
	Microservices: <MdArchitecture size={36} />,
	"Spring Boot": <SiSpring size={36} />,
	"GitHub Actions": <SiGithubactions size={36} />,
	DynamoDB: <SiAmazondynamodb size={36} />,
	"Data Structures & Algorithms": <MdOutlineDataObject size={36} />,
	"Apache Kafka": <SiApachekafka size={36} />,
	"AWS CloudWatch": <SiAmazoncloudwatch size={36} />,
	"Open Source": <DiOpensource size={36} />,
	"Open Authorization 2.0": <SiAuth0 />,
	"JSON Web Tokens (JWT)": <SiJsonwebtokens size={36} />,
	"Next.js": <TbBrandNextjs size={36} />,
	TypeScript: <SiTypescript size={36} />,
	Redux: <SiRedux size={36} />,
	Prometheus: <SiPrometheus size={36} />,
	Grafana: <SiGrafana size={36} />,
	"RESTful APIs": <TbRouteSquare2 size={36} />,
	"Agile/Scrum": <BsKanbanFill size={36} />,
};

const certIcons = {
	"Oracle Cloud Infrastructure Foundations Associate 2021": (
		<GrOracle size={36} />
	),
};

const Skills = () => {
	const [isExpandedSkills, setIsExpandedSkills] = useState(false);
	const [isExpandedCerts, setIsExpandedCerts] = useState(false);
	const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
	const control = useAnimation();
	const [inView, ref] = useInView();

	const handleToggleSkills = () => {
		setIsExpandedSkills(!isExpandedSkills);
	};

	const handleToggleCerts = () => {
		setIsExpandedCerts(!isExpandedCerts);
	};

	const handleResize = () => {
		setIsMobile(window.innerWidth < 768);
	};

	const containerVariants = {
		hidden: { opacity: 0, y: 30 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.8 },
		},
	};

	useEffect(() => {
		if (inView) {
			control.start("visible");
		} else {
			control.start("hidden");
		}
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, [control, inView]);

	return (
		<section className="mt-16 max-w-7xl mx-auto px-4 md:px-8" id="skills">
			<SectionHeader
				title={"Skills."}
				subtitle={
					"Empowering My Code with the Best Tools and Technologies"
				}
			/>
			<div className="text-center md:text-left">
				<div className="overflow-hidden">
					<div className="flex flex-wrap justify-center gap-4 py-4">
						{skillsWork
							.slice(
								0,
								isMobile && !isExpandedSkills
									? 15
									: skillsWork.length
							)
							.map((skill, idx) => (
								<div
									key={idx}
									className="flex flex-col items-center gap-2 p-2 text-secondary text-center transition-all transform hover:scale-105 hover:border-secondary hover:bg-opacity-10 hover:text-white cursor-pointer rounded-md"
								>
									<div className="flex items-center gap-2">
										{skillIcons[skill] || (
											<FaCode
												size={14}
												className="text-secondary"
											/>
										)}
										<span className="whitespace-normal font-semibold text-xs text-left">
											{skill}
										</span>
									</div>
								</div>
							))}
					</div>

					{isMobile && (
						<div className="flex justify-center mt-4">
							<a
								onClick={handleToggleSkills}
								className="text-sm text-blue-500 cursor-pointer hover:underline"
							>
								{isExpandedSkills ? "Show Less" : "Show More"}
							</a>
						</div>
					)}
				</div>
			</div>

			<div className="mt-8">
				<SectionHeader
					title={"Certifications."}
					subtitle={
						"Unlocking New Heights: Recognitions That Shape My Journey"
					}
				/>
				<motion.div
					variants={containerVariants}
					initial="hidden"
					animate={control}
					className="flex flex-wrap justify-center gap-6 py-4"
				>
					{certificates
						.slice(
							0,
							isMobile && !isExpandedCerts
								? 3
								: certificates.length
						)
						.map((certificate, idx) => (
							<div
								key={idx}
								className="flex flex-col items-center gap-2 p-2 text-secondary text-center transition-all transform hover:scale-105 hover:border-secondary hover:bg-opacity-10 hover:text-white cursor-pointer rounded-md"
							>
								<div className="flex items-center justify-center gap-2">
									<div className="flex items-center justify-center gap-2">
										{certIcons[certificate] || (
											<GrOracle
												size={14}
												className="text-secondary"
											/>
										)}
										<span className="whitespace-normal font-semibold text-xs text-center">
											{certificate}
										</span>
									</div>
								</div>
							</div>
						))}
				</motion.div>

				{isMobile && (
					<div className="flex justify-center mt-4">
						<a
							onClick={handleToggleCerts}
							className="text-sm text-blue-500 cursor-pointer hover:underline"
						>
							{isExpandedCerts ? "Show Less" : "Show More"}
						</a>
					</div>
				)}
			</div>
		</section>
	);
};

export default Skills;
