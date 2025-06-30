"use client";

import Image from "next/image";
import Link from "next/link";
import { CiFacebook, CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { useI18n } from "../../hooks/useI18n";

export const Footer = () => {
	const { tFooter, isLoading } = useI18n();
	return (
		<footer className="bg-orange-900 text-white py-8 px-4">
			<div className="container mx-auto">
				<div className="flex flex-col items-center lg:flex-row lg:justify-between ">
					<div className="mb-8 md:mb-6 md:w-full lg:w-auto lg:mb-0 flex justify-center md:justify-center ">
						<Image
							src="/SACS_logo.png"
							alt="SACS Logo"
							width={180}
							height={60}
							className="mb-4"
						/>
					</div>
					<div className="flex flex-col md:flex-row md:justify-center md:w-full lg:w-auto items-center md:items-start gap-8 md:gap-12">
						<div className="text-center md:text-left">
							<h3 className="text-xl font-bold mb-4">SACS Aerospace GmbH</h3>
							<ul className="space-y-2">
								<li>
									<h2 className="hover:text-orange-400 mb-6">
										Robert-Bosch-Strasse 15 <br /> 72186 Empfingen <br />
										Germany
									</h2>
								</li>
								<li>
									<h2 className="hover:text-orange-400">
										P: +49 7485 97722-100
									</h2>
								</li>
								<li>
									<h2 className="hover:text-orange-400">
										F: +49 7485 97722-109
									</h2>
								</li>
								<li>
									<h2 className="hover:text-orange-400">E: info@sacs.aero</h2>
								</li>
							</ul>
						</div>
						<div className="text-center md:text-left">
							<h3 className="text-xl font-bold mb-4">
								{tFooter("information")}
							</h3>
							<ul className="space-y-2">
								<li>
									<Link href="/unternehmen" className="hover:text-orange-400">
										{tFooter("unternehmen")}
									</Link>
								</li>
								<li>
									<Link href="/eqm" className="hover:text-orange-400">
										EQM
									</Link>
								</li>
								<li>
									<Link href="/newsroom" className="hover:text-orange-400">
										{tFooter("newsroom")}
									</Link>
								</li>
								<li>
									<Link href="/karriere" className="hover:text-orange-400">
										{tFooter("karier")}
									</Link>
								</li>
								<li>
									<Link href="/downloads" className="hover:text-orange-400">
										{tFooter("download")}
									</Link>
								</li>
								<li>
									<Link href="/kontakt" className="hover:text-orange-400">
										{tFooter("contact")}
									</Link>
								</li>
							</ul>
						</div>
						<div className="text-center md:text-left">
							<h3 className="text-xl font-bold mb-4">
								{tFooter("aerospace solutions")}
							</h3>
							<ul className="space-y-2">
								<li>
									<Link
										href="/products/structural-components"
										className="hover:text-orange-400"
									>
										{tFooter("structural components")}
									</Link>
								</li>
								<li>
									<Link
										href="/products/mechanical-solutions"
										className="hover:text-orange-400"
									>
										{tFooter("mechanical solutions")}
									</Link>
								</li>
								<li>
									<Link
										href="/products/standard-hardware"
										className="hover:text-orange-400"
									>
										{tFooter("standard hardware")}
									</Link>
								</li>
								<li>
									<Link
										href="/products/fastener-technologies"
										className="hover:text-orange-400"
									>
										{tFooter("fastener technologies")}
									</Link>
								</li>
							</ul>
						</div>
						<div className="text-center  flex flex-col justify-center items-center">
							<h3 className="text-xl font-bold mb-4">Social Media</h3>
							<ul className="space-y-2 flex flex-row ">
								<li>
									<Link href="https://www.facebook.com/" target="_blank">
										<CiFacebook
											size="2em"
											className="p-1 m-1 hover:text-yellow-500"
										/>
									</Link>
								</li>
								<li>
									<Link href="https://www.instagram.com/" target="_blank">
										<FaInstagram
											size="2em"
											className="p-1 m-1 hover:text-yellow-500"
										/>
									</Link>
								</li>
								<li>
									<Link href="https://www.linkedin.com/" target="_blank">
										<CiLinkedin
											size="2em"
											className="p-1 m-1 hover:text-yellow-500"
										/>
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div className="container mx-auto pt-18">
				<ul className="flex flex-row flex-wrap justify-center items-center mt-4 space-x-4 text-sm">
					<li>
						<p>© {new Date().getFullYear()} SACS Aerospace</p>
					</li>
					<li>
						<Link href="/impresium" className="hover:text-orange-400">
							Impresium |
						</Link>
					</li>
					<li>
						<Link href="/datenschutz" className="hover:text-orange-400">
							{tFooter("privacy")} |
						</Link>
					</li>
					<li>
						<Link href="/cookie" className="hover:text-orange-400">
							{tFooter("cookies")} |
						</Link>
					</li>
				</ul>
			</div>
		</footer>
	);
};

export default Footer;
