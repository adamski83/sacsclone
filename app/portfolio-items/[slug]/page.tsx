import { notFound } from "next/navigation";
import {
	getPortfolioItemBySlug,
	portfolioItems,
} from "../../../data/portfolio-items";

type PortfolioPageProps = {
	params: Promise<{
		slug: string;
	}>;
};

export default async function PortfolioPage({ params }: PortfolioPageProps) {
	const { slug } = await params;
	const data = getPortfolioItemBySlug(slug);

	if (!data) {
		notFound();
	}
	return (
		<div className="min-h-screen bg-ingerit text-white">
			<div className="container mx-auto px-4 py-16">
				<div className="text-center mb-16">
					<h1 className="text-5xl font-bold mb-4">{data.title}</h1>
					<h2 className="text-2xl text-orange-400 mb-8">{data.subtitle}</h2>
				</div>
				<div className="flex items-center mb-16">
					<div>
						<p className="text-lg leading-relaxed mb-8">{data.description}</p>
						<p className="text-lg leading-relaxed mb-8">{data.description2}</p>
						<p className="text-lg leading-relaxed mb-8">{data.description3}</p>
						<p className="text-lg leading-relaxed mb-8">{data.bePart}</p>
						<p className="text-lg leading-relaxed mb-8">{data.aufgaben}</p>
						<p className="text-lg leading-relaxed mb-8">{data.mitBr}</p>
						<h3 className="text-2xl font-semibold mb-6">KEY FEATURES:</h3>
						<ul className="space-y-3">
							{data.features.map((feature, index) => (
								<li key={index} className="flex items-center">
									<span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>
									{feature}
								</li>
							))}
						</ul>
					</div>
					<div className="relative"></div>
				</div>
				<div className="text-center">
					<button className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-8 rounded-lg transition-colors duration-300">
						JETZT BEWERBEN
					</button>
				</div>
			</div>
		</div>
	);
}

export function generateStaticParams() {
	return portfolioItems.map(item => ({
		slug: item.slug,
	}));
}
