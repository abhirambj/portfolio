import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React from "react";

const StackSkills = ({ title, icon, list, sectionTitle }) => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 * i },
    }),
  };

  const staggerVariants = {
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: -10,
      y: 10,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100,
      },
    },
  };

  return (
    <div className="pb-12" ref={ref}>
      <h4 className="text-2xl font-semibold pb-4 text-primary-text flex gap-2 items-center text-center md:text-left">
        <span className="text-3xl">{icon}</span> {sectionTitle || title}
      </h4>

      <motion.div
        variants={container}
        initial="hidden"
        animate={control}
        className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-8 sm:gap-10"
      >
        {list.map((item, idx) => (
          <motion.div
            variants={staggerVariants}
            animate={control}
            key={idx}
            className="py-4 px-8 text-base bg-gray-700 rounded-xl text-white text-center transition-all transform hover:scale-105 hover:shadow-xl hover:bg-indigo-600 cursor-pointer"
          >
            <div className="whitespace-normal font-semibold text-lg">
              {item}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default StackSkills;
