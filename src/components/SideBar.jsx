import { Briefcase, FileText, Mail, User, X } from "lucide-react";
import React from "react";

import ThemeToggle from "./ThemeToggle";
import { useThemeContext } from "../hooks/useGlobalParam";
import MenuButton from "../ui/MenuButton";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { useSideBar } from "../hooks/useSideBar";
import Spinner from "../ui/Spinner";

function SideBar({ isSidebarOpen, closeSidebar }) {
  const { theme, toggleTheme } = useThemeContext();

  const { t, i18n } = useTranslation();

  const currentLanguage = i18n.language;
  const { data, isLoading, error } = useSideBar(i18n.language);

  const navItems = [
    { name: "AboutMe", id: "about", to: "/", icon: <User size={20} /> },
    {
      name: "Resume",
      id: "resume",
      to: "/resume",
      icon: <FileText size={20} />,
    },
    {
      name: "Portfolio",
      id: "portfolio",
      to: "/portfolio",
      icon: <Briefcase size={20} />,
    },
    { name: "Contact", id: "contact", to: "contact", icon: <Mail size={20} /> },
  ];

  if (isLoading) return <Spinner />;
  if (error) return <div>Error: {error.message}</div>;
  // Add specific check for empty data if needed
  if (!data /* || specific empty check */) return <div>No data found</div>;

  return (
    <div
      className={`fixed top-0 left-0 rtl:right-0 z-40 w-80 lg:w-72  h-screen transition-transform lg:rtl:translate-x-0  lg:ltr:translate-x-0 bg-my-light shadow-lg dark:bg-gray-950 dark:bg-[radial-gradient(circle_at_bottom,rgba(255,255,255,0.05)_0%,transparent_80%)] rtl:font-mada ${
        isSidebarOpen
          ? "translate-x-0"
          : "ltr:-translate-x-full rtl:translate-x-full"
      }   `}
    >
      <button
        onClick={closeSidebar}
        className="absolute top-4 ltr:right-4 rtl:left-4 p-2 text-gray-500 rounded-lg lg:hidden hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-600"
        aria-label="Close sidebar"
      >
        <X size={18} />
      </button>

      <div className="h-full px-4 py-6 overflow-y-auto scrollbar scrollbar-thumb-gray-600 scrollbar-track-gray-50 ">
        <div className="flex flex-col items-center justify-center space-y-5 my-8">
          <img
            className="w-20 h-20 md:w-24 md:h-24 rounded-full ring-4 ring-gray-300/50 dark:ring-gray-600/50 object-cover shadow"
            src={data["AvatarpublicUrl"] || "/no-img.png"}
            alt="Avatar"
          />
          <div>
            <span className="text-lg md:text-xl font-semibold text-center dark:text-my-light text-gray-900 block">
              {data[`name_${currentLanguage}`]}
            </span>
            <span className="text-xs md:text-sm text-center dark:text-my-light text-gray-800 block">
              {data[`stack_${currentLanguage}`]}
            </span>
          </div>
        </div>

        <hr className="h-px my-8 bg-gray-300 border-0 dark:bg-gray-700"></hr>

        <ul className="space-y-3  md:font-medium my-3">
          {navItems.map((item) => (
            <NavLink
              onClick={closeSidebar}
              key={item.id}
              to={item.to}
              className={({ isActive }) =>
                `flex items-center w-full p-1 md:p-3 rounded-lg text-gray-800 dark:text-my-light hover:bg-gray-200 dark:hover:bg-gray-800 transition-all duration-200 ${
                  isActive ? "bg-gray-300 dark:bg-gray-800" : ""
                }`
              }
            >
              {item.icon}
              <span className="ms-4 text-xs md:text-base">{t(item.name)}</span>
            </NavLink>
          ))}
        </ul>

        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />

        <MenuButton />
      </div>
    </div>
  );
}

export default SideBar;
