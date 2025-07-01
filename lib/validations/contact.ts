import { z } from "zod";

export const contactFormSchema = z.object({
	name: z
		.string()
		.min(2, "Imię musi mieć co najmniej 2 znaki")
		.max(50, "Imię nie może być dłuższe niż 50 znaków")
		.regex(
			/^[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ\s]+$/,
			"Imię może zawierać tylko litery",
		),

	email: z
		.string()
		.email("Nieprawidłowy format adresu email")
		.min(5, "Email musi mieć co najmniej 5 znaków")
		.max(100, "Email nie może być dłuższy niż 100 znaków"),

	phone: z
		.string()
		.optional()
		.or(z.literal(""))
		.refine(
			(value) => !value || /^[\+]?[0-9\s\-\(\)]{9,15}$/.test(value),
			"Nieprawidłowy format numeru telefonu",
		),

	subject: z
		.string()
		.min(3, "Temat musi mieć co najmniej 3 znaki")
		.max(100, "Temat nie może być dłuższy niż 100 znaków"),

	message: z
		.string()
		.min(10, "Wiadomość musi mieć co najmniej 10 znaków")
		.max(1000, "Wiadomość nie może być dłuższa niż 1000 znaków"),

	privacy: z
		.boolean()
		.refine(
			(value) => value === true,
			"Musisz zaakceptować politykę prywatności",
		),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
