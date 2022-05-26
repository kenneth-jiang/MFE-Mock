import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import * as constants from "./utils/i18nConstants";

// order: ["querystring", "cookie", "localStorage", "sessionStorage", "navigator", "htmlTag", "path", "subdomain"],
i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        detection: {
            order: ["navigator", "querystring", "cookie", "localStorage", "sessionStorage", "navigator", "htmlTag", "path", "subdomain" ]
        },
        fallbackLng: "en",
        resources: constants.aboutPageResources,
    });

export default i18n;
