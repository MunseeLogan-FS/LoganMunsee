<section class="about-container">
	<div class="intro">
		<h1>About Me</h1>
		<p class="tagline">
			I'm Logan Munsee, a full-stack developer and Air Force veteran passionate about building
			digital solutions that make a difference for individuals and businesses of all shapes and
			sizes.
		</p>
	</div>

	<div class="about-card">
		<p>
			Hi, I’m <strong>Logan Munsee</strong> — a full-stack developer, designer, and Air Force veteran.
			I’ve spent the last several years working in mission-critical IT environments, supporting enterprise-level
			networks, securing systems, and leading technical teams.
		</p>

		<p>
			Outside of the military, I’ve built websites for small businesses, created full-stack
			applications like <em>ShelfHelp</em> and <em>Findley Lake Storage</em>, and continued
			expanding my skills through Full Sail University’s Web Development program.
		</p>

		<p>
			I love solving problems, designing clean interfaces, and creating systems that make life
			easier for people. Whether it's backend APIs, front-end UI, or small-business websites, I
			enjoy taking ideas and turning them into polished, functional products.
		</p>
	</div>

	<div class="section">
		<h2>What I’m Working Toward</h2>
		<p>
			My goal is to leverage my unique blend of technical skills and real-world experience to build
			impactful digital solutions. I’m focused on mastering modern web technologies like SvelteKit,
			Node.js, and cloud platforms while continuing to refine my design sensibilities and user
			experience knowledge.
		</p>
	</div>

	<div class="section skills-section">
		<h2>Skills & Technologies</h2>

		<div class="skills-grid">
			<div class="skill-card">Svelte & SvelteKit</div>
			<div class="skill-card">Node.js / Express</div>
			<div class="skill-card">JavaScript / TypeScript</div>
			<div class="skill-card">React</div>
			<div class="skill-card">REST API Design</div>
			<div class="skill-card">PostgreSQL</div>
			<div class="skill-card">HTML & CSS Layout</div>
			<div class="skill-card">UI/UX Principles</div>
			<div class="skill-card">Git & GitHub</div>
			<div class="skill-card">Linux / Server Ops</div>
			<div class="skill-card">Microsoft 365</div>
			<div class="skill-card">Active Directory</div>
		</div>
	</div>

	<div class="section">
		<h2>Outside of Work</h2>
		<p>
			When I’m not coding, you can usually find me rock climbing, spending time with my wife,
			exploring new places, reading fantasy novels, or working on side projects to sharpen my
			skills.
		</p>
	</div>
</section>

<style>
	.about-container {
		max-width: 900px;
		margin: 0 auto;
		padding: 4rem 2rem;
	}

	.intro h1 {
		font-size: clamp(2.5rem, 5vw, 3rem);
		margin-bottom: 0.5rem;
		color: var(--text-color);
		font-weight: 800;
	}

	.tagline {
		color: rgba(255, 255, 255, 0.9);
		font-size: 1.125rem;
		line-height: 1.7;
		max-width: 600px;
		margin-bottom: 2rem;
	}

	.about-card {
		background: rgba(255, 255, 255, 0.1);
		backdrop-filter: blur(20px);
		-webkit-backdrop-filter: blur(20px);
		border: 1px solid rgba(255, 255, 255, 0.2);
		padding: 2.5rem;
		border-radius: var(--radius-lg);
		box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
		margin-bottom: 3rem;
	}

	.about-card p {
		margin: 1.25rem 0;
		color: rgba(255, 255, 255, 0.9);
		line-height: 1.8;
		font-size: 1.05rem;
	}

	.about-card strong {
		color: var(--text-color);
		font-weight: 700;
	}

	.about-card em {
		color: rgba(255, 255, 255, 0.95);
	}

	.section {
		margin-top: 3.5rem;
	}

	.section h2 {
		font-size: 2rem;
		margin-bottom: 1rem;
		color: var(--text-color);
		font-weight: 700;
	}

	.section p {
		color: rgba(255, 255, 255, 0.9);
		line-height: 1.8;
		font-size: 1.05rem;
	}

	.skills-section {
		margin-top: 4rem;
	}

	.skills-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
		gap: 1rem;
		margin-top: 1.5rem;
	}

	.skill-card {
		background: rgba(255, 255, 255, 0.1);
		backdrop-filter: blur(20px);
		-webkit-backdrop-filter: blur(20px);
		border: 1px solid rgba(255, 255, 255, 0.2);
		padding: 1rem 1.25rem;
		border-radius: var(--radius-md);
		box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
		text-align: center;
		font-weight: 600;
		color: var(--text-color);
		transition: all 0.3s ease;
	}

	.skill-card:hover {
		background: rgba(255, 255, 255, 0.15);
		transform: translateY(-3px);
		box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
	}

	@media (max-width: 600px) {
		.about-container {
			padding: 3rem 1.5rem;
		}

		.about-card {
			padding: 2rem 1.5rem;
		}

		.skills-grid {
			grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
		}

		.skill-card {
			padding: 0.875rem 1rem;
			font-size: 0.95rem;
		}
	}
</style>
