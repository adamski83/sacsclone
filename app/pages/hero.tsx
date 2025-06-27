import Image from "next/image";

export const Hero = () => {
	return (
		<div className='relative'>
			<Image
				src='/airplain-hero.jpg'
				alt='Hero Image'
				width={1920}
				height={1080}
				className='w-full h-[480px] object-cover '
			/>
			<div className='absolute inset-y-0 left-8 flex items-center'>
				<Image
					src='/sacs-logo.png'
					alt='SACS Logo'
					width={200}
					height={80}
					className='w-auto h-16 md:h-20 lg:h-24'
				/>
			</div>
			<div className='absolute bottom-8 left-8'>
				<p className='text-white text-5xl font-bold tracking-wide'>
					the art of aerospace
				</p>
			</div>
		</div>
	);
};
