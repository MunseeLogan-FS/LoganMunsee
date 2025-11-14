//updated server
import { sendEmail } from '$lib/server/mail';

export const actions = {
	default: async ({ request }) => {
		const data = Object.fromEntries(await request.formData());

		// Send the email
		try {
			await sendEmail({
				from: 'no-reply@loganmunsee.com',
				to: 'lmunsee64@gmail.com',
				subject: 'New Contact Form Submission',
				text: JSON.stringify(data, null, 2)
			});
		} catch {
			return { success: false, error: 'Failed to send email' };
		}

		return { success: true };
	}
};
