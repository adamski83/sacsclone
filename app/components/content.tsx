"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type CompetencyItem = {
	text: string;
	id: string;
};

type Props = {
	title: string;
	items: CompetencyItem[];
	imageSrc: string;
	imageAlt: string;
	checkIconSrc?: string;
	animationDirection?: "left" | "right";
};

export const Content = ({
	title,
	items,
	imageSrc,
	imageAlt,
	checkIconSrc = "/check.png",
	animationDirection = "left",
}: Props) => {
	const imageRef = useRef<HTMLDivElement>(null);
	const containerRef = useRef<HTMLDivElement>(null);
	const titleRef = useRef<HTMLHeadingElement>(null);
	const itemsRef = useRef<HTMLDivElement[]>([]);

	useEffect(() => {
		const image = imageRef.current;
		const container = containerRef.current;
		const title = titleRef.current;

		if (!image || !container || !title) return;

		const startX = animationDirection === "left" ? -200 : 200;

		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: container,
				start: "top 80%",
				end: "bottom 20%",
				toggleActions: "play none none reverse",
			},
		});

		gsap.set(image, {
			x: startX,
			opacity: 0,
			rotation: animationDirection === "left" ? -45 : 45,
			scale: 0.5,
		});

		gsap.set(title, {
			opacity: 0,
			y: 30,
		});

		gsap.set(itemsRef.current, {
			opacity: 0,
			x: animationDirection === "left" ? -50 : 50,
		});

		tl.to(image, {
			x: 0,
			opacity: 1,
			rotation: 0,
			scale: 1,
			duration: 1.2,
			ease: "back.out(1.7)",
		});

		tl.to(
			image,
			{
				y: -10,
				duration: 0.3,
				yoyo: true,
				repeat: 1,
				ease: "power2.inOut",
			},
			"-=0.3"
		);

		tl.to(
			title,
			{
				opacity: 1,
				y: 0,
				duration: 0.6,
				ease: "power2.out",
			},
			"-=0.8"
		);

		tl.to(
			itemsRef.current,
			{
				opacity: 1,
				x: 0,
				duration: 0.4,
				stagger: 0.1,
				ease: "power2.out",
			},
			"-=0.4"
		);

		return () => {
			ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
		};
	}, [animationDirection]);

	return (
		<div
			ref={containerRef}
			className='flex flex-col items-center p-[20px] gap-8 relative'>
			<div ref={imageRef} className='relative group cursor-pointer'>
				<Image
					src={imageSrc}
					alt={imageAlt}
					width={100}
					height={100}
					className='flex-shrink-0 transition-all duration-300 hover:scale-110 drop-shadow-lg'
				/>
				<div className='absolute inset-0 bg-orange-400 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl -z-10 scale-150'></div>
			</div>

			<section className='w-full'>
				<h3 ref={titleRef} className='text-xl font-bold mb-6 text-center'>
					{title}
				</h3>

				<div className='space-y-4'>
					{items.map((item, index) => (
						<div
							key={item.id}
							ref={(el) => {
								if (el) itemsRef.current[index] = el;
							}}
							className='flex items-start mb-4 group hover:bg-gray-50 p-2 rounded-lg transition-all duration-300'>
							<div className='flex-shrink-0 mt-1'>
								<Image
									src={checkIconSrc}
									alt='Checkmark'
									width={20}
									height={20}
									className='mr-4 transition-transform duration-300 group-hover:scale-110'
								/>
							</div>
							<p className='text-sm leading-relaxed text-white group-hover:text-gray-900 transition-colors duration-300'>
								{item.text}
							</p>
						</div>
					))}
				</div>
			</section>
		</div>
	);
};
