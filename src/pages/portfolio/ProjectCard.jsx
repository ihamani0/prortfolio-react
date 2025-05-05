/* eslint-disable no-unused-vars */
import { motion } from "motion/react";
import React from "react";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";

function ProjectCard({ project }) {
  const { t } = useTranslation();

  return (
    <motion.div
      className=" bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 overflow-hidden"
      whileHover={{ scale: 1.05 }} // Scale up slightly on hover
      transition={{ duration: 0.1 }} // Smooth transition
    >
      {/* Image as Cover */}
      <motion.div
        className="relative h-64 w-full overflow-hidden rounded-t-lg"
        whileHover={{ scale: 0.95 }} // Zoom effect on hover
        transition={{ duration: 0.3 }}
      >
        <img
          className="absolute inset-0 w-full h-full object-cover"
          src={project.publicProjectUrl}
          alt="Project Cover"
        />
      </motion.div>

      {/* Content Section */}
      <div className="p-5">
        <h5 className="mb-2 text-2xl  break-words whitespace-normal font-bold tracking-tight text-gray-900 dark:text-white">
          {project.title}
        </h5>

        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"></p>

        <Link to={`/project/${project.id}/review`}>
          <motion.button
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-700 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800 cursor-pointer"
            whileTap={{ scale: 0.95 }} // Scale down slightly when clicked
          >
            {t("read_more")}
          </motion.button>
        </Link>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
