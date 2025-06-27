"use client";

import { useState } from "react";
import { useI18n } from "../hook/useI18n";

const languages = [
	{ code: "de", name: "Deutsch", flag: "🇩🇪" },
	{ code: "en", name: "English", flag: "🇺🇸" },
	{ code: "pl", name: "Polski", flag: "🇵🇱" },
];

export const LanguageSwitcher = () => {
	const { changeLanguage, currentLanguage, isLoading } = useI18n();
	const [isOpen, setIsOpen] = useState(false);

	const currentLang =
		languages.find((lang) => lang.code === currentLanguage) || languages[0];

	console.log(currentLang);

	if (isLoading) {
		return <div className='animate-pulse bg-gray-200 h-8 w-20 rounded'></div>;
	}

	const handleLanguageChange = (langCode: string) => {
		changeLanguage(langCode);
		setIsOpen(false);
	};

	return (
		<div className='relative'>
			{/* Desktop Version */}
			<div className='hidden md:block'>
				<button
					onClick={() => setIsOpen(!isOpen)}
					className='flex items-center space-x-2 px-3 py-2 text-sm font-medium text-white hover:text-orange-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500 rounded-md'
					onBlur={() => setTimeout(() => setIsOpen(false), 150)}>
					<span className='text-lg'>{currentLang.flag}</span>
					<span className='uppercase font-bold'>{currentLang.code}</span>
					<svg
						className={`h-4 w-4 transition-transform duration-200 ${
							isOpen ? "rotate-180" : ""
						}`}
						fill='currentColor'
						viewBox='0 0 20 20'>
						<path
							fillRule='evenodd'
							d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
							clipRule='evenodd'
						/>
					</svg>
				</button>
				{/* //dropdown menu tutaj też ma być zmiana języka !!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */}
				<div
					className={`absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 transition-all duration-200 ${
						isOpen ? "opacity-100 visible" : "opacity-0 invisible"
					}`}>
					<div className='py-1'>
						{languages.map((language) => (
							<button
								key={language.code}
								onClick={() => handleLanguageChange(language.code)}
								className={`w-full text-left px-4 py-3 text-sm transition-colors duration-200 flex items-center space-x-3 ${
									currentLanguage === language.code
										? "bg-orange-50 text-orange-600"
										: "text-gray-700 hover:bg-gray-50 hover:text-orange-600"
								}`}>
								<span className='text-lg'>{language.flag}</span>
								<div>
									<div className='font-medium'>{language.name}</div>
									<div className='text-xs text-gray-500 uppercase'>
										{language.code}
									</div>
								</div>
								{currentLanguage === language.code && (
									<svg
										className='ml-auto h-4 w-4 text-orange-600'
										fill='currentColor'
										viewBox='0 0 20 20'>
										<path
											fillRule='evenodd'
											d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
											clipRule='evenodd'
										/>
									</svg>
								)}
							</button>
						))}
					</div>
				</div>
			</div>

			<div className='md:hidden flex space-x-1'>
				{languages.map((language) => (
					<button
						key={language.code}
						onClick={() => handleLanguageChange(language.code)}
						className={`px-2 py-1 text-xs font-bold rounded transition-colors duration-200 ${
							currentLanguage === language.code
								? "bg-orange-600 text-white"
								: "bg-gray-200 text-gray-700 hover:bg-gray-300"
						}`}>
						{language.code.toUpperCase()}
					</button>
				))}
			</div>
		</div>
	);
};
