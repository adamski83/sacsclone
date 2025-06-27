"use client";

import { useTranslation } from "react-i18next";

export const useI18n = (namespace?: string) => {
	const { t, i18n } = useTranslation(namespace);

	const changeLanguage = (language: string) => {
		i18n.changeLanguage(language);
	};

	// Funkcje pomocnicze dla różnych namespace'ów
	const tCommon = (key: string) => t(key, { ns: "common" });
	const tNav = (key: string) => t(key, { ns: "navigation" });
	const tCompany = (key: string) => t(key, { ns: "company" });
	const tFooter = (key: string) => t(key, { ns: "footer" });

	return {
		t,
		tCommon,
		tNav,
		tCompany,
		tFooter,
		changeLanguage,
		currentLanguage: i18n.language,
		isLoading: !i18n.isInitialized,
	};
};
