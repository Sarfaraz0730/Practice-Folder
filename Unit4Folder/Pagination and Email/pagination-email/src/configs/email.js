require("dotenv").config();
const nodemailer = require("nodemailer");

console.log(process.env.SMTP_HOST);

module.exports = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: 587,
  secure: false, // upgrade later with STARTTLS
  auth: {
    user: process.env.SMTP_USERNAME,
    pass: process.env.SMTP_PASSWORD,
  },
});
