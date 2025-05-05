import React, { useEffect, useRef, useState } from "react";
import { Languages } from "lucide-react";
import { useLanguageContext } from "../hooks/useGlobalParam";

const languageNames = {
  en: "English",
  ar: "العربية", // Arabic name for Arabic
  fr: "Français",
};

function MenuButton() {
  const { currentLanguage, changeLanguage } = useLanguageContext();


  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuRef = useRef(null); // Ref to detect clicks outside

  const languages = ["en", "ar", "fr"];

  const toggleMenu = (event) => {
    event.stopPropagation(); // Prevent click from immediately propagating to the document listener
    setIsMenuOpen(!isMenuOpen);
  };

  const selectLanguage = (lang) => {
    if (lang !== currentLanguage) {
      // Only change if different
      changeLanguage(lang); // from global param Context
    }
    setIsMenuOpen(false); // Close menu after selection
  };

  useEffect(() => {
    const handleClickOutside = (ev) => {
      if (menuRef.current && !menuRef.current.contains(ev.target)) {
        setIsMenuOpen(false);
      }
    };
    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    // Cleanup listener on component unmount or when menu closes
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={toggleMenu}
        className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 text-center inline-flex items-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800 cursor-pointer"
        type="button"
        id="menu-button"
        aria-haspopup="true" // Accessibility: indicate it has a popup
        aria-expanded={isMenuOpen} // Accessibility: indicate if popup is open
      >
        <Languages size={15} />
        <span className="ms-2">{currentLanguage.toUpperCase()}</span>
      </button>

      {isMenuOpen && (
        <div
          className="absolute top-full right-0 mt-2 z-10 w-32 rounded-lg shadow bg-white dark:bg-gray-800 origin-top-right"
          role="menu" // Accessibility: semantic role
          aria-orientation="vertical"
          aria-labelledby="menu-button" // Needs an id on the button if you use this
        >
          <ul className="py-1" role="none">
            {languages.map((lang) => (
              <li key={lang} role="none">
                <button
                  className={` w-full text-left px-4 py-2 text-sm ${
                    currentLanguage === lang
                      ? "font-semibold text-blue-600 dark:text-blue-400 cursor-default"
                      : "text-gray-700 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600"
                  } 
                  ${
                    currentLanguage === lang
                      ? ""
                      : "hover:bg-gray-100 dark:hover:bg-gray-600"
                  }
                  `}
                  onClick={() => selectLanguage(lang)}
                  disabled={currentLanguage === lang}
                  role="menuitem" // Accessibility
                >
                  {languageNames[lang] || lang.toUpperCase()}{" "}
                  {currentLanguage === lang && " ✔"}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default MenuButton;
