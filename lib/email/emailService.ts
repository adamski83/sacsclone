import { ContactFormData } from "@/lib/validations/contact";

import { createTransporter } from "./config";
import {
	EmailTemplateData,
	generateAutoReplyHtml,
	generateContactEmailHtml,
	generateContactEmailText,
} from "./templates/contactForm";

export class EmailService {
	private transporter;

	constructor() {
		this.transporter = createTransporter();
	}

	async sendContactForm(
		data: ContactFormData,
		metadata?: {
			userAgent?: string;
			ipAddress?: string;
		},
	) {
		const submittedAt = new Date().toLocaleString("de-DE", {
			timeZone: "Europe/Berlin",
			year: "numeric",
			month: "2-digit",
			day: "2-digit",
			hour: "2-digit",
			minute: "2-digit",
			second: "2-digit",
		});

		const templateData: EmailTemplateData = {
			...data,
			submittedAt,
			...metadata,
		};

		try {
			const companyEmailResult = await this.transporter.sendMail({
				from: `"${process.env.APP_NAME}" <${process.env.SMTP_FROM}>`,
				to: process.env.CONTACT_EMAIL_TO,
				bcc: process.env.CONTACT_EMAIL_BCC,
				replyTo: data.email,
				subject: `Neue Kontaktanfrage: ${data.subject}`,
				text: generateContactEmailText(templateData),
				html: generateContactEmailHtml(templateData),
				headers: {
					"X-Priority": "3",
					"X-MSMail-Priority": "Normal",
					"X-Mailer": `${process.env.APP_NAME} Contact Form`,
				},
			});
			const autoReplyResult = await this.transporter.sendMail({
				from: `"${process.env.APP_NAME}" <${process.env.SMTP_FROM}>`,
				to: data.email,
				subject: `Bestätigung Ihrer Anfrage - ${data.subject}`,
				html: generateAutoReplyHtml(data),
				headers: {
					"X-Auto-Response-Suppress": "OOF, DR, RN, NRN",
					"Auto-Submitted": "auto-replied",
				},
			});
			console.log("Emails sent successfully:", {
				company: companyEmailResult.messageId,
				autoReply: autoReplyResult.messageId,
			});
			return {
				success: true,
				messageIds: {
					company: companyEmailResult.messageId,
					autoReply: autoReplyResult.messageId,
				},
			};
		} catch (error) {
			console.error("Email sending failed:", error);
			throw new Error("Failed to send email");
		}
	}

	async testConnection() {
		try {
			await this.transporter.verify();
			return { success: true, message: "SMTP connection is working" };
		} catch (error) {
			console.error("SMTP connection failed:", error);
			return { success: false, error: error };
		}
	}
}

export const emailService = new EmailService();
