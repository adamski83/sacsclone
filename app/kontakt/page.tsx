"use client";

import { Input } from "@/components/UI/Input";
import { Textarea } from "@/components/UI/Textarea";
import { useContactForm } from "@/hooks/useContactForm";
import Image from "next/image";

export default function ContactPage() {
	const {
		register,
		handleSubmit,
		formState: { errors },
		isSubmitting,
		submitError,
		submitSuccess,
	} = useContactForm();

	return (
		<div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
			<div className="max-w-7xl mx-auto">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
					<div className="space-y-8 bg-orange-900 rounded-lg">
						<div className="h-48 w-full bg-gray-200 rounded-lg overflow-hidden">
							<Image
								src="/warehouse.jpg"
								width={400}
								height={200}
								alt={"Company"}
								className="w-full h-full object-cover"
							/>
						</div>
						<div className="space-y-4 m-8">
							<h2 className="text-2xl font-bold text-white">
								{"SACS Aerospace GmbH"}
							</h2>
							<address className="space-y-2 text-white not-italic">
								<p>{"ul. Przykładowa 123"}</p>
								<p>{"00-000 Warszawa"}</p>
								<p className="mb-8">{"Germany"}</p>
								<p>
									{"Telefon"}
									<a
										href="tel:+48123456789"
										className="hover:text-orange-300 transition-colors"
									>
										{"+48 123 456 789"}
									</a>
								</p>
								<p>
									{"Email"}
									<a
										href="mailto:kontakt@firma.pl"
										className="hover:text-orange-300 transition-colors"
									>
										{"kontakt@firma.pl"}
									</a>
								</p>
							</address>
						</div>
					</div>
					<div className="p-8 rounded-lg shadow-lg">
						<h2 className="text-2xl font-bold text-white mb-6">
							{"Formularz Kontaktowy"}
						</h2>
						{submitSuccess && (
							<div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-md">
								{"Wiadomość została wysłana pomyślnie!"}
							</div>
						)}
						{submitError && (
							<div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-md">
								{submitError}
							</div>
						)}
						<form onSubmit={handleSubmit} className="space-y-6">
							<Input
								{...register("name")}
								id="name"
								label={"Imię"}
								error={errors.name?.message}
								required
								disabled={isSubmitting}
							/>
							<Input
								{...register("email")}
								id="email"
								type="email"
								label={"Email"}
								error={errors.email?.message}
								required
								disabled={isSubmitting}
							/>
							<Input
								{...register("phone")}
								id="phone"
								type="tel"
								label={"Telefon"}
								error={errors.phone?.message}
								disabled={isSubmitting}
							/>
							<Input
								{...register("subject")}
								id="subject"
								label={"Temat"}
								error={errors.subject?.message}
								required
								disabled={isSubmitting}
							/>
							<Textarea
								{...register("message")}
								id="message"
								rows={6}
								label={"Wiadomość"}
								error={errors.message?.message}
								required
								disabled={isSubmitting}
							/>
							<div className="flex items-start space-x-3">
								<input
									{...register("privacy")}
									type="checkbox"
									id="privacy"
									className="mt-1 h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
									disabled={isSubmitting}
								/>
								<label htmlFor="privacy" className="text-sm text-white">
									{
										"Ich habe die Datenschutzerklärung zur Kenntnis genommen und erkläre mich mit der Verarbeitung meiner Daten einverstanden."
									}
									<span className="text-red-400 ml-1">*</span>
								</label>
							</div>
							{errors.privacy && (
								<p className="text-sm text-red-400" role="alert">
									{errors.privacy.message}
								</p>
							)}

							<button
								type="submit"
								disabled={isSubmitting}
								className="w-full bg-orange-900 text-white py-3 px-6 rounded-md hover:bg-orange-800 focus:outline-none focus:ring-2 focus:ring-orange-500 font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
							>
								{isSubmitting ? "WYSYŁANIE..." : "WYŚLIJ"}
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}
