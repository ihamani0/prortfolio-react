/* eslint-disable no-unused-vars */
import React from "react";
import PatternRow from "../ui/PatternRow";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";

function WorkTogether({ t }) {
  return (
    <div className=" flex flex-col md:flex-row ps-4  ">
      <div className="py-4">
        <h1
          className="text-3xl md:text-4xl lg:text-7xl font-semibold font-dancing-script
             bg-clip-text text-transparent
             bg-gradient-to-r dark:from-gray-500 dark:via-gray-200 dark:to-gray-50
             from-gray-900 via-gray-700 to-gray-500 rtl:font-mada
             "
        >
          {t("Work_Together")}
        </h1>
      </div>
      <div className="flex flex-col justify-between w-full gap-y-10 border-s-2 border-s-gray-950/15 dark:border-s-white/10">
        <PatternRow className="h-20" />
        <PatternRow className=" p-4 ">
          <Link to="/contact">
            <motion.button
              className="flex items-center px-2 py-3 md:px-3 rounded-lg text-gray-50 dark:text-my-light bg-gray-700  hover:bg-gray-800 dark:hover:bg-gray-800 transition-all duration-200 cursor-pointer"
              whileHover={{ scale: 0.95, transition: { duration: 0.3 } }}
            >
              <ArrowLeft />
              <span className="font-base font-semibold">
                {t("Work_Together_btn")}
              </span>
            </motion.button>
          </Link>
        </PatternRow>
      </div>
    </div>
  );
}

export default WorkTogether;
