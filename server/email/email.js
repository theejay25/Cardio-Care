import nodemailer from 'nodemailer'
import dotenv from 'dotenv'

dotenv.config()


const transporter = nodemailer.createTransport({
  service: 'gmail',
  host:process.env.EMAIL_APP_HOST,
  port:process.env.EMAIL_PORT,
  secure:true,
  auth: {
  user: process.env.EMAIL_USER ,
  pass: process.env.EMAIL_APP_PASSWORD
},
tls: {
  rejectUnauthorized: false // 👈 THIS fixes the self-signed certificate issue
}
});

export const welcomeEmail = async (email, subject, text) => {
   
  
  try {
  
  const info = await transporter.sendMail({
    from: 'jaytemporary1@gmail.com',
    to: email,
    subject: subject,
    html: `
    <h2>Verification Token</h2>
    <p>${text}</p>
    `
  });
  
  console.log('Email sent: ' + info.response);

  } catch (error) {
    console.log(error);
    
  }
}

