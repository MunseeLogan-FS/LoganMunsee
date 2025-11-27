<script>
	import { slide } from 'svelte/transition';

	let mobileOpen = false;

	const toggleMenu = () => {
		mobileOpen = !mobileOpen;
	};
</script>

<header class="header">
	<div class="container">
		<a href="/" class="logo">Logan Munsee</a>

		<nav class="nav-desktop">
			<a href="/">Home</a>
			<a href="/projects">Projects</a>
			<a href="/blog">Blog</a>
			<a href="/about">About</a>
			<a href="/contact">Contact</a>
		</nav>

		<!-- Mobile Menu Button -->
		<button class="mobile-toggle" on:click={toggleMenu} aria-label="Toggle mobile menu">
			<span class={mobileOpen ? 'bar open' : 'bar'}></span>
			<span class={mobileOpen ? 'bar open' : 'bar'}></span>
			<span class={mobileOpen ? 'bar open' : 'bar'}></span>
		</button>
	</div>

	<!-- Mobile Navigation -->
	{#if mobileOpen}
		<nav class="nav-mobile" transition:slide={{ duration: 300 }}>
			<a href="/" on:click={toggleMenu}>Home</a>
			<a href="/projects" on:click={toggleMenu}>Projects</a>
			<a href="/blog" on:click={toggleMenu}>Blog</a>
			<a href="/about" on:click={toggleMenu}>About</a>
			<a href="/contact" on:click={toggleMenu}>Contact</a>
		</nav>
	{/if}
</header>

<style>
	.header {
		position: sticky;
		top: 0;
		z-index: 100;
		background: rgba(255, 255, 255, 0.08);
		backdrop-filter: blur(20px);
		-webkit-backdrop-filter: blur(20px);
		border-bottom: 1px solid rgba(255, 255, 255, 0.15);
		box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
	}

	.container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 1.2rem 2rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.logo {
		font-weight: 700;
		font-size: 1.4rem;
		color: white;
		text-decoration: none;
		text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	}

	.nav-desktop {
		display: flex;
		gap: 2rem;
	}

	.nav-desktop a {
		color: white;
		text-decoration: none;
		font-weight: 500;
		position: relative;
		transition: all 0.3s ease;
		text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
	}

	.nav-desktop a::after {
		content: '';
		position: absolute;
		left: 0;
		bottom: -4px;
		height: 2px;
		width: 0%;
		background: white;
		transition: width 0.25s ease;
	}

	.nav-desktop a:hover {
		opacity: 0.9;
	}

	.nav-desktop a:hover::after {
		width: 100%;
	}

	/* Mobile Button */
	.mobile-toggle {
		display: none;
		flex-direction: column;
		gap: 5px;
		background: none;
		border: none;
		cursor: pointer;
		z-index: 200;
	}

	.bar {
		width: 26px;
		height: 3px;
		background: white;
		transition:
			transform 0.3s ease,
			opacity 0.3s ease;
	}

	.open:nth-child(1) {
		transform: translateY(8px) rotate(45deg);
	}
	.open:nth-child(2) {
		opacity: 0;
	}
	.open:nth-child(3) {
		transform: translateY(-8px) rotate(-45deg);
	}

	/* Mobile Navigation Dropdown */
	.nav-mobile {
		display: flex;
		flex-direction: column;
		gap: 1.2rem;
		padding: 1.5rem 2rem;
		background: rgba(129, 129, 129, 0.25);
		backdrop-filter: blur(20px);
		-webkit-backdrop-filter: blur(20px);
		border-bottom: 1px solid rgba(255, 255, 255, 0.15);
		box-shadow: 0px 6px 16px rgba(0, 0, 0, 0.12);
	}

	.nav-mobile a {
		text-decoration: none;
		font-size: 1.1rem;
		color: white;
		text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
	}

	/* Responsive Rules */
	@media (max-width: 850px) {
		.nav-desktop {
			display: none;
		}

		.mobile-toggle {
			display: flex;
		}
	}
</style>
