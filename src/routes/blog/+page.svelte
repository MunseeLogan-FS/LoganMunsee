<script>
	export let data;
	const { posts } = data;
</script>

<h1>Blog</h1>

<div class="blog-list">
	{#each posts as post}
		<a href={`/blog/${post.slug}`} class="blog-item">
			<h2>{post.title}</h2>
			<p class="date">{post.date}</p>
			{#if post.excerpt}
				<p class="excerpt">{post.excerpt}</p>
			{/if}
		</a>
	{/each}
</div>

<style>
	.blog-list {
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}

	.blog-item {
		padding: 2rem;
		border-radius: var(--radius-lg);
		background: rgba(255, 255, 255, 0.1);
		backdrop-filter: blur(20px);
		-webkit-backdrop-filter: blur(20px);
		border: 1px solid rgba(255, 255, 255, 0.2);
		border-left: 4px solid var(--color-green);
		box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
		text-decoration: none;
		color: var(--text-color);
		transition: all 0.3s ease;
	}

	.blog-item:hover {
		transform: translateY(-5px);
		background: rgba(255, 255, 255, 0.15);
		box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
	}

	.blog-item h2 {
		color: var(--text-color);
	}

	.date {
		opacity: 0.9;
		margin-bottom: 0.5rem;
		color: rgba(255, 255, 255, 0.9);
	}

	.excerpt {
		color: rgba(255, 255, 255, 0.9);
	}
</style>
