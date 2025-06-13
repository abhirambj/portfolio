import portfolio from "../assets/images/portfolio-v1.png";
import image_portfolio from "../assets/images/image_portfolio.png";
import systemDesign from "../assets/images/system-design.png";

export const headlines = [
	"Hi, I'm Abhiram.",
	"Full Stack Developer.",
	"Full Stack Developer with 3+ years’ experience building scalable, cloud-native solutions in fintech, ERP, healthcare, and e-commerce. Specialized in Java, Spring Boot, React.js, and AWS, with expertise in designing microservices, optimizing REST APIs, and delivering robust, low-latency systems for 1K+ daily users.",
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
			"Architected a reusable UI component library, reducing development cycles by 30% and lowering costs across three flagship projects.",
			"Optimized state management and data integration with Redux and GraphQL, boosting responsiveness and decreasing user wait times by 20%.",
			"Implemented secure RESTful APIs and authentication in Spring Boot, minimizing post-release bug rates by 15% and cutting support costs.",
			"Automated CI/CD workflows with Jenkins, GitHub Actions, Docker, and Kubernetes, accelerating deployments and saving 8+ hours per sprint.",
			"Validated accessibility and mobile readiness via Storybook, achieving compatibility with 100% of user devices.",
		],
	},
	{
		company: "Uber Technologies Inc. (via Accenture)",
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
			"Developed and maintained backend modules in Java and Spring Boot, automating AP/AR for thousands of daily transactions and expediting month-end closes by 20%.",
			"Built and optimized dashboards and reporting tools with Angular and GraphQL, delivering near real-time financial insights.",
			"Integrated Oracle ERP with AWS DynamoDB/RDS, streamlining data pipelines and reducing sync errors by 25%.",
			"Refined CI/CD pipelines in Jenkins, ensuring reliable automated deployments and cutting environment sync issues by 15%.",
			"Collaborated with finance, data engineering, and QA teams to deliver critical features and resolve production incidents.",
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
			"Designed and launched a cloud-native ordering platform, enabling seamless product discovery, checkout, and inventory management for B2B/B2C clients.",
			"Engineered RESTful microservices with Node.js, Express.js, and Next.js for modular feature delivery and rapid prototyping.",
			"Structured scalable PostgreSQL schemas and asynchronous workflows, increasing transaction speed and reducing latency by 20%.",
			"Implemented Kafka-driven messaging for event processing and real-time sync with MongoDB change streams.",
			"Standardized API interfaces and automated health monitoring with PM2 and GitLab CI, minimizing downtime and enabling proactive response.",
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
