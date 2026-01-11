<script lang="ts">
	const projects = [
		{
			title: 'Health Sector Platform',
			description: 'Moderne Online-Shop Lösung mit React, Node.js und PostgreSQL. Features wie Warenkorb, Bezahlung und Admin-Dashboard.',
			tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
			featured: true
		},
		{
			title: 'RSVP Speed Reader',
			description: 'Ein multiplattform Tool zum Lesen von EPUB und PDF Dateien mit ebook-Reader Funktion und SpeedReading Option nach RSVP.',
			tags: ['Flutter', 'Dart'],
			featured: false
		},
		{
			title: 'isy_schwrz',
			description: 'Eine Cloudanwendung, welche Menschen ermöglicht Fahrkarten zu kaufen und verkaufen.',
			tags: ['PostgreSQL', 'Go', 'Flutter', 'Redis'],
			featured: false
		},
		{
			title: 'TUI Installer Framework',
			description: 'Ein Framework, welches es ermöglicht, TUI-basierte Installer zu erstellen.',
			tags: ['Go', 'Python', 'Docker'],
			featured: true
		},
		{
			title: 'Omni Dashboard',
			description: 'Frei konfigurierbares und interaktives Dashboard für Datenvisualisierung mit Charts, Filtern und Export-Funktionen.',
			tags: ['Vue.js', 'D3.js', 'Python'],
			featured: false
		},
		{
			title: 'HL7 Parser',
			description: 'Eine Anwendung auf Basis von Python und Qt, welche HL7 v2.5 Nachrichten aufbereitet, formatiert und erläutert.',
			tags: ['Go', 'Docker', 'Redis'],
			featured: false
		}
	];
</script>

<section id="projects" class="section">
	<div class="container mx-auto px-6">
		<div class="section-title text-center animate-fade-in">
			<span class="mb-2 inline-block text-sm font-medium uppercase tracking-widest text-[var(--color-accent-500)]">
				Portfolio
			</span>
			<h2 class="heading-lg">Meine Open Source Projekte</h2>
			<p class="mx-auto mt-4 max-w-2xl text-[var(--color-text-secondary)]">
				Eine Auswahl meiner bisherigen Arbeiten. Diese Projekte dienen der Allgemeinheit und sind als non-profit Anwendungen entwickelt wurden.
				Ich glaube fest daran, dass Open Source Software die Zukunft der Softwareentwicklung ist und ich möchte dabei helfen, diese Zukunft zu gestalten.
			</p>
		</div>

		<div class="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
			{#each projects as project, i}
				<article
					class="card group cursor-pointer animate-slide-up"
					class:md:col-span-2={project.featured && i === 0}
					class:lg:col-span-1={!project.featured || i !== 0}
					style="animation-delay: {100 + i * 100}ms"
				>
					<!-- Project Image Placeholder -->
					<div class="mb-4 aspect-video overflow-hidden rounded-lg bg-gradient-to-br from-[var(--color-bg-tertiary)] to-[var(--color-bg-elevated)]">
						<div class="flex h-full w-full items-center justify-center">
							<svg
								class="h-12 w-12 text-[var(--color-primary-700)] transition-colors group-hover:text-[var(--color-accent-500)]"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="1.5"
									d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
								/>
							</svg>
						</div>
					</div>

					<!-- Content -->
					<div>
						<h3 class="heading-sm mb-2 transition-colors group-hover:text-[var(--color-accent-500)]">
							{project.title}
						</h3>
						<p class="mb-4 text-sm text-[var(--color-text-muted)]">
							{project.description}
						</p>

						<!-- Tags -->
						<div class="flex flex-wrap gap-2">
							{#each project.tags as tag}
								<span class="rounded-full bg-[var(--color-bg-elevated)] px-3 py-1 text-xs text-[var(--color-text-secondary)]">
									{tag}
								</span>
							{/each}
						</div>
					</div>

					<!-- Link Arrow -->
					<div class="mt-4 flex items-center text-sm text-[var(--color-accent-500)] opacity-0 transition-opacity group-hover:opacity-100">
						<span>Mehr erfahren</span>
						<svg class="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
						</svg>
					</div>
				</article>
			{/each}
		</div>

		<!-- View More Button -->
		<div class="mt-12 text-center animate-fade-in delay-8">
			<button class="btn btn-secondary">
				Alle Projekte ansehen
				<svg class="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
				</svg>
			</button>
		</div>
	</div>
</section>
