/* eslint-disable no-unused-vars */

import { motion } from "motion/react";
import React from "react";

function Button({ children, className = "" }) {
  const baseStyle =
    "relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-gray-600 to-slate-300 group-hover:from-gray-600 group-hover:to-slate-500 hover:text-white dark:text-white dark:from-gray-800 dark:to-gray-700 dark:group-hover:from-gray-700 dark:group-hover:to-gray-600 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:focus:ring-gray-800 cursor-pointer";

  return (
    <motion.button
      className={`${baseStyle}  ${className} `}
      whileHover={{
        scale: 1.05, // Slightly enlarge the button on hover
      }}
      whileTap={{
        scale: 0.95, // Shrink the button slightly on tap
      }}
      initial={{ opacity: 0, y: -20 }} // Initial state (off-screen)
      animate={{ opacity: 1, y: 0 }} // Animate into view
      transition={{ type: "spring", stiffness: 300, damping: 20 }} // Smooth spring animation
    >
      <span className="relative flex px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
        {children}
      </span>
    </motion.button>
  );
}

export default Button;
