"use client";

export type MenuItem = {
	id: string;
	labelKey: string;
	href: string;
	icon?: string;
	children?: MenuItem[];
	descriptionKey?: string;
	isExternal?: boolean;
};

export interface NavigationItem {
	id: string;
	label: string;
	href: string;
	description?: string;
	icon?: string;
	children?: NavigationItem[];
	isExternal?: boolean;
	target?: "_blank" | "_self" | "_parent" | "_top";
	order?: number;
	isVisible?: boolean;
	permissions?: string[];
}

export interface NavigationConfig {
	items: NavigationItem[];
	maxDepth?: number;
	allowExternalLinks?: boolean;
}

export interface BreadcrumbItem {
	label: string;
	href: string;
	isActive?: boolean;
}

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
