import { motion, useAnimation } from "framer-motion";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import SectionHeader from "../ui/SectionHeader";
import { skillsWork, certificates } from "../../utils/index";
import React from "react";
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
	FaAngular,
} from "react-icons/fa";
import { TbBrandOauth, TbBrandNextjs, TbRouteSquare2 } from "react-icons/tb";
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
	SiSentry,
	SiStorybook,
	SiAmazondynamodb,
	SiApachekafka,
	SiJunit5,
	SiGithubactions,
	SiJsonwebtokens,
	SiPm2,
	SiTensorflow,
	SiPytorch,
	SiScikitlearn,
	SiHuggingface,
} from "react-icons/si";
import { DiOpensource } from "react-icons/di";
import { GrOracle, GrGraphQl } from "react-icons/gr";
import { BiGitBranch } from "react-icons/bi";
import { BsKanbanFill } from "react-icons/bs";

const skillIcons = {
	"scikit-learn": <SiScikitlearn size={32} />,
	HuggingFace: <SiHuggingface size={32} />,
	TensorFlow: <SiTensorflow size={32} />,
	PyTorch: <SiPytorch size={32} />,
	ReactJS: <FaReact size={32} />,
	NodeJS: <FaNodeJs size={32} />,
	Java: <FaJava size={32} />,
	Python: <FaPython size={32} />,
	JavaScript: <FaJsSquare size={32} />,
	TypeScript: <SiTypescript size={32} />,
	"Spring Boot": <SiSpring size={32} />,
	"Next.js": <TbBrandNextjs size={32} />,
	Redux: <SiRedux size={32} />,
	"Tailwind CSS": <SiTailwindcss size={32} />,
	Bootstrap: <FaBootstrap size={32} />,
	GraphQL: <GrGraphQl size={32} />,
	Storybook: <SiStorybook size={32} />,
	PostgreSQL: <SiPostgresql size={32} />,
	MySQL: <SiMysql size={32} />,
	MongoDB: <SiMongodb size={32} />,
	DynamoDB: <SiAmazondynamodb size={32} />,
	Redis: <SiRedis size={32} />,
	"AWS Lambda": <SiAwslambda size={32} />,
	"AWS EKS": <SiKubernetes size={32} />,
	"AWS S3": <FaAws size={32} />,
	"AWS RDS": <FaAws size={32} />,
	"AWS EBS": <FaAws size={32} />,
	"AWS CloudWatch": <SiAmazoncloudwatch size={32} />,
	"AWS EC2": <SiAmazonec2 size={32} />,
	Docker: <SiDocker size={32} />,
	Kubernetes: <SiKubernetes size={32} />,
	"GitHub Actions": <SiGithubactions size={32} />,
	Jenkins: <SiJenkins size={32} />,
	"CI/CD Pipelines": <SiJenkins size={32} />,
	Kafka: <SiApachekafka size={32} />,
	PM2: <SiPm2 size={32} />,
	Postman: <SiPostman size={32} />,
	JUnit: <SiJunit5 size={32} />,
	Mockito: <SiJunit5 size={32} />,
	Cypress: <SiCypress size={32} />,
	Sentry: <SiSentry size={32} />,
	Prometheus: <SiPrometheus size={32} />,
	Grafana: <SiGrafana size={32} />,
	Microservices: <MdArchitecture size={32} />,
	"RESTful APIs": <TbRouteSquare2 size={32} />,
	"Distributed Systems": <MdArchitecture size={32} />,
	Git: <BiGitBranch size={32} />,
	HTML: <FaHtml5 size={32} />,
	CSS: <FaCss3Alt size={32} />,
	Angular: <FaAngular size={32} />,
	"Object-Oriented Programming": <MdOutlineDataObject size={32} />,
	"Data Structures & Algorithms": <MdOutlineDataObject size={32} />,
	"Open Source": <DiOpensource size={32} />,
	OAuth2: <TbBrandOauth size={32} />,
	"Open Authorization 2.0": <TbBrandOauth size={32} />,
	JWT: <SiJsonwebtokens size={32} />,
	"JSON Web Tokens (JWT)": <SiJsonwebtokens size={32} />,
	"Agile/Scrum": <BsKanbanFill size={32} />,
};

const certIcons = {
	"Oracle Cloud Infrastructure Foundations Associate (2021)": (
		<GrOracle size={32} />
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
					"Building Robust Solutions with Modern Tools & Technologies"
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
						"Validated Expertise: Certifications That Advance My Impact"
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
