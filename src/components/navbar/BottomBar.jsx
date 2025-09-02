import React from "react";
import { motion } from "framer-motion";
import { FaPrint, FaEye } from "react-icons/fa";
import "../../index.css";

const BottomBar = () => {
	const handlePrint = () => {
		window.print();
	};

	const handleView = () => {
		window.open(
			"https://drive.google.com/file/d/1zs40ZjiUz84263NEPWZnyvCDQmpY8bYT/view?usp=sharing",
			"_blank"
		);
	};

	return (
		<div className="fixed bottom-1 left-1/2 transform -translate-x-1/2 w-1/4 rounded-lg z-50 transition-all duration-300 bg-white bg-opacity-10 backdrop-blur-xl shadow-lg no-print">
			<nav className="max-w-screen-xl mx-auto px-4 md:px-8 py-4 flex justify-between items-center no-print">
				<div className="text-white font-semibold">Resume.pdf</div>
				<div className="flex gap-3">
					<motion.button
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						onClick={handleView}
						className="flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-transparent hover:rounded-lg hover:border-2 hover:border-white/30 hover:backdrop-blur-md hover:bg-opacity-30 transition-all duration-300"
					>
						<FaEye className="mr-2" />
						View
					</motion.button>
					<motion.button
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						onClick={handlePrint}
						className="flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-transparent hover:rounded-lg hover:border-2 hover:border-white/30 hover:backdrop-blur-md hover:bg-opacity-30 transition-all duration-300"
					>
						<FaPrint className="mr-2" />
						Print
					</motion.button>
				</div>
			</nav>
		</div>
	);
};

export default BottomBar;
