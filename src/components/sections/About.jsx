import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionHeader from "../ui/SectionHeader";
import React from "react";
import profile from "../../assets/images/image.png";

export const About = () => {
	const control = useAnimation();
	const [ref, inView] = useInView();

	useEffect(() => {
		if (inView) {
			control.start("visible");
		} else {
			control.start("hidden");
		}
	}, [control, inView]);

	return (
		<section className="relative text-white py-20" id="about">
			<div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-16 text-center">
				<SectionHeader
					title="About Me."
					subtitle="In Pursuit of Excellence: My Personal Odyssey"
				/>
				<motion.div
					ref={ref}
					initial="hidden"
					animate={control}
					variants={{
						hidden: { opacity: 0, y: 30 },
						visible: {
							opacity: 1,
							y: 0,
							transition: { duration: 0.8 },
						},
					}}
					className="mt-8 flex flex-col lg:flex-row items-center justify-center gap-16"
				>
					<motion.div
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{
							opacity: 1,
							scale: 1,
							transition: { duration: 1 },
						}}
						className="relative flex-shrink-0"
					>
						<div className="p-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full">
							<img
								src={profile}
								alt="Profile"
								className="rounded-full h-48 w-48 border-4 border-gray-700 shadow-lg hover:scale-105 transition-transform duration-300"
							/>
						</div>
						<motion.div
							className="absolute top-0 -left-8 w-16 h-16 bg-indigo-500 rounded-full filter blur-xl opacity-20"
							animate={{
								scale: [1, 1.2, 1],
								rotate: [0, 360, 0],
							}}
							transition={{ duration: 10, repeat: Infinity }}
						></motion.div>
					</motion.div>

					<div className="text-center lg:text-left max-w-lg">
						<p className="mt-4 text-xl text-gray-300 leading-relaxed">
							Hi! I'm Abhiram — your friendly neighborhood{" "}
							<span className="font-semibold text-purple-400">
								Full Stack Developer
							</span>
							. I architect and deliver scalable, cloud-native,
							and distributed systems with a focus on
							backend-first full stack development.
						</p>
						<p className="mt-3 text-xl text-gray-400">
							With 3+ years of experience at{" "}
							<span className="font-semibold text-indigo-400">
								Uber
							</span>{" "}
							and{" "}
							<span className="font-semibold text-purple-400">
								Agilant
							</span>
							, I specialize in building low-latency APIs, robust
							microservices, and high-performance UIs for fintech,
							ERP, and enterprise platforms. My toolkit includes
							Java, Spring Boot, React, Node.js, GraphQL, Docker,
							Kubernetes, and AWS.
						</p>
						<p className="mt-3 text-xl text-gray-400">
							When I’m not optimizing system reliability or
							automating CI/CD pipelines, you’ll find me
							experimenting with distributed architectures,
							deploying containerized workloads, or debating tabs
							vs. spaces (team tabs, obviously).
						</p>
					</div>
				</motion.div>

				<div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
					{[
						{
							title: "8+ Projects",
							subtitle:
								"From Cloud-Native to Production-Ready ☁️🚀",
						},
						{
							title: "3+ Years",
							subtitle:
								"Building APIs, Distributed Systems, CI/CD 🔁",
						},
						{
							title: "Tech Stack",
							subtitle:
								"Java, Spring Boot, React, AWS, Docker, GraphQL, Kubernetes",
						},
						{
							title: "Certifications",
							subtitle: "Oracle Cloud Certified Associate 🤖",
						},
					].map((item, index) => (
						<motion.div
							key={index}
							className="p-6 bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center text-center"
							initial="hidden"
							animate="visible"
							whileHover={{ scale: 1.1 }}
						>
							<div className="text-center">
								<h3 className="text-xl font-bold text-indigo-300">
									{item.title}
								</h3>
								<p className="text-gray-300 mt-2">
									{item.subtitle}
								</p>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default About;
