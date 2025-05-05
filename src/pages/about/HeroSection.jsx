import React from "react";
import PatternRow from "../../ui/PatternRow";

function HeroSection({ t, currentLanguage, data }) {
  const name = data?.[`name_${currentLanguage}`] || "";
  const desc = data?.[`short_desc_${currentLanguage}`] || "";
  return (
    <section className="h-screen flex items-center">
      <PatternRow className="mt-15 px-6 py-6 h-1/2">
        <div className="space-x-2">
          <span className="text-base md:text-lg text-gray-700 dark:text-gray-200">
            {t("welcomeMessage")}
          </span>
          <h1 className="text-3xl md:text-5xl font-semibold text-gray-900 dark:text-gray-200">
            {name}
          </h1>
          <p className="text-gray-700 dark:text-my-light  text-base md:text-xl md:w-1/2 mt-8">
            {desc}
          </p>
        </div>
      </PatternRow>
    </section>
  );
}

export default HeroSection;
