"use client";

import { useI18n } from "./useI18n";

export const useNavigation = () => {
	const { tNav, isLoading } = useI18n();

	const getNavigationItems = () => [
		{
			id: "home",
			label: tNav("home"),
			href: "/",
			icon: "/icons/home.svg",
		},
		{
			id: "unternehmen",
			label: tNav("company"),
			href: "/unternehmen",
			icon: "/icons/home.svg",
		},
		{
			id: "aerospace-solutions",
			label: tNav("aerospaceTitle"),
			href: "/products",
			children: [
				{
					id: "structural-components",
					label: tNav("products.structuralComponents.title"),
					href: "/products/structural-components",
					description: tNav("products.structuralComponents.description"),
				},
				{
					id: "mechanical-solutions",
					label: tNav("products.mechanicalSolutions.title"),
					href: "/products/mechanical-solutions",
					description: tNav("products.mechanicalSolutions.description"),
				},
				{
					id: "standard-hardware",
					label: tNav("products.standardHardware.title"),
					href: "/products/standard-hardware",
					description: tNav("products.standardHardware.description"),
				},
				{
					id: "fastener-technologies",
					label: tNav("products.fastenerTechnologies.title"),
					href: "/products/fasteners-technologies",
					description: tNav("products.fastenerTechnologies.description"),
				},
			],
		},
		{
			id: "eqm",
			label: tNav("eqm"),
			href: "/eqm",
		},
		{
			id: "newsroom",
			label: tNav("newsroom"),
			href: "/newsroom",
		},
		{
			id: "downloads",
			label: tNav("downloads"),
			href: "/downloads",
		},
		{
			id: "kontakt",
			label: tNav("contact"),
			href: "/kontakt",
		},
	];

	return {
		navigationItems: getNavigationItems(),
		isLoading,
	};
};
