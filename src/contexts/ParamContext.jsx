import { useCallback, useEffect, useState } from "react";
import { ThemeContext, LanguageContext, DataContext } from "./contexts";
import { useTranslation } from "react-i18next";

import { aboutMePage, resumePage, portfolio } from "../data/data";

const ParamProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const { i18n } = useTranslation();

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }, []);

  const changeLanguage = useCallback(
    (lang) => {
      // This changes the language in i18next
      i18n.changeLanguage(lang);
    },
    [i18n]
  );

  useEffect(() => {
    function handleLanguageChangeInHtml(lang) {
      if (lang) {
        document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
        //store the language preference using language browsore detectore
      }
    }
    handleLanguageChangeInHtml(i18n.language);

    i18n.on("languageChanged", handleLanguageChangeInHtml);

    // Cleanup listener on component unmount
    return () => {
      i18n.off("languageChanged", handleLanguageChangeInHtml);
    };
  }, [i18n]);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <LanguageContext.Provider
      value={{ currentLanguage: i18n.language, changeLanguage }}
    >
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <DataContext.Provider value={{ aboutMePage, resumePage, portfolio }}>
          {children}
        </DataContext.Provider>
      </ThemeContext.Provider>
    </LanguageContext.Provider>
  );
};

export default ParamProvider;
