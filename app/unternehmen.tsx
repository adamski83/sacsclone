import Image from "next/image";

import AutoPlayMethods from "./components/carousel";
import { Content } from "./components/content";
import { Testimonial } from "./components/testimonial";

const competencies = [
	[
		{ id: "1", text: "Design und Entwicklung" },
		{ id: "2", text: "Produktion und Assemblierung" },
		{ id: "3", text: "Supply Chain Management" },
		{ id: "4", text: "Werkzeugentwicklung und Produktion" },
		{ id: "5", text: "Lager und Logistik" },
		{ id: "6", text: "Montage von Baugruppen" },
	],
	[
		{ id: "1", text: "EN 9100" },
		{ id: "2", text: "EASA PART 21 SUBPART G" },
		{ id: "3", text: "EASA PART 145" },
	],
	[
		{ id: "1", text: "Drehen und Fräsen" },
		{ id: "2", text: "Laserschneiden" },
		{ id: "3", text: "Biegen und Stanzen" },
		{ id: "4", text: "Wärmebehandlung" },
		{ id: "5", text: "3D-Messungen" },
	],
];

export const Unternehmen = () => {
	return (
		<>
			<div className='flex flex-col items-start mt-16 p-[20px] h-fit'>
				<section className='flex flex-col lg:flex-row lg:gap-8'>
					<div className='flex flex-col lg:flex-1'>
						<h1 className='text-3xl mb-2 '>UNTERNEHMEN</h1>
						<h2 className='text-5xl font-bold mb-10 leading-[62px]'>
							WE ARE SACS AEROSPACE
						</h2>
						<p className='text-lg text-white leading-[35px] mb-6'>
							Wir entwickeln neue Perspektiven. Weltweit startet jede Sekunde
							ein Flugzeug. Namhafte Flugzeughersteller wie AIRBUS, BOEING und
							BOMBARDIER heben täglich mit unseren Technologien ab. Als
							zukunftsorientiertes Produktions- und Entwicklungsunternehmen
							sitzen wir in der ersten Klasse.
							<br />
							<br />
							Innovation und Präzision sind unser Treibstoff. Kreativität und
							Leidenschaft unser Antrieb.
							<br />
							<br />
							We are SACS – The art of aerospace
						</p>
						<button className='btn btn-outline btn-warning bg-orange-900 text-white border-none hover:bg-yellow-500 my-6 lg:my-12 w-[104px] py-6'>
							MEHR
						</button>
					</div>
					<div className='lg:flex-1'>
						<Image
							src='/plain.png'
							alt='Unternehmen'
							width={600}
							height={600}
						/>
					</div>
				</section>
				<section className='flex flex-col lg:flex-row lg:gap-8'>
					<div className='flex flex-col lg:flex-1'>
						<h1 className='text-3xl mb-2 '>EQM</h1>
						<h2 className='text-5xl font-bold mb-10 leading-[62px]'>
							WE ARE DIFFERENT
						</h2>
						<p className='text-lg text-white leading-[35px] mb-6'>
							Als eines der führenden Produktions- und Entwicklungsunternehmen
							der Luftfahrtbranche punkten wir mit starken Kernkompetenzen –
							Engineering, Quality und Manufacturing (EQM) – und ermöglichen
							unseren Kunden so bedeutende Wettbewerbsvorteile in einem
							umkämpften Markt.
							<br />
							<br />
							Innovation und Präzision sind unser Treibstoff. Kreativität und
							Leidenschaft unser Antrieb.
							<br />
							<br />
							We are SACS – The art of aerospace
						</p>
						<button className='btn btn-outline btn-warning bg-orange-900 text-white border-none hover:bg-yellow-500 my-6 lg:my-12 w-[104px] py-6'>
							MEHR
						</button>
					</div>
					<div className='lg:flex-1'>
						<Image src='/eqm.png' alt='Unternehmen' width={600} height={600} />
					</div>
				</section>
				<section className='flex flex-col lg:flex-row lg:gap-8'>
					<div className='flex flex-col lg:flex-1'>
						<h1 className='text-3xl mb-2 '>AEROSPACE SOLUTIONS</h1>
						<h2 className='text-5xl font-bold mb-10 leading-[62px]'>
							WE FLY HIGH
						</h2>
						<p className='text-lg text-white leading-[35px] mb-6'>
							Die SACS Aerospace GmbH wurde im Jahr 2002 als Produktions- und
							Entwicklungsunternehmen gegründet und setzt sich täglich mit
							innovativen Lösungen für die Luftfahrt auseinander.
							Zukunftsweisendes Engineering, modernste Fertigungstechnologien
							und effizientes Supply Chain Management ermöglichen dabei
							Präzision auf höchstem Niveau.
							<br />
							<br />
							Ein Expertenteam in den Bereichen
							<span className='font-bold'>
								Structural Components, Mechanical Solutions, Standard Hardware
							</span>
							und <span className='font-bold'> Fastener Technologies</span>{" "}
							garantiert Fachwissen und Kompetenz:
							<br />
							<br />
						</p>
						<button className='btn btn-outline btn-warning bg-orange-900 text-white border-none hover:bg-yellow-500 my-6 lg:my-12 w-[104px] py-6'>
							MEHR
						</button>
					</div>
					<div className='lg:flex-1'>
						<Image
							src='/plain.png'
							alt='Unternehmen'
							width={600}
							height={600}
						/>
					</div>
				</section>
			</div>
			<section className='flex md:flex-row  justify-center flex-col lg:flex-row lg:gap-6 md:items-start lg:items-start'>
				<Content
					title='Kompetenzen:'
					items={competencies[0]}
					imageSrc='/SACS_Flugzeug_weiss.png'
					imageAlt='Unternehmen'
				/>
				<Content
					title='Kompetenzen:'
					items={competencies[1]}
					imageSrc='/SACS_Flugzeug_weiss.png'
					imageAlt='Unternehmen'
				/>
				<Content
					title='Kompetenzen:'
					items={competencies[2]}
					imageSrc='/SACS_Flugzeug_weiss.png'
					imageAlt='Unternehmen'
				/>
			</section>
			<div className='flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap p-[20px] gap-4'>
				<Testimonial
					title='STRUCTURAL COMPONENTS'
					items='RUND UM DEN GLOBUS'
					imageSrc='/structuralComponents.jpg'
					imageAlt='Structural Components'
				/>
				<Testimonial
					title='MECHANICAL SOLUTIONS'
					items='FIRST CLASS ENGINEERING'
					imageSrc='/Mechanical-Solutions.jpg'
					imageAlt='Structural Components'
				/>
				<Testimonial
					title='STANDARD HARDWARE'
					items='ZUSAMMENHALT IN ALLEN BEREICHEN'
					imageSrc='/Standard-Hardware.jpg'
					imageAlt='Standard-Hardware'
				/>
				<Testimonial
					title='FASTNER TECHNOLOGIES'
					items='HOCHWERTIGE BEFESTIGUNGSLOSUNGEN'
					imageSrc='/Fastener-technologies.jpg'
					imageAlt='Structural Components'
				/>
			</div>
			<section className='flex flex-col md:flex-row lg:flex-row lg:gap-6 md:items-start lg:items-start overflow-hidden'>
				<AutoPlayMethods />
			</section>
		</>
	);
};
