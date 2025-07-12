"use client";

import { ContactService } from "@/app/services/contactService";
import { ContactFormData, contactFormSchema } from "@/lib/validations/contact";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";

interface UseContactFormReturn {
	register: ReturnType<typeof useForm<ContactFormData>>["register"];
	handleSubmit: (e?: React.BaseSyntheticEvent) => Promise<void>;
	formState: ReturnType<typeof useForm<ContactFormData>>["formState"];
	isSubmitting: boolean;
	submitError: string | null;
	submitSuccess: boolean;
	reset: ReturnType<typeof useForm<ContactFormData>>["reset"];
}

export const useContactFormAxios = (): UseContactFormReturn => {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitError, setSubmitError] = useState<string | null>(null);
	const [submitSuccess, setSubmitSuccess] = useState(false);

	const {
		register,
		handleSubmit: handleSubmitRHF,
		formState,
		reset,
	} = useForm<ContactFormData>({
		resolver: zodResolver(contactFormSchema),
		mode: "onBlur",
	});

	const onSubmit = async (data: ContactFormData) => {
		setIsSubmitting(true);
		setSubmitError(null);
		setSubmitSuccess(false);

		try {
			const response = await ContactService.submitContactForm(data);

			if (response.success) {
				setSubmitSuccess(true);
				reset();
				setTimeout(() => {
					const successElement = document.querySelector(
						"[data-success-message]"
					);
					successElement?.scrollIntoView({ behavior: "smooth" });
				}, 100);
			} else {
				setSubmitError(
					response.message || "Wystąpił błąd podczas wysyłania wiadomości"
				);
			}
		} catch (error: any) {
			console.error("Contact form submission failed:", error);
			setSubmitError(
				error.message || "Wystąpił błąd podczas wysyłania wiadomości"
			);
		} finally {
			setIsSubmitting(false);
		}
	};

	const handleSubmit = handleSubmitRHF(onSubmit);

	return {
		register,
		handleSubmit,
		formState,
		isSubmitting,
		submitError,
		submitSuccess,
		reset,
	};
};
