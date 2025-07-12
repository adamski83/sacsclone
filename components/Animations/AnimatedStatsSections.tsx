"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AnimatedCounter = ({
	endValue,
	duration = 2,
	label,
}: {
	endValue: number;
	duration?: number;
	label: string;
}) => {
	const numberRef = useRef<HTMLHeadingElement>(null);
	const containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const element = numberRef.current;
		const container = containerRef.current;

		if (!element || !container) return;

		const countAnimation = { value: 0 };

		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: container,
				start: "top 80%",
				end: "bottom 20%",
				toggleActions: "play none none reverse",
			},
		});

		tl.fromTo(
			container,
			{
				opacity: 0,
				y: 50,
				scale: 0.8,
			},
			{
				opacity: 1,
				y: 0,
				scale: 1,
				duration: 0.6,
				ease: "back.out(1.7)",
			}
		);

		tl.to(
			countAnimation,
			{
				value: endValue,
				duration: duration,
				ease: "power2.out",
				onUpdate: () => {
					if (element) {
						element.textContent = Math.floor(
							countAnimation.value
						).toLocaleString();
					}
				},
			},
			"-=0.3"
		);

		return () => {
			ScrollTrigger.getAll().forEach(trigger => trigger.kill());
		};
	}, [endValue, duration]);

	return (
		<div ref={containerRef} className="group cursor-pointer">
			<div className="text-center p-6 rounded-lg  shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2  ">
				<h4
					ref={numberRef}
					className="text-4xl md:text-5xl font-bold text-orange-600 mb-2 font-mono"
				>
					0
				</h4>
				<h5 className="text-white text-sm md:text-base font-medium leading-tight">
					{label}
				</h5>
			</div>
		</div>
	);
};
interface AnimatedStatsSectionProps {
	endValue: number;
	duration?: number;
	label: string;
}

export const AnimatedStatsSection = ({
	endValue,
	duration,
	label,
}: AnimatedStatsSectionProps) => {
	const sectionRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const section = sectionRef.current;
		if (!section) return;

		gsap.fromTo(
			section,
			{
				background: "inherit",
			},
			{
				background: "inherit",
				duration: 1,
				scrollTrigger: {
					trigger: section,
					start: "top 70%",
					end: "bottom 30%",
					toggleActions: "play none none reverse",
				},
			}
		);

		return () => {
			ScrollTrigger.getAll().forEach(trigger => trigger.kill());
		};
	}, []);

	return (
		<div ref={sectionRef} className="py-16 px-4 ">
			<div className="max-w-6xl mx-auto">
				<div className="text-center mb-12"></div>
				<div className="flex flex-col md:flex-row items-center justify-center gap-8">
					<AnimatedCounter
						endValue={endValue}
						duration={duration}
						label={label}
					/>
				</div>
			</div>
		</div>
	);
};
