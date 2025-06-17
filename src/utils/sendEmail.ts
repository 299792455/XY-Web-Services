import nodemailer from 'nodemailer';

interface MailData {
  name: string;
  email: string;
  number?: string;
  message: string;
}

export async function sendEmail({ name, email, number, message }: MailData) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `XY Web Services <${process.env.GMAIL_USER}>`,
    to: process.env.GMAIL_USER,
    subject: `Nouveau message de ${name}`,
    text: `Nom : ${name}\nEmail : ${email}\nTéléphone : ${number || 'non précisé'}\n\nMessage :\n${message}`,
  };

  await transporter.sendMail(mailOptions);
}
