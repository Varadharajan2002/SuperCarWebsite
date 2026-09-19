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

    const user = "ootytripplanners22@gmail.com";
    const pass = "pwzc sfjz mecf tagc";
    const to = "ootytripplanners22@gmail.com";

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
        html: 
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Trip Booking</title>
</head>
<body style="margin:0;padding:0;background-color:#0f0f1a;font-family:'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">

  <!-- Main Wrapper -->
  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#0f0f1a;padding:40px 15px;">
    <tr>
      <td align="center">

        <!-- Card -->
        <table width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:620px;background:linear-gradient(145deg,#1a1a2e 0%,#16213e 100%);border-radius:20px;overflow:hidden;box-shadow:0 20px 40px rgba(0,0,0,0.4);">

          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,#3b82f6 0%,#1d4ed8 50%,#7c3aed 100%);padding:32px 30px;text-align:center;">
              <h1 style="margin:0;color:#ffffff;font-size:26px;font-weight:700;letter-spacing:0.5px;">
                🚗 New Trip Booking
              </h1>
              <p style="margin:8px 0 0;color:rgba(255,255,255,0.9);font-size:15px;">
                Ooty Cabs • Instant Notification
              </p>
            </td>
          </tr>

          <!-- Greeting -->
          <tr>
            <td style="padding:30px 30px 10px;">
              <p style="margin:0;color:#e2e8f0;font-size:16px;line-height:1.6;">
                Hello Team 👋<br>
                You have received a <strong style="color:#60a5fa;">new booking request</strong>. Here are the complete details:
              </p>
            </td>
          </tr>

          <!-- Customer Info Card -->
          <tr>
            <td style="padding:20px 30px 10px;">
              <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background:rgba(59,130,246,0.12);border:1px solid rgba(59,130,246,0.25);border-radius:14px;">
                <tr>
                  <td style="padding:20px;">
                    <p style="margin:0 0 12px;color:#93c5fd;font-size:13px;font-weight:600;text-transform:uppercase;letter-spacing:1px;">
                      👤 Customer Details
                    </p>
                    <p style="margin:0 0 8px;color:#f1f5f9;font-size:15px;">
                      <strong style="color:#94a3b8;width:90px;display:inline-block;">Name:</strong> ${data.name}
                    </p>
                    <p style="margin:0 0 8px;color:#f1f5f9;font-size:15px;">
                      <strong style="color:#94a3b8;width:90px;display:inline-block;">Phone:</strong> 
                      <a href="tel:${data.phone}" style="color:#60a5fa;text-decoration:none;font-weight:600;">${data.phone}</a>
                    </p>
                    <p style="margin:0;color:#f1f5f9;font-size:15px;">
                      <strong style="color:#94a3b8;width:90px;display:inline-block;">Email:</strong> 
                      ${data.email ? `<a href="mailto:${data.email}" style="color:#60a5fa;text-decoration:none;">${data.email}</a>` : '<span style="color:#64748b;">Not provided</span>'}
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Trip Details Card -->
          <tr>
            <td style="padding:15px 30px;">
              <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background:rgba(124,58,237,0.12);border:1px solid rgba(124,58,237,0.25);border-radius:14px;">
                <tr>
                  <td style="padding:20px;">
                    <p style="margin:0 0 12px;color:#c4b5fd;font-size:13px;font-weight:600;text-transform:uppercase;letter-spacing:1px;">
                      📍 Trip Details
                    </p>
                    
                    <table width="100%" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td width="50%" style="padding-bottom:10px;">
                          <p style="margin:0;color:#94a3b8;font-size:12px;">Date</p>
                          <p style="margin:4px 0 0;color:#f1f5f9;font-size:15px;font-weight:600;">${data.date}</p>
                        </td>
                        <td width="50%" style="padding-bottom:10px;">
                          <p style="margin:0;color:#94a3b8;font-size:12px;">Time</p>
                          <p style="margin:4px 0 0;color:#f1f5f9;font-size:15px;font-weight:600;">${data.time}</p>
                        </td>
                      </tr>
                      <tr>
                        <td colspan="2" style="padding-bottom:10px;">
                          <p style="margin:0;color:#94a3b8;font-size:12px;">From</p>
                          <p style="margin:4px 0 0;color:#f1f5f9;font-size:15px;font-weight:600;">${data.pickup}</p>
                        </td>
                      </tr>
                      <tr>
                        <td colspan="2">
                          <p style="margin:0;color:#94a3b8;font-size:12px;">To</p>
                          <p style="margin:4px 0 0;color:#f1f5f9;font-size:15px;font-weight:600;">${data.drop}</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Passengers & Vehicle -->
          <tr>
            <td style="padding:15px 30px;">
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td width="48%" style="vertical-align:top;">
                    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background:rgba(16,185,129,0.12);border:1px solid rgba(16,185,129,0.25);border-radius:14px;">
                      <tr>
                        <td style="padding:18px;">
                          <p style="margin:0 0 10px;color:#6ee7b7;font-size:13px;font-weight:600;text-transform:uppercase;letter-spacing:1px;">
                            👥 Passengers
                          </p>
                          <p style="margin:0 0 6px;color:#f1f5f9;font-size:14px;">
                            Male: <strong>${data.adultMale || 0}</strong>
                          </p>
                          <p style="margin:0 0 6px;color:#f1f5f9;font-size:14px;">
                            Female: <strong>${data.adultFemale || 0}</strong>
                          </p>
                          <p style="margin:0;color:#f1f5f9;font-size:14px;">
                            Children: <strong>${data.children || 0}</strong>
                          </p>
                        </td>
                      </tr>
                    </table>
                  </td>
                  <td width="4%"></td>
                  <td width="48%" style="vertical-align:top;">
                    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background:rgba(245,158,11,0.12);border:1px solid rgba(245,158,11,0.25);border-radius:14px;">
                      <tr>
                        <td style="padding:18px;">
                          <p style="margin:0 0 10px;color:#fcd34d;font-size:13px;font-weight:600;text-transform:uppercase;letter-spacing:1px;">
                            🚙 Vehicle & Trip
                          </p>
                          <p style="margin:0 0 6px;color:#f1f5f9;font-size:14px;">
                            Vehicle: <strong>${data.vehicle || "—"}</strong>
                          </p>
                          <p style="margin:0;color:#f1f5f9;font-size:14px;">
                            Type: <strong>${data.tripType || "—"}</strong>
                          </p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Notes -->
          ${data.notes ? `
          <tr>
            <td style="padding:15px 30px 10px;">
              <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background:rgba(239,68,68,0.1);border:1px solid rgba(239,68,68,0.2);border-radius:14px;">
                <tr>
                  <td style="padding:18px;">
                    <p style="margin:0 0 8px;color:#fca5a5;font-size:13px;font-weight:600;text-transform:uppercase;letter-spacing:1px;">
                      📝 Special Notes
                    </p>
                    <p style="margin:0;color:#f1f5f9;font-size:14px;line-height:1.5;">
                      ${data.notes}
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          ` : ""}

          <!-- CTA Button -->
          <tr>
            <td style="padding:25px 30px 35px;text-align:center;">
              <a href="tel:${data.phone}" 
                 style="display:inline-block;background:linear-gradient(135deg,#3b82f6,#7c3aed);color:#ffffff;text-decoration:none;padding:14px 32px;border-radius:50px;font-size:15px;font-weight:600;box-shadow:0 8px 20px rgba(59,130,246,0.35);">
                📞 Call Customer Now
              </a>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#0c0c14;padding:22px 30px;text-align:center;border-top:1px solid rgba(255,255,255,0.06);">
              <p style="margin:0 0 6px;color:#64748b;font-size:13px;">
                Ooty Travels • Trusted since 1999
              </p>
              <p style="margin:0;color:#475569;font-size:12px;">
                This is an automated booking notification
              </p>
            </td>
          </tr>

        </table>
        <!-- End Card -->

      </td>
    </tr>
  </table>

</body>
</html>

      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
