/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import ProjectCard from "./ProjectCard";
import PatternDots from "../../ui/PatternDots";
import { useTranslation } from "react-i18next";
import { motion } from "motion/react";
import { usePortfolio } from "../../hooks/usePortfolio";
import Spinner from "../../ui/Spinner";
import ErrorMessage from "../../components/ErrorMessage";
import EmptyState from "../../components/EmptyState";
import HeroSection from "./HeroSection";
import WorkTogether from "../../components/WorkTogether";

function Portfolio() {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const { data, isLoading, error } = usePortfolio(i18n.language);

  const desc = data?.[`desc_${currentLanguage}`] || "";

  const projects = data?.projects || [];

  useEffect(() => {
    document.title = "HAMANI || Portfolio";
  }, []);

  if (isLoading) return <Spinner />;
  if (error) return <ErrorMessage message={error?.message} />;
  // Add specific check for empty data if needed
  if (!data) return <EmptyState />;

  return (
    <div className="min-h-screen rtl:font-mada">
      <section className="flex flex-col">
        {/* ----------------Introduction---------------- */}

        <HeroSection t={t} desc={desc} />

        {/* -------------------------------- */}

        <div className="col-span-full col-start-2 row-start-2 h-px bg-gray-950/15 dark:bg-white/10"></div>

        <div className="my-15"></div>

        <div className="my-15"></div>

        {/* ----------------Card Of Portfolie---------------- */}

        <PatternDots>
          <div className="sm:max-w-xl md:max-w-5xl lg:max-w-5xl xl:max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 3xl:grid-cols-3  md:gap-x-15 gap-y-10 px-6 py-3">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </PatternDots>

        <div className="my-15"></div>

        <div className="col-span-full col-start-2 row-start-2 h-px bg-gray-950/15 dark:bg-white/10"></div>

        <WorkTogether t={t} />
      </section>
    </div>
  );
}

export default Portfolio;
