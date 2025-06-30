"use client";

import { useEffect, useState } from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "../lib/i18n";

export default function I18nProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	const [isI18nInitialized, setIsI18nInitialized] = useState(false);

	useEffect(() => {
		if (i18n.isInitialized) {
			setIsI18nInitialized(true);
		} else {
			i18n.on("initialized", () => {
				setIsI18nInitialized(true);
			});
		}

		return () => {
			i18n.off("initialized");
		};
	}, []);

	if (!isI18nInitialized) {
		return (
			<div className="flex items-center justify-center min-h-screen bg-gray-900">
				<div className="animate-spin rounded-full h-32 w-32 border-b-2 border-orange-600"></div>
			</div>
		);
	}

	return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
