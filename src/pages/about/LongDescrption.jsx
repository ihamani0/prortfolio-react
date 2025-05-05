import { motion } from "motion/react";
import React from "react";

motion;
const LongDescrption = React.memo(({ t, desc }) => {
  return (
    <>
      <motion.div
        className="border-s-4 border-gray-950 dark:border-gray-300 px-4 py-6"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, x: -50 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
        <h1 className=" text-lg md:text-3xl lg:text-6xl font-semibold text-gray-900 dark:text-my-light">
          {t("Get_To_Know_More")}
        </h1>
      </motion.div>
      <motion.div
        className="my-4 px-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.3, ease: "easeOut" }}
      >
        <span className="text-sm md:text-base lg:text-lg text-gray-600 dark:text-gray-300 whitespace-pre-line   ">
          {desc}
        </span>
      </motion.div>
    </>
  );
});

export default LongDescrption;
