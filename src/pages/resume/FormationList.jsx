import React from "react";
// import { useGlobalParam } from "../../hooks/useGlobalParam";
import { Star } from "lucide-react";
import { useTranslation } from "react-i18next";

function FormationList({ formation }) {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  // const { currentLanguage } = useGlobalParam();

  return (
    <div className="px-6 py-6 my-6 ">
      {/* title */}
      <div className="flex justify-between items-center ">
        <h3 className="text-lg md:text-2xl flex items-center font-semibold text-gray-700 dark:text-gray-200">
          <Star size={20} />{" "}
          <span className="ms-2">{formation[`title_${currentLanguage}`]}</span>
        </h3>
        <h4 className="text-gray-800 dark:text-gray-200 text-sm md:text-base font-semibold    ">
          {formation[`location_${currentLanguage}`]}
        </h4>
        <h4 className="text-gray-800 dark:text-gray-200 border-s-2 border-s-gray-800 dark:border-s-gray-200 text-sm md:text-base ps-3">
          {formation.date_range}
        </h4>
      </div>
      {/* paragraph */}
      <div className="px-6 py-4">
        <p className="text-sm md:text-base text-gray-600 dark:text-gray-200">
          {formation[`desc_${currentLanguage}`]}
        </p>
      </div>
    </div>
  );
}

export default FormationList;
