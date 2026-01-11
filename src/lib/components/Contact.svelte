<script lang="ts">
	let formState = $state({
		name: '',
		email: '',
		message: '',
		sending: false,
		sent: false
	});

	async function handleSubmit(e: Event) {
		e.preventDefault();
		formState.sending = true;

		// Simulate form submission
		await new Promise((resolve) => setTimeout(resolve, 1500));

		formState.sending = false;
		formState.sent = true;
		formState.name = '';
		formState.email = '';
		formState.message = '';

		// Reset sent state after a delay
		setTimeout(() => {
			formState.sent = false;
		}, 5000);
	}

	const contactMethods = [
		{
			icon: `<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>`,
			label: 'Email',
			value: 'hello@example.com',
			href: 'mailto:hello@example.com'
		},
		{
			icon: `<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>`,
			label: 'Standort',
			value: 'Berlin, Deutschland',
			href: null
		},
		{
			icon: `<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>`,
			label: 'Verfügbarkeit',
			value: 'Mo - Fr, 9:00 - 18:00',
			href: null
		}
	];

	const socialLinks = [
		{ name: 'GitHub', icon: `<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"/></svg>` },
	//	{ name: 'LinkedIn', icon: `<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>` },
	//	{ name: 'Twitter', icon: `<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>` }
	];
</script>

<section id="contact" class="section bg-[var(--color-bg-secondary)]">
	<div class="container mx-auto px-6">
		<div class="section-title text-center animate-fade-in">
			<span class="mb-2 inline-block text-sm font-medium uppercase tracking-widest text-[var(--color-accent-500)]">
				Kontakt
			</span>
			<h2 class="heading-lg">Lass uns zusammenarbeiten</h2>
			<p class="mx-auto mt-4 max-w-2xl text-[var(--color-text-secondary)]">
				Hast du ein Projekt im Sinn oder möchtest einfach nur Hallo sagen?
				Ich freue mich auf deine Nachricht!
			</p>
		</div>

		<div class="mx-auto mt-12 grid max-w-5xl gap-12 lg:grid-cols-2">
			<!-- Contact Info -->
			<div class="animate-slide-in-left delay-2">
				<h3 class="heading-md mb-6">Kontaktinformationen</h3>
				
				<div class="space-y-6">
					{#each contactMethods as method, i}
						<div
							class="flex items-start gap-4 animate-slide-up"
							style="animation-delay: {300 + i * 100}ms"
						>
							<div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--color-accent-500)]/10 text-[var(--color-accent-500)]">
								{@html method.icon}
							</div>
							<div>
								<p class="text-sm text-[var(--color-text-muted)]">{method.label}</p>
								{#if method.href}
									<a
										href={method.href}
										class="font-medium text-[var(--color-text-primary)] transition-colors hover:text-[var(--color-accent-500)]"
									>
										{method.value}
									</a>
								{:else}
									<p class="font-medium text-[var(--color-text-primary)]">{method.value}</p>
								{/if}
							</div>
						</div>
					{/each}
				</div>

				<!-- Social Links -->
				<div class="mt-8 animate-fade-in delay-6">
					<p class="mb-4 text-sm text-[var(--color-text-muted)]">Folge mir auf:</p>
					<div class="flex gap-4">
						{#each socialLinks as social, i}
							<a
								href="https://github.com/haasele"
								target="_blank"
								rel="noopener noreferrer"
								class="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-bg-primary)] text-[var(--color-text-muted)] transition-all hover:bg-[var(--color-accent-500)] hover:text-white animate-scale-in"
								style="animation-delay: {700 + i * 50}ms"
								aria-label={social.name}
							>
								{@html social.icon}
							</a>
						{/each}
					</div>
				</div>
			</div>

			<!-- Contact Form -->
			<div class="animate-slide-in-right delay-2">
				<form onsubmit={handleSubmit} class="card space-y-6">
					<div>
						<label for="name" class="mb-2 block text-sm font-medium text-[var(--color-text-primary)]">
							Name
						</label>
						<input
							type="text"
							id="name"
							bind:value={formState.name}
							required
							class="w-full rounded-lg border border-[var(--color-glass-border)] bg-[var(--color-bg-primary)] px-4 py-3 text-[var(--color-text-primary)] placeholder-[var(--color-text-muted)] transition-all focus:border-[var(--color-accent-500)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-500)]/20"
							placeholder="Dein Name"
						/>
					</div>

					<div>
						<label for="email" class="mb-2 block text-sm font-medium text-[var(--color-text-primary)]">
							Email
						</label>
						<input
							type="email"
							id="email"
							bind:value={formState.email}
							required
							class="w-full rounded-lg border border-[var(--color-glass-border)] bg-[var(--color-bg-primary)] px-4 py-3 text-[var(--color-text-primary)] placeholder-[var(--color-text-muted)] transition-all focus:border-[var(--color-accent-500)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-500)]/20"
							placeholder="deine@email.de"
						/>
					</div>

					<div>
						<label for="message" class="mb-2 block text-sm font-medium text-[var(--color-text-primary)]">
							Nachricht
						</label>
						<textarea
							id="message"
							bind:value={formState.message}
							required
							rows="5"
							class="w-full resize-none rounded-lg border border-[var(--color-glass-border)] bg-[var(--color-bg-primary)] px-4 py-3 text-[var(--color-text-primary)] placeholder-[var(--color-text-muted)] transition-all focus:border-[var(--color-accent-500)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-500)]/20"
							placeholder="Deine Nachricht..."
						></textarea>
					</div>

					<button
						type="submit"
						disabled={formState.sending}
						class="btn btn-primary w-full disabled:opacity-50"
					>
						{#if formState.sending}
							<svg class="mr-2 h-5 w-5 animate-spin" fill="none" viewBox="0 0 24 24">
								<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
								<path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
							</svg>
							Wird gesendet...
						{:else if formState.sent}
							<svg class="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
							</svg>
							Nachricht gesendet!
						{:else}
							Nachricht senden
							<svg class="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
							</svg>
						{/if}
					</button>
				</form>
			</div>
		</div>
	</div>
</section>
