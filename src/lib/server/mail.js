import nodemailer from 'nodemailer';
import { MAILCHANNELS_PASSWORD, MAILCHANNELS_USERNAME } from '$env/static/private';

// Create a transporter using MailChannels SMTP
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
 * DKIM signing is handled automatically by MailChannels if your DNS records are configured:
 * 1. SPF record: v=spf1 include:relay.mailchannels.net ~all
 * 2. DKIM record at: default._domainkey.loganmunsee.com
 * 3. DMARC record at: _dmarc.loganmunsee.com
 *
 * @param mailOptions - A Nodemailer SendMailOptions object
 */
export async function sendEmail(mailOptions) {
	try {
		const info = await transporter.sendMail(mailOptions);
		return info;
	} catch {
		throw new Error('Failed to send email');
	}
}
