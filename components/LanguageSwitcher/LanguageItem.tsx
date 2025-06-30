"use client";

import Image from "next/image";
import { Language } from "./types";

interface LanguageItemProps {
	language: Language;
	isActive: boolean;
	onClick: (langCode: string) => void;
	showDetails?: boolean;
}

export const LanguageItem = ({
	language,
	isActive,
	onClick,
	showDetails = true,
}: LanguageItemProps) => {
	return (
		<button
			onClick={() => onClick(language.code)}
			className={`w-full text-left px-4 py-3 text-sm transition-colors duration-200 flex items-center space-x-3 ${
				isActive
					? "bg-orange-50 text-orange-600"
					: "text-gray-700 hover:bg-gray-50 hover:text-orange-600"
			}`}
		>
			<Image
				src={language.flag}
				width={30}
				height={30}
				alt={`${language.name} flag`}
			/>
			{showDetails && (
				<div>
					<div className="font-medium">{language.name}</div>
					<div className="text-xs text-gray-500 uppercase">{language.code}</div>
				</div>
			)}
			{isActive && (
				<svg
					className="ml-auto h-4 w-4 text-orange-600"
					fill="currentColor"
					viewBox="0 0 20 20"
				>
					<path
						fillRule="evenodd"
						d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
						clipRule="evenodd"
					/>
				</svg>
			)}
		</button>
	);
};
