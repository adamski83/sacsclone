import axios, { AxiosError, AxiosResponse } from "axios";

interface ApiResponse<T = unknown> {
	success: boolean;
	message: string;
	data?: T;
	errors?: string[];
}

interface ContactFormRequest {
	name: string;
	email: string;
	phone?: string;
	subject: string;
	message: string;
	privacy?: boolean;
}

const apiClient = axios.create({
	baseURL: process.env.NEXT_PUBLIC_API_URL || "/api",
	timeout: 30000,
	headers: {
		"Content-Type": "application/json",
		Accept: "application/json",
	},
});

apiClient.interceptors.request.use(
	config => {
		config.metadata = { startTime: new Date() };

		config.headers["X-Request-ID"] = Math.random().toString(36).substr(2, 9);

		if (process.env.NODE_ENV === "development") {
			console.log(`🚀 ${config.method?.toUpperCase()} ${config.url}`, {
				data: config.data,
				headers: config.headers,
			});
		}

		return config;
	},
	error => {
		console.error("Request interceptor error:", error);
		return Promise.reject(error);
	}
);

apiClient.interceptors.response.use(
	(response: AxiosResponse) => {
		const duration =
			new Date().getTime() - response.config.metadata?.startTime?.getTime();

		if (process.env.NODE_ENV === "development") {
			console.log(
				`✅ ${response.status} ${response.config.method?.toUpperCase()} ${response.config.url} (${duration}ms)`,
				{
					data: response.data,
				}
			);
		}

		return response;
	},
	(error: AxiosError) => {
		const duration = error.config?.metadata?.startTime
			? new Date().getTime() - error.config.metadata.startTime.getTime()
			: 0;

		if (process.env.NODE_ENV === "development") {
			console.error(
				`❌ ${error.response?.status || "Network Error"} ${error.config?.method?.toUpperCase()} ${error.config?.url} (${duration}ms)`,
				{
					error: error.response?.data || error.message,
				}
			);
		}

		const standardError = {
			success: false,
			message: getErrorMessage(error),
			status: error.response?.status,
			errors: error.response?.data?.errors || [],
		};

		return Promise.reject(standardError);
	}
);

function getErrorMessage(error: AxiosError): string {
	if (error.response?.data) {
		const data = error.response.data as any;
		return data.message || data.error || "Wystąpił błąd serwera";
	}

	if (error.code === "ECONNABORTED") {
		return "Zapytanie przekroczyło limit czasu";
	}

	if (error.code === "ERR_NETWORK") {
		return "Błąd połączenia sieciowego";
	}

	return error.message || "Wystąpił nieznany błąd";
}

export const contactApi = {
	sendContactForm: async (data: ContactFormRequest): Promise<ApiResponse> => {
		const response = await apiClient.post<ApiResponse>("/contact", data);
		return response.data;
	},

	testConnection: async (): Promise<ApiResponse> => {
		const response = await apiClient.get<ApiResponse>("/contact");
		return response.data;
	},
};

export default apiClient;

export type { ApiResponse, ContactFormRequest };
