import { motion } from "framer-motion";
import { Divider } from "@mui/joy";
import React from "react";

const AnimatedDivider = () => {
  return (
    <motion.div
      className="relative my-8"
      initial={{ opacity: 0, width: 0 }}
      animate={{ opacity: 0.5, width: "100%" }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <Divider
        sx={{
          backgroundColor: "#808ea3",
          height: "1px",
          borderRadius: "1px",
        }}
      />
    </motion.div>
  );
};

export default AnimatedDivider;
