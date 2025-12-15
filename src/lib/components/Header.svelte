<script>
	import { slide } from 'svelte/transition';
	import { onMount } from 'svelte';

	let mobileOpen = $state(false);
	let hasMounted = $state(false);

	// Brightness range
	const MIN = 20;
	const MAX = 80;
	const DEFAULT = 50;

	let brightness = $state(DEFAULT);

	const toggleMenu = () => {
		mobileOpen = !mobileOpen;
	};

	const t = $derived(() => {
		return (brightness - MIN) / (MAX - MIN);
	});

	const eased = $derived(() => {
		const x = t();
		return x * x * (3 - 2 * x); // smoothstep
	});

	const shadowAlpha = $derived(() => {
		return 0.18 + eased() * 0.28; // 0.18 → 0.46
	});

	const shadowBlur = $derived(() => {
		return 2 + eased() * 2; // 2px → 4px
	});

	const blueHue = $derived(() => {
		return 203 + eased() * 6; // 203 → 209
	});

	const blueSaturation = $derived(() => {
		return 90 - eased() * 22; // 90 → 68
	});

	const blueLightness = $derived(() => {
		return 28 + eased() * 20; // 28 → 48
	});

	// GREEN (end)
	const greenHue = $derived(() => {
		return 157 + eased() * 5; // 157 → 162
	});

	const greenSaturation = $derived(() => {
		return 82 - eased() * 28; // 82 → 54
	});
	const greenLightness = $derived(() => {
		return 36 + eased() * 18; // 36 → 54
	});

	$effect(() => {
		if (typeof document === 'undefined') return;

		const root = document.documentElement;

		root.style.setProperty(
			'--gradient-start',
			`hsl(${blueHue()}, ${blueSaturation()}%, ${blueLightness()}%)`
		);

		root.style.setProperty(
			'--gradient-end',
			`hsl(${greenHue()}, ${greenSaturation()}%, ${greenLightness()}%)`
		);

		root.style.setProperty('--shadow-alpha', shadowAlpha().toString());
		root.style.setProperty('--shadow-blur', `${shadowBlur()}px`);

		if (hasMounted) {
			localStorage.setItem('brightness', brightness.toString());
		}
	});

	onMount(() => {
		const saved = localStorage.getItem('brightness');
		if (saved) {
			const parsed = Number(saved);
			if (!Number.isNaN(parsed)) {
				brightness = Math.min(Math.max(parsed, MIN), MAX);
			}
		}
		hasMounted = true;
	});
</script>

<header class="header">
	<div class="container">
		<a href="/" class="logo">Logan Munsee</a>
		<div class="brightness-control">
			<span aria-hidden="true">🌙</span>

			<input
				type="range"
				min="30"
				max="70"
				step="1"
				bind:value={brightness}
				aria-label="Adjust appearance"
			/>

			<span aria-hidden="true">☀️</span>
		</div>

		<nav class="nav-desktop">
			<a href="/">Home</a>
			<a href="/projects">Projects</a>
			<a href="/blog">Blog</a>
			<a href="/about">About</a>
			<a href="/contact">Contact</a>
		</nav>

		<!-- Mobile Menu Button -->
		<button class="mobile-toggle" onclick={toggleMenu} aria-label="Toggle mobile menu">
			<span class={mobileOpen ? 'bar open' : 'bar'}></span>
			<span class={mobileOpen ? 'bar open' : 'bar'}></span>
			<span class={mobileOpen ? 'bar open' : 'bar'}></span>
		</button>
	</div>

	<!-- Mobile Navigation -->
	{#if mobileOpen}
		<nav class="nav-mobile" transition:slide={{ duration: 300 }}>
			<a href="/" onclick={toggleMenu}>Home</a>
			<a href="/projects" onclick={toggleMenu}>Projects</a>
			<a href="/blog" onclick={toggleMenu}>Blog</a>
			<a href="/about" onclick={toggleMenu}>About</a>
			<a href="/contact" onclick={toggleMenu}>Contact</a>
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
		color: var(--text-color);
		text-decoration: none;
	}

	.nav-desktop {
		display: flex;
		gap: 2rem;
	}

	.nav-desktop a {
		color: var(--text-color);
		text-decoration: none;
		font-weight: 500;
		position: relative;
		transition: all 0.3s ease;
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
	.brightness-control {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		max-width: 260px;
	}

	input[type='range'] {
		flex: 1;
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
		color: var(--text-color);
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
