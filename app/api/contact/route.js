import nodemailer from "nodemailer";

export async function POST(req) {
  const data = await req.json();

  const { company, name, email, phone, message } = data;

  if (!name || !email || !message) {
    return new Response(JSON.stringify({ error: "Missing required fields." }), { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",         
    port: 465,                     
    secure: true, 
    auth: {
      user: "k2integris@gmail.com",
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"Website Contact" <k2integris@gmail.com>`,
    to: "partner@k2integris.com",
    subject: `New Contact Message from ${name}`,
    text: `
Company: ${company}
Name: ${name}
Email: ${email}
Phone: ${phone}

Message:
${message}
    `.trim(),
  };

  try {
    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error("Email sending failed", err);
    return new Response(JSON.stringify({ error: "Failed to send email" }), { status: 500 });
  }
}
