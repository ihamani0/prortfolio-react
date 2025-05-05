import React from "react";
import PatternColumn from "../../ui/PatternColumn";

function HeroSection({ t, desc }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[7%_1fr_7%] ">
      <PatternColumn className="" />
      <div className="text-center py-6 flex flex-col items-center space-y-3">
        <h1
          className="text-5xl md:text-6xl font-semibold text-gray-700 dark:text-gray-200 font-dancing-script rtl:font-mada 
             "
        >
          {t("my_portfolio")}
        </h1>
        <p className="text-sm md:text-base text-center text-gray-500 dark:text-gray-200 w-[70%] mt-5">
          {desc}
        </p>
      </div>
      <PatternColumn className="" />
    </div>
  );
}

export default HeroSection;
