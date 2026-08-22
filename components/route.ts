import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface BookingBody {
  name: string;
  email: string;
  from: string;
  to: string;
  date: string;
  time: string;
  car?: string;
}

export async function POST(request: Request) {
  try {
    const body: BookingBody = await request.json();
    const { name, email, from, to, date, time, car } = body;

    if (!name || !email || !from || !to || !date || !time) {
      return NextResponse.json(
        { error: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    // Basic email sanity check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    // EMAIL_USER / EMAIL_PASS = the Gmail account that SENDS the notification.
    // Use a Gmail App Password here (not your normal Gmail password).
    // See README-CHANGES.md for setup steps.
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const toAddress = process.env.BOOKING_TO_EMAIL || "varadharajan025@gmail.com";

    await transporter.sendMail({
      from: `"Ooty Cabs Website" <${process.env.EMAIL_USER}>`,
      to: toAddress,
      replyTo: email,
      subject: `New Cab Booking Request — ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2 style="margin-bottom: 4px;">New Booking Request</h2>
          <p style="color:#666;margin-top:0;">Ooty Cabs — website booking form</p>
          <table cellpadding="6" style="border-collapse: collapse;">
            <tr><td><strong>Name</strong></td><td>${name}</td></tr>
            <tr><td><strong>Email</strong></td><td>${email}</td></tr>
            <tr><td><strong>From Location</strong></td><td>${from}</td></tr>
            <tr><td><strong>To Location</strong></td><td>${to}</td></tr>
            <tr><td><strong>Date</strong></td><td>${date}</td></tr>
            <tr><td><strong>Time</strong></td><td>${time}</td></tr>
            <tr><td><strong>Preferred Car</strong></td><td>${car || "No preference"}</td></tr>
          </table>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Booking email error:", error);
    return NextResponse.json(
      { error: "Failed to send your booking. Please call us instead: +91 8489322556." },
      { status: 500 }
    );
  }
}