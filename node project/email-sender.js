const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'your-smtp-host',
  port: 587,
  secure: false, // or 'STARTTLS'
  auth: {
    user: 'your-email-address',
    pass: 'your-email-password'
  }
});

const mailOptions = {
  from: 'your-email-address',
  to: 'your-email-address',
  subject: 'Hello from Node.js',
  text: 'Hello from Node.js!'
};

transporter.sendMail(mailOptions, (err, info) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('Email sent: ' + info.response);
});