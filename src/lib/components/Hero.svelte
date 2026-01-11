<script lang="ts">
	import { fly, scale } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';

	let mounted = $state(false);

	$effect(() => {
		mounted = true;
	});
</script>

<section
	id="hero"
	class="relative flex min-h-screen items-center justify-center overflow-hidden pt-20"
>
	<div class="container relative z-10 mx-auto px-6 text-center">
		{#if mounted}
			<!-- Greeting -->
			<p
				class="mb-4 text-sm font-medium uppercase tracking-widest text-[var(--color-accent-500)]"
				in:fly={{ y: 30, duration: 600, delay: 100, easing: cubicOut }}
			>
				Willkommen auf meiner Seite
			</p>

			<!-- Name -->
			<h1
				class="heading-xl mb-6"
				in:fly={{ y: 30, duration: 600, delay: 200, easing: cubicOut }}
			>
				Hallo, ich bin
				<span class="text-gradient">Leon</span>
			</h1>

			<!-- Subtitle -->
			<p
				class="mx-auto mb-8 max-w-2xl text-lg text-[var(--color-text-secondary)] md:text-xl"
				in:fly={{ y: 30, duration: 600, delay: 300, easing: cubicOut }}
			>
				Full-Stack Entwickler mit Leidenschaft für moderne Webtechnologien,
				performante Anwendungen und durchdachtes UI/UX Design.
			</p>

			<!-- CTA Buttons -->
			<div
				class="flex flex-col items-center justify-center gap-4 sm:flex-row"
				in:fly={{ y: 30, duration: 600, delay: 400, easing: cubicOut }}
			>
				<a href="#projects" class="btn btn-primary">
					<span>Projekte ansehen</span>
					<svg
						class="ml-2 h-4 w-4"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M17 8l4 4m0 0l-4 4m4-4H3"
						/>
					</svg>
				</a>
				<a href="#contact" class="btn btn-secondary">
					Kontakt aufnehmen
				</a>
			</div>

			<!-- Tech Stack Preview -->
			<div
				class="mt-16"
				in:fly={{ y: 30, duration: 600, delay: 500, easing: cubicOut }}
			>
				<p class="mb-4 text-xs uppercase tracking-wider text-[var(--color-text-muted)]">
					Technologien die ich nutze
				</p>
				<div class="flex flex-wrap items-center justify-center gap-6">
					{#each ['TypeScript', 'React', 'Svelte', 'Node.js', 'Flutter'] as tech, i}
						<span
							class="glass rounded-full px-4 py-2 text-sm text-[var(--color-text-secondary)] transition-all duration-300 hover:border-[var(--color-accent-500)] hover:text-[var(--color-accent-500)]"
							in:scale={{ start: 0.8, duration: 400, delay: 600 + i * 50, easing: cubicOut }}
						>
							{tech}
						</span>
					{/each}
				</div>
			</div>
		{/if}
	</div>

	<!-- Scroll Indicator -->
	{#if mounted}
		<div
			class="absolute bottom-8 left-1/2 -translate-x-1/2"
			in:fly={{ y: 20, duration: 600, delay: 800, easing: cubicOut }}
		>
			<a
				href="#about"
				class="flex flex-col items-center gap-2 text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-accent-500)]"
				aria-label="Scroll to About section"
			>
				<span class="text-xs uppercase tracking-wider">Mehr erfahren</span>
				<svg
					class="h-5 w-5 animate-bounce"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M19 14l-7 7m0 0l-7-7m7 7V3"
					/>
				</svg>
			</a>
		</div>
	{/if}

	<!-- Decorative elements -->
	<div
		class="pointer-events-none absolute left-10 top-1/4 h-72 w-72 rounded-full bg-[var(--color-primary-500)] opacity-5 blur-3xl"
		aria-hidden="true"
	></div>
	<div
		class="pointer-events-none absolute bottom-1/4 right-10 h-96 w-96 rounded-full bg-[var(--color-accent-500)] opacity-5 blur-3xl"
		aria-hidden="true"
	></div>
</section>
