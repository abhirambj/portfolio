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
							Hey there! I&apos;m Abhiram — a&nbsp;
							<span className="font-semibold text-purple-400">
								Full-Stack Software Engineer
							</span>
							&nbsp;with a love for all things cloud, code, and
							caffeine.
						</p>
						<p className="mt-3 text-xl text-gray-300">
							Over the last 3+ years, I’ve shipped systems that
							make scale look easy. Whether I’m building snappy
							React UIs, tuning Java microservices so fast they
							practically teleport, or spinning up cloud infra
							that auto-heals like magic, I’m always looking for
							creative ways to turn ideas into robust,
							enterprise-ready apps.
						</p>
						<p className="mt-3 text-xl text-gray-300">
							I’ve leveled-up platforms for&nbsp;
							<span className="font-semibold text-purple-400">
								Agilant
							</span>
							&nbsp;and
							<span className="font-semibold text-indigo-400">
								Uber
							</span>
							, deploying solutions that cut wait times, boost
							team happiness, and keep users coming back for more.
							My favorite stack moves: Java, Spring Boot, React,
							AWS, Docker, GraphQL, and a healthy dose of animated
							GIFs in code reviews.
						</p>
						<p className="mt-3 text-xl text-gray-300">
							When I’m not chasing milliseconds or spinning up
							containers, you’ll catch me swapping dev memes,
							mentoring fellow engineers, or defending why tabs
							are superior to spaces (it’s science!). 🚀
						</p>
					</div>
				</motion.div>
				<div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
					{[
						{
							title: "10+ Projects",
							subtitle:
								"Enterprise-Scale, From Idea to Deployment 🚀",
						},
						{
							title: "3+ Years",
							subtitle:
								"Delivering Low-Latency, Cloud-Native Systems 🔁",
						},
						{
							title: "Tech Toolbox",
							subtitle:
								"Java, Spring Boot, React, AWS, Docker, GraphQL, Kubernetes",
						},
						{
							title: "Certifications",
							subtitle:
								"Oracle Cloud Infrastructure Foundations Associate 2021 🤖",
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
