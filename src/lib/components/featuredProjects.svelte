<script>
	// case change
	const projects = [
		{
			id: 1,
			title: 'ShelfHelp',
			description: 'A book organization app built using React and Chakra UI.',
			image: '/images/project1.png',
			link: 'https://shelfhelper.loganmunsee.com/'
		},
		{
			id: 2,
			title: 'Card Match',
			description: 'A simple game built with TypeScript.',
			image: '/images/project2.png',
			link: 'https://cardmatch.loganmunsee.com/'
		},
		{
			id: 3,
			title: 'Ready Set Travel',
			description: 'HTML, CSS, and JavaScript travel planning front-end.',
			image: '/images/project4.png',
			link: 'https://readysettravel.loganmunsee.com/'
		}
	];

	// Only show first 3 projects
	const featuredProjects = projects.slice(0, 3);
</script>

<section id="projects">
	<h2 class="heading">Featured Work</h2>

	<div class="project-grid">
		{#each featuredProjects as project}
			<div class="project-card">
				<img src={project.image} alt={project.title} />
				<h3>{project.title}</h3>
				<p>{project.description}</p>
				<a href={project.link} target="_blank" rel="noopener noreferrer" class="view-btn"
					>View Project</a
				>
			</div>
		{/each}
	</div>

	<div class="view-all">
		<a href="/projects" class="view-all-btn">
			<span>View All Projects</span>
			<span class="arrow">→</span>
		</a>
	</div>
</section>

<style>
	.heading {
		color: white;
		text-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
		margin-bottom: 2rem;
	}

	.project-grid {
		display: grid;
		gap: 2rem;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	}

	.project-card {
		background: rgba(255, 255, 255, 0.1);
		backdrop-filter: blur(20px);
		-webkit-backdrop-filter: blur(20px);
		border: 1px solid rgba(255, 255, 255, 0.2);
		border-radius: var(--radius-lg);
		padding: 1.5rem;
		box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
		transition: all 0.3s ease;
		color: white;
	}

	.project-card:hover {
		transform: translateY(-5px);
		background: rgba(255, 255, 255, 0.15);
		box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
	}

	.project-card img {
		width: 100%;
		aspect-ratio: 16 / 9;
		object-fit: cover;
		border-radius: var(--radius-md);
		margin-bottom: 1rem;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
	}

	.project-card h3 {
		color: white;
		text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
		margin-bottom: 0.5rem;
	}

	.project-card p {
		color: rgba(255, 255, 255, 0.9);
		text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
		margin-bottom: 0.5rem;
	}

	.view-btn {
		display: inline-block;
		margin-top: 1rem;
		color: white;
		font-weight: 600;
		text-decoration: none;
		padding: 0.5rem 1rem;
		background: rgba(255, 255, 255, 0.2);
		border-radius: 50px;
		transition: all 0.3s ease;
	}

	.view-btn:hover {
		background: rgba(255, 255, 255, 0.3);
		transform: translateX(5px);
	}

	.view-all {
		margin-top: 3rem;
		text-align: center;
	}

	.view-all-btn {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		padding: 1rem 2rem;
		background: rgba(255, 255, 255, 0.95);
		color: #1e3a8a;
		font-weight: 600;
		font-size: 1.05rem;
		text-decoration: none;
		border-radius: 50px;
		transition: all 0.3s ease;
		box-shadow: 0 4px 20px rgba(255, 255, 255, 0.3);
	}

	.view-all-btn:hover {
		background: white;
		transform: translateY(-2px);
		box-shadow: 0 6px 25px rgba(255, 255, 255, 0.4);
	}

	.view-all-btn:hover .arrow {
		transform: translateX(5px);
	}

	.arrow {
		transition: transform 0.3s ease;
		font-size: 1.2rem;
	}
</style>
