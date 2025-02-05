import CustomButton from "../buttons/CustomButton";
import NavBar from "../navbar/NavBar";
import { motion } from "framer-motion";
import { headlines } from "../../utils";
import { SocialMediaIcons } from "../ui/SocialMediaIcons";
import AnimatedSubtitle from "../text anim/AnimatedSubtitle";
import AnimatedTitle from "../text anim/AnimatedTitle";
import { animateScroll } from "react-scroll";
import React from "react";

const Hero = () => {
	const scrollToContact = () => {
		animateScroll.scrollToBottom();
	};

	return (
		<div className="bg-primary bg-grid-small-white/[0.2]" id="home">
			<div className="mt-16 grid place-items-center w-full">
				<NavBar />
			</div>
			<section>
				<div className="relative z-10 max-w-screen-xl mx-auto px-4 py-28 md:px-8">
					{/* Social Icon */}
					<SocialMediaIcons />

					{/* Info Div */}
					<div className="space-y-2 max-w-4xl mx-auto">
						<div className="flex justify-between items-center">
							<div>
								<AnimatedTitle
									text={headlines[0]}
									className="text-4xl font-extrabold mx-auto md:text-5xl text-primary-text"
									color={true}
								/>

								<AnimatedSubtitle
									text={headlines[1]}
									className="text-secondary text-2xl md:text-3xl mx-auto font-bold break-words"
								/>
							</div>
						</div>

						<motion.p
							initial={{ opacity: 0, y: 20 }}
							animate={{
								opacity: 1,
								y: 0,
								transition: {
									delay: 0.6,
								},
							}}
							className="text-white text-xl pb-4"
						>
							{headlines[2]}
						</motion.p>

						<div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
							<CustomButton
								label={"Get in Touch"}
								onClick={scrollToContact}
								svg={
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 20 20"
										fill="currentColor"
										className="w-5 h-5"
									>
										<path
											fillRule="evenodd"
											d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z"
											clipRule="evenodd"
										/>
									</svg>
								}
								style={{
									background:
										"linear-gradient(135deg, rgba(0, 255, 123, 0.3), rgba(0, 233, 233, 0.4))",
									boxShadow:
										"0 6px 12px rgba(0, 255, 123, 0.3), 0 4px 10px rgba(0, 233, 233, 0.3)",
									"&:hover": {
										background:
											"linear-gradient(135deg, rgba(0, 255, 123, 0.5), rgba(0, 233, 233, 0.6))",
									},
								}}
							/>

							<CustomButton
								label={"Resume"}
								onClick={() => {
									window.location.href = "/resume";
								}}
								svg={
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 20 20"
										fill="currentColor"
										className="w-5 h-5"
									>
										<path
											fillRule="evenodd"
											d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z"
											clipRule="evenodd"
										/>
									</svg>
								}
								style={{
									background:
										"linear-gradient(135deg, rgba(138, 43, 226, 0.3), rgba(232, 121, 249, 0.4))",
									boxShadow:
										"0 6px 12px rgba(138, 43, 226, 0.3), 0 4px 10px rgba(232, 121, 249, 0.3)",
									"&:hover": {
										background:
											"linear-gradient(135deg, rgba(138, 43, 226, 0.5), rgba(232, 121, 249, 0.6))",
									},
								}}
							/>
						</div>
					</div>
				</div>

				<div
					className="absolute inset-0 ml-36 mt-44 max-w-xs h-[357px] blur-[118px] sm:max-w-md md:max-w-lg"
					style={{
						background:
							"linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)",
					}}
				></div>
			</section>
		</div>
	);
};

export default Hero;
