<script>
	let { posts = [] } = $props();

	function formatDate(dateString) {
		// Parse the date string as local date to avoid timezone issues
		const [year, month, day] = dateString.split('-');
		const date = new Date(year, month - 1, day);
		return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
	}
</script>

<section>
	<h2 class="heading">From the Blog</h2>

	<div class="blog-grid">
		{#if posts.length > 0}
			{#each posts as post}
				<a href="/blog/{post.slug}" class="blog-item">
					<h3>{post.title}</h3>
					<p class="date">{formatDate(post.date)}</p>
					{#if post.excerpt}
						<p class="excerpt">{post.excerpt}</p>
					{/if}
				</a>
			{/each}
		{:else}
			<p class="no-posts">No blog posts yet. Check back soon!</p>
		{/if}
	</div>
	<div class="view-all">
		<a href="/blog" class="view-all-btn">
			<span>View All Posts</span>
			<span class="arrow">→</span>
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
		margin-bottom: 0.5rem;
	}

	.excerpt {
		font-size: 0.95rem;
		color: rgba(255, 255, 255, 0.85);
		text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
		margin-top: 0.5rem;
		line-height: 1.5;
	}

	.no-posts {
		color: rgba(255, 255, 255, 0.8);
		text-align: center;
		padding: 2rem;
		text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
	}
	.view-all {
		margin-top: 3rem;
		text-align: center;
	}

	.view-all-btn {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		padding: 1rem 2rem;
		background: rgba(255, 255, 255, 0.95);
		color: #1e3a8a;
		font-weight: 600;
		font-size: 1.05rem;
		text-decoration: none;
		border-radius: 50px;
		transition: all 0.3s ease;
		box-shadow: 0 4px 20px rgba(255, 255, 255, 0.3);
	}

	.view-all-btn:hover {
		background: white;
		transform: translateY(-2px);
		box-shadow: 0 6px 25px rgba(255, 255, 255, 0.4);
	}

	.view-all-btn:hover .arrow {
		transform: translateX(5px);
	}

	.arrow {
		transition: transform 0.3s ease;
		font-size: 1.2rem;
	}
</style>
