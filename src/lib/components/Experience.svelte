<script lang="ts">
	const experiences = [
		{
			title: 'Software Integration Specialist',
			company: 'Care-Bridge GmbH',
			period: '2025 - Heute',
			description: 'Implementierung, Wartung und Weiterentwicklung von Software-Lösungen für die Gesundheitsbranche.',
			highlights: ['Microservices Architektur', 'CI/CD', 'Docker', 'Kubernetes', 'GitHub', 'Frontendentwicklung'],
			current: true
		},
		{
			title: 'IT System Engineer',
			company: 'Asklepios Service IT GmbH',
			period: '2023 - 2025',
			description: 'Fortgeschrittene Betreuung von Kundenprojekten im Gesundheitssektor mit Fokus auf Sicherheit, Datenschutz und Compliance.',
			highlights: ['15+ Kundenprojekte', 'Serververwaltung', 'Linux und Windows Server', 'Hybridadministration'],
			current: false
		},
		{
			title: 'Projektleiter IT',
			company: 'Asklepios Service IT GmbH',
			period: '2022 - 2023',
			description: 'Einstieg in die IT-Branche mit Schwerpunkt auf Netzwerkadministration und Servicemanagement im Gesundheitssektor.',
			highlights: ['Netzwerkadministration', 'Scrum', 'Agile Methoden','PRINCE2'],
			current: false
		}
	];

	const education = [
		{
			title: 'Ausbildung in der Informatik',
			institution: 'BBS IV Halle (Saale)',
			period: '2019 - 2022',
			description: 'Ausbildung in der Informatik mit Schwerpunkt auf Netzwerkadministration, Projekt- und Servicemanagement',
			highlights: ['ITIL','Infrastrukturmanagement', 'Servicemanagement']
		}
	];
</script>

<section id="experience" class="section">
	<div class="container mx-auto px-6">
		<div class="section-title text-center animate-fade-in">
			<span class="mb-2 inline-block text-sm font-medium uppercase tracking-widest text-[var(--color-accent-500)]">
				Erfahrung
			</span>
			<h2 class="heading-lg">Mein Werdegang</h2>
		</div>

		<div class="mx-auto mt-12 max-w-4xl">
			<!-- Timeline -->
			<div class="relative">
				<!-- Timeline Line -->
				<div class="absolute left-0 top-0 h-full w-0.5 bg-gradient-to-b from-[var(--color-accent-500)] via-[var(--color-primary-500)] to-transparent md:left-1/2 md:-translate-x-1/2"></div>

				<!-- Experience Items -->
				{#each experiences as exp, i}
					<div
						class="relative mb-12 pl-8 md:w-1/2 md:pl-0 md:pr-12 {i % 2 === 0 ? 'md:text-right md:ml-0' : 'md:text-left md:ml-auto md:pl-12 md:pr-0'} animate-slide-up"
						style="animation-delay: {100 + i * 150}ms"
					>
						<!-- Timeline Dot -->
						<div
							class="absolute top-6 {i % 2 === 0 ? 'left-0 -translate-x-1/2 md:left-auto md:right-0 md:translate-x-1/2' : 'left-0 -translate-x-1/2'}"
						>
							<div
								class="h-4 w-4 rounded-full border-2 {exp.current ? 'border-[var(--color-accent-500)] bg-[var(--color-accent-500)]' : 'border-[var(--color-primary-500)] bg-[var(--color-bg-primary)]'}"
							></div>
						</div>

						<!-- Content Card -->
						<div class="card" class:card-highlight={exp.current}>
							<div class="mb-2 flex items-center gap-2 {i % 2 === 0 ? 'md:justify-end' : ''}">
								{#if exp.current}
									<span class="rounded-full bg-[var(--color-accent-500)]/20 px-2 py-0.5 text-xs font-medium text-[var(--color-accent-500)]">
										Aktuell
									</span>
								{/if}
								<span class="text-sm text-[var(--color-text-muted)]">{exp.period}</span>
							</div>
							<h3 class="heading-sm text-[var(--color-text-primary)]">{exp.title}</h3>
							<p class="mt-1 font-medium text-[var(--color-accent-500)]">{exp.company}</p>
							<p class="mt-3 text-sm text-[var(--color-text-secondary)]">{exp.description}</p>
							
							<!-- Highlights -->
							<ul class="mt-3 flex flex-wrap gap-2 {i % 2 === 0 ? 'md:justify-end' : ''}">
								{#each exp.highlights as highlight}
									<li class="rounded-full bg-[var(--color-bg-primary)] px-3 py-1 text-xs text-[var(--color-text-muted)]">
										{highlight}
									</li>
								{/each}
							</ul>
						</div>
					</div>
				{/each}

				<!-- Education Section -->
				<div class="mt-16 animate-fade-in delay-6">
					<h3 class="mb-8 text-center text-lg font-semibold text-[var(--color-text-primary)]">
						Ausbildung
					</h3>
					{#each education as edu, i}
						<div
							class="relative mb-8 pl-8 md:w-1/2 md:ml-auto md:pl-12 md:pr-0 animate-slide-up"
							style="animation-delay: {700 + i * 100}ms"
						>
							<!-- Timeline Dot -->
							<div class="absolute left-0 top-6 -translate-x-1/2 md:left-0 md:-translate-x-1/2">
								<div class="h-4 w-4 rounded-full border-2 border-[var(--color-primary-500)] bg-[var(--color-bg-primary)]"></div>
							</div>

							<div class="card">
								<span class="text-sm text-[var(--color-text-muted)]">{edu.period}</span>
								<h4 class="heading-sm text-[var(--color-text-primary)]">{edu.title}</h4>
								<p class="font-medium text-[var(--color-primary-500)]">{edu.institution}</p>
								<p class="mt-2 text-sm text-[var(--color-text-secondary)]">{edu.description}</p>
							</div>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>
