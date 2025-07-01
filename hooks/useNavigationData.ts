import {
	MenuItem,
	navigationStructure,
	TranslatedMenuItem,
} from "@/types/navigation";
import { useI18n } from "./useI18n";

export const useNavigationData = (): TranslatedMenuItem[] => {
	const { tNav, isLoading } = useI18n();

	if (isLoading) {
		return [];
	}

	const translateMenuItem = (item: MenuItem): TranslatedMenuItem => ({
		...item,
		label: tNav(item.labelKey),
		description: item.descriptionKey ? tNav(item.descriptionKey) : undefined,
		children: item.children?.map(translateMenuItem),
	});

	return navigationStructure.map(translateMenuItem);
};

export const useNavigationDataSafe = () => {
	const { tNav, isLoading } = useI18n();

	const getTranslatedNavigation = (): TranslatedMenuItem[] => {
		if (isLoading) {
			const createFallbackItem = (item: MenuItem): TranslatedMenuItem => ({
				...item,
				label: item.labelKey,
				description: item.descriptionKey,
				children: item.children?.map(createFallbackItem),
			});

			return navigationStructure.map(createFallbackItem);
		}

		const translateMenuItem = (item: MenuItem): TranslatedMenuItem => {
			try {
				return {
					...item,
					label: tNav(item.labelKey) || item.labelKey,
					description: item.descriptionKey
						? tNav(item.descriptionKey) || item.descriptionKey
						: undefined,
					children: item.children?.map(translateMenuItem),
				};
			} catch (error) {
				console.warn(`Translation failed for key: ${item.labelKey}`, error);
				return {
					...item,
					label: item.labelKey,
					description: item.descriptionKey,
					children: item.children?.map(translateMenuItem),
				};
			}
		};

		return navigationStructure.map(translateMenuItem);
	};

	return {
		navigationData: getTranslatedNavigation(),
		isLoading,
	};
};
