/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";

import PatternDots from "../../ui/PatternDots";
import PatternColumn from "../../ui/PatternColumn";
import { useTranslation } from "react-i18next";
import { Codesandbox, CodeXml, Eye, Github } from "lucide-react";
import PatternRow from "../../ui/PatternRow";
import { motion } from "motion/react";
import { Link, useParams } from "react-router-dom";
import { useProjects } from "../../hooks/useProjects";
import Spinner from "../../ui/Spinner";
import ErrorMessage from "../../components/ErrorMessage";
import EmptyState from "../../components/EmptyState";

function ProjectReview() {
  const { id } = useParams();

  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const { data, isLoading, error } = useProjects(currentLanguage, id);

  const techProjects = data?.project_technology?.map(
    ({ technology }) => technology
  );

  const projectDetails = data?.project_trans[0] || "";

  useEffect(() => {
    document.title = "Portfolio || Project Review";
  }, []);

  if (isLoading) return <Spinner />;
  if (error) return <ErrorMessage message={error?.message} />;
  // Add specific check for empty data if needed
  if (!data) return <EmptyState />;

  return (
    <div className="min-h-screen">
      <section className="flex flex-col">
        <div className="grid grid-cols-1 md:grid-cols-[7%_1fr_7%] ">
          <PatternColumn className="" />
          <PatternDots className="">
            <div className="text-center py-6 flex flex-col items-center space-y-3  ">
              <div className="w-full ">
                <h1
                  className="text-5xl md:text-6xl font-semibold text-gray-700 dark:text-gray-200 font-dancing-script
                 rtl:font-mada py-3  border-y  border-y-gray-200/20 "
                >
                  {t("project_review")}
                </h1>
              </div>

              <div className="my-15"></div>

              <div className="w-full flex flex-col-reverse md:flex-row  items-center gap-20 ">
                <div className="flex flex-col  w-full space-y-2">
                  <h1
                    className="text-5xl md:text-6xl font-semibold text-gray-700 dark:text-gray-200 text-start
                      rtl:font-mada"
                  >
                    {data?.title}
                  </h1>

                  <div className="flex flex-col gap-5 dark:text-gray-200 text-gray-500 mt-4 rounded">
                    <div className="text-start text-md">
                      <p className="font-semibold flex items-center">
                        <Codesandbox size={18} />
                        <span className="ms-2">{t("services")}</span>
                      </p>
                      <p>{data?.services}</p>
                    </div>

                    <div className="text-start text-md">
                      <p className="font-semibold flex items-center">
                        <Eye size={18} />
                        <span className="ms-2">{t("preview")}</span>
                      </p>
                      <a
                        href={data?.live_preview_url || "#"}
                        className="hover:underline transition-all duration-200 ease-in "
                      >
                        {data?.live_preview_url ? (
                          <span>Live Preview</span>
                        ) : (
                          <span className="line-through">Live Preview</span>
                        )}
                      </a>
                    </div>

                    <div className="text-start text-md">
                      <p className="font-semibold flex items-center">
                        <Github size={18} />{" "}
                        <span className="ms-2">{t("github_link")}</span>
                      </p>
                      <a
                        href={data?.github_link || "#"}
                        className="hover:underline transition-all duration-200 ease-in"
                      >
                        {data?.github_link ? (
                          <span>Preview</span>
                        ) : (
                          <span className="line-through">Preview</span>
                        )}
                      </a>
                    </div>
                  </div>
                </div>
                <motion.div
                  className="relative h-100 w-full overflow-hidden rounded-lg shadow-lg"
                  whileHover={{ scale: 0.95 }} // Zoom effect on hover
                  transition={{ duration: 0.3 }}
                >
                  <img
                    className="absolute inset-0 w-full h-full object-cover"
                    src={data?.publicProjectUrl}
                  />
                </motion.div>
              </div>

              {/* Details  */}
              <div className="mt-5 w-full flex flex-col items-start space-y-2 ">
                <h1 className="dark:text-gray-200 text-gray-700 text-lg flex items-center">
                  {" "}
                  <CodeXml /> <span className="ms-2">{t("technologies")}</span>
                </h1>

                <div className="felx space-x-2 gap-1">
                  {techProjects.map((tech) => (
                    <span
                      key={tech.id}
                      className="bg-gray-300 text-gray-800 text-base  me-2.5 px-3.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300"
                    >
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>

              <div className="text-gray-200 flex flex-col md:flex-row items-center  my-4 md:my-0 ">
                <div className="w-full"></div>

                <div className="w-full flex-col justify-start space-y-2">
                  <h1 className=" text-gray-700 dark:text-gray-200 text-xl md:text-3xl font-semibold text-start">
                    {t("project_overview")}
                  </h1>
                  <p className="text-gray-600 dark:text-gray-200 text-md md:text-lg text-start">
                    {projectDetails[`project_overview_${currentLanguage}`]}
                  </p>
                </div>
              </div>

              <div className="text-gray-200 w-full flex flex-col md:flex-row items-center my-4 md:my-0 ">
                <div className="w-full flex-col justify-start space-y-2">
                  <h1 className=" text-gray-700 dark:text-gray-200 text-xl md:text-3xl font-semibold text-start">
                    {t("project_features")}
                  </h1>
                  <div className="text-gray-600 dark:text-gray-200 text-md md:text-lg  text-start">
                    {projectDetails[`project_features_${currentLanguage}`]}
                  </div>
                </div>
                <div className="w-full"></div>
              </div>
            </div>
          </PatternDots>
          <PatternColumn className="" />
        </div>

        <div className="col-span-full col-start-2 row-start-2 h-px bg-gray-950/15 dark:bg-white/10"></div>

        <div className=" flex flex-col md:flex-row ps-4  ">
          <div className="py-4">
            <h1
              className="text-3xl md:text-4xl lg:text-7xl font-semibold font-dancing-script
              bg-clip-text text-transparent
              bg-gradient-to-r dark:from-gray-500 dark:via-gray-200 dark:to-gray-50
              from-gray-900 via-gray-700 to-gray-500 rtl:font-mada
              "
            >
              {t("Work_Together")}
            </h1>
          </div>
          <div className="flex flex-col justify-between w-full gap-y-10 border-s-2 border-s-gray-950/15 dark:border-s-white/10">
            <PatternRow className="h-20" />
            <PatternRow className=" p-4 ">
              <Link to="/contact">
                <motion.button
                  className="flex items-center px-2 py-3 md:px-3 rounded-lg text-gray-50 dark:text-my-light bg-gray-700  hover:bg-gray-800 dark:hover:bg-gray-800 transition-all duration-200 cursor-pointer"
                  whileHover={{ scale: 0.95, transition: { duration: 0.3 } }}
                >
                  <span className="font-base font-semibold">
                    {t("Work_Together_btn")}
                  </span>
                </motion.button>
              </Link>
            </PatternRow>
          </div>
        </div>
      </section>
    </div>
  );
}

// export const loader = async ({ params }) => {
//   const res = await fetch(`/api/projects/${params.id}`);
//   if (!res.ok) {
//     throw new Response("Not Found", { status: 404 });
//   }
//   return res.json();
// };

export default ProjectReview;
