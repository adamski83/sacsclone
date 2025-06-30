"use client";

import { usePathname } from "next/navigation";

export const useActiveLink = () => {
	const pathname = usePathname();

	const isActiveLink = (href: string): boolean => {
		if (href === "/") {
			return pathname === href;
		}
		return pathname.startsWith(href);
	};

	const getActiveClass = (
		href: string,
		activeClasses: string,
		inactiveClasses: string,
	): string => {
		return isActiveLink(href) ? activeClasses : inactiveClasses;
	};

	return {
		isActiveLink,
		getActiveClass,
		currentPath: pathname,
	};
};
