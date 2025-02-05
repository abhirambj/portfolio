import portfolio from "../assets/images/portfolio-v1.png";
import systemDesign from "../assets/images/system-design.png";

export const headlines = [
	"Hi, I'm Abhiram.",
	"I'm a Software Developer",
	"With over 2 years of experience in backend development, I specialize in building scalable, high-performance systems, working with Java, Node.js, and cloud technologies.",
];

export const projects = [
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
			"A web application for managing and tracking issues efficiently. It provides an intuitive interface for users to report, track, and resolve tasks seamlessly.",
		tags: ["Java", "MySQL", "Hibernate", "Jakarta EE"],
	},
	{
		title: "Peak Physique",
		description:
			"A full-stack fitness management application built using Jakarta EE technologies (JSF, EJB, JPA) and MySQL. The app includes robust security features, caching mechanisms, and optimized database queries for faster response times.",
		tags: ["Jakarta EE", "MySQL", "Security", "Performance Optimization"],
	},
	{
		title: "TogaCommerce",
		description:
			"Designed and implemented a scalable e-commerce platform for Fortune 500 clients, using Docker for load balancing, NodeJS for backend services, and React (TypeScript) for the frontend, resulting in a 15% increase in sales.",
		tags: ["NodeJS", "React", "Docker", "E-commerce"],
	},
];

export const skillsWork = [
	"Object-Oriented Programming",
	"Data Structures & Algorithms",
	"RESTful APIs",
	"MongoDB",
	"DynamoDB",
	"Microservices",
	"Postman",
	"Git",
	"Cypress",
	"JUnit",
	"CI/CD Pipelines",
	"Distributed Systems",
	"Github Actions",
	"Apache Kafka",
	"ReactJS",
	"JavaScript",
	"Tailwind CSS",
	"Bootstrap",
	"Storybook",
	"Spring",
	"Java",
	"NodeJS",
	"Python",
	"PostgreSQL",
	"MySQL",
	"Redis",
	"Docker",
	"Kubernetes",
	"Jenkins",
	"AWS Lambda",
	"AWS S3",
	"AWS EC2",
	"AWS EBS",
	"AWS CloudWatch",
	"Open Source",
];

export const certificates = [
	"Oracle Cloud Infrastructure Foundations 2021 Associate",
	"AWS Certified Solutions Architect - Associate (Expected Jan 2025)",
];

export const articles = [
	{
		image: "system-design.png",
		title: "System Design Primer",
		description:
			"Want to learn System Design? This is the best resource to get started.",
		url: "https://github.com/abhirambj/system-design-primer?tab=readme-ov-file#system-design-topics-start-here",
	},
];

export const metadata = {
	title: "Abhiram Bylahalli Jagadish",
	description:
		"This portfolio showcases my work as a backend software engineer and full-stack developer. Check out my projects, skills, and achievements.",
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
		location: "Lisle, IL, USA",
		technologies: ["ReactJS", "Spring Boot", "OAuth 2.0", "JWT"],
		achievements: [
			"Engineered scalable backend services using Node.js and Java, focusing on microservices architecture.",
			"Optimized performance of backend systems by refactoring REST APIs and integrating gRPC endpoints.",
			"Developed and maintained monitoring solutions for backend services, utilizing Prometheus, Grafana, and AWS CloudWatch.",
		],
	},
	{
		company: "Accenture",
		period: "Oct 2021 - Jul 2023",
		duration: "(1 year 9 months)",
		role: "Software Developer",
		type: "Full-time",
		location: "Bangalore, India",
		technologies: ["Spring Boot", "Redis", "Kubernetes", "REST APIs"],
		achievements: [
			"Integrated Redis caching to handle growing database loads, reducing latency by 25%.",
			"Developed scalable REST APIs for microservices migration, improving platform scalability by 20%.",
			"Deployed Kubernetes clusters to ensure zero downtime during production rollouts.",
		],
	},
	{
		company: "SMMUD",
		period: "Jun 2021 - Oct 2021",
		duration: "(5 months)",
		role: "Full Stack Developer",
		type: "Full-time",
		location: "Bangalore, India",
		technologies: ["Next.js", "FastAPI", "GraphQL", "PWA"],
		achievements: [
			"Developed scalable backend services using Next.js and Node.js, reducing operational inefficiencies by 20%.",
			"Optimized GraphQL APIs, decreasing payload sizes by 40% and cutting hosting costs by 15%.",
			"Implemented Progressive Web App features, increasing user engagement by 20%.",
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
			"Object Oriented Development",
			"Full Stack Web Development",
			"Android Application Development",
		],
	},
	{
		institution: "Visvesvaraya Technological University",
		degree: "Bachelor of Engineering in Computer Science",
		duration: "Aug 2017 - May 2021",
		location: "Bangalore, India",
		courses: [
			"Data Structures",
			"Operating Systems",
			"Design and Analysis of Algorithms",
		],
	},
];
