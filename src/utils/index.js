import portfolio from "../assets/images/portfolio-v1.png";
import image_portfolio from "../assets/images/image_portfolio.png";
import systemDesign from "../assets/images/system-design.png";
import lld from "../assets/images/lld.png";

export const headlines = [
	"Hi, I'm Abhiram.",
	"Full Stack Software Engineer.",
	"Full Stack Software Engineer with 3+ years’ experience delivering scalable, cloud-native enterprise applications for 10,000+ daily users. Specialized in Java, Spring Boot, React.js, and AWS, with deep expertise in microservices, REST APIs, and distributed systems. Recognized for optimizing CI/CD pipelines (50% faster deployments), reducing application latency (30%+), and designing robust, event-driven AWS systems for high-impact domains like fintech, ERP, and e-commerce.",
];

export const projects = [
	{
		title: "Peak Physique",
		description:
			"Engineered an end-to-end fitness management platform for 400+ active users across 3 organizations — achieved a 40% user engagement boost and 25% client retention via real-time tracking, integrated onboarding, and meal planning modules. Ensured 100% GDPR and HIPAA compliance with JWT authentication and RBAC. Enhanced backend with MySQL/Redis caching, reducing p95 page loads by 66% and cutting cloud costs 35%.",
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
			"Overhauled a legacy product catalog for 500+ enterprise users, achieving WCAG 2.1 AA accessibility and full mobile parity. Developed a design system package that reduced UI duplication by 35% and improved engineering velocity. Optimized Redux selectors and GraphQL fragments, enabling 20% faster render cycles.",
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
			"Modern, accessible portfolio site showcasing projects and technical depth. Built with React and Tailwind CSS for optimal performance and responsive UX.",
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
			"Previous iteration of my personal site, built using React and Tailwind CSS for UI and GitHub Pages for deployment.",
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
			"Robust full-stack issue management platform with RBAC and a scalable MySQL/Hibernate data layer.",
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
	"OAuth2",
	"JSON Web Tokens (JWT)",
];

export const certificates = [
	"Oracle Cloud Infrastructure Foundations Associate (2021)",
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
		"Portfolio of a Full Stack Software Engineer specializing in scalable, cloud-native, and distributed systems. Explore projects, skills, and achievements from a career focused on delivering high-impact software for enterprise outcomes.",
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
			"Engineered a reusable React & TypeScript component library adopted by two product teams, reducing frontend delivery times by 30% and saving $15,000/year.",
			"Optimized Redux state management and GraphQL batching, shaving off 200ms from render time and raising customer SAT from 78 to 93.",
			"Automated deployments using Jenkins and Docker CI/CD, halving pipeline times to 10 minutes with a 99.5% deployment success rate.",
			"Hardened Spring Boot endpoints with JWT, OAuth2, and RBAC, cutting post-release defects by 15%.",
			"Deployed Terraform modules for disposable EKS clusters (8-min spinup), saving 30 infra-hours/quarter.",
			"Added GitHub Dependabot scans and OWASP checks to the deployment pipeline.",
			"Migrated a nightly batch job to AWS Lambda (Python 3.11) triggered by CloudWatch Events, reducing infra cost by 40%.",
		],
	},
	{
		company: "Uber Technologies (via Accenture)",
		period: "Oct 2021 - Jul 2023",
		duration: "(1 year 10 months)",
		role: "Associate Software Developer",
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
			"Streamlined Oracle AP/AR workflows (8,000+ transactions/day), reducing manual work by 40% and improving month-end close times by 20%.",
			"Architected event-driven CDC to sync Oracle with AWS (DynamoDB, RDS), reducing data sync errors by 25% while supporting $2M+ monthly throughput.",
			"Built scalable React dashboards with GraphQL; improved page load by 37% (from 800ms to 500ms) for 200+ finance users.",
			"Mentored four junior engineers on best practices and code reviews within a six-person team.",
			"Automated CloudFormation stacks for S3 and IAM, boosting DevOps efficiency.",
		],
	},
	{
		company: "SMMUD Technologies Pvt Ltd",
		period: "Jul 2020 - Oct 2021",
		duration: "(1 year 3 months)",
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
			"Designed a cloud-native e-commerce platform serving 5,000+ B2B/B2C monthly transactions with real-time inventory sync.",
			"Led migration from a monolithic app to Node.js microservices and Next.js SSR, accelerating feature delivery by 25% and reducing deployment complexity by 40%.",
			"Enhanced PostgreSQL via composite indexes and partitioning, eliminating 60% of slow-query alerts (2.1s→850ms avg response).",
			"Introduced Kafka-based event bus for payment/order workflows, ensuring eventual consistency.",
			"Enforced SOC2 controls: encrypted PII with AWS KMS and rotated secrets with AWS Secrets Manager.",
		],
	},
];

export const educationHistory = [
	{
		institution: "Illinois Institute of Technology",
		degree: "Masters in Science, Information Technology",
		duration: "Aug 2023 - May 2025",
		location: "Chicago, IL, USA",
		courses: [
			"Object-Oriented Application Development (Java)",
			"Full Stack Web Development",
			"Android Application Development (Java)",
			"Open Source Programming",
			"Cloud Computing",
			"Service-Oriented Architecture",
			"Database Management Systems",
		],
	},
	{
		institution: "Visvesvaraya Technological University",
		degree: "Bachelor of Engineering in Computer Science",
		duration: "Aug 2017 - Jul 2021",
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
