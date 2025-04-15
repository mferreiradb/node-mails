const fs = require('fs');
const nodemailer = require('nodemailer');

const user = process.env.USER_EMAIL;
const pass = process.env.USER_PASS;
const host = process.env.USER_HOST;
const port = process.env.USER_PORT;

const transporter = nodemailer.createTransport({
    host,
    port,
    secure: true,
    auth: {
        user,
        pass
    }
});

const emailHtml = fs.readFileSync('./index.html', 'utf-8');

transporter.sendMail({
    from: `Name <${user}>`,
    to: 'user@host.com',
    subject: 'Welcome to Our Service',
    text: 'Hello, Thank you for joining our platform. We are excited to have you on board.',
    html: emailHtml,
}).then((msg) => {
    console.log('Message sent: %s', msg);
}).catch((err) => {
    console.log('Error: %s', err);
});