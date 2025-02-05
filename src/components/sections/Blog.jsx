import SectionHeader from "../ui/SectionHeader";
import { articles } from "../../utils";
import ArticleCard from "../cards/ArticleCard";
import notFound from "../../assets/images/not_found.svg";
import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";

const Blog = () => {
	return (
		<section
			className="mt-8 p-8 max-w-4xl mx-auto md:px-8 relative overflow-hidden"
			id="blog"
		>
			<SectionHeader
				title={"Blog."}
				subtitle={
					"Exploring Ideas, Sharing Insights: The World of Tech Through My Lens"
				}
			/>
			<div className="flex justify-center items-center mt-8">
				{articles && articles.length > 0 ? (
					<div className="flex flex-wrap justify-center gap-8 px-7 md:px-0">
						{articles.map((article, idx) => (
							<div
								key={idx}
								className="transform transition-transform duration-300 ease-in-out hover:scale-105"
							>
								<ArticleCard article={article} />
							</div>
						))}
					</div>
				) : (
					<div className="flex flex-col items-center space-y-6 text-center">
						{/* Unique Message */}
						<div className="relative flex flex-col items-center">
							<img
								src={notFound}
								alt="No blogs found"
								className="h-80 w-80 mb-4"
							/>
							<h3 className="text-3xl font-bold text-gray-600 dark:text-gray-300">
								No Blogs Yet
							</h3>
							<p className="text-lg text-gray-500 dark:text-gray-400">
								Looks like I'm still crafting exciting articles
								for you! Check back soon for amazing content.
							</p>
						</div>
					</div>
				)}
			</div>
			<motion.div className="mt-12 w-full flex justify-center">
				<a
					href="https://medium.com/@abhiram.bj"
					target="_blank"
					rel="noopener noreferrer"
					className="flex flex-col items-center gap-2 p-2 text-secondary text-center transition-all transform hover:scale-105 hover:border-secondary hover:bg-opacity-10 hover:text-white cursor-pointer rounded-md"
				>
					<div className="flex items-center gap-2">
						<FaExternalLinkAlt size={24} />
						<span className="whitespace-normal font-semibold text-xs text-center">
							Explore More
						</span>
					</div>
				</a>
			</motion.div>
		</section>
	);
};

export default Blog;
