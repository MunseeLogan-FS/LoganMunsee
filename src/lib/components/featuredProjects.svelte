<section id="projects">
	<h2 class="heading">Featured Work</h2>

	<div class="project-grid">
		<div class="project-card">
			<img src="/images/project1.png" alt="project" />
			<h3>ShelfHelp</h3>
			<p>A book organization app built using React and Chakra UI.</p>
			<a href="https://shelfhelper.loganmunsee.com/" class="view-btn">View Project</a>
		</div>

		<div class="project-card">
			<img src="/images/project2.png" alt="project" />
			<h3>Card Match</h3>
			<p>A simple game built with TypeScript.</p>
			<a href="https://cardmatch.loganmunsee.com/" class="view-btn">View Project</a>
		</div>

		<div class="project-card">
			<img src="/images/project3.png" alt="project" />
			<h3>Park Finder</h3>
			<p>An API built with React and Express. Shows auth and full CRUD functionality.</p>
			<a href="/projects/storage" class="view-btn">View Project</a>
		</div>

		<div class="project-card">
			<img src="/images/project4.png" alt="project" />
			<h3>Ready Set Travel</h3>
			<p>HTML, CSS, and JavaScript travel planning front-end.</p>
			<a href="https://readysettravel.loganmunsee.com/" class="view-btn">View Project</a>
		</div>
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
</style>
