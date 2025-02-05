import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { useLocation, NavLink } from "react-router-dom";
import React from "react";

const NavBar = () => {
	const [isScrolled, setIsScrolled] = useState(false);

	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const location = useLocation();

	const handleScroll = () => {
		setIsScrolled(window.scrollY > 20);
	};

	const handleMenuToggle = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	const closeMenuOnOutsideClick = (e) => {
		if (e.target.closest("nav") === null) {
			setIsMobileMenuOpen(false);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		window.addEventListener("click", closeMenuOnOutsideClick);
		return () => {
			window.removeEventListener("scroll", handleScroll);
			window.removeEventListener("click", closeMenuOnOutsideClick);
		};
	}, []);

	return (
		<motion.header
			animate={{ y: 0, opacity: 1 }}
			initial={{ y: -100, opacity: 0 }}
			className={`fixed top-1 w-2/3 transform -translate-x-1/2 rounded-lg z-50 transition-all duration-300 ${
				isScrolled
					? "bg-white bg-opacity-10 backdrop-blur-xl shadow-lg"
					: "bg-transparent"
			}`}
		>
			<nav className="max-w-screen-xl mx-auto px-4 md:px-8 py-4 flex justify-between items-center no-print">
				<ScrollLink
					to="home"
					className="flex gap-1 group text-white text-[1.3rem]"
				>
					<span className="font-bold group-hover:text-secondary text-white transition-colors duration-500">
						ABJ
					</span>
					<span className="w-2 h-2 rounded-full bg-secondary group-hover:bg-white transition-colors duration-500"></span>
				</ScrollLink>

				<button
					onClick={handleMenuToggle}
					className="md:hidden text-white focus:outline-none"
				>
					{isMobileMenuOpen ? (
						<svg
							className="w-8 h-8"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					) : (
						<svg
							className="w-8 h-8"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h16M4 18h16"
							/>
						</svg>
					)}
				</button>

				<ul
					className={`md:flex items-center space-x-6 ${
						isMobileMenuOpen
							? "flex-col absolute top-full left-0 w-full bg-gray-900 p-6"
							: "hidden"
					} md:static`}
				>
					{location.pathname === "/portfolio/" ? (
						[
							"Home",
							"About",
							"Skills",
							"Projects",
							"Blog",
							"Contact",
						].map((item, idx) => (
							<li key={idx} className="relative group">
								<ScrollLink
									to={item.toLowerCase()}
									smooth={true}
									duration={500}
									spy={true}
									offset={-50}
									activeClass="text-secondary"
									className="cursor-pointer relative flex items-center rounded-lg px-3 py-1 font-josefin-sans text-gray-300 hover:text-secondary transition-all duration-300"
									onClick={() => setIsMobileMenuOpen(false)}
								>
									<span className="relative z-10">
										{item}
									</span>
									<span className="absolute inset-0 rounded-lg bg-white bg-opacity-10 blur-md transition-opacity duration-300 opacity-0 group-hover:opacity-100"></span>
								</ScrollLink>
							</li>
						))
					) : (
						<li className="relative group">
							<NavLink
								to="/portfolio/"
								className="cursor-pointer relative flex items-center rounded-lg px-3 py-1 font-josefin-sans text-gray-300 hover:text-secondary transition-all duration-300"
								onClick={() => setIsMobileMenuOpen(false)}
							>
								<span className="relative z-10">Home</span>
								<span className="absolute inset-0 rounded-lg bg-white bg-opacity-10 blur-md transition-opacity duration-300 opacity-0 group-hover:opacity-100"></span>
							</NavLink>
						</li>
					)}
				</ul>
			</nav>
		</motion.header>
	);
};

export default NavBar;
