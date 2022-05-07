import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "6df6715994af8e",
    pass: "f8ff8e4f8ba346",
  },
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: "Equipe Feedback <oi@feedback.com>",
      to: "Daniel Egidio <daniel@gmail.com>",
      subject,
      html: body,
    });
  }
}
