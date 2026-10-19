import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, projectType, budget, message } = body;

    // Validate required fields
    if (!name || typeof name !== "string" || !name.trim()) {
      return NextResponse.json({ error: "Please provide your name" }, { status: 400 });
    }

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json({ error: "Please provide a valid email address" }, { status: 400 });
    }

    if (!message || typeof message !== "string" || !message.trim()) {
      return NextResponse.json({ error: "Please provide a project message or description" }, { status: 400 });
    }

    const recipient = process.env.CONTACT_RECIPIENT_EMAIL || "contact@webzen.com.bd";

    // Build modern styled HTML email
    const htmlContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>New Client Inquiry - WebZen Bangladesh</title>
      </head>
      <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #030712; color: #f3f4f6; padding: 32px 16px; margin: 0;">
        <div style="max-width: 600px; margin: 0 auto; background-color: #090d1c; border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 20px; overflow: hidden; box-shadow: 0 20px 40px rgba(0,0,0,0.5);">
          
          <!-- Header Banner -->
          <div style="background: linear-gradient(135deg, #0284c7 0%, #06b6d4 100%); padding: 24px; text-align: left;">
            <h1 style="margin: 0; color: #ffffff; font-size: 20px; font-weight: 700; letter-spacing: -0.5px;">WebZen Bangladesh</h1>
            <p style="margin: 4px 0 0 0; color: rgba(255, 255, 255, 0.9); font-size: 13px;">New Client Project Inquiry</p>
          </div>

          <!-- Body Content -->
          <div style="padding: 28px 24px;">
            <p style="margin-top: 0; font-size: 14px; color: #94a3b8; line-height: 1.6;">
              You have received a new project consultation inquiry from your portfolio website:
            </p>

            <!-- Info Grid -->
            <table style="width: 100%; border-collapse: separate; border-spacing: 0 10px; margin: 20px 0;">
              <tr>
                <td style="width: 140px; padding: 10px 14px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.06); border-radius: 10px 0 0 10px; color: #94a3b8; font-size: 12px; font-weight: 600;">Client Name</td>
                <td style="padding: 10px 14px; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.06); border-left: none; border-radius: 0 10px 10px 0; color: #ffffff; font-size: 13px; font-weight: 600;">${escapeHtml(name)}</td>
              </tr>
              <tr>
                <td style="padding: 10px 14px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.06); border-radius: 10px 0 0 10px; color: #94a3b8; font-size: 12px; font-weight: 600;">Email Address</td>
                <td style="padding: 10px 14px; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.06); border-left: none; border-radius: 0 10px 10px 0; color: #38bdf8; font-size: 13px;">
                  <a href="mailto:${escapeHtml(email)}" style="color: #38bdf8; text-decoration: none;">${escapeHtml(email)}</a>
                </td>
              </tr>
              ${phone ? `
              <tr>
                <td style="padding: 10px 14px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.06); border-radius: 10px 0 0 10px; color: #94a3b8; font-size: 12px; font-weight: 600;">Phone / WhatsApp</td>
                <td style="padding: 10px 14px; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.06); border-left: none; border-radius: 0 10px 10px 0; color: #10b981; font-size: 13px; font-weight: 600;">
                  <a href="tel:${escapeHtml(phone)}" style="color: #10b981; text-decoration: none;">${escapeHtml(phone)}</a>
                </td>
              </tr>
              ` : ""}
              ${projectType ? `
              <tr>
                <td style="padding: 10px 14px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.06); border-radius: 10px 0 0 10px; color: #94a3b8; font-size: 12px; font-weight: 600;">Project Scope</td>
                <td style="padding: 10px 14px; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.06); border-left: none; border-radius: 0 10px 10px 0; color: #cbd5e1; font-size: 13px;">${escapeHtml(projectType)}</td>
              </tr>
              ` : ""}
              ${budget ? `
              <tr>
                <td style="padding: 10px 14px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.06); border-radius: 10px 0 0 10px; color: #94a3b8; font-size: 12px; font-weight: 600;">Expected Budget</td>
                <td style="padding: 10px 14px; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.06); border-left: none; border-radius: 0 10px 10px 0; color: #f59e0b; font-size: 13px; font-weight: 600;">${escapeHtml(budget)}</td>
              </tr>
              ` : ""}
            </table>

            <!-- Message Box -->
            <div style="margin-top: 24px;">
              <div style="font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; color: #94a3b8; margin-bottom: 8px;">Project Details / Message:</div>
              <div style="padding: 16px; background-color: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 12px; color: #f1f5f9; font-size: 13px; line-height: 1.7; white-space: pre-wrap;">${escapeHtml(message)}</div>
            </div>

            <!-- Quick Reply CTA -->
            <div style="margin-top: 28px; text-align: center;">
              <a href="mailto:${escapeHtml(email)}?subject=Re: Inquiry with WebZen Bangladesh" style="display: inline-block; background-color: #06b6d4; color: #020617; font-weight: 700; font-size: 13px; text-decoration: none; padding: 12px 28px; border-radius: 12px;">Reply to Client</a>
            </div>

          </div>

          <!-- Footer -->
          <div style="padding: 16px 24px; background-color: rgba(0, 0, 0, 0.3); border-top: 1px solid rgba(255, 255, 255, 0.06); text-align: center; font-size: 11px; color: #64748b;">
            Sent automatically by WebZen Bangladesh Portfolio engine via Resend.
          </div>

        </div>
      </body>
    </html>
    `;

    const { data: emailData, error: emailError } = await resend.emails.send({
      from: "WebZen Inquiries <onboarding@resend.dev>",
      to: [recipient],
      replyTo: email,
      subject: `New Client Inquiry from ${name} (${projectType || "General"})`,
      html: htmlContent,
    });

    if (emailError) {
      console.error("Resend API error:", emailError);
      return NextResponse.json({ error: emailError.message || "Failed to send email" }, { status: 500 });
    }

    return NextResponse.json({
      success: true,
      id: emailData?.id,
      message: "Message sent successfully!",
    });
  } catch (error: any) {
    console.error("Contact API internal error:", error);
    return NextResponse.json({ error: error.message || "An unexpected error occurred" }, { status: 500 });
  }
}

function escapeHtml(text: string) {
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
