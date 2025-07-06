"use client";

import Image from "next/image";
import { useState } from "react";
import { toast } from "sonner";

interface FormData {
	name: string;
	email: string;
	phone: string;
	subject: string;
	message: string;
	privacy: boolean;
}

function ContactPage() {
	const [formData, setFormData] = useState<FormData>({
		name: "",
		email: "",
		phone: "",
		subject: "",
		message: "",
		privacy: false,
	});
	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		const { name, value, type } = e.target;
		const checked = (e.target as HTMLInputElement).checked;

		setFormData((prev) => ({
			...prev,
			[name]: type === "checkbox" ? checked : value,
		}));
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		if (!formData.privacy) {
			toast.error("Musisz zaakceptować politykę prywatności");
			return;
		}

		setIsSubmitting(true);

		try {
			const response = await fetch("/api/contact", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					name: formData.name,
					email: formData.email,
					phone: formData.phone || undefined,
					subject: formData.subject,
					message: formData.message,
				}),
			});

			const result = await response.json();

			if (response.ok && result.success) {
				toast.success("Wiadomość została wysłana pomyślnie!");
				setFormData({
					name: "",
					email: "",
					phone: "",
					subject: "",
					message: "",
					privacy: false,
				});
			} else {
				toast.error(result.message || "Wystąpił błąd podczas wysyłania");
			}
		} catch (error) {
			console.error("Error sending message:", error);
			toast.error("Wystąpił błąd podczas wysyłania wiadomości");
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<div className="min-h-screen  py-12 px-4 sm:px-6 lg:px-8">
			<div className="max-w-7xl mx-auto">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
					<div className="space-y-8 bg-orange-900">
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
							<div className="space-y-2 text-white">
								<p>ul. Przykładowa 123</p>
								<p>00-000 Warszawa</p>
								<p className="mb-8">Germany</p>
								<p>Telefon: +48 123 456 789</p>
								<p>Email: kontakt@firma.pl</p>
							</div>
						</div>
					</div>

					<div className=" p-8 rounded-lg shadow-lg">
						<h2 className="text-2xl font-bold text-white mb-6">
							Formularz Kontaktowy
						</h2>
						<form className="space-y-6" onSubmit={handleSubmit}>
							<div>
								<label
									htmlFor="name"
									className="block text-sm font-medium text-white mb-2"
								>
									Imię *
								</label>
								<input
									type="text"
									id="name"
									name="name"
									value={formData.name}
									onChange={handleChange}
									className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-900"
									required
								/>
							</div>

							<div>
								<label
									htmlFor="email"
									className="block text-sm font-medium text-white mb-2"
								>
									Email *
								</label>
								<input
									type="email"
									id="email"
									name="email"
									value={formData.email}
									onChange={handleChange}
									className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-900"
									required
								/>
							</div>

							<div>
								<label
									htmlFor="phone"
									className="block text-sm font-medium text-white mb-2"
								>
									Telefon
								</label>
								<input
									type="tel"
									id="phone"
									name="phone"
									value={formData.phone}
									onChange={handleChange}
									className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-900"
								/>
							</div>

							<div>
								<label
									htmlFor="subject"
									className="block text-sm font-medium text-white mb-2"
								>
									Temat *
								</label>
								<input
									type="text"
									id="subject"
									name="subject"
									value={formData.subject}
									onChange={handleChange}
									className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-900"
									required
								/>
							</div>

							<div>
								<label
									htmlFor="message"
									className="block text-sm font-medium text-white mb-2"
								>
									Wiadomość *
								</label>
								<textarea
									id="message"
									name="message"
									value={formData.message}
									onChange={handleChange}
									rows={6}
									className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-900"
									required
								></textarea>
							</div>

							<div className="flex items-start">
								<input
									type="checkbox"
									id="privacy"
									name="privacy"
									checked={formData.privacy}
									onChange={handleChange}
									className="mt-1 mr-3 focus:ring-orange-500 focus:ring-2"
									required
								/>
								<label htmlFor="privacy" className="text-sm text-white">
									Akceptuję politykę prywatności i wyrażam zgodę na
									przetwarzanie moich danych osobowych w celu udzielenia
									odpowiedzi na zapytanie *
								</label>
							</div>

							<button
								type="submit"
								disabled={isSubmitting}
								className="w-full bg-orange-900 text-white py-3 px-6 rounded-md hover:bg-orange-800 focus:outline-none focus:ring-2 focus:ring-orange-500 font-medium disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
							>
								{isSubmitting ? "WYSYŁANIE..." : "WYSŁAĆ"}
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}
export default ContactPage;
