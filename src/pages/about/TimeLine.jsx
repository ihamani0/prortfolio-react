import { motion } from "motion/react";
import React from "react";
import PatternColumn from "../../ui/PatternColumn";
motion;
const TimeLine = React.memo(({ timeLine, currentLanguage }) => {
  return (
    <div className="w-full  grid-cols-1 lg:grid-cols-[17%_1fr_17%] grid  gap-y-0 md:gap-6 md:gap-x-4 lg:gap-8">
      <PatternColumn className="w-full not-lg:hidden  " />

      <motion.div className="flex justify-center items-center   mt-2">
        <ol className="relative border-s border-gray-200 dark:border-gray-700 px-4">
          {timeLine.map((item, index) => (
            <motion.li className="mb-10 ms-4" key={index}>
              <motion.div
                className="absolute w-3 h-3 bg-gray-400 rounded-full mt-1.5 -start-1.5 border border-gray-300 dark:border-gray-900 dark:bg-gray-700"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: false, amount: 0.2 }}
              ></motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: false, amount: 0.2 }}
              >
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  {item.year}
                </time>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {item[`title_${currentLanguage}`]}
                </h3>
                <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                  {item[`desc_${currentLanguage}`]}
                </p>
              </motion.div>
            </motion.li>
          ))}
        </ol>
      </motion.div>

      <PatternColumn className="w-full  not-lg:hidden" />
    </div>
  );
});

export default TimeLine;
