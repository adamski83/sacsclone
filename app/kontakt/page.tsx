import Image from "next/image";

function page() {
	return (
		<div className='min-h-screen  py-12 px-4 sm:px-6 lg:px-8'>
			<div className='max-w-7xl mx-auto'>
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
					<div className='space-y-8 bg-orange-900'>
						<div className='h-48 w-full bg-gray-200 rounded-lg overflow-hidden'>
							<Image
								src='/warehouse.jpg'
								width={400}
								height={200}
								alt='Company'
								className='w-full h-full object-cover'
							/>
						</div>
						<div className='space-y-4 m-8'>
							<h2 className='text-2xl font-bold text-white'>
								SACS Aerospace GmbH
							</h2>
							<div className='space-y-2 text-white'>
								<p>ul. Przykładowa 123</p>
								<p>00-000 Warszawa</p>
								<p className='mb-8'>Germany</p>
								<p>Telefon: +48 123 456 789</p>
								<p>Email: kontakt@firma.pl</p>
							</div>
						</div>
					</div>

					<div className=' p-8 rounded-lg shadow-lg'>
						<h2 className='text-2xl font-bold text-white mb-6'>
							Formularz Kontaktowy
						</h2>
						<form className='space-y-6'>
							<div>
								<label
									htmlFor='name'
									className='block text-sm font-medium text-white mb-2'>
									Imię
								</label>
								<input
									type='text'
									id='name'
									className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
									required
								/>
							</div>

							<div>
								<label
									htmlFor='email'
									className='block text-sm font-medium text-white mb-2'>
									Email
								</label>
								<input
									type='email'
									id='email'
									className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 '
									required
								/>
							</div>

							<div>
								<label
									htmlFor='phone'
									className='block text-sm font-medium text-white mb-2'>
									Telefon
								</label>
								<input
									type='tel'
									id='phone'
									className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
								/>
							</div>

							<div>
								<label
									htmlFor='subject'
									className='block text-sm font-medium text-white mb-2'>
									Temat
								</label>
								<input
									type='text'
									id='subject'
									className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
									required
								/>
							</div>

							<div>
								<label
									htmlFor='message'
									className='block text-sm font-medium text-white mb-2'>
									Wiadomość
								</label>
								<textarea
									id='message'
									rows={6}
									className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
									required></textarea>
							</div>

							<div className='flex items-start'>
								<input
									type='checkbox'
									id='privacy'
									className='mt-1 mr-3'
									required
								/>
								<label htmlFor='privacy' className='text-sm text-white'>
									Ich habe die Datenschutzerklärung zur Kenntnis genommen und
									erkläre mich mit der Verarbeitung meiner Daten einverstanden.
								</label>
							</div>

							<button
								type='submit'
								className='w-full bg-orange-900 text-white py-3 px-6 rounded-md hover:bg-orange-800 focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium'>
								SENDEN
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}
export default page;
