import portfolio from "../assets/images/portfolio-v1.png";
import image_portfolio from "../assets/images/image_portfolio.png";
import systemDesign from "../assets/images/system-design.png";
import lld from "../assets/images/lld.png";

export const headlines = [
	"Hi, I'm Abhiram.",
	"Full Stack Software Engineer.",
	"Full Stack Developer with 3+ years' experience building scalable, production-ready cloud systems using Java, Spring Boot, React, and AWS. Proven track record of optimizing microservices, elevating CI/CD, and delivering responsive, high-impact apps for 10,000+ users.",
];

export const projects = [
	{
		title: "Peak Physique – Fitness Management Application",
		description:
			"Built a cloud-native fitness management platform for 400+ users, increasing engagement by 40% and improving client retention by 25%. Achieved 100% GDPR and HIPAA compliance (JWT and RBAC). Engineered MySQL/Redis caching, reducing p95 page load times by 66% (from 6.2s to 2.1s) and lowering cloud infrastructure costs by 35%.",
		tags: [
			"Java",
			"Jakarta EE",
			"MySQL",
			"Redis",
			"JWT",
			"RBAC",
			"Caching",
		],
		linkGithub: "https://github.com/abhirambj/peak-physique",
	},
	{
		title: "TogaCommerce",
		description:
			"Overhauled an e-commerce product catalog for 500+ users, achieving WCAG 2.1 AA accessibility and full mobile parity. Developed a design system to reduce UI duplication by 35% and improve engineering velocity. Optimized Redux selectors and GraphQL fragments, enabling 20% faster render cycles.",
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
	"AWS EKS",
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
		period: "Jul 2024 – Sep 2024",
		duration: "(3 months)",
		role: "Full Stack Developer Intern",
		type: "Internship",
		location: "Naperville, IL, USA",
		technologies: [
			"React.js",
			"TypeScript",
			"Redux",
			"GraphQL",
			"Spring Boot",
			"Docker",
			"Jenkins",
			"Kubernetes",
			"GitHub Actions",
		],
		achievements: [
			"Designed, engineered, and deployed a reusable React + TypeScript component library, improving UI delivery speed by 30% and reducing code duplication for two engineering teams. Library adoption led to estimated annual savings of $15,000 in developer hours.",
			"Refactored critical Redux selector logic and implemented batched GraphQL queries, improving frontend render performance by 200ms per interaction and increasing overall system responsiveness.",
			"Drove customer experience improvements: average user satisfaction (CSAT) increased from 78 to 93, measured pre- and post-launch on analytics dashboards and user interviews.",
			"Automated end-to-end deployment with Jenkins, Docker, and GitHub Actions, cutting pipeline times in half (from 20 to 10 minutes per deployment) and achieving pipeline pass rates of 99.5%.",
			"Established production infrastructure using AWS EKS and Terraform, creating disposable, on-demand Kubernetes clusters spun up in 8 minutes—saving 30 engineer-hours per quarter previously lost to manual infra management.",
			"Enhanced backend API security: integrated JWT authentication, OAuth2 flows, and fine-grained RBAC across all Spring Boot microservices. Resulted in a 15% reduction in post-release security issues and minimized attack surface.",
			"Implemented DevSecOps best practices: added Dependabot and OWASP security checks into CI/CD to proactively catch and remediate vulnerabilities.",
			"Migrated legacy nightly batch workflows to fully serverless AWS Lambda (Python 3.11) with CloudWatch event triggers, reducing recurring infrastructure costs by 40% while improving reliability.",
			"Produced system-level architecture documentation, API specs, and onboarding guides for cross-team consumers, cutting ramp-up time for new devs and SREs by ~20%.",
			"Participated in daily standups, sprint reviews, technical backlog grooming, and cross-functional design sessions, delivering usable production code in every iteration.",
		],
	},
	{
		company: "Uber Technologies Inc (Via Accenture)",
		period: "Oct 2021 – Jul 2023",
		duration: "(1 year 10 months)",
		role: "Associate Software Developer – Consultant",
		type: "Full-time",
		location: "Bengaluru, India",
		technologies: [
			"Java",
			"Spring Boot",
			"React.js",
			"GraphQL",
			"JUnit",
			"Postman",
			"PL/SQL",
			"Redis",
			"DynamoDB",
			"Amazon RDS",
			"Oracle Cloud ERP",
			"RESTful APIs",
			"Jenkins",
			"Git",
		],
		achievements: [
			"Automated Oracle AP/AR workflows with Java/Spring Boot, eliminating ~40% of previously manual accounting tasks and handling over 8,000 transactions/day; reduced month-end closing times by 20%.",
			"Designed and shipped an event-driven Change Data Capture (CDC) architecture syncing Oracle ERP data to AWS (DynamoDB, RDS) via Kafka, handling >$2M/month in financial transactions and reducing sync errors by 25%.",
			"Developed and maintained frontend finance dashboards using React and GraphQL, reducing median page load time by 37% (from 800ms to 500ms) for 200+ business users.",
			"Built, tested, and supported RESTful APIs and GraphQL gateways for business-critical integrations between enterprise systems and AWS services.",
			"Mentored 4 junior engineers in software engineering best practices, code review, and test automation; boosted overall code quality and cut defect rates.",
			"Wrote, executed, and automated >200 unit and integration tests (JUnit, Postman); achieved >90% code coverage across key microservices.",
			"Provisioned and managed DevOps and cloud infrastructure using Jenkins, CloudFormation, and Terraform; streamlined S3/IAM provisioning and monitoring for secure, compliant deployments.",
			"Integrated Redis and PL/SQL tuning to optimize backend cache usage and real-time reporting APIs.",
			"Collaborated directly with US- and India-based teams for technical architecture reviews, quarterly roadmap planning, and SRE incident response.",
			"Produced onboarding guides, runbooks, and technical documentation for new features, reducing time-to-productivity and knowledge silos.",
		],
	},
	{
		company: "SMMUD Technologies Pvt Ltd",
		period: "Jul 2020 – Oct 2021",
		duration: "(1 year 3 months)",
		role: "Full Stack Developer",
		type: "Full-time",
		location: "Bengaluru, India",
		technologies: [
			"Node.js",
			"Next.js",
			"Express.js",
			"PostgreSQL",
			"Kafka",
			"MongoDB",
			"RESTful APIs",
			"Git",
		],
		achievements: [
			"Spearheaded launch and scaling of a high-volume, cloud-native e-commerce platform (Node.js, Next.js, PostgreSQL) serving 5,000+ B2B/B2C users/month with real-time inventory, multi-tenant onboarding, and payment integrations.",
			"Led major migration project: decomposed a monolithic PHP/JS system to modular Node.js/Next.js microservices, accelerating feature delivery by 25% and reducing deployment complexity by 40%.",
			"Optimized PostgreSQL backend by designing composite indexes and partitioned tables; reduced average API query latency from 2.1s to 850ms and eliminated 60% of slow-query alerts.",
			"Engineered a Kafka-based event bus for robust, distributed order and payment processing, greatly improving data consistency and error recovery during high-volume sales events.",
			"Established SOC2-compliant practices: implemented AWS KMS encryption for PII, AWS Secrets Manager for credential rotation, and full TLS for all APIs.",
			"Built automated testing suites and CI/CD pipelines, boosting deployment reliability and removing manual release bottlenecks.",
			"Produced full-stack documentation (API, schema, architecture) and onboarding materials, reducing onboarding time for new engineers by over 30%.",
			"Regularly collaborated with key business partners (product managers, security, ops) and participated in agile ceremonies (standups, retros, backlog refinement).",
			"Acted as primary technical contact for large clients during go-live periods, directly supporting integration and resolving production issues across components.",
			"Led developer knowledge sharing sessions and brown-bag tech talks on microservices, DB optimization, and event-driven architecture.",
		],
	},
];

export const educationHistory = [
	{
		institution: "Illinois Institute of Technology",
		degree: "Masters in Science, Information Technology",
		duration: "Aug 2023 – May 2025",
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
		degree: "Bachelor of Engineering, Computer Science",
		duration: "Aug 2017 – Jul 2021",
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
