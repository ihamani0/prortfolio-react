/* eslint-disable no-unused-vars */
import { motion } from "motion/react";
import React from "react";

const TitleTechGrid = React.memo(({ title }) => {
  return (
    <motion.div
      className="relative ms-4 ps-2 mt-4 overflow-hidden h-15"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        type: "spring",
        stiffness: 120,
        damping: 20,
      }}
    >
      <motion.h1
        drag
        dragConstraints={{ top: -5, right: -20, left: -10, bottom: -30 }}
        dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
        dragElastic={0.5}
        whileHover={{
          cursor: "grab",
          scale: 1.05,
          rotate: 2,
          transition: { duration: 0.2 },
        }}
        whileTap={{
          cursor: "grabbing",
          scale: 0.95,
          rotate: -2,
        }}
        className="relative font-bold text-transparent bg-clip-text bg-gradient-to-r dark:from-gray-100 dark:to-gray-700  from-gray-700 to-gray-500
               text-xl md:text-3xl lg:text-4xl w-fit"
      >
        {title}
      </motion.h1>

      {/* Floating particles effect */}
      {[...Array(5)].map((_, i) => (
        <motion.span
          key={i}
          className="absolute w-3 h-3 rounded-full bg-blue-300/30 dark:bg-gray-300/30"
          animate={{
            x: [0, Math.random() * 200 - 100],
            y: [0, Math.random() * 200 - 100],
            opacity: [1, 0],
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            repeatType: "loop",
          }}
        />
      ))}
    </motion.div>
  );
});

export default TitleTechGrid;
