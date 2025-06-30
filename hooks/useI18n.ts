"use client";

import { useTranslation } from "react-i18next";

export const useI18n = (namespace?: string) => {
	const { t, i18n } = useTranslation(namespace);

	const changeLanguage = (language: string) => {
		i18n.changeLanguage(language);
	};

	const tCommon = (key: string) => t(key, { ns: "common" });
	const tNav = (key: string) => t(key, { ns: "navigation" });
	const tCompany = (key: string) => t(key, { ns: "company" });
	const tFooter = (key: string) => t(key, { ns: "footer" });
	const tUnternehmen = (key: string) => t(key, { ns: "unternehmen" });

	return {
		t,
		tCommon,
		tNav,
		tCompany,
		tFooter,
		changeLanguage,
		tUnternehmen,
		currentLanguage: i18n.language,
		isLoading: !i18n.isInitialized,
	};
};
