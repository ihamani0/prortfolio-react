/* eslint-disable no-unused-vars */
import React from "react";

import { motion } from "motion/react";
import { useThemeContext } from "../../hooks/useGlobalParam";

import { useTranslation } from "react-i18next";

const cardVariant = {
  offscreen: {
    opacity: 0,
    y: 50,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring", // Optional: Use a spring animation
      bounce: 0.4,
      duration: 0.8,
      // Or use a simpler ease:
      // ease: "easeOut",
      // duration: 0.5
    },
  },
};

const cardHoverVariants = {
  hover: {
    scale: 1.03,
    // Use dynamic shadow based on theme if needed
    // boxShadow: theme === 'dark' ? "..." : "..."
    // Or use CSS variable:
    boxShadow: `0 var(--card-shadow-intensity) var(--card-shadow-hover-color)`,
    transition: { duration: 0.2 },
  },
};

const TechGrid = React.memo(({ Teches }) => {
  const { i18n } = useTranslation();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
      {Teches.map((tech, index) => (
        <motion.div
          key={index}
          className=" bg-white border border-gray-200 rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700 transition-transform duration-300 ease-in-out  overflow-hidden "
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.3 }}
          whileHover={{
            scale: 1.03, // Scale up slightly
            boxShadow: "0 8px 25px var(--shadow-color)",
            transition: { duration: 0.2 }, // Make hover transition faster
          }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="flex flex-col items-center p-6 md:p-8">
            {" "}
            <motion.img
              className="w-16 h-16 mb-4 rounded-full shadow-md object-cover"
              src={tech.svg}
              alt="Profile image"
              whileHover={{ scale: 1.05 }}
            />
            <h5 className="mb-1 text-xl font-semibold text-gray-900 dark:text-white">
              {" "}
              {/* Increased font size and weight */}
              {tech.name}
            </h5>
            {/* Optional: Add a subtitle or role */}
            {/* <span className="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span> */}
            <div className="mt-4 text-center">
              <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                {" "}
                {/* Slightly larger text, adjusted leading */}
                {tech[`desc_${i18n.language}`]}
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
});

export default TechGrid;
