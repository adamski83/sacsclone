"use client";

import "./carousel.css";
import Link from "next/link";
import { useRef } from "react";
import Slider from "react-slick";
import { generateSlug, portfolioItems } from "../../data/portfolio-items";

type SlideItem = {
	id: string;
	title: string;
	description: string;
	slug?: string;
};

const slideItems: SlideItem[] = portfolioItems.map((item, index) => ({
	id: (index + 1).toString(),
	title: item.title,
	description: item.subtitle,
	slug: item.slug,
}));

function AutoPlayMethods() {
	const sliderRef = useRef<Slider>(null);

	const settings = {
		dots: true,
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		arrows: false,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 640,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};

	return (
		<section className="py-16 px-4 bg-inherit w-full">
			<div className="max-w-4xl mx-auto">
				<h2 className="text-2xl md:text-4xl font-bold text-center mb-12 text-white uppercase">
					Aktuele Stellangebotte
				</h2>
				<article className="relative mb-8">
					<Slider ref={sliderRef} {...settings}>
						{slideItems.map((item) => {
							const href = `/portfolio-items/${
								item.slug || generateSlug(item.title)
							}`;
							return (
								<div key={item.id} className="px-2">
									<Link
										href={href}
										className="shadow-2xl flex flex-col justify-center h-[300px] sm:h-[350px] lg:h-[300px] transition-transform duration-300 hover:scale-105 cursor-pointer bg-inherit rounded-lg overflow-hidden mx-2"
									>
										<h3 className="text-lg sm:text-xl md:text-2xl font-bold text-center mb-2">
											{item.title}
										</h3>
										<p className="text-sm sm:text-base md:text-lg text-center">
											{item.description}
										</p>
									</Link>
								</div>
							);
						})}
					</Slider>
					<article className="flex justify-center mt-8 space-x-2">
						{slideItems.map((_, index) => (
							<button
								key={index}
								className="w-3 h-3 bg-gray-400 rounded-full hover:bg-orange-500 transition-colors duration-300 focus:outline-none"
								onClick={() => sliderRef.current?.slickGoTo(index)}
							/>
						))}
					</article>
				</article>
			</div>
		</section>
	);
}

export default AutoPlayMethods;
