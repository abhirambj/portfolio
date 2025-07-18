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
			"Constructed an end-to-end fitness platform for 400+ users that lifted engagement 40% via integrated onboarding, workout, and meal-tracking modules. Achieved 100% compliance with GDPR and HIPAA by layering JWT auth and fine-grained RBAC. Cut p95 page load 3s through query tuning and Redis in-memory caching.",
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
			"Overhauled a legacy catalog for 500+ enterprise users, attaining WCAG 2.1 AA and 100% mobile parity. Assembled a design-system package that trimmed UI duplication 35% and lifted engineering throughput. Streamlined Redux selectors and GraphQL fragments, driving 20% faster render cycles.",
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
	"Redux",
	"Tailwind CSS",
	"Bootstrap",
	"Storybook",
	"GraphQL",
	"PostgresQL",
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
			"Built a React + TypeScript component library used by two internal teams, trimming average cycle time by 30% and saving $15k annually.",
			"Refactored Redux selectors and batched GraphQL queries, shaving 200 ms off median render time and raising CSAT from 78 → 93.",
			"Hardened Spring Boot endpoints with JWT, OAuth2, and role-based access, cutting post-release defects 15%.",
			"Helped automate CI/CD with Jenkins & Docker; cut deployment time from 20 min → 10 min.",
			"Deployed Terraform modules that spin up disposable EKS clusters in 8 min, saving 30 infra-hours per quarter.",
			"Added GitHub Dependabot scans and OWASP dependency checks to the pipeline.",
			"Migrated nightly batch job to AWS Lambda (Python 3.11) triggered by CloudWatch Events, cutting infra cost by 40%.",
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
			"Contributed to Oracle AP/AR workflow improvements that handle 8k daily transactions while reducing manual effort 40% and accelerating month-end close 20%.",
			"Built React dashboards backed by GraphQL, reducing page load from 800 ms → 500 ms.",
			"Synchronized Oracle ERP with AWS DynamoDB & RDS via event-driven CDC, slashing data-sync errors 25% and supporting $2M+ monthly throughput.",
			"Mentored four junior engineers (team of 6).",
			"Automated CloudFormation stacks for S3 bucket policies & IAM roles, complementing Terraform workflows.",
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
			"Shipped a cloud-native ordering platform serving 5k+ B2B/B2C transactions monthly with real-time inventory updates.",
			"Decomposed the monolith into Node.js microservices orchestrated by Next.js SSR, accelerating feature rollouts 25%.",
			"Added composite indexes and partition pruning PostgreSQL, cutting slow-query alerts by 60%.",
			"Introduced Kafka-based event bus for order and payment events, guaranteeing eventual consistency across services.",
			"Enforced SOC-2 controls: encrypted PII at rest with AWS KMS and rotated secrets via AWS Secrets Manager.",
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
