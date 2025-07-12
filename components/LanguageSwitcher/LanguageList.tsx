"use client";

import { LanguageItem } from "./LanguageItem";
import { Language } from "./types";

interface LanguageListProps {
	languages: Language[];
	currentLanguage: string;
	isOpen: boolean;
	onLanguageChange: (langCode: string) => void;
}

export const LanguageList = ({
	languages,
	currentLanguage,
	isOpen,
	onLanguageChange,
}: LanguageListProps) => {
	return (
		<div
			className={`absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 transition-all duration-200 z-50 ${
				isOpen ? "opacity-100 visible" : "opacity-0 invisible"
			}`}
		>
			<div className="py-1">
				{languages.map(language => (
					<LanguageItem
						key={language.code}
						language={language}
						isActive={currentLanguage === language.code}
						onClick={onLanguageChange}
						showDetails={true}
					/>
				))}
			</div>
		</div>
	);
};
