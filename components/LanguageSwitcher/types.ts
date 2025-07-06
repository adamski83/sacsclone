export enum LanguageCode {
	DE = "de",
	EN = "en",
	PL = "pl",
}

export interface Language {
	code: LanguageCode;
	name: string;
	flag: string;
}

export const languages: Language[] = [
	{ code: LanguageCode.DE, name: "Deutsch", flag: "/png/germany.png" },
	{ code: LanguageCode.EN, name: "English", flag: "/png/usa.png" },
	{ code: LanguageCode.PL, name: "Polski", flag: "/png/poland.png" },
];
