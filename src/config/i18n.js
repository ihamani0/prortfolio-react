import translationEN from "../locales/en/translation.json";
import translationFR from "../locales/fr/translation.json";
import translationAR from "../locales/ar/translation.json";
import { initReactI18next } from "react-i18next";
import i18n from "i18next";

import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: { translation: translationEN },
  fr: { translation: translationFR },
  ar: { translation: translationAR },
};

i18n
  .use(I18nextBrowserLanguageDetector)
  .use(initReactI18next) // Passes i18n down to react-i18next
  .init({
    resources,
    fallbackLng: "en", // Use English if detected language is not available
    debug: true, // Set to false in production
    supportedLngs: ["en", "ar", "fr"],
    interpolation: {
      escapeValue: false, // React already safes from xss
    },
    // Language detection options
    detection: {
      order: ["localStorage", "navigator", "htmlTag", "path", "subdomain"],
      caches: ["localStorage"], // Cache the language in localStorage
    },
  });

export default i18n;
