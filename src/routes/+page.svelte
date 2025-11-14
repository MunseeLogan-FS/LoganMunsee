<script>
	import '../app.css';
	import '$lib/styles/gradients.css';
	import Hero from '$lib/components/Hero.svelte';
	import WhatIDo from '$lib/components/WhatIDo.svelte.tmp';
	import FeaturedProjects from '$lib/components/FeaturedProjects.svelte.tmp';
	import BlogPreview from '$lib/components/BlogPreview.svelte.tmp';

	let { data } = $props();
</script>

<Hero />

<section class="section">
	<WhatIDo />
</section>

<section class="section">
	<FeaturedProjects />
</section>

<section class="section">
	<BlogPreview posts={data.recentPosts} />
</section>

<style>
	section {
		margin-top: 3rem;
	}
</style>
