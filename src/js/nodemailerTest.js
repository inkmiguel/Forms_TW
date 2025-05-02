require("dotenv").config();
const nodemailer = require("nodemailer");

const userGmail = "migferiapad@gmail.com"; 
const passAppGmail = process.env.passAppGmail;

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: userGmail,
    pass: passAppGmail,
  },
});

const sendEmail = async (to, subject, text, html) => {
  const mailOptions = {
    from: `Miguel Angel Feria Padilla <${userGmail}>` ,
    to,
    subject,
    text,
    html,
    replyTo: userGmail,
  };

  return transporter.sendMail(mailOptions); // Esto devuelve una promesa
};

module.exports = sendEmail;
