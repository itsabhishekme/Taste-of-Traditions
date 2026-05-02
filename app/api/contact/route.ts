import { NextResponse } from "next/server";
import { transporter } from "@/lib/mailer";

// ✅ Email validation regex
const isValidEmail = (email: string) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

// ✅ Sanitize input (basic protection)
const sanitize = (text: string) => {
  return text.replace(/</g, "&lt;").replace(/>/g, "&gt;");
};

export async function POST(req: Request) {
  try {
    const body = await req.json();
    let { name, email, message } = body;

    // ✅ Trim inputs
    name = name?.trim();
    email = email?.trim();
    message = message?.trim();

    // ✅ Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "All fields are required" },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { success: false, error: "Invalid email address" },
        { status: 400 }
      );
    }

    if (message.length < 10) {
      return NextResponse.json(
        { success: false, error: "Message too short" },
        { status: 400 }
      );
    }

    // ✅ Sanitize
    name = sanitize(name);
    email = sanitize(email);
    message = sanitize(message);

    // ===============================
    // 🎨 BEAUTIFUL EMAIL TEMPLATE
    // ===============================
    const htmlTemplate = `
      <div style="font-family: 'Segoe UI', sans-serif; background:#0f172a; padding:40px;">
        <div style="max-width:650px; margin:auto; background:rgba(255,255,255,0.05); backdrop-filter: blur(15px); border-radius:16px; overflow:hidden; border:1px solid rgba(255,255,255,0.1);">
          
          <div style="background:linear-gradient(135deg,#6366f1,#a855f7); padding:25px; text-align:center; color:white;">
            <h2 style="margin:0; font-size:24px;">🚀 New Contact Message</h2>
            <p style="margin:5px 0 0; opacity:0.8;">Someone reached out via your website</p>
          </div>

          <div style="padding:30px; color:#e5e7eb;">
            <p><strong style="color:#fff;">👤 Name:</strong> ${name}</p>
            <p><strong style="color:#fff;">📧 Email:</strong> ${email}</p>

            <div style="margin-top:20px; padding:20px; background:rgba(255,255,255,0.05); border-radius:10px; border:1px solid rgba(255,255,255,0.08);">
              <p style="margin:0; line-height:1.6;">${message}</p>
            </div>
          </div>

          <div style="padding:15px; text-align:center; font-size:12px; color:#9ca3af;">
            © ${new Date().getFullYear()} Vihaan Writes • All rights reserved
          </div>

        </div>
      </div>
    `;

    // ===============================
    // 📩 ADMIN EMAIL (YOU)
    // ===============================
    const adminMail = {
      from: `"Vihaan Writes" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `🔥 New Message from ${name}`,
      html: htmlTemplate,
    };

    // ===============================
    // 📬 AUTO REPLY TO USER
    // ===============================
    const autoReplyTemplate = `
      <div style="font-family:sans-serif; padding:30px; background:#f9fafb;">
        <div style="max-width:600px; margin:auto; background:white; padding:25px; border-radius:12px;">
          <h2 style="color:#4f46e5;">Hi ${name}, 👋</h2>
          <p>Thank you for reaching out. I’ve received your message and will get back to you soon.</p>

          <div style="margin-top:15px; padding:15px; background:#f3f4f6; border-radius:8px;">
            <p style="margin:0;"><strong>Your message:</strong></p>
            <p style="margin-top:5px;">"${message}"</p>
          </div>

          <p style="margin-top:20px;">— Vihaan</p>
        </div>
      </div>
    `;

    const userMail = {
      from: `"Vihaan Writes" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "✨ We received your message",
      html: autoReplyTemplate,
    };

    // ===============================
    // 🚀 SEND EMAILS (PARALLEL)
    // ===============================
    await Promise.all([
      transporter.sendMail(adminMail),
      transporter.sendMail(userMail),
    ]);

    return NextResponse.json({
      success: true,
      message: "Message sent successfully 🚀",
    });

  } catch (error: any) {
    console.error("❌ MAIL ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Something went wrong. Please try again later.",
      },
      { status: 500 }
    );
  }
}