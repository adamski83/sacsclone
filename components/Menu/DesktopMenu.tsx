"use client";

import { useActiveLink } from "@/hooks/useActiveLink";
import { NavigationItem } from "@/types/navigation";
import Link from "next/link";
import { useState } from "react";

interface DesktopMenuProps {
	navigationData: NavigationItem[];
}

export const DesktopMenu = ({ navigationData }: DesktopMenuProps) => {
	const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
	const { getActiveClass } = useActiveLink();

	return (
		<div className="hidden md:flex items-center space-x-8">
			{navigationData.map((item) => (
				<div key={item.id} className="relative group">
					{item.children ? (
						<div className="relative">
							<button
								className={getActiveClass(
									item.href,
									"flex items-center px-3 py-2 text-sm font-medium transition-colors duration-200 text-orange-600 border-b-2 border-orange-600",
									"flex items-center px-3 py-2 text-sm font-medium transition-colors duration-200 text-white hover:text-orange-600",
								)}
								onMouseEnter={() => setActiveDropdown(item.id)}
								onMouseLeave={() => setActiveDropdown(null)}
								aria-expanded={activeDropdown === item.id}
								aria-haspopup="menu"
							>
								{item.label}
								<svg
									className="ml-1 h-4 w-4"
									fill="currentColor"
									viewBox="0 0 20 20"
									aria-hidden="true"
								>
									<path
										fillRule="evenodd"
										d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
										clipRule="evenodd"
									/>
								</svg>
							</button>
							<div
								className={`absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 transition-all duration-200 z-50 ${
									activeDropdown === item.id
										? "opacity-100 visible"
										: "opacity-0 invisible"
								}`}
								onMouseEnter={() => setActiveDropdown(item.id)}
								onMouseLeave={() => setActiveDropdown(null)}
								role="menu"
								aria-label={`${item.label} submenu`}
							>
								<div className="py-1">
									{item.children.map((child) => (
										<Link
											key={child.id}
											href={child.href}
											className={getActiveClass(
												child.href,
												"block px-4 py-3 text-sm transition-colors duration-200 bg-orange-50 text-orange-600",
												"block px-4 py-3 text-sm transition-colors duration-200 text-gray-700 hover:bg-gray-50 hover:text-orange-600",
											)}
											role="menuitem"
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
							className={getActiveClass(
								item.href,
								"px-3 py-2 text-sm font-medium transition-colors duration-200 text-orange-600 border-b-2 border-orange-600",
								"px-3 py-2 text-sm font-medium transition-colors duration-200 text-white hover:text-orange-600",
							)}
						>
							{item.label}
						</Link>
					)}
				</div>
			))}
		</div>
	);
};
