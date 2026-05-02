import nodemailer from "nodemailer";

// ✅ Create reusable transporter
export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// ✅ Verify connection (optional but useful)
export async function verifyTransport() {
  try {
    await transporter.verify();
    console.log("✅ Email server is ready");
  } catch (error) {
    console.error("❌ Email server error:", error);
  }
}