/* eslint-disable no-unused-vars */
import React from "react";
import PatternColumn from "../../ui/PatternColumn";
import PatternRow from "../../ui/PatternRow";

import { useTranslation } from "react-i18next";
import {
  ArrowLeft,
  Circle,
  Facebook,
  FileText,
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { useDataContext } from "../../hooks/useGlobalParam";
import { motion } from "motion/react";
import ExperienceList from "./ExperienceList";
import SkillList from "./SkillList";
import FormationList from "./FormationList";
import { Link } from "react-router-dom";
import { useResume } from "../../hooks/useResume";
import Spinner from "../../ui/Spinner";

function Resume() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  const { resumePage } = useDataContext();

  const { data, isLoading, error } = useResume(currentLang);

  // Destructure only when `data` exists
  const name = data?.[`name_${currentLang}`] || "";
  const stack = data?.[`stack_${currentLang}`] || "";
  const resume = data?.resume || [];
  const contact = data?.contact || [];

  const socialMedia = Array.isArray(resume.social_media_links)
    ? resume.social_media_links[0]
    : resume.social_media_links;

  console.log("--- resume ---:", resume);

  if (isLoading) return <Spinner />;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="min-h-screen rtl:font-mada">
      <section className="flex flex-col ">
        {/* ---Resume Section */}
        <div className="my-15"></div>

        <div className="min-h-[70vh] ">
          <div className="col-span-full col-start-2 row-start-2 h-px bg-gray-950/15 dark:bg-white/10"></div>

          {/* ----------------Introduction---------------- */}
          <div className="grid grid-cols-1 md:grid-cols-[7%_1fr_7%] ">
            <PatternColumn className="" />
            <div className="text-center py-6 flex flex-col items-center space-y-3">
              <h1 className="text-5xl md:text-6xl font-semibold text-gray-700 dark:text-gray-200 font-dancing-script rtl:font-mada ">
                {t("Resume")}
              </h1>
              <p className="text-sm md:text-base text-center text-gray-500 dark:text-gray-200 w-[70%] mt-5 rtl:font-mada ">
                {t("desc_resume")}
              </p>
            </div>
            <PatternColumn className="" />
          </div>
          <div className="col-span-full col-start-2 row-start-2 h-px bg-gray-950/15 dark:bg-white/10"></div>

          {/* ----------------Introduction---------------- */}
        </div>

        {/* -----------Me Section------------------------ */}

        <div className="my-15"></div>

        <PatternRow className="h-full py-2">
          <div className="flex flex-col md:flex-row md:items-center ps-1">
            <div className="ps-4 py-6 w-3/4 flex flex-col space-y-3">
              <h1
                className="text-4xl lg:text-7xl font-semibold
                bg-clip-text text-transparent
                bg-gradient-to-r dark:from-gray-200 dark:to-gray-600
                from-gray-900 to-gray-400 md:w-1/2"
              >
                {name}
              </h1>
            </div>

            <div className="border-s-2 border-s-gray-700 dark:border-s-gray-200 h-full p-6 ">
              <ul className="text-gray-700 dark:text-gray-200 space-y-3">
                <li className="flex">
                  <Phone size={20} />{" "}
                  <span className="ms-2 text-sm md:text-base">
                    {contact.phone}
                  </span>
                </li>
                <li className="flex">
                  <Mail size={20} />{" "}
                  <span className="ms-2 text-sm md:text-base">
                    {contact.email}
                  </span>
                </li>
                <li className="flex">
                  <MapPin size={20} />{" "}
                  <span className="ms-2 text-sm md:text-base">
                    {contact.location}
                  </span>
                </li>

                <li className="flex">
                  <Github size={20} />{" "}
                  <span className="ms-2 text-sm md:text-base">
                    <a href={socialMedia.github}>Github</a>
                  </span>
                </li>

                <li className="flex">
                  <Linkedin size={20} />{" "}
                  <span className="ms-2 text-sm md:text-base">
                    <a href={socialMedia.linkidin}>LinkidIn</a>
                  </span>
                </li>
                <li className="flex">
                  <Facebook size={20} />{" "}
                  <span className="ms-2 text-sm md:text-base">
                    <a href={socialMedia.facebook}>FaceBook</a>
                  </span>
                </li>
                <li className="flex">
                  <Instagram size={20} />{" "}
                  <span className="ms-2 text-sm md:text-base">
                    <a href={socialMedia.instagram}>Instagram</a>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </PatternRow>

        <div className="my-15"></div>

        <div className="col-span-full col-start-2 row-start-2 h-px bg-gray-950/15 dark:bg-white/10"></div>

        {/* -----------My Picter  Section------------------------ */}

        <div className="flex">
          <div
            className="border-x border-b border-gray-950/15 dark:border-my-light/5  not-md:border-0 md:border-b-0 p-4 w-full
            flex justify-center items-center
          "
          >
            <motion.img
              className="w-30 h-30 md:w-64 md:h-64 rounded-full ring-4 ring-gray-300/50 dark:ring-gray-600/50 object-cover shadow"
              src={resume.profile_url}
              alt="Avatar"
              whileHover={{
                scale: 0.95,
                transition: { duration: 0.3 },
                cursor: "none",
              }}
            />
          </div>
          <PatternRow className="border-s-2 border-s-gray-300/50 dark:border-s-gray-600/50 p-4 ">
            <h1
              className="text-2xl md:text-4xl lg:text-7xl font-semibold
                bg-clip-text text-transparent
                bg-gradient-to-r dark:from-gray-200 dark:to-gray-600
                from-gray-900 to-gray-400 "
            >
              {stack}
            </h1>
          </PatternRow>
        </div>

        <div className="my-15"></div>
        {/* -----------My Formation  Section------------------------ */}

        <PatternRow>
          <div className="flex flex-col ps-4 py-6">
            <h1 className="border-s-3 border-s-gray-700 dark:border-s-gray-200 text-5xl text-gray-700 dark:text-gray-200 ps-2 font-semibold">
              {t("formation")}
            </h1>

            {resume.formation.map((formation, index) => (
              <FormationList formation={formation} key={index} />
            ))}
          </div>
        </PatternRow>

        {/* -----------My Expreince  Section------------------------ */}

        <div className="my-15"></div>

        {/*-------- Expreince-------- */}

        <div className="flex">
          <div
            className="border-x border-b border-gray-950/15 dark:border-my-light/5  not-md:border-0 md:border-b-0 p-4 w-full
            flex justify-center items-center
          "
          >
            <h1
              className="text-xl md:text-6xl font-semibold  bg-clip-text text-transparent
                bg-gradient-to-r dark:from-gray-200 dark:to-gray-600
                from-gray-900 to-gray-400 border-s-4 border-s-gray-700 dark:border-s-gray-200   px-4 py-1  "
            >
              {t("exp")}
            </h1>
          </div>
          <PatternRow className="border-s-2 border-s-gray-300/50 dark:border-s-gray-600/50 p-4 " />
        </div>
        <div className="my-5"></div>

        <div className="hidden md:flex">
          <PatternRow className="border-s-2 border-s-gray-300/50 dark:border-s-gray-600/50 p-4 " />
          <div
            className="border-x border-b border-gray-950/15 dark:border-my-light/5  not-md:border-0 md:border-b-0 p-4 w-full
            flex justify-center items-center
          "
          >
            <h1 className="text-xl md:text-3xl font-semibold  border-s-4 border-s-gray-700 dark:border-s-gray-200 px-2 py-1  text-gray-700 dark:text-gray-200  ">
              {t("skills")}
            </h1>
          </div>
        </div>

        <div className="my-15"></div>

        <PatternRow className=" relative pe-4 ">
          <div className="grid grid-cols-1 md:grid-cols-[7fr_3fr] md:gap-4 divide-x-2 divide-gray-700/50 dark:divide-gray-200 ">
            <div className="ps-3">
              {resume.experience.map((exp, index) => (
                <ExperienceList experience={exp} key={index} />
              ))}
            </div>

            {/* ---------Skilles Section--------- */}
            <h1 className="md:hidden text-xl md:text-3xl font-semibold  border-s-4 border-s-gray-700 dark:border-s-gray-200 px-2 py-1  text-gray-700 dark:text-gray-200  ">
              {t("skills")}
            </h1>

            <div className="sticky top-10 overflow-y-auto overflow-x-hidden max-h-[calc(100svh-3.5rem)] px-6  pt-10 pb-24  scroll-smooth  ">
              {resume.skill.map((skill, index) => (
                <SkillList skill={skill} key={index} />
              ))}
            </div>
          </div>
        </PatternRow>

        <div className="my-10"></div>

        <div className="flex flex-col lg:flex-row gap-5  ">
          <PatternRow className="ps-3 py-1 flex items-center">
            <div className="w-2/4 py-3 px-3 text-gray-700  font-semibold dark:text-gray-200  border-s-2 border-gray-700/50 dark:border-s-gray-200">
              <h1 className="text-gray-700  font-semibold dark:text-gray-200 text-lg lg:text-2xl">
                {t("Cen_of_interest")}
              </h1>
              <div className="ps-3 text-sm md:text-base  ">
                {resume.centres.map((centre, index) => (
                  <p className="flex items-center my-3 " key={index}>
                    <Circle size={10} />
                    <span className="ms-2">
                      {centre[`title_${i18n.language}`]}
                    </span>
                  </p>
                ))}
              </div>
            </div>
          </PatternRow>
          <div className="md:w-2/4 ms-3 px-4 text-gray-700  font-semibold dark:text-gray-200  border-s-2 border-gray-700/50 dark:border-s-gray-200">
            <h1 className="text-gray-700  font-semibold dark:text-gray-200 text-2xl">
              {t("lang")}
            </h1>
            <div className="ps-3 text-sm md:text-base">
              
            {resume.language.map((centre, index) => (
                  <p className="flex items-center my-3 " key={index}>
                    <Circle size={10} />
                    <span className="ms-2">
                      {centre[`title_${i18n.language}`]} : {centre[`desc_${i18n.language}`]}
                    </span>
                  </p>
                ))}
            </div>
          </div>
        </div>

        <div className="my-10"></div>

        <div className="flex items-center justify-center">
          <Link
            to={resume.resume_url}
            className="relative flex items-center dark:bg-slate-100 dark:hover:bg-slate-400 bg-slate-800 hover:bg-slate-900 dark:text-gray-900 text-gray-200 font-bold py-4 px-6 rounded-lg shadow-[0_8px_15px_rgba(0,0,0,0.2)] dark:shadow-[0_8px_15px_rgba(0,0,0,0.1)] transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 active:translate-y-1 active:scale-95 border-b-4 dark:border-gray-400 border-gray-700 hover:border-gray-500 active:border-gray-800 cursor-pointer"
          >
            <FileText size={18} />
            <span className="ms-2">{t("download_resume")}</span>
          </Link>
        </div>
        <div className="my-10"></div>

        <div className="flex flex-col lg:flex-row">
          <div className="ps-4 py-4 my-3">
            <h1
              className="text-3xl md:text-4xl lg:text-7xl font-semibold font-dancing-script
                bg-clip-text text-transparent
                bg-gradient-to-r dark:from-gray-200 dark:to-gray-600
                from-gray-900 to-gray-400 rtl:font-mada"
            >
              {t("check_portfolio")}
            </h1>
          </div>
          <PatternRow className="ps-2 py-4">
            <Link to="/portfolio">
              <motion.button
                className="flex items-center px-2 py-3 md:px-3 rounded-lg text-gray-50 dark:text-my-light bg-gray-700  hover:bg-gray-800 dark:hover:bg-gray-800 transition-all duration-200 cursor-pointer"
                whileHover={{ scale: 0.95, transition: { duration: 0.3 } }}
              >
                <ArrowLeft />
                <span className="font-base font-semibold">
                  {t("check_portfolio_btn")}
                </span>
              </motion.button>
            </Link>
          </PatternRow>
        </div>
      </section>
    </div>
  );
}

export default Resume;
