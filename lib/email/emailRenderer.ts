interface ContactEmailData {
	name: string;
	email: string;
	phone?: string;
	subject: string;
	message: string;
}

export const renderContactEmail = (data: ContactEmailData): string => {
	const sentAt = new Date().toLocaleString("pl-PL", {
		timeZone: "Europe/Warsaw",
	});

	const phoneSection = data.phone
		? `<p><strong>Telefon:</strong> <a href="tel:${data.phone}">${data.phone}</a></p>`
		: "";

	return `
		<!DOCTYPE html>
		<html lang="pl">
		<head>
			<meta charset="UTF-8">
			<meta name="viewport" content="width=device-width, initial-scale=1.0">
			<title>Nowa wiadomość kontaktowa</title>
		</head>
		<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
			<div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px;">
				<h2 style="color: #ea580c; margin-bottom: 20px;">Nowa wiadomość z formularza kontaktowego</h2>
				
				<div style="background-color: white; padding: 20px; border-radius: 6px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
					<p><strong>Imię:</strong> ${data.name}</p>
					<p><strong>Email:</strong> <a href="mailto:${data.email}" style="color: #ea580c;">${data.email}</a></p>
					${phoneSection}
					<p><strong>Temat:</strong> ${data.subject}</p>
					
					<div style="background-color: #f5f5f5; padding: 15px; border-left: 4px solid #ea580c; margin: 20px 0; border-radius: 4px;">
						<strong>Wiadomość:</strong><br><br>
						<div style="white-space: pre-wrap; line-height: 1.6;">${data.message}</div>
					</div>
				</div>
				
				<hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
				<p style="color: #666; font-size: 14px;">
					<small>Wysłano: ${sentAt}</small>
				</p>
			</div>
		</body>
		</html>
	`;
};

export const renderAutoReplyEmail = (
	name: string,
	subject: string,
	appName: string,
): string => {
	return `
		<!DOCTYPE html>
		<html lang="pl">
		<head>
			<meta charset="UTF-8">
			<meta name="viewport" content="width=device-width, initial-scale=1.0">
			<title>Potwierdzenie otrzymania wiadomości</title>
		</head>
		<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
			<div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px;">
				<h2 style="color: #ea580c; margin-bottom: 20px;">Dziękujemy za kontakt!</h2>
				
				<div style="background-color: white; padding: 20px; border-radius: 6px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
					<p>Szanowny/a <strong>${name}</strong>,</p>
					
					<p>Otrzymaliśmy Twoją wiadomość dotyczącą: <strong style="color: #ea580c;">${subject}</strong></p>
					
					<p>Dziękujemy za kontakt. Odpowiemy na Twoją wiadomość w ciągu 24 godzin roboczych.</p>
					
					<div style="background-color: #e3f2fd; padding: 15px; border-radius: 4px; margin: 20px 0;">
						<p style="margin: 0; color: #1976d2;">
							<strong>💡 Wskazówka:</strong> Jeśli Twoja sprawa jest pilna, możesz skontaktować się z nami telefonicznie.
						</p>
					</div>
					
					<br>
					<p>
						Pozdrawiamy,<br>
						<strong>Zespół ${appName}</strong>
					</p>
				</div>
				
				<hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
				<p style="color: #666; font-size: 12px; text-align: center;">
					To jest automatyczna wiadomość. Prosimy nie odpowiadać na ten email.
				</p>
			</div>
		</body>
		</html>
	`;
};
