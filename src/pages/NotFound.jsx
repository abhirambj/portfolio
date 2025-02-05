import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { metadata } from "../utils";
import React from "react";

const NotFound = () => {
	return (
		<main>
			<Helmet>
				<meta charSet="utf-8" />
				<title>{metadata.title}</title>
				<link rel="canonical" href={metadata.pageUrl} />
				<meta name="description" content={metadata.description} />
				<meta property="og:title" content={metadata.title} />
				<meta
					property="og:description"
					content={metadata.description}
				/>
				<meta property="og:image" content={metadata.imageURL} />
				<meta property="og:url" content={metadata.pageUrl} />
				<meta property="og:type" content="website" />
			</Helmet>

			<div className="h-screen w-full flex flex-col justify-center items-center bg-primary text-primary-text">
				<h1 className="text-[10rem] font-extrabold tracking-widest">
					404
				</h1>

				<div className="bg-secondary px-2 text-sm rounded rotate-12 absolute">
					Page Not Found
				</div>

				<button className="mt-5">
					<Link
						to="/portfolio"
						className="relative inline-block text-sm font-semibold text-white group focus:outline-none focus:ring"
					>
						<span className="absolute inset-0 bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700 opacity-20 group-hover:opacity-40 transition-all duration-500 rounded-lg"></span>

						<span className="relative block px-8 py-3 bg-white/10 backdrop-blur-lg rounded-lg border border-white/20 text-white shadow-md group-hover:shadow-2xl group-hover:bg-white/20 transition-all duration-300 ease-in-out">
							Go Home
						</span>

						<span className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-white/60 transition-all duration-300"></span>
					</Link>
				</button>
			</div>
		</main>
	);
};

export default NotFound;
