<script lang="ts">
	import { scrollStore } from '$lib/stores/scrollStore.svelte';
	import { fly } from 'svelte/transition';

	const navItems = [
		{ href: '#about', label: 'Über mich' },
		{ href: '#projects', label: 'Projekte' },
		{ href: '#skills', label: 'Skills' },
		{ href: '#experience', label: 'Erfahrung' },
		{ href: '#contact', label: 'Kontakt' }
	];

	let mobileMenuOpen = $state(false);
	let mounted = $state(false);

	$effect(() => {
		mounted = true;
	});

	function handleNavClick(e: MouseEvent, href: string) {
		e.preventDefault();
		const element = document.querySelector(href);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
		mobileMenuOpen = false;
	}

	function toggleMobileMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}
</script>

<nav
	class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
	class:glass={scrollStore.isScrolled}
	class:bg-transparent={!scrollStore.isScrolled}
	style={scrollStore.isScrolled ? 'border-bottom: 1px solid var(--color-glass-border);' : ''}
>
	<div class="container mx-auto flex items-center justify-between px-6 py-4">
		<!-- Logo -->
		{#if mounted}
			<a
				href="/"
				class="text-xl font-semibold text-[var(--color-text-primary)] transition-colors hover:text-[var(--color-accent-500)]"
				in:fly={{ y: -20, duration: 400, delay: 100 }}
			>
				<span class="text-[var(--color-accent-500)]">&lt;</span>
				Portfolio
				<span class="text-[var(--color-accent-500)]">/&gt;</span>
			</a>
		{/if}

		<!-- Desktop Navigation -->
		<ul class="hidden items-center gap-8 md:flex">
			{#each navItems as item, i}
				{#if mounted}
					<li class="flex items-center" in:fly={{ y: -20, duration: 400, delay: 150 + i * 50 }}>
						<a
							href={item.href}
							onclick={(e) => handleNavClick(e, item.href)}
							class="relative flex h-10 items-center text-sm font-medium text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-text-primary)]"
						>
							{item.label}
							<span
								class="absolute bottom-0 left-0 h-0.5 w-0 bg-[var(--color-accent-500)] transition-all duration-300 group-hover:w-full"
							></span>
						</a>
					</li>
				{/if}
			{/each}
			{#if mounted}
				<li class="flex items-center" in:fly={{ y: -20, duration: 400, delay: 400 }}>
					<a
						href="#contact"
						onclick={(e) => handleNavClick(e, '#contact')}
						class="btn btn-primary text-sm"
					>
						Kontakt
					</a>
				</li>
			{/if}
		</ul>

		<!-- Mobile Menu Button -->
		<button
			class="flex flex-col gap-1.5 p-2 md:hidden"
			onclick={toggleMobileMenu}
			aria-label="Toggle menu"
			aria-expanded={mobileMenuOpen}
		>
			<span
				class="block h-0.5 w-6 bg-[var(--color-text-primary)] transition-transform duration-300"
				class:rotate-45={mobileMenuOpen}
				class:translate-y-2={mobileMenuOpen}
			></span>
			<span
				class="block h-0.5 w-6 bg-[var(--color-text-primary)] transition-opacity duration-300"
				class:opacity-0={mobileMenuOpen}
			></span>
			<span
				class="block h-0.5 w-6 bg-[var(--color-text-primary)] transition-transform duration-300"
				class:-rotate-45={mobileMenuOpen}
				class:-translate-y-2={mobileMenuOpen}
			></span>
		</button>
	</div>

	<!-- Mobile Menu -->
	{#if mobileMenuOpen}
		<div
			class="glass absolute left-0 right-0 top-full border-t border-[var(--color-glass-border)] md:hidden"
			in:fly={{ y: -10, duration: 200 }}
		>
			<ul class="container mx-auto flex flex-col gap-4 px-6 py-6">
				{#each navItems as item, i}
					<li in:fly={{ y: -10, duration: 200, delay: i * 50 }}>
						<a
							href={item.href}
							onclick={(e) => handleNavClick(e, item.href)}
							class="block py-2 text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-accent-500)]"
						>
							{item.label}
						</a>
					</li>
				{/each}
				<li in:fly={{ y: -10, duration: 200, delay: 250 }}>
					<a
						href="#contact"
						onclick={(e) => handleNavClick(e, '#contact')}
						class="btn btn-primary mt-2 w-full text-center"
					>
						Kontakt
					</a>
				</li>
			</ul>
		</div>
	{/if}
</nav>
