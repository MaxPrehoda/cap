import { error } from "@sveltejs/kit";
import Mailgun from "mailgun.js";
import Stripe from "stripe";

const stripe = new Stripe(import.meta.env.VITE_STRIPE_KEY);

let passwordGen = "xbchCMfKkqgenxXjgyYS";
const mailgun = new Mailgun(FormData);
const mg = mailgun.client({
  username: "api",
  key: import.meta.env.VITE_MAIL_GUN_KEY,
});

export async function load({ url }) {
  const sessionId = url.pathname.split("/")[2];

  if (!sessionId) {
    throw error(400, "Missing session ID");
  }

  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    const cus_email = session.customer_details.email;

    const emailHTML = `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Payment Success - Capture Quest</title>
      <style>
  
          body {
              font-family: Arial, sans-serif;
              background-color: #f4f4f4;
              color: #333;
              margin: 0;
              padding: 0;
          }
          .container {
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
              background-color: #fff;
              border-radius: 5px;
              box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
          }
          h1 {
              color: #0249fa;
              margin-bottom: 20px;
          }
          p {
              line-height: 1.6;
          }
          .cta {
              display: inline-block;
              background-color: #0249fa;
              color: #FFFFFF !important;
              text-decoration: none;
              padding: 10px 20px;
              border-radius: 5px;
              margin-top: 20px;
              
          }
          .footer {
              margin-top: 40px;
              text-align: center;
              color: #777;
              font-size: 14px;
          }
      </style>
  </head>
  <body>
      <div class="container">
          <h1>Thank you for your purchase!</h1>
          <p>Dear valued customer,</p>
          <p>We are thrilled to inform you that your payment for Capture Quest has been successful. Your support means the world to us, and we are excited to provide you with an exceptional experience.</p>
          <p>With your purchase, you now have access to a powerful and intuitive tool that will help you create stunning CSS animations effortlessly. Unleash your creativity and bring your web projects to life!</p>
          <p>If you have any questions, concerns, or feedback, please don't hesitate to reach out to our dedicated support team. We are here to assist you every step of the way.</p>
          <p>Your email address: ${cus_email}</p>
          <p>Your password: ${passwordGen}</p>
          <a href="https://www.capturequest.com/success/xYnaLSKI_user_jISLKdUJ10982c5v6" class="cta">Get Started</a>
          <div class="footer">
              <p>&copy; 2024 Capture Quest. All rights reserved.</p>
          </div>
      </div>
  </body>
  </html>`;

    const emailData = {
      from: "Capture Quest <noreply@capturequest.ai>",
      to: cus_email,
      subject: "Thank you for your purchase!",
      html: emailHTML,
      text: "Thank you for your purchase!",
    };

    await mg.messages.create(
      "capturequest.ai",
      emailData
    );

    return {
      success: true,
    };
  } catch (err) {
    console.error("Error sending email:", err);
  }
}
