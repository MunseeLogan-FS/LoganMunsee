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
		padding: 1.5rem;
		border-radius: var(--radius-md);
		background: var(--color-softgray);
		text-decoration: none;
		color: var(--color-darkgray);
		transition: 0.2s ease;
		border-left: 4px solid var(--color-green);
	}

	.blog-item:hover {
		background: #fff;
		transform: translateX(6px);
	}

	.date {
		opacity: 0.7;
		margin-bottom: 0.3rem;
	}
</style>
