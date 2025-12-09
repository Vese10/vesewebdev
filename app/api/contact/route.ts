import { NextRequest, NextResponse } from "next/server";
import Mailjet from "node-mailjet";

// Initialize Mailjet client
const mailjet = Mailjet.apiConnect(
  process.env.MJ_APIKEY_PUBLIC || "",
  process.env.MJ_APIKEY_PRIVATE || ""
);

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body = await request.json();
    const { name, email, phone, message, recaptchaToken } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Nome, email e messaggio sono obbligatori" },
        { status: 400 }
      );
    }

    // Verify reCAPTCHA token
    if (!recaptchaToken) {
      return NextResponse.json(
        { error: "Verifica reCAPTCHA fallita (token mancante)" },
        { status: 400 }
      );
    }

    const secretKey = process.env.RECAPTCHA_SECRET_KEY;
    if (!secretKey) {
      console.error("RECAPTCHA_SECRET_KEY not set");
      return NextResponse.json(
        { error: "Errore configurazione server" },
        { status: 500 }
      );
    }

    const verificationUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${recaptchaToken}`;
    const verificationResponse = await fetch(verificationUrl, { method: "POST" });
    const verificationResult = await verificationResponse.json();

    if (!verificationResult.success || verificationResult.score < 0.5) {
      console.warn("reCAPTCHA failed:", verificationResult);
      return NextResponse.json(
        { error: "Verifica reCAPTCHA fallita. Sei un robot?" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Formato email non valido" },
        { status: 400 }
      );
    }

    // Prepare email content
    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%); padding: 20px; text-align: center; color: #000; border-radius: 8px 8px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px; }
            .field { margin-bottom: 20px; }
            .label { font-weight: bold; color: #f59e0b; }
            .value { margin-top: 5px; padding: 10px; background: white; border-left: 3px solid #fbbf24; }
            .footer { margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #666; text-align: center; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin: 0;">📧 Nuovo Messaggio dal Sito</h1>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Nome:</div>
                <div class="value">${name}</div>
              </div>
              <div class="field">
                <div class="label">Email:</div>
                <div class="value"><a href="mailto:${email}" style="color: #f59e0b;">${email}</a></div>
              </div>
              ${
                phone
                  ? `
              <div class="field">
                <div class="label">Telefono:</div>
                <div class="value"><a href="tel:${phone}" style="color: #f59e0b;">${phone}</a></div>
              </div>
              `
                  : ""
              }
              <div class="field">
                <div class="label">Messaggio:</div>
                <div class="value">${message.replace(/\n/g, "<br>")}</div>
              </div>
              <div class="footer">
                Questo messaggio è stato inviato dal form di contatto di vesewebdev.it
              </div>
            </div>
          </div>
        </body>
      </html>
    `;

    const emailText = `
Nuovo Messaggio dal Sito Web

Nome: ${name}
Email: ${email}
${phone ? `Telefono: ${phone}` : ""}

Messaggio:
${message}

---
Inviato dal form di contatto di vesewebdev.it
    `;

    // Send email via Mailjet
    const result = await mailjet.post("send", { version: "v3.1" }).request({
      Messages: [
        {
          From: {
            Email: process.env.EMAIL_FROM,
            Name: "Vesewebdev Contact Form",
          },
          To: [
            {
              Email: process.env.CONTACT_TO,
              Name: "Veselin Hristov",
            },
          ],
          Subject: `📧 Nuovo contatto da ${name}`,
          TextPart: emailText,
          HTMLPart: emailHtml,
          ReplyTo: {
            Email: email,
            Name: name,
          },
        },
      ],
    });

    // Check if email was sent successfully
    if (result.response.status === 200) {
      return NextResponse.json(
        { success: true, message: "Email inviata con successo" },
        { status: 200 }
      );
    } else {
      throw new Error("Errore durante l'invio dell'email");
    }
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      {
        error: "Si è verificato un errore durante l'invio del messaggio",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
