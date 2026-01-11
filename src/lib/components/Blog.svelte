<script lang="ts">
	import { blogPosts } from '$lib/data/blogPosts';
</script>

<section id="blog" class="section">
	<div class="container mx-auto px-6">
		<div class="section-title text-center animate-fade-in">
			<span class="mb-2 inline-block text-sm font-medium uppercase tracking-widest text-[var(--color-accent-500)]">
				Blog
			</span>
			<h2 class="heading-lg">Neueste Artikel</h2>
			<p class="mx-auto mt-4 max-w-2xl text-[var(--color-text-secondary)]">
				Gedanken, Tutorials und Einblicke in die Welt der Webentwicklung.
			</p>
		</div>

		<div class="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
			{#each blogPosts as post, i}
				<a
					href="/blog/{post.slug}"
					class="card group block animate-slide-up"
					style="animation-delay: {100 + i * 100}ms"
				>
					<!-- Image Placeholder -->
					<div class="mb-4 aspect-video overflow-hidden rounded-lg bg-gradient-to-br from-[var(--color-bg-tertiary)] to-[var(--color-bg-elevated)]">
						<div class="flex h-full w-full items-center justify-center">
							<svg
								class="h-10 w-10 text-[var(--color-primary-700)] transition-colors group-hover:text-[var(--color-accent-500)]"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="1.5"
									d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
								/>
							</svg>
						</div>
					</div>

					<!-- Category & Meta -->
					<div class="mb-3 flex items-center gap-3">
						<span class="rounded-full bg-[var(--color-accent-500)]/10 px-3 py-1 text-xs font-medium text-[var(--color-accent-500)]">
							{post.category}
						</span>
						<span class="text-xs text-[var(--color-text-muted)]">{post.readTime} Lesezeit</span>
					</div>

					<!-- Content -->
					<h3 class="heading-sm mb-2 transition-colors group-hover:text-[var(--color-accent-500)]">
						{post.title}
					</h3>
					<p class="mb-4 text-sm text-[var(--color-text-muted)]">
						{post.excerpt}
					</p>

					<!-- Footer -->
					<div class="flex items-center justify-between text-xs text-[var(--color-text-muted)]">
						<time>{post.date}</time>
						<span class="flex items-center gap-1 text-[var(--color-accent-500)] opacity-0 transition-opacity group-hover:opacity-100">
							Weiterlesen
							<svg class="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
							</svg>
						</span>
					</div>
				</a>
			{/each}
		</div>

		<!-- View All Button -->
		<div class="mt-12 text-center animate-fade-in delay-5">
			<a href="/blog" class="btn btn-secondary">
				Alle Artikel ansehen
				<svg class="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
				</svg>
			</a>
		</div>
	</div>
</section>
