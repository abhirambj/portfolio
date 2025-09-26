import portfolio from "../assets/images/portfolio-v1.png";
import image_portfolio from "../assets/images/image_portfolio.png";
import systemDesign from "../assets/images/system-design.png";
import lld from "../assets/images/lld.png";

export const headlines = [
	"Hey there, I'm Abhiram! 👋",
	"Full Stack Developer. Cloud Adventurer. AI Explorer.",
	"I build cool things with React, Java, AWS, Spring Boot & sprinkle in some ML magic. 3+ years making scalable apps, spinning up self-healing infra, and arguing for tabs over spaces—for SCIENCE.",
];

export const projects = [
	{
		title: "Peak Physique – Fitness Management Application",
		description:
			"Cloud-native platform for 400+ fitness buffs; boosted engagement by 40%, client retention by 25%. Hit 100% GDPR & HIPAA compliance, wrangled MySQL/Redis caching (p95 load times now 2.1s down from 6.2s!), shaved 35% off infrastructure bills. 🏋️‍♂️",
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
			"E-commerce catalog overhaul for 500+ users—100% mobile parity & WCAG 2.1 AA accessibility. Designed a system to banish UI duplication (down 35%) & made Redux/GraphQL so fast it practically teleports. 🚀",
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
			"The very site you're browsing! Modern, snappy, and unreasonably fun—React & Tailwind CSS. I keep it fresh by updating whenever I break something at 3am. 😁",
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
			"First portfolio—my playground for React & CSS tricks. Still proud of that spinning logo.",
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
			"Dev team chaos tamer—role-based access, scalable MySQL, Hibernate wizardry. Built for the SREs who love sleep.",
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
	"AWS EC2",
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
	"JWT",
	"TensorFlow",
	"PyTorch",
	"scikit-learn",
	"HuggingFace",
];

export const certificates = [
	"Oracle Cloud Infrastructure Foundations Associate (2021)",
];

export const articles = [
	{
		image: systemDesign,
		title: "System Design Primer",
		description:
			"Roadmap for designing systems that won’t catch on fire during Black Friday. Essential reading.",
		url: "https://github.com/abhirambj/system-design-primer?tab=readme-ov-file#system-design-topics-start-here",
	},
	{
		image: lld,
		title: "Low Level Design Primer",
		description:
			"How to move from spaghetti code to legendary design. Your next interview cheat sheet.",
		url: "https://github.com/ashishps1/awesome-low-level-design",
	},
];

export const metadata = {
	title: "Abhiram Bylahalli Jagadish",
	description:
		"Personal portfolio of a Full Stack Developer with a love for scalable software, cloud adventures, and a dash of ML experimentation. Explore my tech toolbox, fun projects, side quests, and code adventures.",
	imageURL:
		"https://avatars.githubusercontent.com/u/54413769?s=400&u=08698e1c29bb5f6894a7752691b35dee33b478ac&v=4",
	pageUrl: "https://abhirambj.github.io/portfolio/",
};

export const workExperiences = [
	{
		company: "One Community Global",
		period: "Sep 2025 – Present",
		duration: "(Current)",
		role: "Full Stack Developer",
		type: "Full-time",
		location: "Chicago, IL, USA",
		technologies: [
			"React.js",
			"NodeJS",
			"MongoDB",
			"AWS",
			"GraphQL",
			"OAuth2",
			"JWT",
			"Microservices",
		],
		achievements: [
			"Developed scalable full-stack features for community platforms (React, Node.js, MongoDB, AWS), boosting user engagement by 35% and enabling robust collaboration.",
			"Architected REST/GraphQL APIs with secure OAuth2/JWT and maintainable microservices—reduced authentication incidents by 20%.",
			"Enhanced backend data models, optimized queries, and improved system responsiveness—average API latency down by 40% and high-traffic modules now smile under load!",
		],
	},
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
			"Built UI component library in React + TypeScript—two teams loved it, delivery speed up 30%, less code ∴ more coffee breaks. $15K saved per year.",
			"Rewrote Redux logic & batched GraphQL like a mad scientist—UI now 200ms faster and users are smiling (CSAT: 78 → 93).",
			"Automated CI/CD (Jenkins, Docker, GitHub Actions), halved deployment time, pipeline pass rate: 99.5%.",
			"Survived a sprint retrospective with only one post-it lost.",
		],
	},
	{
		company: "Uber Technologies Inc (Via Accenture)",
		period: "Oct 2021 – Jul 2023",
		duration: "(1 yr 10 mos)",
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
			"Automated Oracle AP/AR workflows with Java/Spring Boot: handled 8,000+ txns/day; 40% less manual work, 20% faster closings. The accountants still send me thank you emails.",
			"Designed CDC architecture: ERP → AWS (DynamoDB, RDS, Kafka), shuffling $2M+/month; sync errors down 25%.",
			"Crafted React/GraphQL dashboards (200+ users): p95 page loads now 500ms down from 800ms—business folks very happy.",
			"Mentored 4 junior engineers—sent them memes, they became code quality machines.",
		],
	},
	{
		company: "SMMUD Technologies Pvt Ltd",
		period: "Jul 2020 – Oct 2021",
		duration: "(1 yr 3 mos)",
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
			"Launched e-commerce platform: real-time inventory, 5K+ users/month, payment magic, 30% more sales. Also survived two DDoS attempts.",
			"Led the great monolith → microservices migration: 25% faster feature delivery, 40% less deployment drama.",
			"Optimized PostgreSQL: 2.1s → 850ms API latency, 60% fewer slow queries. One DBA now owes me dinner.",
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
			"Java OOP & Full Stack Projects",
			"Android App Dev (with too much debugging)",
			"Cloud Computing (AWS & GCP side-quests)",
			"Service-Oriented Architecture",
			"Data, Databases, and Dark Magic (SQL)",
			"Machine Learning (where the AI fun began!)",
		],
	},
	{
		institution: "Visvesvaraya Technological University",
		degree: "Bachelor of Engineering, Computer Science",
		duration: "Aug 2017 – Jul 2021",
		location: "Belagavi, Karnataka, India",
		courses: [
			"Data Structures & Building Blocks",
			"Algorithms: The Meme Edition",
			"Operating Systems (and waking up at 2am for errant deadlocks)",
			"Software Engineering (do engineers ever sleep?)",
			"Networks & Web",
			"Intro to ML & Project Do-Overs",
		],
	},
];
