<section class="hero">
	<div class="content">
		<h1>
			Hi, I'm<br />
			Logan Munsee.
		</h1>
		<p class="subtitle">Full-Stack Web Developer & IT Professional</p>
		<p class="description">
			I build modern, responsive websites and manage secure IT infrastructures for businesses of all
			sizes.
		</p>

		<div class="buttons">
			<a href="/projects" class="btn primary">View My Projects</a>
			<a href="/blog" class="btn secondary">Read My Blog</a>
		</div>
	</div>

	<div class="illustration">
		<div class="illustration-bg"></div>
		<img src="/images/me.jpg" alt="Developer illustration" />
	</div>
</section>

<style>
	.hero {
		display: flex;
		align-items: center;
		gap: 4rem;
		padding: 4rem 2rem;
		min-height: 500px;
		position: relative;
		overflow: visible;
	}

	.content {
		flex: 1;
		max-width: 600px;
		z-index: 2;
	}

	h1 {
		font-size: clamp(2.5rem, 6vw, 4.5rem);
		font-weight: 800;
		line-height: 1.1;
		margin-bottom: 1.5rem;
		color: white;
		text-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
	}

	.subtitle {
		font-size: clamp(1.25rem, 3vw, 1.75rem);
		font-weight: 400;
		margin-bottom: 1.5rem;
		color: rgba(255, 255, 255, 0.95);
		text-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
	}

	.description {
		font-size: 1.125rem;
		line-height: 1.7;
		max-width: 480px;
		margin-bottom: 2.5rem;
		color: rgba(255, 255, 255, 0.9);
		text-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
	}

	.buttons {
		display: flex;
		gap: 1rem;
		flex-wrap: wrap;
	}

	.btn {
		display: inline-block;
		padding: 1rem 2rem;
		border-radius: 50px;
		font-weight: 600;
		font-size: 1rem;
		text-decoration: none;
		transition: all 0.3s ease;
		cursor: pointer;
	}

	.btn.primary {
		background: rgba(255, 255, 255, 0.95);
		color: #1e3a8a;
		box-shadow: 0 4px 20px rgba(255, 255, 255, 0.3);
	}

	.btn.primary:hover {
		background: white;
		transform: translateY(-2px);
		box-shadow: 0 6px 25px rgba(255, 255, 255, 0.4);
	}

	.btn.secondary {
		background: rgba(255, 255, 255, 0.1);
		color: white;
		border: 2px solid rgba(255, 255, 255, 0.4);
		backdrop-filter: blur(10px);
	}

	.btn.secondary:hover {
		background: rgba(255, 255, 255, 0.2);
		border-color: rgba(255, 255, 255, 0.6);
		transform: translateY(-2px);
	}

	.illustration {
		flex: 1;
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
		z-index: 2;
	}

	.illustration-bg {
		position: absolute;
		width: 400px;
		height: 400px;
		background: radial-gradient(
			circle,
			rgba(255, 255, 255, 0.2) 0%,
			rgba(255, 255, 255, 0.05) 50%,
			transparent 100%
		);
		border-radius: 50%;
		filter: blur(40px);
		z-index: -1;
		animation: pulse 4s ease-in-out infinite;
	}

	@keyframes pulse {
		0%,
		100% {
			transform: scale(1);
			opacity: 0.8;
		}
		50% {
			transform: scale(1.1);
			opacity: 1;
		}
	}

	.illustration img {
		width: 100%;
		max-width: 400px;
		height: auto;
		border-radius: 50%;
		border: 5px solid rgba(255, 255, 255, 0.3);
		box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
		object-fit: cover;
	}

	@keyframes float {
		0%,
		100% {
			transform: translate(0, 0) scale(1);
		}
		33% {
			transform: translate(30px, -30px) scale(1.1);
		}
		66% {
			transform: translate(-30px, 30px) scale(0.9);
		}
	}

	@media (max-width: 720px) {
		.hero {
			flex-direction: column;
			text-align: center;
			padding: 3rem 1.5rem;
			gap: 3rem;
		}

		.content {
			max-width: 100%;
		}

		.description {
			max-width: 100%;
		}

		.buttons {
			justify-content: center;
		}

		.illustration {
			margin-top: 0;
		}

		.illustration img {
			max-width: 300px;
		}

		.illustration-bg {
			width: 320px;
			height: 320px;
		}
	}

	@media (max-width: 600px) {
		h1 {
			font-size: 2.5rem;
		}

		.subtitle {
			font-size: 1.25rem;
		}

		.description {
			font-size: 1rem;
		}

		.btn {
			padding: 0.875rem 1.75rem;
		}
	}
</style>
