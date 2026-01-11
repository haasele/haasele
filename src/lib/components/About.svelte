<script lang="ts">
</script>

<section id="about" class="section">
	<div class="container mx-auto px-6">
		<div class="section-title text-center animate-fade-in">
			<span class="mb-2 inline-block text-sm font-medium uppercase tracking-widest text-[var(--color-accent-500)]">
				Über mich
			</span>
			<h2 class="heading-lg">Wer ich bin</h2>
		</div>

		<div class="mx-auto mt-12 grid max-w-5xl gap-12 md:grid-cols-2 md:items-center">
			<!-- Image/Avatar -->
			<div class="relative animate-slide-in-left delay-2">
				<div class="glass-accent relative aspect-square overflow-hidden rounded-2xl">
					<div class="flex h-full w-full items-center justify-center bg-gradient-to-br from-[var(--color-primary-900)] to-[var(--color-bg-tertiary)]">
						<svg
							class="h-32 w-32 text-[var(--color-primary-600)]"
							fill="currentColor"
							viewBox="0 0 24 24"
						>
							<path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
						</svg>
					</div>
				</div>
				<div
					class="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-2xl border-2 border-[var(--color-accent-500)]"
				></div>
			</div>

			<!-- Content -->
			<div class="animate-slide-in-right delay-3">
				<h3 class="heading-md mb-4 text-[var(--color-text-primary)]">
					Entwickler & Designer
				</h3>
				<div class="space-y-4 text-[var(--color-text-secondary)]">
					<p>
						Mit über <span class="text-[var(--color-accent-500)] font-medium">5 Jahren Erfahrung</span> 
						in der Softwareentwicklung bringe ich Leidenschaft und Expertise in jedes Projekt ein.
					</p>
					<p>
						Mein Fokus liegt auf der Entwicklung moderner, performanter Webanwendungen mit 
						besonderem Augenmerk auf Benutzerfreundlichkeit und sauberen Code.
					</p>
					<p>
						Wenn ich nicht programmiere, findet man mich beim Erkunden neuer Technologien,
						beim Lesen von Tech-Blogs oder beim Genießen einer guten Tasse Kaffee.
					</p>
				</div>

				<!-- Quick facts -->
				<div class="mt-8 grid grid-cols-2 gap-4">
					{#each [
						{ label: 'Jahre Erfahrung', value: '5+' },
						{ label: 'Projekte abgeschlossen', value: '50+' },
						{ label: 'Zufriedene Kunden', value: '30+' },
						{ label: 'Technologien', value: '15+' }
					] as stat, i}
						<div
							class="card text-center animate-scale-in"
							style="animation-delay: {400 + i * 100}ms"
						>
							<span class="block text-2xl font-bold text-[var(--color-accent-500)]">{stat.value}</span>
							<span class="text-sm text-[var(--color-text-muted)]">{stat.label}</span>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>
