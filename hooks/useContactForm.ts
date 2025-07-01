"use client";

import { ContactFormData, contactFormSchema } from "@/lib/validations/contact";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm, UseFormHandleSubmit } from "react-hook-form";

interface UseContactFormReturn {
	register: ReturnType<typeof useForm<ContactFormData>>["register"];
	handleSubmit: UseFormHandleSubmit<ContactFormData>;
	formState: ReturnType<typeof useForm<ContactFormData>>["formState"];
	isSubmitting: boolean;
	submitError: string | null;
	submitSuccess: boolean;
	reset: ReturnType<typeof useForm<ContactFormData>>["reset"];
	onSubmit: (data: ContactFormData) => Promise<void>;
}

export const useContactForm = (): UseContactFormReturn => {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitError, setSubmitError] = useState<string | null>(null);
	const [submitSuccess, setSubmitSuccess] = useState(false);

	const { register, handleSubmit, formState, reset } = useForm<ContactFormData>(
		{
			resolver: zodResolver(contactFormSchema),
			mode: "onBlur",
		},
	);

	const onSubmit = async (data: ContactFormData) => {
		setIsSubmitting(true);
		setSubmitError(null);
		setSubmitSuccess(false);

		try {
			const response = await fetch("/api/contact", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data),
			});

			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}

			const result = await response.json();

			if (result.success) {
				setSubmitSuccess(true);
				reset();
			} else {
				setSubmitError(
					result.message || "Wystąpił błąd podczas wysyłania wiadomości",
				);
			}
		} catch (error) {
			console.error("Contact form error:", error);
			setSubmitError(
				"Wystąpił błąd podczas wysyłania wiadomości. Spróbuj ponownie.",
			);
		} finally {
			setIsSubmitting(false);
		}
	};

	return {
		register,
		handleSubmit,
		formState,
		isSubmitting,
		submitError,
		submitSuccess,
		reset,
		onSubmit,
	};
};
