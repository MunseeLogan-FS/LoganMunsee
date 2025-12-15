<footer class="footer">
	<div class="content">
		<div class="left">
			<h3 class="brand">Logan Munsee</h3>
			<p>Full-Stack Web Developer & IT Professional</p>
		</div>

		<div class="right">
			<a href="https://github.com/munseelogan-fs" target="_blank" rel="noreferrer">GitHub</a>
			<a href="https://www.linkedin.com/in/logan-munsee" target="_blank" rel="noreferrer"
				>LinkedIn</a
			>
			<a href="/contact">Contact</a>
		</div>
	</div>

	<p class="copyright">
		© {new Date().getFullYear()} Logan Munsee — All rights reserved.
	</p>
</footer>

<style>
	.footer {
		margin-top: 5rem;
		background: rgba(255, 255, 255, 0.08);
		backdrop-filter: blur(20px);
		-webkit-backdrop-filter: blur(20px);
		color: var(--text-color);
		padding: 3rem 2rem;
		border-top: 1px solid rgba(255, 255, 255, 0.15);
	}

	.content {
		max-width: 1200px;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-wrap: wrap;
		gap: 2rem;
	}

	.brand {
		font-size: 1.4rem;
		font-weight: 700;
		margin-bottom: 0.5rem;
	}

	.right {
		display: flex;
		gap: 1.5rem;
	}

	.right a {
		color: var(--text-color);
		text-decoration: none;
		opacity: 0.9;
		transition: opacity 0.2s ease;
	}

	.right a:hover {
		opacity: 1;
	}

	.copyright {
		margin-top: 2rem;
		text-align: center;
		opacity: 0.75;
	}

	@media (max-width: 750px) {
		.content {
			flex-direction: column;
			text-align: center;
		}
	}
</style>
