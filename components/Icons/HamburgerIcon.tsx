interface HamburgerIconProps {
	isOpen: boolean;
	className?: string;
}

export const HamburgerIcon = ({
	isOpen,
	className = "h-6 w-6",
}: HamburgerIconProps) => (
	<svg
		className={className}
		fill="none"
		viewBox="0 0 24 24"
		stroke="currentColor"
		aria-hidden="true"
	>
		{isOpen ? (
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
);
