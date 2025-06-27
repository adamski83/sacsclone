"use client";

import { useState } from "react";
import Link from "next/link";
import { useI18n } from "../hook/useI18n";
import { usePathname } from "next/navigation";
import { navigationData } from "../types/navigation";
import { LanguageSwitcher } from "./LanguageSwitcher";

export const Navigation = () => {
	const { tNav, isLoading } = useI18n();
	const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const pathname = usePathname();

	const isActiveLink = (href: string) => {
		if (href === "/") {
			return pathname === "/";
		}
		return pathname.startsWith(href);
	};

	const handleDropdownToggle = (itemId: string) => {
		setActiveDropdown(activeDropdown === itemId ? null : itemId);
	};

	const closeMobileMenu = () => {
		setIsMobileMenuOpen(false);
		setActiveDropdown(null);
	};

	return (
		<nav className='bg-inherit shadow-lg sticky top-0 z-50'>
			<div className='max-w-7xl mx-auto px-4'>
				<div className='flex justify-between items-center h-16'>
					<Link href='/' className='flex items-center'></Link>
					<div className='hidden md:flex items-center space-x-8'>
						{navigationData.map((item) => (
							<div key={item.id} className='relative group'>
								{item.children ? (
									<div className='relative'>
										<button
											className={`flex items-center px-3 py-2 text-sm font-medium transition-colors duration-200 ${
												isActiveLink(item.href)
													? "text-orange-600 border-b-2 border-orange-600"
													: "text-white hover:text-orange-600"
											}`}
											onMouseEnter={() => setActiveDropdown(item.id)}
											onMouseLeave={() => setActiveDropdown(null)}>
											{item.label}
											<svg
												className='ml-1 h-4 w-4'
												fill='currentColor'
												viewBox='0 0 20 20'>
												<path
													fillRule='evenodd'
													d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
													clipRule='evenodd'
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
											onMouseLeave={() => setActiveDropdown(null)}>
											<div className='py-1'>
												{item.children.map((child) => (
													<Link
														key={child.id}
														href={child.href}
														className={`block px-4 py-3 text-sm transition-colors duration-200 ${
															isActiveLink(child.href)
																? "bg-orange-50 text-orange-600"
																: "text-gray-700 hover:bg-gray-50 hover:text-orange-600"
														}`}>
														<div className='font-medium'>{child.label}</div>
														{child.description && (
															<div className='text-xs text-gray-500 mt-1'>
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
										}`}>
										{item.label}
									</Link>
								)}
							</div>
						))}
						<LanguageSwitcher />
					</div>
					<button
						className='md:hidden p-2 rounded-md text-white hover:text-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500'
						onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
						<svg
							className='h-6 w-6'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'>
							{isMobileMenuOpen ? (
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									d='M6 18L18 6M6 6l12 12'
								/>
							) : (
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									d='M4 6h16M4 12h16M4 18h16'
								/>
							)}
						</svg>
					</button>
				</div>
				<div
					className={`md:hidden transition-all duration-300 ${
						isMobileMenuOpen
							? "max-h-96 opacity-100"
							: "max-h-0 opacity-0 overflow-hidden"
					}`}>
					<div className='px-2 pt-2 pb-3 space-y-1 bg-gray-50'>
						{navigationData.map((item) => (
							<div key={item.id}>
								{item.children ? (
									<div>
										<button
											className={`w-full text-left px-3 py-2 text-base font-medium transition-colors duration-200 flex items-center justify-between ${
												isActiveLink(item.href)
													? "text-orange-600"
													: "text-gray-700"
											}`}
											onClick={() => handleDropdownToggle(item.id)}>
											{item.label}
											<svg
												className={`h-4 w-4 transition-transform duration-200 ${
													activeDropdown === item.id ? "rotate-180" : ""
												}`}
												fill='currentColor'
												viewBox='0 0 20 20'>
												<path
													fillRule='evenodd'
													d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
													clipRule='evenodd'
												/>
											</svg>
										</button>

										{activeDropdown === item.id && (
											<div className='pl-6 space-y-1'>
												{item.children.map((child) => (
													<Link
														key={child.id}
														href={child.href}
														className={`block px-3 py-2 text-sm transition-colors duration-200 ${
															isActiveLink(child.href)
																? "text-orange-600"
																: "text-gray-600 hover:text-orange-600"
														}`}
														onClick={closeMobileMenu}>
														{child.label}
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
												? "text-orange-600"
												: "text-gray-700 hover:text-orange-600"
										}`}
										onClick={closeMobileMenu}>
										{item.label}
									</Link>
								)}
							</div>
						))}
					</div>
				</div>
			</div>
		</nav>
	);
};
