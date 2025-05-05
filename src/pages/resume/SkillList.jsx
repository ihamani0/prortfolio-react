import { Circle } from "lucide-react";
import React from "react";
import { useTranslation } from "react-i18next";
// import { useGlobalParam } from "../../hooks/useGlobalParam";

function SkillList({ skill }) {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;
  // const { currentLanguage } = useGlobalParam();

  return (
    <div className="px-6 py-6 my-3 border-b dark:border-gray-200/50  border-gray-900/50">
      {/* title */}
      <div className="flex justify-between items-center ">
        <h3 className="text-base md:text-lg flex items-center font-semibold text-gray-700 dark:text-gray-200">
          <Circle size={15} /> <span className="ms-2">{skill.title}</span>
        </h3>
      </div>
      {/* paragraph */}
      <div className="px-6 py-4">
        <p className="text-base text-gray-600 dark:text-gray-200">
          {skill[`desc_${currentLanguage}`]}
        </p>
      </div>
    </div>
  );
}

export default SkillList;
