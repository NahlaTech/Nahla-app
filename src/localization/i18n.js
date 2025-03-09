import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationAr from "./ar.json";
// import Backend from 'i18next-http-backend';
// import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  ar: {
    translation: translationAr,
  },
};

i18n
  .use(initReactI18next)
  // init i18next
  .init({
    fallbackLng: "ar",
    debug: true,
    resources,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });

export default i18n;
