<script lang="ts">
	const skillCategories = [
		{
			title: 'Frontend',
			icon: `<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>`,
			skills: [
				{ name: 'Svelte', level: 85 },
				{ name: 'Dart', level: 80 },
				{ name: 'Vue.js', level: 80 },
				{ name: 'Tailwind CSS', level: 90 },
				{ name: 'Python / Qt', level: 80 },
			]
		},
		{
			title: 'Backend',
			icon: `<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" /></svg>`,
			skills: [
				{ name: 'Redis', level: 70 },
				{ name: 'Go', level: 70 },
				{ name: 'Bun.js', level: 80 },
				{ name: 'MongoDB', level: 80 },
				{ name: 'PostgreSQL', level: 85 },

			]
		},
		{
			title: 'Mobile & Tools',
			icon: `<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>`,
			skills: [
				{ name: 'AWS', level: 75 },
				{ name: 'Flutter', level: 75 },
				{ name: 'Git', level: 90 },
				{ name: 'Docker', level: 95 },
				{ name: 'Figma', level: 100 },
			]
		}
	];
</script>

<section id="skills" class="section bg-[var(--color-bg-secondary)]">
	<div class="container mx-auto px-6">
		<div class="section-title text-center animate-fade-in">
			<span class="mb-2 inline-block text-sm font-medium uppercase tracking-widest text-[var(--color-accent-500)]">
				Fähigkeiten
			</span>
			<h2 class="heading-lg">Mein Tech Stack</h2>
			<p class="mx-auto mt-4 max-w-2xl text-[var(--color-text-secondary)]">
				Technologien und Tools, mit denen ich täglich arbeite und die ich beherrsche.
			</p>
		</div>

		<div class="mt-12 grid gap-8 lg:grid-cols-3">
			{#each skillCategories as category, categoryIndex}
				<div
					class="card animate-slide-up"
					style="animation-delay: {100 + categoryIndex * 150}ms"
				>
					<!-- Category Header -->
					<div class="mb-6 flex items-center gap-3">
						<div class="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-accent-500)]/10 text-[var(--color-accent-500)]">
							{@html category.icon}
						</div>
						<h3 class="heading-sm">{category.title}</h3>
					</div>

					<!-- Skills -->
					<div class="space-y-4">
						{#each category.skills as skill}
							<div>
								<div class="mb-1 flex justify-between text-sm">
									<span class="text-[var(--color-text-primary)]">{skill.name}</span>
									<span class="text-[var(--color-text-muted)]">{skill.level}%</span>
								</div>
								<div class="h-2 overflow-hidden rounded-full bg-[var(--color-bg-primary)]">
									<div
										class="h-full rounded-full bg-gradient-to-r from-[var(--color-primary-500)] to-[var(--color-accent-500)]"
										style="width: {skill.level}%"
									></div>
								</div>
							</div>
						{/each}
					</div>
				</div>
			{/each}
		</div>

		<!-- Additional Skills Tags -->
		<div class="mt-12 text-center animate-fade-in delay-6">
			<p class="mb-4 text-sm text-[var(--color-text-muted)]">Weitere Kenntnisse:</p>
			<div class="flex flex-wrap justify-center gap-2">
				{#each ['GraphQL', 'REST APIs', 'CI/CD', 'Testing', 'Agile', 'UI/UX', 'SEO', 'Performance'] as skill, i}
					<span
						class="glass rounded-full px-4 py-2 text-sm text-[var(--color-text-secondary)] transition-all duration-300 hover:border-[var(--color-accent-500)] hover:text-[var(--color-accent-500)] animate-scale-in"
						style="animation-delay: {700 + i * 50}ms"
					>
						{skill}
					</span>
				{/each}
			</div>
		</div>
	</div>
</section>
