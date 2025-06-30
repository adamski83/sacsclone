"use client";
import Image from "next/image";

import AutoPlayMethods from "../components/Carousel/Carousel";
import { Content } from "../components/Content/Content";
import { Testimonial } from "../components/Testimonial/Testimonial";
import { useI18n } from "../hooks/useI18n";

export const Unternehmen = () => {
	const { tCompany, tCommon } = useI18n();
	return (
		<>
			<div className="flex flex-col items-start mt-16 p-[20px] h-fit">
				<section className="flex flex-col lg:flex-row lg:gap-8">
					<div className="flex flex-col lg:flex-1">
						<h1 className="text-3xl mb-2 ">{tCompany("title")}</h1>
						<h2 className="text-5xl font-bold mb-10 leading-[62px]">
							{tCompany("weAre")}
						</h2>
						<p className="text-lg text-white leading-[35px] mb-6">
							{tCompany("description")}
							<br />
							<br />
							{tCompany("innovation")}
							<br />
							<br />
							{tCompany("tagline")}
						</p>
						<button className="btn btn-outline btn-warning bg-orange-900 text-white border-none hover:bg-yellow-500 my-6 lg:my-12 w-[104px] py-6">
							{tCommon("more")}
						</button>
					</div>
					<div className="lg:flex-1">
						<Image
							src="/plain.png"
							alt="Unternehmen"
							width={600}
							height={600}
						/>
					</div>
				</section>
				<section className="flex flex-col lg:flex-row lg:gap-8">
					<div className="flex flex-col lg:flex-1">
						<h1 className="text-3xl mb-2 ">EQM</h1>
						<h2 className="text-5xl font-bold mb-10 leading-[62px]">
							WE ARE DIFFERENT
						</h2>
						<p className="text-lg text-white leading-[35px] mb-6">
							{tCompany("different")}
							<br />
							<br />
							{tCompany("innovation")}
							<br />
							<br />
							We are SACS – The art of aerospace
						</p>
						<button className="btn btn-outline btn-warning bg-orange-900 text-white border-none hover:bg-yellow-500 my-6 lg:my-12 w-[104px] py-6">
							{tCommon("more")}
						</button>
					</div>
					<div className="lg:flex-1">
						<Image src="/eqm.png" alt="Unternehmen" width={600} height={600} />
					</div>
				</section>
				<section className="flex flex-col lg:flex-row lg:gap-8">
					<div className="flex flex-col lg:flex-1">
						<h1 className="text-3xl mb-2 ">AEROSPACE SOLUTIONS</h1>
						<h2 className="text-5xl font-bold mb-10 leading-[62px]">
							WE FLY HIGH
						</h2>
						<p className="text-lg text-white leading-[35px] mb-6">
							{tCompany("solutions")}
						</p>
						<button className="btn btn-outline btn-warning bg-orange-900 text-white border-none hover:bg-yellow-500 my-6 lg:my-12 w-[104px] py-6">
							{tCommon("more")}
						</button>
					</div>
					<div className="lg:flex-1">
						<Image
							src="/plain.png"
							alt="Unternehmen"
							width={600}
							height={600}
						/>
					</div>
				</section>
			</div>
			<section className="flex md:flex-row  justify-center flex-col lg:flex-row lg:gap-6 md:items-start lg:items-start">
				<Content
					title="Kompetenzen:"
					items={[
						{ id: "1", text: "Design und Entwicklung" },
						{ id: "2", text: "Produktion und Assemblierung" },
						{ id: "3", text: "Supply Chain Management" },
						{ id: "4", text: "Werkzeugentwicklung und Produktion" },
						{ id: "5", text: "Lager und Logistik" },
						{ id: "6", text: "Montage von Baugruppen" },
					]}
					imageSrc="/SACS_Flugzeug_weiss.png"
					imageAlt="Unternehmen"
				/>
				<Content
					title="Kompetenzen:"
					items={[
						{ id: "1", text: "EN 9100" },
						{ id: "2", text: "EASA PART 21 SUBPART G" },
						{ id: "3", text: "EASA PART 145" },
					]}
					imageSrc="/SACS_Flugzeug_weiss.png"
					imageAlt="Unternehmen"
				/>
				<Content
					title="Kompetenzen:"
					items={[
						{ id: "1", text: "Drehen und Fräsen" },
						{ id: "2", text: "Laserschneiden" },
						{ id: "3", text: "Biegen und Stanzen" },
						{ id: "4", text: "Wärmebehandlung" },
						{ id: "5", text: "3D-Messungen" },
					]}
					imageSrc="/SACS_Flugzeug_weiss.png"
					imageAlt="Unternehmen"
				/>
			</section>
			<div className="flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap p-[20px] gap-4">
				<Testimonial
					title="STRUCTURAL COMPONENTS"
					items="RUND UM DEN GLOBUS"
					imageSrc="/structuralComponents.jpg"
					imageAlt="Structural Components"
				/>
				<Testimonial
					title="MECHANICAL SOLUTIONS"
					items="FIRST CLASS ENGINEERING"
					imageSrc="/Mechanical-Solutions.jpg"
					imageAlt="Structural Components"
				/>
				<Testimonial
					title="STANDARD HARDWARE"
					items="ZUSAMMENHALT IN ALLEN BEREICHEN"
					imageSrc="/Standard-Hardware.jpg"
					imageAlt="Standard-Hardware"
				/>
				<Testimonial
					title="FASTNER TECHNOLOGIES"
					items="HOCHWERTIGE BEFESTIGUNGSLOSUNGEN"
					imageSrc="/Fastener-technologies.jpg"
					imageAlt="Structural Components"
				/>
			</div>
			<section className="flex flex-col md:flex-row lg:flex-row lg:gap-6 md:items-start lg:items-start overflow-hidden">
				<AutoPlayMethods />
			</section>
		</>
	);
};
