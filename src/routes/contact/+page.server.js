//updated server
import { sendEmail } from '$lib/server/mail';

export const actions = {
	default: async ({ request }) => {
		const data = Object.fromEntries(await request.formData());

		// Send the email
		try {
			await sendEmail({
				from: 'form submission <no-reply@loganmunsee.com>',
				to: 'lmunsee64@gmail.com',
				subject: 'New Contact Form Submission',
				html: `
					<h1>New Contact Form Submission</h1>
					<p><strong>Name:</strong> ${data.name}</p>
					<p><strong>Email:</strong> ${data.email}</p>
					<p><strong>Message:</strong> ${data.message}</p>
				`
			});
		} catch (error) {
			console.error('Error sending email:', error);
			return { success: false, error: 'Failed to send email' };
		}

		return { success: true };
	}
};
