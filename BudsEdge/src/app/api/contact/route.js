import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const data = await req.json();

    if (!data || typeof data !== "object") {
      return new Response(JSON.stringify({ error: "Invalid request payload" }), {
        status: 400,
      });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MY_EMAIL,
        pass: process.env.MY_EMAIL_PASS,
      },
    });

    let subject = "";
    let html = "";

    // CONTACT FORM
    if (data.name && data.email && data.message) {
      subject = `New Contact Message - ${data.name}`;
      html = `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        ${data.phone ? `<p><strong>Phone:</strong> ${data.phone}</p>` : ""}
        <p><strong>Message:</strong><br>${data.message}</p>
      `;
    }
    // BOOK A CALL
    else if (data.date && data.time && data.timezone) {
      subject = "New Call Booking Request";
      html = `
        <h2>New Call Booking</h2>
        <p><strong>Date:</strong> ${data.date}</p>
        <p><strong>Time:</strong> ${data.time}</p>
        <p><strong>Timezone:</strong> ${data.timezone}</p>
      `;
    } else {
      return new Response(JSON.stringify({ error: "Missing required fields" }), {
        status: 400,
      });
    }

    await transporter.sendMail({
      from: process.env.MY_EMAIL,
      to: process.env.MY_EMAIL,
      subject,
      html,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    return new Response(
      JSON.stringify({ success: false, error: err.message }),
      { status: 500 }
    );
  }
}
