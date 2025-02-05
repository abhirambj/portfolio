import React from "react";
import { motion } from "framer-motion";

const BumpyTextAnim = ({ text, className }) => {
  const characters = text.split("");

  const variants = {
    initial: { opacity: 0, x: -10, filter: "blur(5px)" },
    animate: (index) => ({
      opacity: 1,
      x: 0,
      filter: "blur(0)",
      transition: {
        delay: index * 0.1,
        duration: 0.5,
      },
    }),
    hover: {
      scale: 1.1,
      color: "#6366f1",
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.div
      className={`inline-flex ${className}`}
      style={{ display: "inline-flex", gap: "0.05rem" }}
    >
      {characters.map((char, index) => (
        <motion.span
          key={index}
          className="inline-block"
          custom={index}
          initial="initial"
          animate="animate"
          whileHover="hover"
          variants={variants}
          style={{
            marginRight: char === " " ? "0.3rem" : "0",
          }}
        >
          {char}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default BumpyTextAnim;
