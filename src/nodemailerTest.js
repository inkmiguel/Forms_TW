const nodemailer = require("nodemailer");
// import nodemailer from "nodemailer";

const userGmail = "migferiapad@gmail.com";
const passAppGmail = "";

// Set up Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: userGmail,
    pass: passAppGmail,
  },
});

// Define a route for sending emails
// Set up email options
const mailOptions = {
  from: userGmail,
  to: userGmail,
  subject: "Bienvenido a la estafa piramidal",
  text: "¡Este es un correo electrónico de prueba desde Node.js!",
};

// Send email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log(error);
  }
  console.log("Email sent: " + info.response);
});