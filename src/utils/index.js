import portfolio from "../assets/images/portfolio-v1.png";
import image_portfolio from "../assets/images/image_portfolio.png";
import systemDesign from "../assets/images/system-design.png";
import lld from "../assets/images/lld.png";

export const headlines = [
	"Hi, I'm Abhiram.",
	"Full Stack Developer.",
	"Full Stack Developer with 3+ years’ experience delivering scalable, cloud-native solutions for fintech, ERP, healthcare, and e-commerce. Specialized in Java, Spring Boot, React.js, and AWS, with deep expertise in microservices, REST APIs, and distributed systems for high-traffic platforms.",
];

export const projects = [
	{
		title: "Peak Physique",
		description:
			"Rolled out a feature-rich fitness management platform (Jakarta EE, MySQL), integrating onboarding, workout, and meal-tracking modules. Achieved secure RBAC with JWT, and accelerated page load by 3 seconds through SQL optimization and caching.",
		tags: [
			"Jakarta EE",
			"JSF",
			"JPA",
			"MySQL",
			"Java",
			"JWT",
			"RBAC",
			"Caching",
		],
		linkGithub: "https://github.com/abhirambj/peak-physique",
	},
	{
		title: "TogaCommerce",
		description:
			"Spearheaded a modular, component-driven UI for a Fortune 500-facing e-commerce platform. Leveraged React, TypeScript, Redux, Storybook, and GraphQL to reduce design redundancy and boost engineering efficiency. Orchestrated Docker-based CI/CD, improving delivery speed by 20%.",
		tags: [
			"React",
			"TypeScript",
			"Redux",
			"Tailwind CSS",
			"Storybook",
			"GraphQL",
			"Docker",
			"GitHub Actions",
			"Jenkins",
		],
	},
	{
		title: "Portfolio v2",
		description:
			"Modern portfolio website showcasing projects and experience. Built with React, Tailwind CSS, and a focus on accessibility and responsive design.",
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
			"Previous iteration of my personal website, leveraging React and Tailwind CSS for UI and GitHub Pages for deployment.",
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
			"Full-stack platform for tracking and managing issues, featuring RBAC and a scalable MySQL-backed data layer (Java, Jakarta EE, Hibernate).",
		tags: ["Java", "MySQL", "Hibernate", "Jakarta EE"],
	},
];

export const skillsWork = [
	"Java",
	"Spring Boot",
	"ReactJS",
	"TypeScript",
	"NodeJS",
	"Python",
	"Next.js",
	"Angular",
	"Redux",
	"Tailwind CSS",
	"Bootstrap",
	"Storybook",
	"GraphQL",
	"PostgreSQL",
	"MySQL",
	"MongoDB",
	"DynamoDB",
	"Redis",
	"Neo4j",
	"AWS Lambda",
	"AWS EC2",
	"AWS S3",
	"AWS RDS",
	"AWS EBS",
	"AWS CloudWatch",
	"Docker",
	"GitHub Actions",
	"Jenkins",
	"Kubernetes",
	"CI/CD Pipelines",
	"Kafka",
	"PM2",
	"Postman",
	"JUnit",
	"Mockito",
	"Sentry",
	"Cypress",
	"Prometheus",
	"Grafana",
	"Microservices",
	"RESTful APIs",
	"Distributed Systems",
	"Git",
	"Agile/Scrum",
	"Open Authorization 2.0",
	"JSON Web Tokens (JWT)",
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
	{
		image: lld,
		title: "Low Level Design Primer",
		description:
			"Want to learn Low Level Design? This is the best resource to get started.",
		url: "https://github.com/ashishps1/awesome-low-level-design",
	},
];

export const metadata = {
	title: "Abhiram Bylahalli Jagadish",
	description:
		"Portfolio of a Full Stack Developer and backend engineer specializing in scalable, cloud-native, and distributed systems. Explore my projects, skills, and career path.",
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
			"React",
			"TypeScript",
			"Redux",
			"Tailwind CSS",
			"Storybook",
			"GraphQL",
			"Spring Boot",
			"Docker",
			"Jenkins",
			"Kubernetes",
			"GitHub Actions",
		],
		achievements: [
			"Engineered a reusable UI component library adopted by 3 enterprise projects, reducing development cycles by 30% and saving $20,000 annually.",
			"Elevated application responsiveness by 20% through advanced Redux and GraphQL optimization, improving user satisfaction scores by 15%.",
			"Instituted secure RESTful APIs and robust authentication in Spring Boot, lowering post-release bug rates by 15%.",
			"Automated CI/CD pipelines (Jenkins, GitHub Actions, Docker, Kubernetes), increasing deployment frequency by 50% and saving 8+ hours per sprint.",
		],
	},
	{
		company:
			"Accenture Solutions Pvt Ltd. (Consultant at Uber Technologies Inc)",
		period: "Oct 2021 - Jul 2023",
		duration: "(1 year 10 months)",
		role: "Associate Software Developer – Consultant",
		type: "Full-time",
		location: "Bengaluru, India",
		technologies: [
			"Java",
			"Spring Boot",
			"Angular",
			"GraphQL",
			"JUnit",
			"Postman",
			"PL/SQL",
			"Redis",
			"DynamoDB",
			"Amazon RDS",
			"Oracle Cloud ERP",
			"REST APIs",
			"Jenkins",
			"Git/GitHub",
		],
		achievements: [
			"Streamlined AP/AR workflows for 10,000+ daily transactions, cutting manual effort by 40% and accelerating month-end close by 20%.",
			"Delivered real-time financial dashboards with Angular and GraphQL, improving decision-making speed by 30% for business users.",
			"Integrated Oracle ERP with AWS (DynamoDB, RDS), reducing data sync errors by 25% and supporting $2M+ in monthly transactions.",
			"Enhanced CI/CD reliability, decreasing environment sync issues by 15% and enabling zero-downtime deployments.",
		],
	},
	{
		company: "SMMUD Technologies Pvt Ltd.",
		period: "Jul 2019 - Oct 2021",
		duration: "(2 years 4 months)",
		role: "Full Stack Developer",
		type: "Full-time",
		location: "Bangalore, India",
		technologies: [
			"Next.js",
			"Node.js",
			"Express.js",
			"Kafka",
			"MongoDB",
			"PostgreSQL",
			"REST APIs",
			"Git/GitLab",
			"PM2",
		],
		achievements: [
			"Launched a cloud-native ordering platform for B2B/B2C clients, processing 5,000+ monthly transactions and enabling real-time inventory management.",
			"Architected modular RESTful microservices (Node.js, Express.js, Next.js), accelerating feature delivery by 25%.",
			"Optimized PostgreSQL schemas and asynchronous workflows, boosting transaction speeds by 20%.",
			"Established Kafka-driven messaging for distributed microservices, ensuring reliable order and payment updates.",
		],
	},
];

export const educationHistory = [
	{
		institution: "Illinois Institute of Technology",
		degree: "Masters in Information Technology Management (MAS)",
		duration: "Aug 2023 - May 2025",
		location: "Chicago, IL, USA",
		courses: [
			"Object Oriented Application Development using Java",
			"Full Stack Web Development",
			"Android Application Development using Java",
			"Open Source Programming",
			"Cloud Computing",
			"Service Oriented Architecture",
			"Database Management Systems",
		],
	},
	{
		institution: "Visvesvaraya Technological University",
		degree: "Bachelor of Engineering in Computer Science",
		duration: "Aug 2017 - May 2021",
		location: "Belagavi, Karnataka, India",
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
