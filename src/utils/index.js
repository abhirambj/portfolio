import portfolio from "../assets/images/portfolio-v1.png";
import image_portfolio from "../assets/images/image_portfolio.png";
import systemDesign from "../assets/images/system-design.png";

export const headlines = [
	"Hi, I'm Abhiram.",
	"A Full-Stack Developer.",
	"With 2+ years of experience building scalable, high-performance systems in cloud-native environments at Uber and Agilant Solutions. I specialize in backend-first full-stack development using Java, Spring Boot, Node.js, React, Kafka, and AWS.",
];

export const projects = [
	{
		title: "TogaCommerce",
		description:
			"Engineered a responsive hardware catalog platform for Agilant’s procurement operations. Developed mobile-first UI components using React and TypeScript, integrated a centralized Storybook library, and improved frontend scalability by 15%.",
		tags: [
			"React",
			"TypeScript",
			"Storybook",
			"UI Engineering",
			"Responsive Design",
		],
	},
	{
		title: "Portfolio v2",
		description:
			"Current portfolio website showcasing my work and experience, built with React and modern web technologies.",
		image: image_portfolio,
		tags: ["React", "Tailwind CSS", "JavaScript", "Responsive Design"],
		linkGithub: "https://github.com/abhirambj/portfolio",
		linkOnline: "https://abhirambj.github.io/portfolio/",
	},
	{
		title: "Portfolio v1",
		image: portfolio,
		linkGithub: "https://github.com/abhirambj/portfolio-v1",
		linkOnline: "https://abhirambj.github.io/portfolio-v1/",
		description:
			"This is the previous version of my portfolio website, built using React and Tailwind CSS.",
		tags: [
			"React",
			"Tailwind CSS",
			"JavaScript",
			"GitHub Pages",
			"Web Design",
		],
	},
	{
		title: "Issue Tracking System",
		linkGithub: "https://github.com/abhirambj/IssueTrackingSystem",
		description:
			"A full-stack application for managing and tracking issues, featuring role-based access control and a MySQL-backed data layer.",
		tags: ["Java", "MySQL", "Hibernate", "Jakarta EE"],
	},
	{
		title: "Peak Physique",
		description:
			"A fitness management platform built with Jakarta EE, supporting user registration, workout tracking, and caching for fast performance.",
		tags: ["Jakarta EE", "MySQL", "Security", "Performance Optimization"],
	},
];

export const skillsWork = [
	"Java",
	"Spring Boot",
	"NodeJS",
	"JavaScript",
	"TypeScript",
	"Python",
	"ReactJS",
	"Next.js",
	"Tailwind CSS",
	"Bootstrap",
	"Storybook",
	"Redux",
	"PostgreSQL",
	"MySQL",
	"MongoDB",
	"DynamoDB",
	"Redis",
	"CI/CD Pipelines",
	"GitHub Actions",
	"Jenkins",
	"Docker",
	"Kubernetes",
	"AWS Lambda",
	"AWS S3",
	"AWS EC2",
	"AWS CloudWatch",
	"Apache Kafka",
	"Postman",
	"JUnit",
	"Cypress",
	"Prometheus",
	"Grafana",
	"Open Authorization 2.0",
	"JSON Web Tokens (JWT)",
	"Microservices",
	"RESTful APIs",
	"Distributed Systems",
	"Git",
	"Agile/Scrum",
];

export const certificates = [
	"Oracle Cloud Infrastructure Foundations 2021 Certified Associate",
];

export const articles = [
	{
		image: systemDesign,
		title: "System Design Primer",
		description:
			"Want to learn System Design? This is the best resource to get started.",
		url: "https://github.com/abhirambj/system-design-primer?tab=readme-ov-file#system-design-topics-start-here",
	},
];

export const metadata = {
	title: "Abhiram Bylahalli Jagadish",
	description:
		"This portfolio showcases my work as a full-stack developer and backend engineer. Explore my projects, skills, and career path.",
	imageURL:
		"https://avatars.githubusercontent.com/u/54413769?s=400&u=08698e1c29bb5f6894a7752691b35dee33b478ac&v=4",
	pageUrl: "https://abhirambj.github.io/portfolio/",
};

export const workExperiences = [
	{
		company: "Agilant Solutions Inc.",
		period: "Jul 2024 - Sep 2024",
		duration: "(3 months)",
		role: "Full Stack Developer Intern",
		type: "Internship",
		location: "Naperville, IL, USA",
		technologies: [
			"ReactJS",
			"TypeScript",
			"Tailwind CSS",
			"Storybook",
			"Redux",
		],
		achievements: [
			"Developed responsive UI components using React and Tailwind CSS, boosting cross-device engagement by 20%.",
			"Configured Redux for centralized state management and integrated frontend with RESTful backend APIs, reducing bugs by 15%.",
			"Established a reusable component library using Storybook and Dockerized it for CI/CD workflows, improving consistency across teams.",
		],
	},
	{
		company: "Uber Technologies (via Accenture)",
		period: "Oct 2021 - Jul 2023",
		duration: "(1 year 9 months)",
		role: "Associate Software Developer",
		type: "Full-time",
		location: "Bangalore, India",
		technologies: [
			"Java",
			"Spring Boot",
			"PL/SQL",
			"Redis",
			"DynamoDB",
			"Oracle ERP",
		],
		achievements: [
			"Optimized PL/SQL pipelines for AP/AR and inventory processing, improving financial efficiency by 20% under load.",
			"Implemented Redis-based caching and DynamoDB for real-time data access, reducing API latency by 25% and boosting uptime.",
			"Integrated Spring Boot microservices with AWS and Oracle ERP, enabling seamless, auditable financial transactions.",
		],
	},
	{
		company: "SMMUD Technologies Pvt Ltd.",
		period: "Jun 2021 - Oct 2021",
		duration: "(5 months)",
		role: "Full Stack Developer",
		type: "Full-time",
		location: "Bangalore, India",
		technologies: ["Next.js", "Node.js", "Kafka", "MongoDB", "PostgreSQL"],
		achievements: [
			"Built a food delivery platform with real-time inventory sync using Kafka and MongoDB.",
			"Improved backend efficiency by 20% through optimized PostgreSQL queries and modular code.",
			"Enabled scalable CI workflows and ensured production readiness through custom logging and monitoring.",
		],
	},
];

export const educationHistory = [
	{
		institution: "Illinois Institute of Technology",
		degree: "Master of Information Technology and Management",
		duration: "Aug 2023 - May 2025",
		location: "Chicago, IL, USA",
		courses: [
			"Object Oriented Application Development using Java",
			"Full Stack Web Development",
			"Android Application Development using Java",
			"Open Source Programming",
		],
	},
	{
		institution: "Visvesvaraya Technological University",
		degree: "Bachelor of Engineering in Computer Science",
		duration: "Aug 2017 - May 2021",
		location: "Belagavi, India",
		courses: [
			"Data Structures",
			"Operating Systems",
			"Design and Analysis of Algorithms",
			"Computer Networks",
			"Software Engineering",
			"Database Management Systems",
			"Machine Learning",
		],
	},
];
