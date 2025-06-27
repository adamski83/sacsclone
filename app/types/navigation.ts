// types/navigation.ts
export type MenuItem = {
	id: string;
	label: string;
	href: string;
	icon?: string;
	children?: MenuItem[];
	description?: string;
	isExternal?: boolean;
};

export const navigationData: MenuItem[] = [
	{
		id: "home",
		label: "Home",
		href: "/",
		icon: "/icons/home.svg",
	},
	{
		id: "unternehmen",
		label: "Unternehmen",
		href: "/unternehmen",
		icon: "/icons/home.svg",
	},
	{
		id: "Aerospace Solutions",
		label: "Aerospace Solutions",
		href: "/products",
		children: [
			{
				id: "structural components",
				label: "Structural Components",
				href: "/products/structural-components",
				description: "Zaawansowane rozwiązania lotnicze",
			},
			{
				id: "mechanical solutions",
				label: "Mechanical Solutions",
				href: "/products/mechanical-solutions",
				description: "Precyzyjna produkcja",
			},
			{
				id: "standard hardware",
				label: "Standard Hardware",
				href: "/products/standard-hardware",
				description: "Precyzyjna produkcja",
			},
			{
				id: "fastener technologies",
				label: "Fastener Technologies",
				href: "/products/fasteners-technologies",
				description: "Precyzyjna produkcja",
			},
		],
	},

	{
		id: "eqm",
		label: "EQM",
		href: "/eqm",
	},
	{
		id: "newsroom",
		label: "Newsroom",
		href: "/newsroom",
	},
	{
		id: "downloads",
		label: "Downloads",
		href: "/downloads",
	},
	{
		id: "kontakt",
		label: "Kontakt",
		href: "/kontakt",
	},
];
