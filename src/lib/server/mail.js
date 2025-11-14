import nodemailer from 'nodemailer';
import { MAILCHANNELS_PASSWORD, MAILCHANNELS_USERNAME } from '$env/static/private';

// Create a transporter using MailChannels
const transporter = nodemailer.createTransport({
	host: 'smtp.mailchannels.net',
	port: 587,
	secure: false,
	auth: {
		user: MAILCHANNELS_USERNAME,
		pass: MAILCHANNELS_PASSWORD
	}
});

/*
 * Sends an email using MailChannels via Nodemailer.
 *
 * @param mailOptions - A Nodemailer SendMailOptions object
 */
export async function sendEmail(mailOptions) {
	try {
		const info = await transporter.sendMail(mailOptions);
		console.log('✅ Email sent successfully:', info.response);
		return info;
	} catch (error) {
		console.error('❌ Error sending email:', error);
		throw new Error(error instanceof Error ? error.message : 'Unknown email send error');
	}
}
