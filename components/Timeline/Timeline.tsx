"use client";

import Image from "next/image";
import { Chrono } from "react-chrono";
import { useI18n } from "../../hooks/useI18n";

export const Timeline = () => {
	const { tUnternehmen } = useI18n();
	const items = [
		{
			title: "2024",
			cardTitle: `200 ${tUnternehmen("pasanger")} `,
			cardSubtitle: `${tUnternehmen("cardSubtitle")}`,
			cardDetailedText: "",
		},
		{
			title: "2023",
			cardTitle: `190 ${tUnternehmen("pasanger")} `,
			cardSubtitle: `${tUnternehmen("cardSubtitle2")}`,
			cardDetailedText: "",
		},
		{
			title: "2022",
			cardTitle: `170 ${tUnternehmen("pasanger")} `,
			cardSubtitle: `${tUnternehmen("cardSubtitle3")}`,
			cardDetailedText: "",
		},
		{
			title: "2021",
			cardTitle: `160 ${tUnternehmen("pasanger")} `,
			cardSubtitle: `${tUnternehmen("cardSubtitle4")}`,
			cardDetailedText: "",
		},
		{
			title: "2020",
			cardTitle: `200 ${tUnternehmen("pasanger")} `,
			cardSubtitle: `${tUnternehmen("cardSubtitle5")}`,
			cardDetailedText: "",
		},
		{
			title: "2019",
			cardTitle: `194 ${tUnternehmen("pasanger")} `,
			cardSubtitle: `${tUnternehmen("cardSubtitle6")}`,
			cardDetailedText: "",
		},
		{
			title: "2018",
			cardTitle: `160 ${tUnternehmen("pasanger")} `,
			cardSubtitle: `${tUnternehmen("cardSubtitle7")}`,
			cardDetailedText: "",
		},
	];
	return (
		<div className="w-auto flex flex-col">
			<h2 className="text-4xl font-bold text-center mt-18">WE HAVE A VISION</h2>
			<Image
				src="/SACS_Flieger-rot.png"
				width={100}
				height={100}
				alt="Flieger rot"
				className="flex justify-center mx-auto my-4"
			/>
			<Chrono
				disableToolbar={true}
				items={items}
				mode="VERTICAL_ALTERNATING"
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
