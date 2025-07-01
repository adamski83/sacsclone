"use client";

import { useActiveLink } from "@/hooks/useActiveLink";
import { NavigationItem } from "@/types/navigation";
import Link from "next/link";
import { useState } from "react";

interface MobileMenuProps {
	navigationData: NavigationItem[];
	isOpen: boolean;
	onClose: () => void;
}

export const MobileMenu = ({
	navigationData,
	isOpen,
	onClose,
}: MobileMenuProps) => {
	const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState<string | null>(
		null,
	);
	const { getActiveClass } = useActiveLink();

	const toggleMobileSubmenu = (itemId: string) => {
		setMobileSubmenuOpen(mobileSubmenuOpen === itemId ? null : itemId);
	};

	if (!isOpen) return null;

	return (
		<div className="md:hidden">
			<div className="px-2 pt-2 pb-3 space-y-1 bg-inherit">
				{navigationData.map((item) => (
					<div key={item.id}>
						{item.children ? (
							<div>
								<button
									onClick={() => toggleMobileSubmenu(item.id)}
									className={getActiveClass(
										item.href,
										"w-full flex items-center justify-between px-3 py-2 text-base font-medium transition-colors duration-200 text-orange-600 bg-inherit",
										"w-full flex items-center justify-between px-3 py-2 text-base font-medium transition-colors duration-200 text-gray-300 hover:text-white hover:bg-gray-700",
									)}
									aria-expanded={mobileSubmenuOpen === item.id}
									aria-controls={`mobile-submenu-${item.id}`}
								>
									<span>{item.label}</span>
									<svg
										className={`h-5 w-5 transition-transform duration-200 ${
											mobileSubmenuOpen === item.id ? "rotate-180" : ""
										}`}
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
								{mobileSubmenuOpen === item.id && (
									<div
										className="pl-4 bg-inherit"
										id={`mobile-submenu-${item.id}`}
									>
										{item.children.map((child) => (
											<Link
												key={child.id}
												href={child.href}
												className={getActiveClass(
													child.href,
													"block px-3 py-2 text-sm transition-colors duration-200 text-orange-600 bg-inherit",
													"block px-3 py-2 text-sm transition-colors duration-200 text-gray-300 hover:text-white hover:bg-gray-700",
												)}
												onClick={() => {
													onClose();
													setMobileSubmenuOpen(null);
												}}
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
								className={getActiveClass(
									item.href,
									"block px-3 py-2 text-base font-medium transition-colors duration-200 text-orange-600 bg-gray-500",
									"block px-3 py-2 text-base font-medium transition-colors duration-200 text-gray-300 hover:text-white hover:bg-gray-700",
								)}
								onClick={onClose}
							>
								{item.label}
							</Link>
						)}
					</div>
				))}
			</div>
		</div>
	);
};
