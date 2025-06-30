import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import deCommon from "../app/locales/de/common.json";
import deCompany from "../app/locales/de/company.json";
import deFooter from "../app/locales/de/footer.json";
import deNavigation from "../app/locales/de/navigation.json";
import deUnternehmen from "../app/locales/de/unternehmen.json";
import enCommon from "../app/locales/en/common.json";
import enCompany from "../app/locales/en/company.json";
import enFooter from "../app/locales/en/footer.json";
import enNavigation from "../app/locales/en/navigation.json";
import enUnternehmen from "../app/locales/en/unternehmen.json";
import plCommon from "../app/locales/pl/common.json";
import plCompany from "../app/locales/pl/company.json";
import plFooter from "../app/locales/pl/footer.json";
import plNavigation from "../app/locales/pl/navigation.json";
import plUnternehmen from "../app/locales/pl/unternehmen.json";

const resources = {
	en: {
		common: enCommon,
		navigation: enNavigation,
		company: enCompany,
		footer: enFooter,
		unternehmen: enUnternehmen,
	},
	de: {
		common: deCommon,
		navigation: deNavigation,
		company: deCompany,
		footer: deFooter,
		unternehmen: deUnternehmen,
	},
	pl: {
		common: plCommon,
		navigation: plNavigation,
		company: plCompany,
		footer: plFooter,
		unternehmen: plUnternehmen,
	},
};

i18n
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		resources,
		fallbackLng: "de",
		defaultNS: "common",

		ns: ["common", "navigation", "company", "footer", "unternehmen"],

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
