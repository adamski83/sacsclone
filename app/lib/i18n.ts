import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import deCommon from "../locales/de/common.json";
import deCompany from "../locales/de/company.json";
import deFooter from "../locales/de/footer.json";
import deNavigation from "../locales/de/navigation.json";
import enCommon from "../locales/en/common.json";
import enCompany from "../locales/en/company.json";
import enFooter from "../locales/en/footer.json";
import enNavigation from "../locales/en/navigation.json";
import plCommon from "../locales/pl/common.json";
import plCompany from "../locales/pl/company.json";
import plFooter from "../locales/pl/footer.json";
import plNavigation from "../locales/pl/navigation.json";

const resources = {
	en: {
		common: enCommon,
		navigation: enNavigation,
		company: enCompany,
		footer: enFooter,
	},
	de: {
		common: deCommon,
		navigation: deNavigation,
		company: deCompany,
		footer: deFooter,
	},
	pl: {
		common: plCommon,
		navigation: plNavigation,
		company: plCompany,
		footer: plFooter,
	},
};

i18n
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		resources,
		fallbackLng: "de",
		defaultNS: "common",

		ns: ["common", "navigation", "company", "footer"],

		debug: process.env.NODE_ENV === "development",

		interpolation: {
			escapeValue: false,
		},

		detection: {
			order: ["localStorage", "navigator"],
			caches: ["localStorage"],
		},
	});

export default i18n;
