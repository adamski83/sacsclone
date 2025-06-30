type Props = {
	children: React.ReactNode;
};

const Newsroom = ({ children }: Props) => {
	return (
		<>
			<main className="">
				<div className=" mx-auto pt-6 h-full">{children}</div>
			</main>
		</>
	);
};

export default Newsroom;
