<script>
	import '../app.css';
	import '$lib/styles/gradients.css';
	import Hero from '$lib/components/Hero.svelte';
	import WhatIDo from '$lib/components/WhatIDo.svelte';
	import FeaturedProjects from '$lib/components/FeaturedProjects.svelte';
	import BlogPreview from '$lib/components/blogPreview.svelte';
</script>

<Hero />

<section class="section">
	<WhatIDo />
</section>

<section class="section">
	<FeaturedProjects />
</section>

<section class="section">
	<BlogPreview />
</section>

<style>
	section {
		margin-top: 3rem;
	}
</style>
