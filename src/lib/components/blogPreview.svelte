<section>
	<h2 class="heading">From the Blog</h2>

	<div class="blog-grid">
		<a href="/blog/rest-api" class="blog-item">
			<h3>Building a REST API in SvelteKit</h3>
			<p class="date">April 10, 2024</p>
		</a>

		<a href="/blog/css-layout" class="blog-item">
			<h3>CSS Grid vs Flexbox</h3>
			<p class="date">March 20, 2024</p>
		</a>

		<a href="/blog/tools" class="blog-item">
			<h3>Top JavaScript Tools I Use</h3>
			<p class="date">February 25, 2024</p>
		</a>
	</div>
</section>

<style>
	.heading {
		color: white;
		text-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
		margin-bottom: 2rem;
	}

	.blog-grid {
		display: grid;
		gap: 1.2rem;
	}

	.blog-item {
		padding: 1.2rem;
		border-left: 4px solid rgba(255, 255, 255, 0.6);
		background: rgba(255, 255, 255, 0.1);
		backdrop-filter: blur(20px);
		-webkit-backdrop-filter: blur(20px);
		border-radius: var(--radius-md);
		text-decoration: none;
		color: white;
		transition: all 0.3s ease;
	}

	.blog-item:hover {
		background: rgba(255, 255, 255, 0.15);
		border-left-color: white;
		transform: translateX(5px);
	}

	.blog-item h3 {
		color: white;
		text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
		margin-bottom: 0.5rem;
	}

	.date {
		opacity: 0.8;
		font-size: 0.9rem;
		color: rgba(255, 255, 255, 0.9);
		text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
	}
</style>
