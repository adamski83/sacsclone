export type PortfolioItem = {
	slug: string;
	title: string;
	subtitle: string;
	description: string;
	description2: string;
	description3: string;
	bePart: string;
	aufgaben: string;
	mitBr: string;
	image: string;
	features: string[];
};

export const portfolioItems: PortfolioItem[] = [
	{
		slug: "aerospace-solutions",
		title: "Auszubildenden (m/w/d) – zum Werkzeugmechaniker",
		subtitle: "Beginn 1. September 2025",
		description:
			"We are part of aerospace SACS Aerospace entwickelt neue Perspektiven. Kreativität ist der Motor der Innovation, der Weiterentwicklung und der Leidenschaft. Kreativität verschafft uns Gehör und ermöglicht uns die Freiheit, anders zu denken. Weiter zu denken. Wir lassen Kreativität zu und fördern sie.",
		description2:
			"We are SACS Aerospace Als zukunftsorientiertes Produktions- und Entwicklungsunternehmen sitzt die SACS Aerospace GmbH (Solid Aerospace Connecting Systems) in der ersten Klasse. Mit Erfahrung, Kompetenz und jeder Menge Kreativität im Gepäck geht unser erstklassiges Team an Bord, stellt sich allen Herausforderungen oder gar Turbulenzen.",
		description3:
			"We are one Wir stehen für SACS Aerospace. Wir schreiben Geschichte gemeinsam. Wir bieten Dir eine Plattform, von der aus Du durchstarten kannst. Das internationale Umfeld ermöglicht einen spannenden Arbeitsplatz und viel Gestaltungsspielraum.",
		bePart:
			"Be Part of Us Zur Erweiterung unseres Teams suchen wir zum nächstmöglichen Zeitpunkt einen Auszubildenden (m/w/d) zum Werkzeugmechaniker:",
		aufgaben:
			"Das ist Dein Aufgabenbereich: Herstellung von Präzisionswerkzeugen, Vorrichtungen und Formen. Wartung und Reparatur von Produktionsanlagen. Programmierung und Bedienung von CNC-Maschinen. Qualitätskontrolle und Maßprüfung. Montage und Instandhaltung von Werkzeugen.",
		mitBr:
			"Das solltest Du mitbringen: Realschulabschluss oder vergleichbare Qualifikation. Technisches Verständnis und handwerkliches Geschick. Interesse an Metallbearbeitung und Präzisionsfertigung. Teamfähigkeit und Zuverlässigkeit. Gute Kenntnisse in Mathematik und Physik.",
		image: "/werkzeugmechaniker.jpg",
		features: [
			"3,5-jährige Ausbildung",
			"Modernste CNC-Technologie",
			"Übernahmegarantie bei guten Leistungen",
			"Intensive Betreuung durch erfahrene Ausbilder",
		],
	},
	{
		slug: "manufacturing",
		title: "Luft- und Raumfahrttechniker (m/w/d)",
		subtitle: "Vollzeit - Unbefristet",
		description:
			"We are part of aerospace SACS Aerospace entwickelt neue Perspektiven. Kreativität ist der Motor der Innovation, der Weiterentwicklung und der Leidenschaft. Als Experten in der Luft- und Raumfahrtbranche schaffen wir innovative Lösungen für die Zukunft.",
		description2:
			"We are SACS Aerospace Als führendes Unternehmen in der Aerospace-Branche entwickeln wir hochpräzise Komponenten und Systeme für die Luftfahrt. Unser Team aus erfahrenen Ingenieuren und Technikern arbeitet an wegweisenden Projekten für internationale Kunden.",
		description3:
			"We are one Gemeinsam gestalten wir die Zukunft der Luftfahrt. In unserem dynamischen Team findest Du herausfordernde Aufgaben und beste Entwicklungsmöglichkeiten in einem internationalen Umfeld.",
		bePart:
			"Be Part of Us Zur Verstärkung unseres Engineering-Teams suchen wir zum nächstmöglichen Zeitpunkt einen Luft- und Raumfahrttechniker (m/w/d):",
		aufgaben:
			"Das ist Dein Aufgabenbereich: Entwicklung und Konstruktion von Aerospace-Komponenten. Durchführung von Berechnungen und Simulationen. Erstellen technischer Dokumentationen und Zeichnungen. Unterstützung bei Zertifizierungsprozessen. Zusammenarbeit mit internationalen Kunden und Partnern.",
		mitBr:
			"Das solltest Du mitbringen: Abgeschlossenes Studium der Luft- und Raumfahrttechnik oder vergleichbare Qualifikation. Erfahrung mit CAD-Software (CATIA, SolidWorks). Kenntnisse in Aerospace-Standards (DO-178, DO-254). Sehr gute Englischkenntnisse. Teamfähigkeit und analytisches Denken.",
		image: "/aerospace-engineer.jpg",
		features: [
			"Arbeit an innovativen Aerospace-Projekten",
			"Internationales Arbeitsumfeld",
			"Weiterbildungsmöglichkeiten",
			"Attraktive Vergütung und Benefits",
		],
	},
	{
		slug: "research-development",
		title: "Qualitätsmanager (m/w/d)",
		subtitle: "Vollzeit - Aerospace Branche",
		description:
			"We are part of aerospace SACS Aerospace setzt auf höchste Qualitätsstandards. Als Qualitätsmanager spielst Du eine zentrale Rolle bei der Sicherstellung unserer exzellenten Produktqualität in der anspruchsvollen Aerospace-Branche.",
		description2:
			"We are SACS Aerospace Qualität ist unser Markenzeichen. Mit modernsten Prüfverfahren und strenge Qualitätskontrolle gewährleisten wir, dass unsere Produkte den höchsten Standards der Luftfahrtindustrie entsprechen.",
		description3:
			"We are one In unserem Qualitätsteam arbeitest Du mit Experten zusammen, die Leidenschaft für Perfektion teilen. Gemeinsam stellen wir sicher, dass jedes Produkt unsere hohen Erwartungen erfüllt.",
		bePart:
			"Be Part of Us Zur Erweiterung unseres Qualitätsmanagement-Teams suchen wir einen erfahrenen Qualitätsmanager (m/w/d):",
		aufgaben:
			"Das ist Dein Aufgabenbereich: Implementierung und Überwachung von Qualitätsmanagementsystemen nach EN 9100. Durchführung interner und externer Audits. Lieferantenbewertung und -entwicklung. Reklamationsbearbeitung und Korrekturmaßnahmen. Kontinuierliche Verbesserung der Qualitätsprozesse.",
		mitBr:
			"Das solltest Du mitbringen: Abgeschlossene technische Ausbildung oder Studium. Mehrjährige Erfahrung im Qualitätsmanagement, idealerweise in der Aerospace-Branche. Zertifizierung als Qualitätsmanager oder Auditor. Kenntnisse der EN 9100 und verwandter Standards. Analytische Denkweise und Kommunikationsstärke.",
		image: "/quality-manager.jpg",
		features: [
			"Verantwortung für kritische Aerospace-Komponenten",
			"Arbeit mit internationalen Standards",
			"Kontinuierliche Weiterbildung",
			"Einfluss auf Produktqualität und Sicherheit",
		],
	},
	{
		slug: "sustainability",
		title: "Projektmanager Aerospace (m/w/d)",
		subtitle: "Vollzeit - Führungsposition",
		description:
			"We are part of aerospace SACS Aerospace realisiert komplexe Aerospace-Projekte. Als Projektmanager führst Du interdisziplinäre Teams und sorgst für die erfolgreiche Umsetzung anspruchsvoller Kundenprojekte von der Konzeption bis zur Auslieferung.",
		description2:
			"We are SACS Aerospace Unsere Projekte prägen die Zukunft der Luftfahrt. Mit agilen Methoden und modernster Technologie entwickeln wir Lösungen, die unsere Kunden begeistern und neue Standards in der Branche setzen.",
		description3:
			"We are one Als Projektmanager bist Du der Dirigent eines Orchesters aus Ingenieuren, Technikern und Spezialisten. Gemeinsam verwandeln wir innovative Ideen in marktreife Produkte.",
		bePart:
			"Be Part of Us Zur Leitung strategischer Projekte suchen wir einen erfahrenen Projektmanager Aerospace (m/w/d):",
		aufgaben:
			"Das ist Dein Aufgabenbereich: Leitung komplexer Aerospace-Entwicklungsprojekte. Koordination interdisziplinärer Teams und externer Partner. Budgetplanung und Ressourcenmanagement. Risikomanagement und Qualitätssicherung. Kundenbetreuung und Stakeholder-Management.",
		mitBr:
			"Das solltest Du mitbringen: Studium im Bereich Luftfahrttechnik, Maschinenbau oder BWL. Mehrjährige Erfahrung im Projektmanagement, vorzugsweise in der Aerospace-Branche. PMP- oder PRINCE2-Zertifizierung von Vorteil. Sehr gute Englischkenntnisse. Führungsqualitäten und Kommunikationsstärke.",
		image: "/project-manager.jpg",
		features: [
			"Leitung strategischer Aerospace-Projekte",
			"Internationale Kundenbetreuung",
			"Führung von Expertenteams",
			"Gestaltung der Unternehmenszukunft",
		],
	},
];

export const getPortfolioItemBySlug = (
	slug: string
): PortfolioItem | undefined => {
	return portfolioItems.find(item => item.slug === slug);
};

export const generateSlug = (title: string): string => {
	return title
		.toLowerCase()
		.replace(/[^a-z0-9\s&]/g, "") // usuń znaki specjalne
		.replace(/\s+&\s+/g, "-") // zamień " & " na "-"
		.replace(/\s+/g, "-") // zamień spacje na myślniki
		.replace(/-+/g, "-") // usuń podwójne myślniki
		.trim();
};
