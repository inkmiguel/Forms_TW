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

const sendEmail = async (to, subject, text) => {
  const mailOptions = {
    from: userGmail,
    to,
    subject,
    text,
  };

  return transporter.sendMail(mailOptions); // Esto devuelve una promesa
};

module.exports = sendEmail;
