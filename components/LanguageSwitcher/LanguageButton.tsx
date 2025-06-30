"use client";

import Image from "next/image";
import { Language } from "./types";

interface LanguageButtonProps {
	currentLanguage: Language;
	isOpen: boolean;
	onClick: () => void;
	onBlur: () => void;
}

export const LanguageButton = ({
	currentLanguage,
	isOpen,
	onClick,
	onBlur,
}: LanguageButtonProps) => {
	return (
		<button
			onClick={onClick}
			onBlur={onBlur}
			className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-white hover:text-orange-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500 rounded-md"
			aria-label={`Current language: ${currentLanguage.name}`}
			aria-expanded={isOpen}
			aria-haspopup="listbox"
		>
			<span className="text-lg">{currentLanguage.name}</span>
			<Image
				src={currentLanguage.flag}
				width={30}
				height={30}
				alt={`${currentLanguage.name} flag`}
			/>
			<svg
				className={`h-4 w-4 transition-transform duration-200 ${
					isOpen ? "rotate-180" : ""
				}`}
				fill="currentColor"
				viewBox="0 0 20 20"
				aria-hidden="true"
			>
				<path
					fillRule="evenodd"
					d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
					clipRule="evenodd"
				/>
			</svg>
		</button>
	);
};
