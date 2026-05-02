import { NextResponse } from "next/server";
import { transporter } from "@/lib/mailer";

// ✅ Email validation
const isValidEmail = (email: string) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

// ✅ Basic sanitize
const sanitize = (text: string) => {
  return text?.replace(/</g, "&lt;").replace(/>/g, "&gt;");
};

export async function POST(req: Request) {
  try {
    let { name, email, city, message } = await req.json();

    // ✅ Trim inputs
    name = name?.trim();
    email = email?.trim();
    city = city?.trim();
    message = message?.trim();

    // ✅ Validation
    if (!name || !email || !city) {
      return NextResponse.json(
        { success: false, error: "All required fields must be filled" },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { success: false, error: "Invalid email address" },
        { status: 400 }
      );
    }

    // ✅ Sanitize
    name = sanitize(name);
    email = sanitize(email);
    city = sanitize(city);
    message = sanitize(message || "No message provided");

    // ===================================
    // 🎨 ADMIN EMAIL (PREMIUM DESIGN)
    // ===================================
    const adminTemplate = `
      <div style="font-family: 'Segoe UI', sans-serif; background:#0f172a; padding:40px;">
        <div style="max-width:650px; margin:auto; background:rgba(255,255,255,0.05); backdrop-filter:blur(12px); border-radius:16px; overflow:hidden; border:1px solid rgba(255,255,255,0.1);">
          
          <div style="background:linear-gradient(135deg,#f59e0b,#ef4444); padding:25px; text-align:center; color:white;">
            <h2 style="margin:0;">🍽️ New Franchise Application</h2>
            <p style="margin-top:5px; opacity:0.85;">Taste of Traditions</p>
          </div>

          <div style="padding:30px; color:#e5e7eb;">
            <p><strong>👤 Name:</strong> ${name}</p>
            <p><strong>📧 Email:</strong> ${email}</p>
            <p><strong>📍 City:</strong> ${city}</p>

            <div style="margin-top:20px; padding:20px; background:rgba(255,255,255,0.05); border-radius:10px;">
              <p style="margin:0;"><strong>📝 Message:</strong></p>
              <p style="margin-top:10px;">${message}</p>
            </div>
          </div>

          <div style="padding:15px; text-align:center; font-size:12px; color:#9ca3af;">
            New lead from website • ${new Date().toLocaleString()}
          </div>
        </div>
      </div>
    `;

    // ===================================
    // 📩 AUTO-REPLY TO USER
    // ===================================
    const userTemplate = `
      <div style="font-family:sans-serif; background:#f9fafb; padding:30px;">
        <div style="max-width:600px; margin:auto; background:white; padding:25px; border-radius:12px;">
          
          <h2 style="color:#f59e0b;">Hi ${name}, 👋</h2>
          
          <p>Thank you for your interest in becoming a franchise partner with <b>Taste of Traditions</b>.</p>
          
          <p>We have received your application and our team will review it shortly.</p>

          <div style="margin-top:15px; padding:15px; background:#f3f4f6; border-radius:8px;">
            <p><strong>Your Details:</strong></p>
            <p>Name: ${name}</p>
            <p>City: ${city}</p>
          </div>

          <p style="margin-top:20px;">
            Our team will contact you within 24–48 hours with the next steps.
          </p>

          <p style="margin-top:25px;">Warm regards,<br/><b>Franchise Team</b></p>
        </div>
      </div>
    `;

    // ===================================
    // 📬 MAIL CONFIG
    // ===================================
    const adminMail = {
      from: `"Taste of Traditions" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `🚀 Franchise Application - ${name} (${city})`,
      html: adminTemplate,
    };

    const userMail = {
      from: `"Taste of Traditions" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "✨ Franchise Application Received",
      html: userTemplate,
    };

    // ===================================
    // 🚀 SEND BOTH EMAILS
    // ===================================
    await Promise.all([
      transporter.sendMail(adminMail),
      transporter.sendMail(userMail),
    ]);

    return NextResponse.json({
      success: true,
      message: "Application submitted successfully 🚀",
    });

  } catch (error) {
    console.error("❌ Franchise Mail Error:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Something went wrong. Please try again later.",
      },
      { status: 500 }
    );
  }
}