<script lang="ts">
	import { fly } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';

	let { data } = $props();
	let mounted = $state(false);

	$effect(() => {
		mounted = true;
	});

	// Simple markdown-like content rendering
	function formatContent(content: string): string {
		return content
			// Code blocks
			.replace(/```(\w+)?\n([\s\S]*?)```/g, '<pre class="code-block"><code>$2</code></pre>')
			// Inline code
			.replace(/`([^`]+)`/g, '<code class="inline-code">$1</code>')
			// Headers
			.replace(/^## (.+)$/gm, '<h2 class="content-h2">$1</h2>')
			.replace(/^### (.+)$/gm, '<h3 class="content-h3">$1</h3>')
			// Bold
			.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
			// Lists
			.replace(/^- (.+)$/gm, '<li class="content-li">$1</li>')
			// Numbered lists
			.replace(/^\d+\. (.+)$/gm, '<li class="content-li numbered">$1</li>')
			// Paragraphs (lines that aren't headers, lists, or code)
			.replace(/^(?!<[hl]|<pre|<li)(.+)$/gm, '<p class="content-p">$1</p>')
			// Clean up empty paragraphs
			.replace(/<p class="content-p"><\/p>/g, '')
			// Wrap consecutive li elements in ul
			.replace(/(<li class="content-li">[\s\S]*?<\/li>\n?)+/g, '<ul class="content-ul">$&</ul>')
			.replace(/(<li class="content-li numbered">[\s\S]*?<\/li>\n?)+/g, '<ol class="content-ol">$&</ol>');
	}
</script>

<svelte:head>
	<title>{data.post.title} | Blog</title>
	<meta name="description" content={data.post.excerpt} />
</svelte:head>

<main class="min-h-screen pt-24 pb-16">
	<article class="container mx-auto max-w-3xl px-6">
		{#if mounted}
			<!-- Back Link -->
			<div in:fly={{ y: 20, duration: 400, easing: cubicOut }}>
				<a 
					href="/blog" 
					class="mb-8 inline-flex items-center gap-2 text-sm text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-accent-500)]"
				>
					<svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
					</svg>
					Zurück zur Übersicht
				</a>
			</div>

			<!-- Header -->
			<header class="mb-12" in:fly={{ y: 30, duration: 600, delay: 100, easing: cubicOut }}>
				<div class="mb-4 flex items-center gap-4">
					<span class="rounded-full bg-[var(--color-accent-500)]/10 px-4 py-1.5 text-sm font-medium text-[var(--color-accent-500)]">
						{data.post.category}
					</span>
					<span class="text-sm text-[var(--color-text-muted)]">{data.post.readTime} Lesezeit</span>
				</div>
				<h1 class="heading-xl mb-4">{data.post.title}</h1>
				<p class="text-lg text-[var(--color-text-secondary)]">{data.post.excerpt}</p>
				<div class="mt-6 flex items-center gap-4 border-b border-[var(--color-glass-border)] pb-6">
					<div class="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-accent-500)]/20">
						<svg class="h-5 w-5 text-[var(--color-accent-500)]" fill="currentColor" viewBox="0 0 24 24">
							<path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
						</svg>
					</div>
					<div>
						<p class="text-sm font-medium text-[var(--color-text-primary)]">Dein Name</p>
						<time class="text-xs text-[var(--color-text-muted)]">{data.post.date}</time>
					</div>
				</div>
			</header>

			<!-- Content -->
			<div 
				class="prose-content"
				in:fly={{ y: 30, duration: 600, delay: 200, easing: cubicOut }}
			>
				{@html formatContent(data.post.content)}
			</div>

			<!-- Footer -->
			<footer 
				class="mt-16 border-t border-[var(--color-glass-border)] pt-8"
				in:fly={{ y: 30, duration: 600, delay: 300, easing: cubicOut }}
			>
				<div class="flex flex-col items-center justify-between gap-4 sm:flex-row">
					<a 
						href="/blog" 
						class="btn btn-secondary"
					>
						<svg class="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
						</svg>
						Alle Artikel
					</a>
					<a 
						href="/#contact" 
						class="btn btn-primary"
					>
						Kontakt aufnehmen
						<svg class="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
						</svg>
					</a>
				</div>
			</footer>
		{/if}
	</article>
</main>

<style>
	:global(.prose-content) {
		color: var(--color-text-secondary);
		line-height: 1.8;
	}

	:global(.content-h2) {
		font-size: 1.75rem;
		font-weight: 600;
		color: var(--color-text-primary);
		margin-top: 2.5rem;
		margin-bottom: 1rem;
	}

	:global(.content-h3) {
		font-size: 1.35rem;
		font-weight: 600;
		color: var(--color-text-primary);
		margin-top: 2rem;
		margin-bottom: 0.75rem;
	}

	:global(.content-p) {
		margin-bottom: 1.25rem;
	}

	:global(.content-ul),
	:global(.content-ol) {
		margin-bottom: 1.25rem;
		padding-left: 1.5rem;
	}

	:global(.content-ul) {
		list-style-type: disc;
	}

	:global(.content-ol) {
		list-style-type: decimal;
	}

	:global(.content-li) {
		margin-bottom: 0.5rem;
	}

	:global(.code-block) {
		background: var(--color-bg-tertiary);
		border: 1px solid var(--color-glass-border);
		border-radius: var(--radius-lg);
		padding: 1.25rem;
		margin: 1.5rem 0;
		overflow-x: auto;
		font-family: var(--font-mono);
		font-size: 0.875rem;
		line-height: 1.6;
	}

	:global(.code-block code) {
		color: var(--color-text-primary);
	}

	:global(.inline-code) {
		background: var(--color-bg-tertiary);
		border: 1px solid var(--color-glass-border);
		border-radius: var(--radius-sm);
		padding: 0.15rem 0.4rem;
		font-family: var(--font-mono);
		font-size: 0.85em;
		color: var(--color-accent-400);
	}
</style>
