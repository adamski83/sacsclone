import nodemailer from "nodemailer";

export const emailConfig = {
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
};

export const createTransporter = () => {
	return nodemailer.createTransport(emailConfig);
};

export const verifyEmailConfig = async () => {
	try {
		const transporter = createTransporter();
		await transporter.verify();
		console.log("Email configuration is valid");
		return true;
	} catch (error) {
		console.error("Email configuration error:", error);
		return false;
	}
};
