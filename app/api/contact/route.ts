import { contactFormSchema } from "@/lib/validations/contact";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";

export async function POST(request: Request) {
	try {
		const body = await request.json();
		const validatedData = contactFormSchema.parse(body);

		const transporter = nodemailer.createTransport({
			service: "gmail",
			host: process.env.SMTP_HOST,
			port: parseInt(process.env.SMTP_PORT || "587"),
			secure: false,
			auth: {
				user: process.env.SMTP_USER,
				pass: process.env.SMTP_PASS,
			},
			tls: {
				rejectUnauthorized: false,
			},
		});

		await transporter.verify();
		console.log("SMTP connection verified successfully");

		const companyMailOptions = {
			from: `"${process.env.APP_NAME}" <${process.env.SMTP_FROM}>`,
			to: process.env.SMTP_USER,
			replyTo: validatedData.email,
			subject: `Nowa wiadomość kontaktowa: ${validatedData.subject}`,
			text: `
Nowa wiadomość z formularza kontaktowego:

Imię: ${validatedData.name}
Email: ${validatedData.email}
${validatedData.phone ? `Telefon: ${validatedData.phone}` : ""}
Temat: ${validatedData.subject}

Wiadomość:
${validatedData.message}

---
Wysłano: ${new Date().toLocaleString("pl-PL", { timeZone: "Europe/Warsaw" })}
			`.trim(),
			html: `
				<h2>Nowa wiadomość z formularza kontaktowego</h2>
				<p><strong>Imię:</strong> ${validatedData.name}</p>
				<p><strong>Email:</strong> <a href="mailto:${validatedData.email}">${validatedData.email}</a></p>
				${validatedData.phone ? `<p><strong>Telefon:</strong> <a href="tel:${validatedData.phone}">${validatedData.phone}</a></p>` : ""}
				<p><strong>Temat:</strong> ${validatedData.subject}</p>
				<div style="background-color: #f5f5f5; padding: 15px; border-left: 4px solid #ea580c; margin: 20px 0;">
					<strong>Wiadomość:</strong><br>
					<div style="white-space: pre-wrap;">${validatedData.message}</div>
				</div>
				<hr>
				<p><small>Wysłano: ${new Date().toLocaleString("pl-PL", { timeZone: "Europe/Warsaw" })}</small></p>
			`,
		};

		const result = await transporter.sendMail(companyMailOptions);
		console.log("Email sent successfully:", result.messageId);

		try {
			const autoReplyOptions = {
				from: `"${process.env.APP_NAME}" <${process.env.SMTP_FROM}>`,
				to: validatedData.email,
				subject: `Potwierdzenie otrzymania wiadomości: ${validatedData.subject}`,
				html: `
					<h2>Dziękujemy za kontakt!</h2>
					<p>Szanowny/a ${validatedData.name},</p>
					<p>Otrzymaliśmy Twoją wiadomość dotyczącą: <strong>${validatedData.subject}</strong></p>
					<p>Odpowiemy na nią w ciągu 24 godzin.</p>
					<br>
					<p>Pozdrawiamy,<br>
					Zespół ${process.env.APP_NAME}</p>
				`,
			};

			await transporter.sendMail(autoReplyOptions);
			console.log("Auto-reply sent successfully");
		} catch (autoReplyError) {
			console.error("Auto-reply failed (non-critical):", autoReplyError);
		}

		return NextResponse.json({
			success: true,
			message: "Wiadomość została wysłana pomyślnie!",
		});
	} catch (error) {
		if (error instanceof z.ZodError) {
			return NextResponse.json(
				{
					success: false,
					message: "Dane formularza są nieprawidłowe",
					errors: error.errors,
				},
				{ status: 400 },
			);
		}

		console.error("Contact form API error:", error);
		return NextResponse.json(
			{
				success: false,
				message: "Wystąpił błąd podczas wysyłania wiadomości",
			},
			{ status: 500 },
		);
	}
}
