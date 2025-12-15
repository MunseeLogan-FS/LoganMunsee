<script>
	import { slide } from 'svelte/transition';
	import { onMount } from 'svelte';

	let mobileOpen = $state(false);
	let hasMounted = $state(false);

	const MIN = 0;
	const MAX = 100;
	const DEFAULT = 50;

	let brightness = $state(DEFAULT);

	const palette = {
		dark: {
			start: { h: 210, s: 80, l: 18 },
			end: { h: 164, s: 72, l: 26 },
			shadow: { alpha: 0.5, blur: 5 }
		},
		bright: {
			start: { h: 200, s: 100, l: 56 },
			end: { h: 141, s: 88, l: 52 },
			shadow: { alpha: 0.14, blur: 2.5 }
		}
	};

	const clamp = (value, min, max) => Math.min(Math.max(value, min), max);
	const lerp = (a, b, t) => a + (b - a) * t;

	const toggleMenu = () => {
		mobileOpen = !mobileOpen;
	};

	$effect(() => {
		if (typeof document === 'undefined') return;

		const root = document.documentElement;
		const normalized = (brightness - MIN) / (MAX - MIN);
		const eased = 0.5 - Math.cos(Math.PI * normalized) / 2;

		const startH = lerp(palette.dark.start.h, palette.bright.start.h, eased);
		const startS = lerp(palette.dark.start.s, palette.bright.start.s, eased);
		const startL = lerp(palette.dark.start.l, palette.bright.start.l, eased);

		const endH = lerp(palette.dark.end.h, palette.bright.end.h, eased);
		const endS = lerp(palette.dark.end.s, palette.bright.end.s, eased);
		const endL = lerp(palette.dark.end.l, palette.bright.end.l, eased);

		const shadowAlpha = lerp(palette.dark.shadow.alpha, palette.bright.shadow.alpha, eased);
		const shadowBlur = lerp(palette.dark.shadow.blur, palette.bright.shadow.blur, eased);
		const overlay = 0.06 + eased * 0.12;

		root.style.setProperty(
			'--gradient-start',
			`hsl(${startH.toFixed(1)}, ${startS.toFixed(1)}%, ${startL.toFixed(1)}%)`
		);

		root.style.setProperty(
			'--gradient-end',
			`hsl(${endH.toFixed(1)}, ${endS.toFixed(1)}%, ${endL.toFixed(1)}%)`
		);

		root.style.setProperty('--shadow-alpha', shadowAlpha.toFixed(2));
		root.style.setProperty('--shadow-blur', `${shadowBlur.toFixed(2)}px`);

		root.style.setProperty(
			'--bg-overlay',
			`radial-gradient(circle at 18% 18%, rgba(255,255,255,${overlay}), transparent 36%), radial-gradient(circle at 80% 16%, rgba(255,255,255,${
				overlay * 0.7
			}), transparent 32%)`
		);

		if (hasMounted) {
			localStorage.setItem('brightness', brightness.toString());
		}
	});

	onMount(() => {
		const saved = localStorage.getItem('brightness');
		if (saved) {
			const parsed = Number(saved);
			if (!Number.isNaN(parsed)) {
				brightness = clamp(parsed, MIN, MAX);
			}
		}
		hasMounted = true;
	});
</script>

<header class="header">
	<div class="container">
		<a href="/" class="logo">Logan Munsee</a>
		<div class="brightness-control">
			<span aria-hidden="true">Night</span>

			<input
				type="range"
				min={MIN}
				max={MAX}
				step="1"
				bind:value={brightness}
				aria-label="Adjust appearance"
			/>

			<span aria-hidden="true">Neon</span>
		</div>

		<nav class="nav-desktop">
			<a href="/">Home</a>
			<a href="/projects">Projects</a>
			<a href="/blog">Blog</a>
			<a href="/about">About</a>
			<a href="/contact">Contact</a>
		</nav>

		<button class="mobile-toggle" onclick={toggleMenu} aria-label="Toggle mobile menu">
			<span class={mobileOpen ? 'bar open' : 'bar'}></span>
			<span class={mobileOpen ? 'bar open' : 'bar'}></span>
			<span class={mobileOpen ? 'bar open' : 'bar'}></span>
		</button>
	</div>

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
		gap: 1.5rem;
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
		max-width: 320px;
	}

	.brightness-control span {
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.06em;
		color: rgba(255, 255, 255, 0.8);
	}

	input[type='range'] {
		flex: 1;
		height: 10px;
		appearance: none;
		background: linear-gradient(90deg, var(--gradient-start), var(--gradient-end));
		border-radius: 999px;
		box-shadow:
			inset 0 0 0 1px rgba(255, 255, 255, 0.18),
			0 0 0 1px rgba(0, 0, 0, 0.15);
	}

	input[type='range']::-webkit-slider-thumb {
		appearance: none;
		width: 18px;
		height: 18px;
		border-radius: 50%;
		background: #ffffff;
		border: 2px solid rgba(0, 0, 0, 0.15);
		box-shadow:
			0 4px 10px rgba(0, 0, 0, 0.22),
			0 0 0 6px rgba(255, 255, 255, 0.2);
	}

	input[type='range']::-moz-range-track {
		height: 10px;
		background: linear-gradient(90deg, var(--gradient-start), var(--gradient-end));
		border-radius: 999px;
		border: 1px solid rgba(255, 255, 255, 0.18);
		box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.15);
	}

	input[type='range']::-moz-range-thumb {
		width: 18px;
		height: 18px;
		border-radius: 50%;
		background: #ffffff;
		border: 2px solid rgba(0, 0, 0, 0.15);
		box-shadow:
			0 4px 10px rgba(0, 0, 0, 0.22),
			0 0 0 6px rgba(255, 255, 255, 0.2);
	}

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

	@media (max-width: 850px) {
		.nav-desktop {
			display: none;
		}

		.mobile-toggle {
			display: flex;
		}
	}
</style>
