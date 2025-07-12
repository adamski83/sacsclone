"use client";

import { useNavigationData } from "@/hooks/useNavigationData";
import Link from "next/link";
import { useState } from "react";
import { LanguageSwitcher } from "../LanguageSwitcher/LanguageSwitcher";
import { DesktopMenu } from "./DesktopMenu";
import { MobileMenu } from "./MobileMenu";

export const Navigation = () => {
	const navigationData = useNavigationData();
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
	const closeMobileMenu = () => setIsMobileMenuOpen(false);

	if (navigationData.length === 0) {
		return (
			<nav className="bg-inherit shadow-lg sticky top-0 z-50">
				<div className="max-w-7xl mx-auto px-4">
					<div className="flex justify-between items-center h-16">
						<div className="animate-pulse bg-gray-200 h-8 w-full rounded"></div>
					</div>
				</div>
			</nav>
		);
	}

	return (
		<nav className="bg-inherit shadow-lg sticky top-0 z-50" role="navigation">
			<div className="max-w-7xl mx-auto px-4">
				<div className="flex justify-between items-center h-16">
					<Link
						href="/"
						className="flex items-center focus:outline-none focus:ring-2 focus:ring-orange-500 rounded"
					>
						<div className="text-xl font-bold text-white">SACS</div>
					</Link>
					<DesktopMenu navigationData={navigationData} />
					<div className="hidden md:flex items-center space-x-4">
						<LanguageSwitcher />
					</div>
					<div className="md:hidden flex items-center space-x-4">
						<LanguageSwitcher />
						<button
							onClick={toggleMobileMenu}
							className="text-white hover:text-orange-600 p-2 focus:outline-none focus:ring-2 focus:ring-orange-500 rounded"
							aria-label={
								isMobileMenuOpen ? "Close mobile menu" : "Open mobile menu"
							}
							aria-expanded={isMobileMenuOpen}
							aria-controls="mobile-menu"
						>
							<svg
								className="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								aria-hidden="true"
							>
								{isMobileMenuOpen ? (
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M6 18L18 6M6 6l12 12"
									/>
								) : (
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M4 6h16M4 12h16M4 18h16"
									/>
								)}
							</svg>
						</button>
					</div>
				</div>
				<MobileMenu
					navigationData={navigationData}
					isOpen={isMobileMenuOpen}
					onClose={closeMobileMenu}
				/>
			</div>
		</nav>
	);
};
