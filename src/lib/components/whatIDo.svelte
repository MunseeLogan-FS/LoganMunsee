<section class="what">
	<!-- case change -->
	<h2 class="heading">What I Do</h2>

	<div class="cards">
		<div class="card">
			<div class="icon">💻</div>
			<h3>Front-End Development</h3>
			<p>I build beautiful, responsive interfaces.</p>
		</div>

		<div class="card">
			<div class="icon">🛠</div>
			<h3>Back-End APIs</h3>
			<p>Node.js, Express, SvelteKit server routes.</p>
		</div>

		<div class="card">
			<div class="icon">🏪</div>
			<h3>Small Business Websites</h3>
			<p>Helping businesses go online.</p>
		</div>
		<div class="card">
			<div class="icon">✈️</div>
			<h3>U.S Air Force Veteran</h3>
			<p>Tested under pressure and adaptable to dynamic environments.</p>
		</div>
	</div>
</section>

<!-- fix made  -->

<style>
	.what {
		margin-top: 5rem;
	}

	.heading {
		color: white;
		text-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
		margin-bottom: 2rem;
	}

	.cards {
		display: grid;
		gap: 2rem;
		grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
	}

	.card {
		padding: 2rem;
		background: rgba(255, 255, 255, 0.1);
		backdrop-filter: blur(20px);
		-webkit-backdrop-filter: blur(20px);
		border: 1px solid rgba(255, 255, 255, 0.2);
		border-radius: var(--radius-lg);
		box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
		transition: all 0.3s ease;
		color: white;
	}

	.card:hover {
		transform: translateY(-5px);
		background: rgba(255, 255, 255, 0.15);
		box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
	}

	.icon {
		font-size: 2rem;
		margin-bottom: 1rem;
	}

	.card h3 {
		color: white;
		text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
		margin-bottom: 0.5rem;
	}

	.card p {
		color: rgba(255, 255, 255, 0.9);
		text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
	}
</style>
