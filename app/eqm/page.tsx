import Image from "next/image";

import { Content } from "../components/content";
import { AnimatedStatsSection } from "../animations/animatedStatsSections";

function eqmPage() {
	return (
		<>
			<div className='relative'>
				<Image
					src='/eqm-hero.jpg'
					alt='Hero Image'
					width={1920}
					height={1080}
					className='w-full h-[480px] object-cover '
				/>
				<div className='absolute inset-y-0 left-8 flex items-center'>
					<Image
						src='/sacs-logo.png'
						alt='SACS Logo'
						width={200}
						height={80}
						className='w-auto h-16 md:h-20 lg:h-24'
					/>
				</div>
				<div className='absolute bottom-8 left-8'>
					<p className='text-white text-5xl font-bold tracking-wide'>EQM</p>
				</div>
			</div>
			<section className='m-8'>
				<div>
					<h1 className='text-5xl font-bold mb-8'>WE ARE DIFFERENT</h1>
					<h3 className='text-xl  mb-8'>
						Als eines der führenden Produktions- und Entwicklungsunternehmen der
						Luftfahrtbranche punkten wir mit starken Kernkompetenzen –
						Engineering, Quality und Manufacturing (EQM) – und ermöglichen
						unseren Kunden so bedeutende Wettbewerbsvorteile in einem umkämpften
						Markt.
					</h3>
				</div>
				<div className='flex flex-col md:flex-row items-center justify-between gap-8 '>
					<div>
						<h3 className='text-2xl font-bold'>Engineering</h3>
						<p className='mb-4'>
							Wir entwickeln Ihnen einen Wettbewerbsvorteil durch innovative
							Lösungen.
						</p>
						<h3 className='text-2xl font-bold'>Quality</h3>
						<p className='mb-4 '>
							Wir garantieren höchste Qualität durch modernste Prozesse.
						</p>
						<h3 className='text-2xl font-bold'>Manufacturing</h3>
						<p className='mb-4'>
							Wir produzieren maximale Präzision durch neuste
							Fertigungstechnologien.
						</p>
					</div>
					<Image src='/eqm.png' alt='eqm' height={640} width={600} />
				</div>
			</section>

			<Image
				src='/airplane-interior.jpg'
				alt='Hero Image'
				width={1920}
				height={1080}
				className='w-full h-[300px] object-cover '
			/>
			<section className='m-8 '>
				<h2 className='text-4xl mb-8'>ENGINEERING</h2>
				<h3 className=' mb-8'>
					Lösungsorientiertes Arbeiten – trotz den strikten Anforderungen der
					Luftfahrt gelingt es unserem Team, kundenorientierte Lösungswege zu
					finden und maßgeschneidert umzusetzen. Dabei wird der Funktionalitäts-
					und Qualitätsfaktor stets berücksichtigt.
				</h3>
				<h3>
					Von einfachen Scheiben bis hin zu hochkomplexen mechanischen
					Baugruppen – mit geballtem Know How und langjähriger Erfahrung stellt
					SACS Aerospace sicher, alle Projekte erfolgsorientiert umzusetzen.
					Neben den steigenden Entwicklungsarbeiten im Bereich Umwelt (z.B.
					REACH), nimmt auch der Einsatz von 3D-Druck Technologien stetig zu.
					Ein schnelleres verifizieren von Entwicklungsschritten gelingt durch
					Prototypenbau mit 3D-Drucker, Testmöglichkeiten mit Klimakammer,
					Kuka-Roboter für Endurace-Tests, Salzsprühnebelkammer und
					Zug-Druck-Prüfmaschinen.
				</h3>
				<section className='mt-8 flex md:flex-row flex-col gap-8 justify-center'>
					<AnimatedStatsSection
						duration={2.5}
						endValue={100}
						label='Projekte erfolgreich umgesetzt'
					/>
					<AnimatedStatsSection
						duration={2.5}
						endValue={100}
						label='Projekte erfolgreich umgesetzt'
					/>
					<AnimatedStatsSection
						duration={2.5}
						endValue={100}
						label='Projekte erfolgreich umgesetzt'
					/>
				</section>
			</section>
			<section className='m-8 flex md:flex-row flex-col '>
				<Content
					title='Engineering Services :'
					items={[
						{
							text: "Build-to-print Herstellung von Baugruppen/Bauteilen basierend auf Kundenanforderungen, die aus 2D-3D Modellen abgeleitet werden ",
							id: "build-to-print",
						},
						{
							text: "Design-to-build Entwicklung von schlüsselfertigen Einbaulösungen anhand Schnittstellenanforderungen unsere Kunden",
							id: "designe-to-build",
						},
						{
							text: "Build-to-spec Entwicklung und Produktion von standardisierten Bauteilen",
							id: "qualitaetssicherung",
						},
					]}
					imageSrc='/SACS_Flugzeug_weiss.png'
					imageAlt='Kompetenzen Image'
					checkIconSrc='/check.png'
				/>
				<Content
					title='Vorteile, die wir bieten:'
					items={[
						{
							text: "Prüfung der Kunden-Bauunterlagen auf fertigungsgerechte Auslegung",
							id: "build-to-print",
						},
						{
							text: "Design FMEA (Fehlermöglichkeitseinflussanalyse)",
							id: "designe-to-build",
						},
						{
							text: "Erstellung SACS Aerospace interner Zeichnungssets nach Kundenmodell oder Kundenbauunterlagen",
							id: "qualitaetssicherung",
						},
						{
							text: "Definition, Planung und Durchführung von notwendigen Qualifizierungen und Zulassungen unter Einbindung von Kunden und Behörden, incl. FAI und Serienbetreuung",
							id: "planung-und-durchfuehrung",
						},
						{
							text: "3D-Druck und Prototypenbau im eigenen Technologiebereich",
							id: "3d-druck-und-prototypenbau",
						},
						{
							text: "Entwicklungsbegleitende In-House Verifikationstests",
							id: "entwicklungsbegleitende-in-house-verifikationstests",
						},
						{
							text: "Erstellung SACS Aerospace interner Zeichnungssets nach Kundenmodell oder Kundenbauunterlagen",
							id: "internen-zeichnungssets",
						},
						{
							text: "Lifecycle Tests (herkömmliche Testvorrichtungen in Eigenentwicklung und – produktion oder mit Kuka-Roboter)",
							id: "lifecycle-tests",
						},
						{
							text: "Klimakammer",
							id: "klimakammer",
						},
						{
							text: "Salzsprühnebelkammer",
							id: "salzspruehne",
						},
					]}
					imageSrc='/SACS_Flugzeug_weiss.png'
					imageAlt='Kompetenzen Image'
					checkIconSrc='/check.png'
				/>
			</section>
			<div>
				<Image
					src='/mesure.jpg'
					alt='Hero Image'
					width={1920}
					height={1080}
					className='w-full h-[480px] object-cover '
				/>
			</div>
			<section className='m-8 '>
				<h2 className='text-4xl mb-8'>QUALITY</h2>
				<h3 className=' mb-8'>
					Qualität auf höchstem Niveau – SACS Aerospace steht für langlebige und
					hochwertige System- und Produktbaugruppen made in Germany.
				</h3>
				<h3>
					Eine systematische Durchführung der Herstellbarkeitsanalyse unter
					Berücksichtigung aller Qualitätsanforderungen führen wir bereits bei
					der Angebotsphase durch. Mit dem Einsatz von innovativen
					Qualitätsmanagement-Tools gelingt es uns frühzeitig, potentielle
					Fehlerquellen zu identifizieren und zu vermeiden. Eine Verknüpfung von
					Produkt- und Prozess-FMEA ermöglicht das Ausschließen von potentiellen
					Funktionsbeeinträchtigungen – auch in Serien. 100% Qualität: die
					erfolgreiche Umsetzung einer Null-Fehler-Strategie gelingt durch
					schnelle Qualitätsregelkreise in Produktion, technischer Planung und
					zuverlässiges Qualitätsmanagement in allen Fertigungsbereichen.
				</h3>
				<section className='mt-8 flex md:flex-row flex-col gap-8 justify-center'>
					<AnimatedStatsSection
						duration={2.5}
						endValue={2800}
						label='Anzahl Prüfmittel'
					/>
					<AnimatedStatsSection
						duration={2.5}
						endValue={50}
						label='Anzahl Qualifikationen pro Jahr'
					/>
					<AnimatedStatsSection
						duration={2.5}
						endValue={1000000}
						label='Anzahl Testzyklen pro Jahr'
					/>
				</section>
			</section>
			<section className='m-8 flex md:flex-row flex-col '>
				<Content
					title='Vorteile, die wir bieten:'
					items={[
						{
							text: "Zug/Druck Prüfmaschine",
							id: "zug-druck-pruefmaschine",
						},
						{
							text: "Salzsprühkammer",
							id: "salzspruehne",
						},
						{
							text: "Klimakammer",
							id: "klimakammer",
						},
						{
							text: "Produktlebensdauertest (Statiktest, Dynamiktest)",
							id: "produktlebensdauertest",
						},
						{
							text: "Vibrationstest",
							id: "vibrationstest",
						},
						{
							text: "Zerstörungsfreie Prüfung (NDT)",
							id: "zerstoerungsfreie-pruefung",
						},
					]}
					imageSrc='/SACS_Flugzeug_weiss.png'
					imageAlt='Kompetenzen Image'
					checkIconSrc='/check.png'
				/>
				<Content
					title='Einsatz neuester Messmethoden und Anwendungen im gesamten Fertigungsbereich:'
					items={[
						{
							text: "Neueste CAQ-Software",
							id: "neueste-caq-software",
						},
						{
							text: "Entwicklung eigener Prüfmethoden und Geräte zur Qualitätsabsicherung",
							id: "entwicklung-eigener-pruefmethoden",
						},
						{
							text: "Große Bandbreite an Test-Equipment – von Sonderprüfeinrichtungen über Entwicklungsunterstützung bis hin zu 100%-Prüfung in der Fertigung",
							id: "grosse-bandbreite-test-equipment",
						},
						{
							text: "Delegated Inspection (RID/SID)",
							id: "delegated-inspection",
						},
						{
							text: "Six Sigma",
							id: "six-sigma",
						},
						{
							text: "Professionelle Prüfmittelverwaltung mit einem Portfolio von über 2.800 Prüfmitteln",
							id: "professionelle-pruefmittelverwaltung",
						},
					]}
					imageSrc='/SACS_Flugzeug_weiss.png'
					imageAlt='Kompetenzen Image'
					checkIconSrc='/check.png'
				/>
			</section>
		</>
	);
}

export default eqmPage;
