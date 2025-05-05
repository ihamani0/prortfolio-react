import { Star } from "lucide-react";
import React from "react";

import { useTranslation } from "react-i18next";

function ExperienceList({ experience }) {
  const {i18n} = useTranslation();
  const currentLanguage = i18n.language;
  // const { currentLanguage } = useLanguageContext();

  return (
    <div className="px-6 py-6 my-6 ">
      {/* title */}
      <div className="flex justify-between items-center ">
        <h3 className="text-xl md:text-2xl flex items-center font-semibold text-gray-700 dark:text-gray-200">
          <Star size={20} />{" "}
          <span className="ms-2">{experience[`title_${currentLanguage}`]}</span>
        </h3>
      </div>
      {/* paragraph */}
      <div className="px-6 py-4">
        <p className="text-base text-gray-600 dark:text-gray-200 whitespace-pre-line">
          {experience[`desc_${currentLanguage}`]}
        </p>
      </div>
    </div>
  );
}

export default ExperienceList;
