"use client";
import Image from "next/image";

import { Content } from "../../components/Content/Content";
import { Timeline } from "../../components/Timeline/Timeline";
import { useI18n } from "../../hooks/useI18n";

const MainLayout = () => {
	const { tUnternehmen } = useI18n();

	return (
		<>
			<div className="relative">
				<Image
					src="/helicopter2.jpg"
					alt="Hero Image"
					width={1920}
					height={1080}
					className="w-full h-[480px] object-cover "
				/>
				<div className="absolute inset-y-0 left-8 flex items-center">
					<Image
						src="/sacs-logo.png"
						alt="SACS Logo"
						width={200}
						height={80}
						className="w-auto h-16 md:h-20 lg:h-24"
					/>
				</div>
				<div className="absolute bottom-8 left-8">
					<p className="text-white text-5xl font-bold tracking-wide">
						Unternehmen
					</p>
				</div>
			</div>
			<div className="flex flex-col items-start mt-16 p-[20px] h-fit">
				<section className="flex flex-col lg:flex-row lg:gap-8">
					<div className="flex flex-col lg:flex-1">
						<h1 className="text-3xl mb-2 uppercase ">Unternehme</h1>
						<h2 className="text-5xl font-bold mb-6 leading-[62px] uppercase">
							We are sacs aerospace
						</h2>
						<p className="text-base text-white leading-[25px] mb-5">
							{tUnternehmen("paragraph1")}
						</p>
						<p className="text-base text-white leading-[25px] mb-5">
							{tUnternehmen("paragraph2")}
						</p>
						<p className="text-base text-white leading-[25px] mb-5">
							{tUnternehmen("paragraph3")}
						</p>
					</div>
					<div className="flex sm:flex-row flex-col">
						<Content
							title="UNSERE KOMPETENZEN"
							items={[
								{ text: "Entwicklung", id: "entwicklung" },
								{ text: "Produktion", id: "produktion" },
								{ text: "Qualitätssicherung", id: "qualitaetssicherung" },
								{ text: "Logistik", id: "logistik" },
								{ text: "Engineering", id: "engineering" },
							]}
							imageSrc="/SACS_Flugzeug_weiss.png"
							imageAlt="Kompetenzen Image"
							checkIconSrc="/check.png"
						/>
						<Content
							title="UNSERE KOMPETENZEN"
							items={[
								{ text: "Entwicklung", id: "entwicklung" },
								{ text: "Produktion", id: "produktion" },
								{ text: "Qualitätssicherung", id: "qualitaetssicherung" },
								{ text: "Logistik", id: "logistik" },
								{ text: "Engineering", id: "engineering" },
							]}
							imageSrc="/SACS_Flugzeug_weiss.png"
							imageAlt="Kompetenzen Image"
							checkIconSrc="/check.png"
						/>
						<Content
							title="UNSERE KOMPETENZEN"
							items={[
								{ text: "Entwicklung", id: "entwicklung" },
								{ text: "Produktion", id: "produktion" },
								{ text: "Qualitätssicherung", id: "qualitaetssicherung" },
								{ text: "Logistik", id: "logistik" },
								{ text: "Engineering", id: "engineering" },
							]}
							imageSrc="/SACS_Flugzeug_weiss.png"
							imageAlt="Kompetenzen Image"
							checkIconSrc="/check.png"
						/>
					</div>
				</section>
				<section className="flex flex-col md:flex-row gap-4 md:gap-8 w-full mt-16">
					<div className="w-full md:w-1/2">
						<Image
							src="/SACS-Gebaeude-800x600.jpg"
							alt="SACS gebaeude"
							width={800}
							height={600}
							className="w-full h-auto object-cover rounded-lg shadow-lg"
						/>
					</div>
					<div className="w-full md:w-1/2">
						<Image
							src="/SACS_Gebaeudeplanung.png"
							alt="SACS gebaeude"
							width={800}
							height={600}
							className="w-full h-auto object-cover rounded-lg shadow-lg"
						/>
					</div>
				</section>
			</div>
			<Image
				src="/pilatus.jpg"
				alt="Pilatus Image"
				width={1920}
				height={1080}
				className="w-full h-[480px] object-cover "
			/>
			<Timeline />
		</>
	);
};

export default MainLayout;
