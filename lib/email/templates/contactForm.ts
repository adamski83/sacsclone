import { ContactFormData } from "@/lib/validations/contact";

export interface EmailTemplateData extends ContactFormData {
	submittedAt: string;
	userAgent?: string;
	ipAddress?: string;
}

export const generateContactEmailHtml = (data: EmailTemplateData): string => {
	return `
        <!DOCTYPE html>
        <html lang="de">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Neue Kontaktanfrage</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    line-height: 1.6;
                    color: #333;
                    max-width: 600px;
                    margin: 0 auto;
                    padding: 20px;
                }
                .header {
                    background-color: #ea580c;
                    color: white;
                    padding: 20px;
                    text-align: center;
                    border-radius: 8px 8px 0 0;
                }
                .content {
                    background-color: #f9f9f9;
                    padding: 30px;
                    border-radius: 0 0 8px 8px;
                    border: 1px solid #ddd;
                }
                .field {
                    margin-bottom: 20px;
                    border-bottom: 1px solid #eee;
                    padding-bottom: 10px;
                }
                .label {
                    font-weight: bold;
                    color: #ea580c;
                    text-transform: uppercase;
                    font-size: 12px;
                    margin-bottom: 5px;
                }
                .value {
                    font-size: 16px;
                    margin-top: 5px;
                }
                .message {
                    background-color: white;
                    padding: 15px;
                    border-left: 4px solid #ea580c;
                    border-radius: 4px;
                    white-space: pre-wrap;
                }
                .footer {
                    margin-top: 30px;
                    padding-top: 20px;
                    border-top: 1px solid #ddd;
                    font-size: 12px;
                    color: #666;
                }
            </style>
        </head>
        <body>
            <div class="header">
                <h1>Neue Kontaktanfrage</h1>
                <p>SACS Aerospace GmbH</p>
            </div>
            
            <div class="content">
                <div class="field">
                    <div class="label">Name</div>
                    <div class="value">${data.name}</div>
                </div>
                
                <div class="field">
                    <div class="label">E-Mail</div>
                    <div class="value">
                        <a href="mailto:${data.email}">${data.email}</a>
                    </div>
                </div>
                
                ${
									data.phone
										? `
                    <div class="field">
                        <div class="label">Telefon</div>
                        <div class="value">
                            <a href="tel:${data.phone}">${data.phone}</a>
                        </div>
                    </div>
                `
										: ""
								}
                
                <div class="field">
                    <div class="label">Betreff</div>
                    <div class="value">${data.subject}</div>
                </div>
                
                <div class="field">
                    <div class="label">Nachricht</div>
                    <div class="message">${data.message}</div>
                </div>
                
                <div class="footer">
                    <p><strong>Eingereicht am:</strong> ${data.submittedAt}</p>
                    ${data.userAgent ? `<p><strong>Browser:</strong> ${data.userAgent}</p>` : ""}
                    ${data.ipAddress ? `<p><strong>IP-Adresse:</strong> ${data.ipAddress}</p>` : ""}
                </div>
            </div>
        </body>
        </html>
    `;
};

export const generateContactEmailText = (data: EmailTemplateData): string => {
	return `
Neue Kontaktanfrage - SACS Aerospace GmbH

Name: ${data.name}
E-Mail: ${data.email}
${data.phone ? `Telefon: ${data.phone}` : ""}
Betreff: ${data.subject}

Nachricht:
${data.message}

---
Eingereicht am: ${data.submittedAt}
${data.userAgent ? `Browser: ${data.userAgent}` : ""}
${data.ipAddress ? `IP-Adresse: ${data.ipAddress}` : ""}
    `.trim();
};

export const generateAutoReplyHtml = (data: ContactFormData): string => {
	return `
        <!DOCTYPE html>
        <html lang="de">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Bestätigung Ihrer Anfrage</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    line-height: 1.6;
                    color: #333;
                    max-width: 600px;
                    margin: 0 auto;
                    padding: 20px;
                }
                .header {
                    background-color: #ea580c;
                    color: white;
                    padding: 20px;
                    text-align: center;
                    border-radius: 8px 8px 0 0;
                }
                .content {
                    background-color: #f9f9f9;
                    padding: 30px;
                    border-radius: 0 0 8px 8px;
                    border: 1px solid #ddd;
                }
                .contact-info {
                    background-color: white;
                    padding: 20px;
                    border-radius: 4px;
                    margin-top: 20px;
                }
            </style>
        </head>
        <body>
            <div class="header">
                <h1>Vielen Dank für Ihre Anfrage!</h1>
                <p>SACS Aerospace GmbH</p>
            </div>
            
            <div class="content">
                <p>Liebe/r ${data.name},</p>
                
                <p>vielen Dank für Ihre Anfrage bezüglich: <strong>${data.subject}</strong></p>
                
                <p>Wir haben Ihre Nachricht erhalten und werden uns schnellstmöglich bei Ihnen melden. In der Regel antworten wir innerhalb von 24 Stunden.</p>
                
                <div class="contact-info">
                    <h3>Unsere Kontaktdaten:</h3>
                    <p>
                        <strong>SACS Aerospace GmbH</strong><br>
                        Musterstraße 123<br>
                        12345 Berlin<br>
                        Deutschland
                    </p>
                    <p>
                        <strong>Telefon:</strong> +49 123 456 789<br>
                        <strong>E-Mail:</strong> kontakt@sacs-aerospace.de
                    </p>
                </div>
                
                <p>Bei dringenden Anfragen können Sie uns auch telefonisch erreichen.</p>
                
                <p>Mit freundlichen Grüßen<br>
                Ihr SACS Aerospace Team</p>
            </div>
        </body>
        </html>
    `;
};
