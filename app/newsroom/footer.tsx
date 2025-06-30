type Props = {
	children: React.ReactNode;
};

const Footer = ({ children }: Props) => {
	return (
		<>
			<main className="lg:pl-[256px] h-full pt-[50px] lg:pt-0">
				footer
				<div className="max-w-[1056px] mx-auto pt-6 h-full">{children}</div>
			</main>
		</>
	);
};

export default Footer;
