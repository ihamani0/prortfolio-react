import React from 'react'
import PatternColumn from '../../ui/PatternColumn'
import { CodeXml, GraduationCap } from 'lucide-react'

function StateSecetion({t , theme , year_exp}) {
  return (
    <div className="w-full h-70 grid-cols-1 md:grid-cols-[7%_1fr_1fr_7%] grid  gap-y-0 md:gap-6 md:gap-x-4 lg:gap-8">
          <PatternColumn className="w-full not-md:hidden  " />
          {/* #####--------------------------------------------------------------------##### */}

          <div className="border-x border-b border-gray-950/15 dark:border-my-light/5  not-md:border-0 md:border-b-0 items-center flex justify-center my-5 md:my-0 ">
            <div className="w-full h-full flex flex-col items-center justify-center ">
              <CodeXml
                size={30}
                color={theme === "dark" ? "#f8f8f8" : "#364153"}
              />

              <p className=" text-sm  text-gray-700 dark:text-my-light  ">
                {t("experince")}
              </p>

              <div className="w-full flex flex-col justify-center items-center">
                <p className="block font-semibold text-lg md:text-2xl text-gray-700 dark:text-my-light">
                  {t("dev")}
                </p>
                <p className="block text-gray-700 dark:text-my-light">
                  {year_exp}+ {t("year")}
                </p>
              </div>
            </div>
          </div>
          {/* #####--------------------------------------------------------------------##### */}

          <div className="h-px md:hidden bg-gray-950/15 dark:bg-white/10"></div>

          {/* #####--------------------------------------------------------------------##### */}

          <div className="border-x border-b border-gray-950/15 dark:border-my-light/5  not-md:border-0 md:border-b-0 items-center flex justify-center my-5 md:my-0 ">
            <div className="w-full h-full flex flex-col items-center justify-center ">
              <GraduationCap
                size={30}
                color={theme === "dark" ? "#f8f8f8" : "#364153"}
              />
              {/* setTHem state managemtnt to check if the them dark or white */}

              <p className=" text-sm  text-gray-700 dark:text-my-light  ">
                {t("education")}
              </p>

              <div className="w-full flex flex-col justify-center items-center">
                <p className="block font-semibold  text-lg md:text-2xl text-gray-700 dark:text-my-light">
                  {t("univ")}
                </p>
                <p className="block text-gray-700 dark:text-my-light">
                  {t("master")}
                </p>
              </div>
            </div>
          </div>
          {/* #####--------------------------------------------------------------------##### */}

          <PatternColumn className="w-full not-md:hidden" />
        </div>
  )
}

export default StateSecetion