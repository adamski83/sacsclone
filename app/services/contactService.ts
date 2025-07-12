import { ApiResponse, contactApi, ContactFormRequest } from "@/lib/axios";
import { ContactFormData } from "@/lib/validations/contact";

export class ContactService {
	static async submitContactForm(
		formData: ContactFormData
	): Promise<ApiResponse> {
		try {
			const requestData: ContactFormRequest = {
				name: formData.name,
				email: formData.email,
				phone: formData.phone || undefined,
				subject: formData.subject,
				message: formData.message,
				privacy: true,
			};

			const response = await contactApi.sendContactForm(requestData);

			return {
				success: true,
				message: response.message || "Wiadomość została wysłana pomyślnie!",
				data: response.data,
			};
		} catch (error: unknown) {
			throw error;
		}
	}

	static async testEmailConfiguration(): Promise<ApiResponse> {
		if (process.env.NODE_ENV !== "development") {
			throw new Error("Test endpoint is only available in development mode");
		}

		try {
			return await contactApi.testConnection();
		} catch (error: any) {
			throw error;
		}
	}
}
