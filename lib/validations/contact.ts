import { z } from "zod";

export const contactFormSchema = z.object({
	name: z
		.string()
		.min(1, "Imię jest wymagane")
		.max(100, "Imię nie może być dłuższe niż 100 znaków"),
	email: z
		.string()
		.email("Nieprawidłowy adres email")
		.max(255, "Email nie może być dłuższy niż 255 znaków"),
	phone: z.string().optional(),
	subject: z
		.string()
		.min(1, "Temat jest wymagany")
		.max(200, "Temat nie może być dłuższy niż 200 znaków"),
	message: z
		.string()
		.min(10, "Wiadomość musi mieć co najmniej 10 znaków")
		.max(2000, "Wiadomość nie może być dłuższa niż 2000 znaków"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
