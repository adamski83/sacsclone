"use client";

import { useI18n } from "../hooks/useI18n";

export type MenuItem = {
	id: string;
	labelKey: string;
	href: string;
	icon?: string;
	children?: MenuItem[];
	descriptionKey?: string;
	isExternal?: boolean;
};

export const navigationStructure: MenuItem[] = [
	{
		id: "home",
		labelKey: "home",
		href: "/",
		icon: "/icons/home.svg",
	},
	{
		id: "unternehmen",
		labelKey: "company",
		href: "/unternehmen",
		icon: "/icons/home.svg",
	},
	{
		id: "aerospace-solutions",
		labelKey: "aerospaceTitle",
		href: "/products",
		children: [
			{
				id: "structural-components",
				labelKey: "products.structuralComponents.title",
				href: "/products/structural-components",
				descriptionKey: "products.structuralComponents.description",
			},
			{
				id: "mechanical-solutions",
				labelKey: "products.mechanicalSolutions.title",
				href: "/products/mechanical-solutions",
				descriptionKey: "products.mechanicalSolutions.description",
			},
			{
				id: "standard-hardware",
				labelKey: "products.standardHardware.title",
				href: "/products/standard-hardware",
				descriptionKey: "products.standardHardware.description",
			},
			{
				id: "fastener-technologies",
				labelKey: "products.fastenerTechnologies.title",
				href: "/products/fastener-technologies",
				descriptionKey: "products.fastenerTechnologies.description",
			},
		],
	},
	{
		id: "eqm",
		labelKey: "eqm",
		href: "/eqm",
	},
	{
		id: "newsroom",
		labelKey: "newsroom",
		href: "/newsroom",
	},
	{
		id: "downloads",
		labelKey: "downloads",
		href: "/downloads",
	},
	{
		id: "kontakt",
		labelKey: "contact",
		href: "/kontakt",
	},
];

export type TranslatedMenuItem = {
	id: string;
	label: string;
	href: string;
	icon?: string;
	children?: TranslatedMenuItem[];
	description?: string;
	isExternal?: boolean;
};

export const useNavigationData = (): TranslatedMenuItem[] => {
	const { tNav, isLoading } = useI18n();

	if (isLoading) {
		return [];
	}

	const translateMenuItem = (item: MenuItem): TranslatedMenuItem => ({
		...item,
		label: tNav(item.labelKey),
		description: item.descriptionKey ? tNav(item.descriptionKey) : undefined,
		children: item.children?.map(translateMenuItem),
	});

	return navigationStructure.map(translateMenuItem);
};

export const useNavigationDataSafe = () => {
	const { tNav, isLoading } = useI18n();

	const getTranslatedNavigation = (): TranslatedMenuItem[] => {
		if (isLoading) {
			return navigationStructure.map((item) => ({
				...item,
				label: item.labelKey,
				description: item.descriptionKey,
				children: item.children?.map((child) => ({
					...child,
					label: child.labelKey,
					description: child.descriptionKey,
				})),
			}));
		}

		const translateMenuItem = (item: MenuItem): TranslatedMenuItem => {
			try {
				return {
					...item,
					label: tNav(item.labelKey) || item.labelKey,
					description: item.descriptionKey
						? tNav(item.descriptionKey) || item.descriptionKey
						: undefined,
					children: item.children?.map(translateMenuItem),
				};
			} catch (error) {
				console.warn(`Translation failed for key: ${item.labelKey}`, error);
				return {
					...item,
					label: item.labelKey,
					description: item.descriptionKey,
					children: item.children?.map((child) => ({
						...child,
						label: child.labelKey,
						description: child.descriptionKey,
					})),
				};
			}
		};

		return navigationStructure.map(translateMenuItem);
	};

	return {
		navigationData: getTranslatedNavigation(),
		isLoading,
	};
};
