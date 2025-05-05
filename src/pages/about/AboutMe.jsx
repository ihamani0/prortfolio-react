/* eslint-disable no-unused-vars */

import PatternRow from "../../ui/PatternRow";

import { useThemeContext } from "../../hooks/useGlobalParam";
import { useTranslation } from "react-i18next";
import { motion } from "motion/react";

import LongDescrption from "./LongDescrption";
import TimeLine from "./TimeLine";

import { useAboutMe } from "../../hooks/useAboutMe";
import Spinner from "../../ui/Spinner";
import { useMemo } from "react";
import HeroSection from "./HeroSection";
import ErrorMessage from "../../components/ErrorMessage";
import EmptyState from "../../components/EmptyState";
import BackgroundDeco from "../../ui/BackgroundDeco";
import TechSection from "./TechSEction";
import StateSecetion from "./StateSecetion";
import WorkTogether from "../../components/workTogether";

function AboutMe() {
  const { theme } = useThemeContext();

  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const { data, isLoading, error } = useAboutMe(i18n.language);

  const techGroups = useMemo(() => {
    const groups = ["frontend", "backend", "database", "other"];

    return groups.reduce((acc, category) => {
      acc[category] = data?.tech?.filter((t) => t.category === category) || [];
      return acc;
    }, {});
  }, [data?.tech]);


  
  if (isLoading) return <Spinner />;
  if (error) return <ErrorMessage message={error?.message} />;
  // Add specific check for empty data if needed
  if (!data) return <EmptyState />;

  return (
    <div className="min-h-screen relative rtl:font-mada">
      <BackgroundDeco />

      <section className="flex flex-col">
        {/* <PatternRow className="hidden md:block h-15 " ></PatternRow> */}

        {/* --------------------------------------------------------------------------------- */}

        {/* -----------HERO---------------------------------------------------------------------- */}

        <HeroSection t={t} data={data} currentLanguage={currentLanguage} />

        {/* --------------------------------------------------------------------------------- */}

        <div className="col-span-full col-start-2 row-start-2 h-px bg-gray-950/15 dark:bg-white/10"></div>

        {/* --------------------------------------------------------------------------------- */}

        <StateSecetion t={t} theme={theme} year_exp={data["year_exp"]} />

        {/* #####--------------------------------------------------------------------##### */}

        <div className="col-span-full col-start-2 row-start-2 h-px bg-gray-950/15 dark:bg-white/10"></div>

        {/* --------------------------------------------------------------------------------- */}

        <div className="my-15"></div>

        {/* --------------------------------------------------------------------------------- */}

        {/* Descrption of Me Now  */}

        <PatternRow className="mt-15 px-2">
          <LongDescrption t={t} desc={data[`long_desc_${currentLanguage}`]} />
        </PatternRow>

        {/* #####--------------------------------------------------------------------##### */}

        {/* ---------------------TimeLine------------------------------------------------------------ */}

        <TimeLine timeLine={data.timeline} currentLanguage={currentLanguage} />

        {/* #####--------------------------------------------------------------------##### */}

        {/* --------------------------------------------------------------------------------- */}

        {/* --------------------------------------------------------------------------------- */}

        <div className="col-span-full col-start-2 row-start-2 h-px bg-gray-950/15 dark:bg-white/10"></div>

        {/* ----------------------Tech TITLE ----------------------------------------------------------- */}
        <div className="border-s-4 dark:border-gray-100 h-10 lg:h-25  border-gray-800 flex items-center ps-4 ">
          <div className="">
            <h1 className="font-semibold text-lg md:text-3xl lg:text-6xl text-gray-800 dark:text-gray-100 me-3">
              {t("technologies")}
            </h1>
          </div>
          <PatternRow className="h-full border-s-2 border-s-gray-900 dark:border-s-gray-200 " />
        </div>

        {/* --------------------------------------------------------------------------------- */}
        <div className="col-span-full col-start-2 row-start-2 h-px bg-gray-950/15 dark:bg-white/10"></div>

        {/* ------------------------------Card--------------------------------------------------- */}

        <TechSection techGroups={techGroups} t={t} />

        {/* --------------------------------------------------------------------------------- */}

        <div className="my-15"></div>
        {/* --------------------------------------------------------------------------------- */}

        <div className="col-span-full col-start-2 row-start-2 h-px bg-gray-950/15 dark:bg-white/10"></div>

        {/* --------------------------------------------------------------------------------- */}

        <WorkTogether t={t} />
      </section>
    </div>
  );
}

export default AboutMe;
