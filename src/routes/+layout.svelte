<script>
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
	<title>Logan Munsee - Portfolio</title>
	<meta
		name="description"
		content="Portfolio of Logan Munsee, a web developer specializing in modern web applications."
	/>
	<link rel="icon" href="images/favicon.png" />
</svelte:head>

<Header />

<main>
	<slot />
</main>

<Footer />

<style>
	main {
		max-width: 1200px;
		margin: 0 auto;
		padding: 2rem;
	}
</style>
