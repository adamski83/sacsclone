"use client";

import Image from "next/image";
import { Chrono } from "react-chrono";

const items = [
	{
		title: "2024",
		cardTitle: "200 Passagiere",
		cardSubtitle:
			"Gewinn eines neuen Projekts: A220 OHSC Tirods Erweiterung der Kapazitäten im Bereich Strukturmodifikationen",
		cardDetailedText: "",
	},
	{
		title: "2023",
		cardTitle: "190 Passagiere",
		cardSubtitle:
			"Beschaffung einer neuen Blechfräse und einer 3D Messmaschine",
		cardDetailedText: "",
	},
	{
		title: "2022",
		cardTitle: "170 Passagiere",
		cardSubtitle:
			"Zehnjahresvertrag über Split Scimitar Winglet Wing Modification Kooperation mit Aviation Partners Boeing mit einem Volumen von 150 Millionen US-Dollar",
		cardDetailedText: "",
	},
	{
		title: "2021",
		cardTitle: "160 Passagiere",
		cardSubtitle:
			"Erfolgreiche Implementierung einer neuen ERP Einführung und Zertifizierung des ISMS nach DIN EN ISO/IEC27001 Qualifizierter BOEING Supplier",
		cardDetailedText: "",
	},
	{
		title: "2020",
		cardTitle: "200 Passagiere",
		cardSubtitle:
			"Umbenennung in SACS Aerospace Erweiterung von 3D-Druck Ausbau der Produktionstiefe in Kunststoffteile",
		cardDetailedText: "",
	},
	{
		title: "2019",
		cardTitle: "194 Passagiere",
		cardSubtitle:
			"Verkauf Boysen GmbH & Co. KG: Bossard erwirbt den Distributionsbereich der AQUAERO Holding. SACS Aerospace konzentriert sich nun zu 100 % auf die Entwicklung und Herstellung von Systembaugruppen in der Luft- und Raumfahrtindustrie.",
		cardDetailedText: "",
	},
	{
		title: "2018",
		cardTitle: "160 Passagiere",
		cardSubtitle:
			"50 Jahre Boysen GmbH & Co. KG 15 Jahre SACS GmbH 5 Jahre SACS Boysen Aerospace U.S. Inc.",
		cardDetailedText: "",
	},
	{
		title: "2016",
		cardTitle: "140 Passagiere",
		cardSubtitle:
			"Umbenennung in SACS Aerospace Erweiterung von 3D-Druck Ausbau der Produktionstiefe in Kunststoffteile",
		cardDetailedText: "",
	},
];

export const Timeline = () => {
	return (
		<div className='w-auto flex flex-col'>
			<h2 className='text-4xl font-bold text-center mt-18'>WE HAVE A VISION</h2>
			<Image
				src='/SACS_Flieger-rot.png'
				width={100}
				height={100}
				alt='Flieger rot'
				className='flex justify-center mx-auto my-4'
			/>
			<Chrono
				disableToolbar={true}
				items={items}
				mode='VERTICAL_ALTERNATING'
				hideControls={true}
				theme={{
					primary: "#7c2d12",
					secondary: "#484d52",
					cardBgColor: "#484d52",
					titleColor: "#ffffff",
					titleColorActive: "#7c2d12",
					cardTitleColor: "#ffffff",
					cardSubtitleColor: "#ffffff",
					cardDetailsColor: "#ffffff",
				}}
				fontSizes={{
					cardSubtitle: "1rem",
					cardText: "0.75rem",
					cardTitle: "1.25rem",
					title: "2rem",
				}}
				slideShow={false}
				timelinePointDimension={16}
				lineWidth={4}
			/>
		</div>
	);
};
