"use client";

import { Language } from "./types";

interface MobileLanguageSwitcherProps {
	languages: Language[];
	currentLanguage: string;
	onLanguageChange: (langCode: string) => void;
}

export const MobileLanguageSwitcher = ({
	languages,
	currentLanguage,
	onLanguageChange,
}: MobileLanguageSwitcherProps) => {
	return (
		<div className="flex space-x-1">
			{languages.map((language) => (
				<button
					key={language.code}
					onClick={() => onLanguageChange(language.code)}
					className={`px-2 py-1 text-xs font-bold rounded transition-colors duration-200 ${
						currentLanguage === language.code
							? "bg-orange-600 text-white"
							: "bg-gray-200 text-gray-700 hover:bg-gray-300"
					}`}
					aria-label={`Switch to ${language.name}`}
				>
					{language.code.toUpperCase()}
				</button>
			))}
		</div>
	);
};
