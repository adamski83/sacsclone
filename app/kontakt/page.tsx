"use client";

import { Checkbox } from "../../components/UI/Checkbox";
import { Input } from "../../components/UI/Input";
import { Textarea } from "../../components/UI/Textarea";
import { useContactFormAxios } from "@/hooks/useContactFormAxios";
import Image from "next/image";

export default function ContactPage() {
	const {
		register,
		handleSubmit,
		formState: { errors },
		isSubmitting,
		submitError,
		submitSuccess,
	} = useContactFormAxios();

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
								alt="Company"
								className="w-full h-full object-cover"
							/>
						</div>
						<div className="space-y-4 m-8">
							<h2 className="text-2xl font-bold text-white">
								SACS Aerospace GmbH
							</h2>
							<address className="space-y-2 text-white not-italic">
								<p>ul. Przykładowa 123</p>
								<p>00-000 Warszawa</p>
								<p className="mb-8">Germany</p>
								<p>
									Telefon:
									<a
										href="tel:+48123456789"
										className="hover:text-orange-300 transition-colors"
									>
										+48 123 456 789
									</a>
								</p>
								<p>
									Email:
									<a
										href="mailto:kontakt@firma.pl"
										className="hover:text-orange-300 transition-colors"
									>
										kontakt@firma.pl
									</a>
								</p>
							</address>
						</div>
					</div>
					<div className="p-8 rounded-lg shadow-lg">
						<h2 className="text-2xl font-bold text-white mb-6">
							Formularz Kontaktowy
						</h2>
						{submitSuccess && (
							<div
								className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-md"
								data-success-message
							>
								✅ Wiadomość została wysłana pomyślnie!
							</div>
						)}

						{submitError && (
							<div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-md">
								❌ {submitError}
							</div>
						)}

						<form onSubmit={handleSubmit} className="space-y-6">
							<Input
								{...register("name")}
								id="name"
								label="Imię"
								error={errors.name?.message}
								required
								disabled={isSubmitting}
								helperText="Podaj swoje imię i nazwisko"
							/>
							<Input
								{...register("email")}
								id="email"
								type="email"
								label="Email"
								error={errors.email?.message}
								required
								disabled={isSubmitting}
								helperText="Adres email do kontaktu zwrotnego"
								placeholder="nazwa@domena.pl"
							/>
							<Input
								{...register("phone")}
								id="phone"
								type="tel"
								label="Telefon"
								error={errors.phone?.message}
								disabled={isSubmitting}
								helperText="Opcjonalny numer telefonu"
								placeholder="+48 123 456 789"
							/>
							<Input
								{...register("subject")}
								id="subject"
								label="Temat"
								error={errors.subject?.message}
								required
								disabled={isSubmitting}
								helperText="Krótki opis zapytania"
								placeholder="Zapytanie o usługi"
							/>
							<Textarea
								{...register("message")}
								id="message"
								rows={6}
								label="Wiadomość"
								error={errors.message?.message}
								required
								disabled={isSubmitting}
								helperText="Szczegółowy opis zapytania (min. 10 znaków)"
								placeholder="Opisz swoje zapytanie..."
							/>
							<Checkbox
								{...register("privacy")}
								id="privacy"
								label="Akceptuję politykę prywatności i wyrażam zgodę na przetwarzanie moich danych osobowych w celu udzielenia odpowiedzi na zapytanie *"
								error={errors.privacy?.message}
								disabled={isSubmitting}
							/>

							<button
								type="submit"
								disabled={isSubmitting}
								className="w-full bg-orange-900 text-white py-3 px-6 rounded-md hover:bg-orange-800 focus:outline-none focus:ring-2 focus:ring-orange-500 font-medium disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center"
							>
								{isSubmitting ? (
									<>
										<svg
											className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
										>
											<circle
												className="opacity-25"
												cx="12"
												cy="12"
												r="10"
												stroke="currentColor"
												strokeWidth="4"
											/>
											<path
												className="opacity-75"
												fill="currentColor"
												d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
											/>
										</svg>
										WYSYŁANIE...
									</>
								) : (
									"WYSŁAĆ"
								)}
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}
