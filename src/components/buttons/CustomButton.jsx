import { motion } from "framer-motion";
import React from "react";

const CustomButton = ({ label, onClick, svg }) => {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.5,
      },
    },
  };

  return (
    <motion.button
      variants={variants}
      initial="hidden"
      animate="visible"
      onClick={onClick}
      className="flex items-center justify-center gap-x-2 py-3 px-8 mt-4 w-full text-lg uppercase font-semibold text-white rounded-xl sm:mt-0 sm:w-auto transition-all duration-300"
      style={{
        background: "linear-gradient(135deg, rgba(0, 123, 255, 0.4), rgba(138, 43, 226, 0.4))",
        border: "1px solid rgba(255, 255, 255, 0.3)",
        backdropFilter: "blur(8px)",
        boxShadow: "0 6px 12px rgba(0, 123, 255, 0.3), 0 4px 10px rgba(138, 43, 226, 0.3)",
      }}
      whileHover={{
        scale: 1.05,
        boxShadow: "0 8px 16px rgba(0, 123, 255, 0.5), 0 6px 12px rgba(138, 43, 226, 0.5)",
      }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="truncate">{label}</span>
      {svg && <span className="text-xl">{svg}</span>}
    </motion.button>
  );
};

export default CustomButton;
