"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { LanguageSwitcher } from "../LanguageSwitcher/LanguageSwitcher";
import { useNavigationData } from "@/hooks/useNavigationData";

export const Navigation = () => {
	const navigationData = useNavigationData();
	const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState<string | null>(
		null,
	);
	const pathname = usePathname();

	const isActiveLink = (href: string) => {
		if (href === "/") {
			return pathname === href;
		}
		return pathname.startsWith(href);
	};

	const toggleMobileSubmenu = (itemId: string) => {
		setMobileSubmenuOpen(mobileSubmenuOpen === itemId ? null : itemId);
	};

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
		<nav className="bg-inherit shadow-lg sticky top-0 z-50">
			<div className="max-w-7xl mx-auto px-4">
				<div className="flex justify-between items-center h-16">
					<Link href="/" className="flex items-center">
						<div className="text-xl font-bold text-white">SACS</div>
					</Link>
					<div className="hidden md:flex items-center space-x-8">
						{navigationData.map((item) => (
							<div key={item.id} className="relative group">
								{item.children ? (
									<div className="relative">
										<button
											className={`flex items-center px-3 py-2 text-sm font-medium transition-colors duration-200 ${
												isActiveLink(item.href)
													? "text-orange-600 border-b-2 border-orange-600"
													: "text-white hover:text-orange-600"
											}`}
											onMouseEnter={() => setActiveDropdown(item.id)}
											onMouseLeave={() => setActiveDropdown(null)}
										>
											{item.label}
											<svg
												className="ml-1 h-4 w-4"
												fill="currentColor"
												viewBox="0 0 20 20"
											>
												<path
													fillRule="evenodd"
													d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
													clipRule="evenodd"
												/>
											</svg>
										</button>
										<div
											className={`absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 transition-all duration-200 ${
												activeDropdown === item.id
													? "opacity-100 visible"
													: "opacity-0 invisible"
											}`}
											onMouseEnter={() => setActiveDropdown(item.id)}
											onMouseLeave={() => setActiveDropdown(null)}
										>
											<div className="py-1">
												{item.children.map((child) => (
													<Link
														key={child.id}
														href={child.href}
														className={`block px-4 py-3 text-sm transition-colors duration-200 ${
															isActiveLink(child.href)
																? "bg-orange-50 text-orange-600"
																: "text-gray-700 hover:bg-gray-50 hover:text-orange-600"
														}`}
													>
														<div className="font-medium">{child.label}</div>
														{child.description && (
															<div className="text-xs text-gray-500 mt-1">
																{child.description}
															</div>
														)}
													</Link>
												))}
											</div>
										</div>
									</div>
								) : (
									<Link
										href={item.href}
										className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
											isActiveLink(item.href)
												? "text-orange-600 border-b-2 border-orange-600"
												: "text-white hover:text-orange-600"
										}`}
									>
										{item.label}
									</Link>
								)}
							</div>
						))}
						<LanguageSwitcher />
					</div>
					<div className="md:hidden flex items-center space-x-4">
						<LanguageSwitcher />
						<button
							onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
							className="text-white hover:text-orange-600 p-2"
							aria-label="Toggle mobile menu"
						>
							<svg
								className="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
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
				{isMobileMenuOpen && (
					<div className="md:hidden">
						<div className="px-2 pt-2 pb-3 space-y-1 bg-inherit">
							{navigationData.map((item) => (
								<div key={item.id}>
									{item.children ? (
										<div>
											<button
												onClick={() => toggleMobileSubmenu(item.id)}
												className={`w-full flex items-center justify-between px-3 py-2 text-base font-medium transition-colors duration-200 ${
													isActiveLink(item.href)
														? "text-orange-600 bg-inherit"
														: "text-gray-300 hover:text-white hover:bg-gray-700"
												}`}
											>
												<span>{item.label}</span>
												<svg
													className={`h-5 w-5 transition-transform duration-200 ${
														mobileSubmenuOpen === item.id ? "rotate-180" : ""
													}`}
													fill="currentColor"
													viewBox="0 0 20 20"
												>
													<path
														fillRule="evenodd"
														d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
														clipRule="evenodd"
													/>
												</svg>
											</button>
											{mobileSubmenuOpen === item.id && (
												<div className="pl-4 bg-inherit">
													{item.children.map((child) => (
														<Link
															key={child.id}
															href={child.href}
															className={`block px-3 py-2 text-sm transition-colors duration-200 ${
																isActiveLink(child.href)
																	? "text-orange-600 bg-inherit"
																	: "text-gray-300 hover:text-white hover:bg-gray-700"
															}`}
															onClick={() => setIsMobileMenuOpen(false)}
														>
															<div className="font-medium">{child.label}</div>
															{child.description && (
																<div className="text-xs text-gray-400 mt-1">
																	{child.description}
																</div>
															)}
														</Link>
													))}
												</div>
											)}
										</div>
									) : (
										<Link
											href={item.href}
											className={`block px-3 py-2 text-base font-medium transition-colors duration-200 ${
												isActiveLink(item.href)
													? "text-orange-600 bg-gray-500"
													: "text-gray-300 hover:text-white hover:bg-gray-700"
											}`}
											onClick={() => setIsMobileMenuOpen(false)}
										>
											{item.label}
										</Link>
									)}
								</div>
							))}
						</div>
					</div>
				)}
			</div>
		</nav>
	);
};
