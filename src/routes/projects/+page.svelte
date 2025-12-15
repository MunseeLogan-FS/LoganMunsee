<script>
	const projects = [
		{
			id: 1,
			title: 'ShelfHelp',
			description: 'A book organization app built using React and Chakra UI.',
			image: '/images/project1.png',
			link: 'https://shelfhelper.loganmunsee.com/',
			tags: ['React', 'Chakra UI', 'JavaScript']
		},
		{
			id: 2,
			title: 'Card Match',
			description: 'A simple game built with TypeScript.',
			image: '/images/project2.png',
			link: 'https://cardmatch.loganmunsee.com/',
			tags: ['TypeScript', 'Game Development']
		},
		{
			id: 3,
			title: 'Ready Set Travel',
			description: 'HTML, CSS, and JavaScript travel planning front-end.',
			image: '/images/project4.png',
			link: 'https://readysettravel.loganmunsee.com/',
			tags: ['HTML', 'CSS', 'JavaScript']
		}
		// Add more projects here in the future
	];
</script>

<section class="projects-container">
	<div class="projects-header">
		<h1>My Projects</h1>
		<p class="subtitle">
			A collection of web applications and projects I've built. From front-end interfaces to
			full-stack applications, each project represents a challenge solved and a skill sharpened.
		</p>
	</div>

	<div class="projects-grid">
		{#each projects as project}
			<div class="project-card">
				<div class="project-image">
					<img src={project.image} alt={project.title} />
				</div>
				<div class="project-content">
					<h3>{project.title}</h3>
					<p class="description">{project.description}</p>
					<div class="tags">
						{#each project.tags as tag}
							<span class="tag">{tag}</span>
						{/each}
					</div>
					<a href={project.link} target="_blank" rel="noopener noreferrer" class="view-btn">
						<span>View Project</span>
						<span class="arrow">→</span>
					</a>
				</div>
			</div>
		{/each}
	</div>
</section>

<style>
	.projects-container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 4rem 2rem;
	}

	.projects-header {
		text-align: center;
		margin-bottom: 4rem;
	}

	h1 {
		font-size: clamp(2.5rem, 5vw, 3.5rem);
		margin-bottom: 1rem;
		color: var(--text-color);
		font-weight: 800;
	}

	.subtitle {
		font-size: 1.125rem;
		line-height: 1.7;
		max-width: 700px;
		margin: 0 auto;
		color: rgba(255, 255, 255, 0.9);
	}

	.projects-grid {
		display: grid;
		gap: 2.5rem;
		grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
	}

	.project-card {
		background: rgba(255, 255, 255, 0.1);
		backdrop-filter: blur(20px);
		-webkit-backdrop-filter: blur(20px);
		border: 1px solid rgba(255, 255, 255, 0.2);
		border-radius: var(--radius-lg);
		overflow: hidden;
		box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
		transition: all 0.3s ease;
		display: flex;
		flex-direction: column;
	}

	.project-card:hover {
		transform: translateY(-8px);
		background: rgba(255, 255, 255, 0.15);
		box-shadow: 0 12px 40px rgba(0, 0, 0, 0.2);
	}

	.project-image {
		width: 100%;
		overflow: hidden;
		position: relative;
	}

	.project-image img {
		width: 100%;
		aspect-ratio: 16 / 9;
		object-fit: cover;
		transition: transform 0.3s ease;
	}

	.project-card:hover .project-image img {
		transform: scale(1.05);
	}

	.project-content {
		padding: 2rem;
		display: flex;
		flex-direction: column;
		flex: 1;
	}

	.project-content h3 {
		color: var(--text-color);
		font-size: 1.5rem;
		margin-bottom: 0.75rem;
		font-weight: 700;
	}

	.description {
		color: rgba(255, 255, 255, 0.9);
		margin-bottom: 1.25rem;
		line-height: 1.6;
		flex: 1;
	}

	.tags {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		margin-bottom: 1.5rem;
	}

	.tag {
		background: rgba(255, 255, 255, 0.15);
		color: rgba(255, 255, 255, 0.95);
		padding: 0.375rem 0.875rem;
		border-radius: 50px;
		font-size: 0.875rem;
		font-weight: 500;
		border: 1px solid rgba(255, 255, 255, 0.2);
	}

	.view-btn {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
		padding: 0.875rem 1.75rem;
		background: rgba(255, 255, 255, 0.95);
		color: #1e3a8a;
		font-weight: 600;
		text-decoration: none;
		border-radius: 50px;
		transition: all 0.3s ease;
		box-shadow: 0 4px 15px rgba(255, 255, 255, 0.2);
		align-self: flex-start;
	}

	.view-btn:hover {
		background: white;
		transform: translateX(5px);
		box-shadow: 0 6px 20px rgba(255, 255, 255, 0.3);
	}

	.view-btn:hover .arrow {
		transform: translateX(5px);
	}

	.arrow {
		transition: transform 0.3s ease;
		font-size: 1.2rem;
	}

	@media (max-width: 768px) {
		.projects-container {
			padding: 3rem 1.5rem;
		}

		.projects-header {
			margin-bottom: 3rem;
		}

		.projects-grid {
			grid-template-columns: 1fr;
			gap: 2rem;
		}

		.project-content {
			padding: 1.5rem;
		}
	}

	@media (max-width: 480px) {
		.projects-container {
			padding: 2rem 1rem;
		}

		.project-content h3 {
			font-size: 1.25rem;
		}

		.view-btn {
			width: 100%;
		}
	}
</style>
