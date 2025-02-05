import React from "react";
import { motion } from "framer-motion";
import { FaPrint } from "react-icons/fa";
import '../../index.css';

const BottomBar = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed bottom-1 left-1/2 transform -translate-x-1/2 w-1/4 rounded-lg z-50 transition-all duration-300 bg-white bg-opacity-10 backdrop-blur-xl shadow-lg no-print">
      <nav className="max-w-screen-xl mx-auto px-4 md:px-8 py-4 flex justify-between items-center no-print">
        <div className="text-white font-semibold">Resume.pdf</div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handlePrint}
          className="flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-transparent hover:rounded-lg hover:border-2 hover:border-white/30 hover:backdrop-blur-md hover:bg-opacity-30 transition-all duration-300"
        >
          <FaPrint className="mr-2" />
          Print
        </motion.button>
      </nav>
    </div>
  );
};

export default BottomBar;
