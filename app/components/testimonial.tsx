import Image from "next/image";

type Props = {
	title: string;
	items: string;
	imageSrc: string;
	imageAlt: string;
	checkIconSrc?: string;
};

export const Testimonial = ({ imageAlt, imageSrc, items, title }: Props) => {
	return (
		<div className='my-7 shadow-2xl flex-1 flex flex-col'>
			<Image
				src={imageSrc}
				alt={imageAlt}
				width={450}
				height={270}
				className='w-full h-64 object-cover'
			/>
			<div className='bg-orange-900 flex flex-col items-center justify-center p-4 text-white flex-grow'>
				<h2 className='text-3xl font-bold text-center py-8'>{title}</h2>
				<h3 className='text-xl text-center flex-grow flex items-center'>
					{items}
				</h3>
				<button className='btn btn-outline btn-warning bg-orange-900 text-white border-2 border-white hover:bg-yellow-500 my-6 lg:my-12 w-[104px] py-8'>
					MEHR
				</button>
			</div>
		</div>
	);
};
