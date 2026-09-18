import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

function escapeHtml(value: unknown) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const fields = [
      "name",
      "phone",
      "email",
      "date",
      "time",
      "pickup",
      "drop",
      "adultMale",
      "adultFemale",
      "children",
      "vehicle",
      "tripType",
      "notes",
    ] as const;

    const data = Object.fromEntries(
      fields.map((key) => [key, escapeHtml(body[key])])
    );

    if (!data.name || !data.phone || !data.date || !data.time || !data.pickup || !data.drop) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const user = process.env.SMTP_USER || "";
    const pass = process.env.SMTP_PASS || "";
    const to = process.env.BOOKING_TO || "varadharajan025@gmail.com";

    if (!user || !pass) {
      return NextResponse.json(
        { error: "Email is not configured. Add SMTP_USER and SMTP_PASS." },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: { user, pass },
    });

    await transporter.sendMail({
      from: `"Ooty Cabs Booking" <${user}>`,
      to,
      subject: `New Trip Booking - ${data.name}`,
      html: `
        <h2>New Booking Request</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Email:</strong> ${data.email || "Not provided"}</p>
        <p><strong>Date:</strong> ${data.date}</p>
        <p><strong>Time:</strong> ${data.time}</p>
        <p><strong>From:</strong> ${data.pickup}</p>
        <p><strong>To:</strong> ${data.drop}</p>
        <hr/>
        <p><strong>Adult Male:</strong> ${data.adultMale}</p>
        <p><strong>Adult Female:</strong> ${data.adultFemale}</p>
        <p><strong>Children:</strong> ${data.children}</p>
        <p><strong>Vehicle:</strong> ${data.vehicle}</p>
        <p><strong>Trip Type:</strong> ${data.tripType}</p>
        <p><strong>Notes:</strong> ${data.notes || "None"}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
