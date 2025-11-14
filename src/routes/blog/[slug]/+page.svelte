<script>
	import { marked } from 'marked';

	export let data;

	const { meta, content } = data;
	const html = marked(content);
</script>

<article class="post">
	<h1>{meta.title}</h1>
	<p class="date">{meta.date}</p>

	<div class="content">
		{@html html}
	</div>
</article>

<style>
	.post {
		max-width: 800px;
		margin: 0 auto;
	}

	.date {
		color: #d4d4d4;
		margin-bottom: 1.5rem;
	}

	.content :global(img) {
		max-width: 100%;
		height: auto;
		border-radius: var(--radius-sm);
		margin: 1.5rem 0;
	}
	.content :global(pre) {
		background: #2d2d2d;
		color: #f8f8f2;
		padding: 1rem;
		border-radius: var(--radius-sm);
		overflow-x: auto;
		margin: 1.5rem 0;
	}
	.content :global(code) {
		background: #2d2d2d;
		padding: 0.2rem 0.4rem;
		border-radius: var(--radius-sm);
		font-family: 'Fira Code', monospace;
		font-size: 0.95rem;
		color: #f8f8f2;
	}
	.content :global(a) {
		color: var(--color-blue);
		text-decoration: underline;
	}
	.content :global(h2) {
		margin-top: 2rem;
		margin-bottom: 1rem;
	}
	.content :global(h3) {
		margin-top: 1.5rem;
		margin-bottom: 1rem;
	}
	.content :global(p) {
		line-height: 1.6;
		margin-bottom: 1rem;
	}
</style>
