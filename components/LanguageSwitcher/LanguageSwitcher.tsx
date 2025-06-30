"use client";

import { useState } from "react";
import { useI18n } from "../../hooks/useI18n";
import { LanguageButton } from "./LanguageButton";
import { LanguageList } from "./LanguageList";
import { MobileLanguageSwitcher } from "./MobileLanguageSwitcher";
import { languages } from "./types";

export const LanguageSwitcher = () => {
	const { changeLanguage, currentLanguage, isLoading } = useI18n();
	const [isOpen, setIsOpen] = useState(false);

	const currentLang =
		languages.find((lang) => lang.code === currentLanguage) || languages[0];

	if (isLoading) {
		return <div className="animate-pulse bg-gray-200 h-8 w-20 rounded"></div>;
	}

	const handleLanguageChange = (langCode: string) => {
		changeLanguage(langCode);
		setIsOpen(false);
	};

	const handleToggle = () => {
		setIsOpen(!isOpen);
	};

	const handleBlur = () => {
		setTimeout(() => setIsOpen(false), 150);
	};

	return (
		<div className="relative">
			<div className="hidden md:block">
				<LanguageButton
					currentLanguage={currentLang}
					isOpen={isOpen}
					onClick={handleToggle}
					onBlur={handleBlur}
				/>
				<LanguageList
					languages={languages}
					currentLanguage={currentLanguage}
					isOpen={isOpen}
					onLanguageChange={handleLanguageChange}
				/>
			</div>
			<div className="md:hidden">
				<MobileLanguageSwitcher
					languages={languages}
					currentLanguage={currentLanguage}
					onLanguageChange={handleLanguageChange}
				/>
			</div>
		</div>
	);
};
