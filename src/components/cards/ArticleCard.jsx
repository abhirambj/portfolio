import { useRef } from "react";
import { DirectionAwareHover } from "../ui/DirectionAwareHover";
import { motion, useScroll, useTransform } from "framer-motion";
import React from "react";

const ArticleCard = ({ article }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="relative flex flex-col mt-2 text-primary-text bg-white/10 border border-white/20 shadow-md rounded-xl w-72 mb-3 backdrop-filter backdrop-blur-md bg-opacity-30"
    >
      <div className="relative h-56 mx-4 -mt-6 overflow-hidden shadow-lg rounded-xl shadow-blue-gray-500/40">
        <DirectionAwareHover imageUrl={article.image} />
      </div>
      <div className="p-6 flex flex-col justify-between h-full">
        <div>
          <a href={article.url} target="_blank" rel="noopener noreferrer">
            <h5 className="block mb-2 text-xl font-semibold text-primary-text hover:underline hover:text-secondary">
              {article.title}
            </h5>
          </a>
          <p className="block text-base text-secondary-text">
            {article.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default ArticleCard;
