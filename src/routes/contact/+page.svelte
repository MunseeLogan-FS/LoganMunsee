<script>
	import { enhance } from '$app/forms';

	let { form } = $props();
	let isSubmitting = $state(false);
</script>

<section class="contact-container">
	<div class="contact-header">
		<h1>Let's Work Together</h1>
		<p class="subtitle">
			Have a project in mind or just want to say hello? I'd love to hear from you. Fill out the form
			below and I'll get back to you as soon as possible.
		</p>
	</div>

	<div class="contact-content">
		<div class="contact-info">
			<div class="info-card">
				<div class="icon">📧</div>
				<h3>Email</h3>
				<p>
					<a href="mailto:logan@loganmunsee.com" class="email-link">logan@loganmunsee.com</a>
				</p>
			</div>

			<div class="info-card">
				<div class="icon">💼</div>
				<h3>LinkedIn</h3>
				<p>
					<a
						href="https://www.linkedin.com/in/logan-munsee"
						target="_blank"
						rel="noopener noreferrer"
						class="card-link">Connect with me</a
					>
				</p>
			</div>

			<div class="info-card">
				<div class="icon">💻</div>
				<h3>GitHub</h3>
				<p>
					<a
						href="https://github.com/MunseeLogan-FS"
						target="_blank"
						rel="noopener noreferrer"
						class="card-link">@MunseeLogan-FS</a
					>
				</p>
			</div>
		</div>

		<form
			method="POST"
			class="contact-form"
			use:enhance={() => {
				isSubmitting = true;

				return async ({ result, update }) => {
					isSubmitting = false;
					await update();
				};
			}}
		>
			<div class="field">
				<label for="name">Name</label>
				<input id="name" name="name" placeholder="Your name" required />
			</div>

			<div class="field">
				<label for="email">Email</label>
				<input id="email" name="email" type="email" placeholder="your@email.com" required />
			</div>

			<div class="field">
				<label for="message">Message</label>
				<textarea
					id="message"
					name="message"
					rows="6"
					placeholder="Tell me about your project..."
					required
				></textarea>
			</div>

			<button type="submit" class="btn-submit" disabled={isSubmitting}>
				<span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
				<span class="arrow">→</span>
			</button>

			{#if form?.success}
				<div class="success">
					<span class="check">✓</span>
					Thanks! Your message has been sent. I'll get back to you soon.
				</div>
			{/if}

			{#if form?.error}
				<div class="error">
					<span class="cross">✕</span>
					{form.error}. Please try again or email me directly.
				</div>
			{/if}
		</form>
	</div>
</section>

<style>
	.contact-container {
		max-width: 1100px;
		margin: 0 auto;
		padding: 4rem 2rem;
	}

	.contact-header {
		text-align: center;
		margin-bottom: 4rem;
	}

	h1 {
		font-size: clamp(2.5rem, 5vw, 3.5rem);
		margin-bottom: 1rem;
		color: var(--text-color);
		font-weight: 800;
	}

	.subtitle {
		font-size: 1.125rem;
		line-height: 1.7;
		max-width: 600px;
		margin: 0 auto;
		color: rgba(255, 255, 255, 0.9);
	}

	.contact-content {
		display: grid;
		grid-template-columns: 1fr 1.5fr;
		gap: 3rem;
		align-items: start;
	}

	.contact-info {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}

	.info-card {
		background: rgba(255, 255, 255, 0.1);
		backdrop-filter: blur(20px);
		-webkit-backdrop-filter: blur(20px);
		border: 1px solid rgba(255, 255, 255, 0.2);
		border-radius: var(--radius-lg);
		padding: 1.5rem;
		text-align: center;
		transition: all 0.3s ease;
	}

	.info-card:hover {
		background: rgba(255, 255, 255, 0.15);
		transform: translateY(-5px);
	}

	.icon {
		font-size: 2.5rem;
		margin-bottom: 0.75rem;
	}

	.info-card h3 {
		color: var(--text-color);
		font-size: 1.25rem;
		margin-bottom: 0.5rem;
	}

	.info-card p {
		color: rgba(255, 255, 255, 0.85);
		font-size: 0.95rem;
		word-break: break-all;
		overflow-wrap: anywhere;
		hyphens: auto;
	}

	.email-link,
	.card-link {
		color: rgba(255, 255, 255, 0.95);
		text-decoration: none;
		transition: all 0.3s ease;
		display: inline-block;
		word-break: break-all;
	}

	.email-link:hover,
	.card-link:hover {
		color: white;
	}

	.contact-form {
		background: rgba(255, 255, 255, 0.1);
		backdrop-filter: blur(20px);
		-webkit-backdrop-filter: blur(20px);
		border: 1px solid rgba(255, 255, 255, 0.2);
		padding: 2.5rem;
		border-radius: var(--radius-lg);
		box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
		min-width: 0;
	}

	.field {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		min-width: 0;
	}

	label {
		font-weight: 600;
		color: var(--text-color);
		font-size: 0.95rem;
	}

	input,
	textarea {
		padding: 0.875rem 1.125rem;
		border-radius: var(--radius-md);
		border: 1px solid rgba(255, 255, 255, 0.3);
		background: rgba(255, 255, 255, 0.15);
		backdrop-filter: blur(10px);
		font-size: 1rem;
		font-family: inherit;
		color: var(--text-color);
		transition: all 0.3s ease;
		width: 100%;
		box-sizing: border-box;
		min-width: 0;
	}

	input::placeholder,
	textarea::placeholder {
		color: rgba(255, 255, 255, 0.5);
	}

	input:focus,
	textarea:focus {
		outline: none;
		border-color: rgba(255, 255, 255, 0.6);
		background: rgba(255, 255, 255, 0.2);
		box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.1);
	}

	.btn-submit {
		padding: 1rem 2rem;
		font-size: 1.05rem;
		font-weight: 600;
		border-radius: 50px;
		border: none;
		cursor: pointer;
		background: rgba(255, 255, 255, 0.95);
		color: #1e3a8a;
		transition: all 0.3s ease;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
		box-shadow: 0 4px 20px rgba(255, 255, 255, 0.3);
	}

	.btn-submit:disabled {
		opacity: 0.6;
		cursor: not-allowed;
		transform: none;
	}

	.btn-submit:hover:not(:disabled) {
		transform: translateY(-2px);
		background: white;
		box-shadow: 0 6px 25px rgba(255, 255, 255, 0.4);
	}

	.btn-submit:hover:not(:disabled) .arrow {
		transform: translateX(5px);
	}

	.arrow {
		transition: transform 0.3s ease;
		font-size: 1.2rem;
	}

	.success {
		padding: 1rem 1.5rem;
		background: rgba(16, 185, 129, 0.2);
		border: 1px solid rgba(16, 185, 129, 0.4);
		border-radius: var(--radius-md);
		color: var(--text-color);
		font-weight: 600;
		display: flex;
		align-items: center;
		gap: 0.75rem;
	}

	.check {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 24px;
		height: 24px;
		background: rgba(16, 185, 129, 0.3);
		border-radius: 50%;
		font-size: 1rem;
	}

	.error {
		padding: 1rem 1.5rem;
		background: rgba(239, 68, 68, 0.2);
		border: 1px solid rgba(239, 68, 68, 0.4);
		border-radius: var(--radius-md);
		color: var(--text-color);
		font-weight: 600;
		display: flex;
		align-items: center;
		gap: 0.75rem;
	}

	.cross {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 24px;
		height: 24px;
		background: rgba(239, 68, 68, 0.3);
		border-radius: 50%;
		font-size: 1rem;
	}

	@media (max-width: 900px) {
		.contact-content {
			grid-template-columns: 1fr;
			gap: 2.5rem;
		}

		.contact-info {
			display: grid;
			grid-template-columns: repeat(3, 1fr);
			gap: 1.5rem;
		}

		.contact-form {
			padding: 2rem;
		}

		.info-card {
			min-width: 0;
		}

		.email-link {
			font-size: 0.73rem;
		}
	}

	@media (max-width: 720px) {
		.contact-info {
			grid-template-columns: 1fr;
			max-width: 500px;
			margin: 0 auto;
		}

		.info-card {
			padding: 1.5rem;
		}

		.email-link {
			font-size: 0.9rem;
		}
	}

	@media (max-width: 600px) {
		.contact-container {
			padding: 3rem 1.5rem;
		}

		.contact-header {
			margin-bottom: 3rem;
		}

		.subtitle {
			font-size: 1rem;
		}

		.contact-form {
			padding: 1.5rem;
		}

		.info-card {
			padding: 1.25rem;
		}

		.info-card p {
			font-size: 0.875rem;
		}

		.icon {
			font-size: 2rem;
		}

		.btn-submit {
			padding: 0.875rem 1.5rem;
			font-size: 1rem;
		}

		input,
		textarea {
			font-size: 0.95rem;
			padding: 0.75rem 1rem;
		}
	}

	@media (max-width: 400px) {
		.contact-container {
			padding: 2rem 1rem;
		}

		.contact-form {
			padding: 1.25rem;
		}

		.info-card {
			padding: 1rem;
		}

		.info-card h3 {
			font-size: 1.1rem;
		}

		.info-card p {
			font-size: 0.8rem;
		}
	}
</style>
