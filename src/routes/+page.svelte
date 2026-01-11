<script lang="ts">
	import {
		AnimatedBackground,
		Navigation,
		Hero,
		About,
		Projects,
		Skills,
		Experience,
		Contact,
		Blog,
		Footer
	} from '$lib';
</script>

<svelte:head>
	<title>Portfolio | haasele Full-Stack Developer</title>
	<meta name="description" content="Portfolio eines Full-Stack Entwicklers mit Fokus auf moderne Webtechnologien, performante Anwendungen und durchdachtes UI/UX Design." />
	<meta name="keywords" content="Full-Stack Developer, Web Developer, React, Svelte, TypeScript, Portfolio" />
	<meta property="og:title" content="Portfolio | Full-Stack Developer" />
	<meta property="og:description" content="Portfolio eines Full-Stack Entwicklers mit Fokus auf moderne Webtechnologien." />
	<meta property="og:type" content="website" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Portfolio | Full-Stack Developer" />
	<meta name="twitter:description" content="Portfolio eines Full-Stack Entwicklers mit Fokus auf moderne Webtechnologien." />
</svelte:head>

<!-- Animated Background -->
<AnimatedBackground />

<!-- Navigation -->
<Navigation />

<!-- Main Content -->
<main class="relative min-h-screen">
	<Hero />
	<About />
	<Projects />
	<Skills />
	<Experience />
	<Contact />
	<Blog />
</main>

<!-- Footer -->
<Footer />
