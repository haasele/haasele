<script lang="ts">
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	let canvas: HTMLCanvasElement;
	let animationFrame: number;

	onMount(() => {
		if (!browser || !canvas) return;

		const ctx = canvas.getContext('2d');
		if (!ctx) return;

		// Resize handler
		const resize = () => {
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
		};
		resize();
		window.addEventListener('resize', resize);

		// Gradient orbs configuration
		const orbs: Array<{
			x: number;
			y: number;
			radius: number;
			vx: number;
			vy: number;
			color: string;
		}> = [
			{
				x: canvas.width * 0.3,
				y: canvas.height * 0.3,
				radius: 300,
				vx: 0.3,
				vy: 0.2,
				color: 'rgba(34, 197, 94, 0.08)' // Primary green
			},
			{
				x: canvas.width * 0.7,
				y: canvas.height * 0.6,
				radius: 350,
				vx: -0.2,
				vy: 0.3,
				color: 'rgba(249, 115, 22, 0.06)' // Terrakotta accent
			},
			{
				x: canvas.width * 0.5,
				y: canvas.height * 0.8,
				radius: 250,
				vx: 0.25,
				vy: -0.15,
				color: 'rgba(6, 182, 212, 0.05)' // Cyan accent
			},
			{
				x: canvas.width * 0.2,
				y: canvas.height * 0.7,
				radius: 200,
				vx: -0.15,
				vy: -0.25,
				color: 'rgba(22, 163, 74, 0.07)' // Darker green
			}
		];

		// Animation loop
		const animate = () => {
			ctx.clearRect(0, 0, canvas.width, canvas.height);

			// Update and draw orbs
			orbs.forEach((orb) => {
				// Update position
				orb.x += orb.vx;
				orb.y += orb.vy;

				// Bounce off edges with some padding
				if (orb.x < -orb.radius / 2 || orb.x > canvas.width + orb.radius / 2) {
					orb.vx *= -1;
				}
				if (orb.y < -orb.radius / 2 || orb.y > canvas.height + orb.radius / 2) {
					orb.vy *= -1;
				}

				// Draw gradient orb
				const gradient = ctx.createRadialGradient(orb.x, orb.y, 0, orb.x, orb.y, orb.radius);
				gradient.addColorStop(0, orb.color);
				gradient.addColorStop(1, 'transparent');

				ctx.fillStyle = gradient;
				ctx.beginPath();
				ctx.arc(orb.x, orb.y, orb.radius, 0, Math.PI * 2);
				ctx.fill();
			});

			animationFrame = requestAnimationFrame(animate);
		};

		animate();

		return () => {
			cancelAnimationFrame(animationFrame);
			window.removeEventListener('resize', resize);
		};
	});
</script>

<canvas
	bind:this={canvas}
	class="pointer-events-none fixed inset-0 -z-10"
	aria-hidden="true"
></canvas>

<!-- Additional gradient overlay -->
<div
	class="pointer-events-none fixed inset-0 -z-10 bg-gradient-to-b from-transparent via-transparent to-[var(--color-bg-primary)]"
	aria-hidden="true"
></div>

<!-- Noise texture overlay for that cozy feel -->
<div
	class="pointer-events-none fixed inset-0 -z-10 opacity-[0.015]"
	style="background-image: url('data:image/svg+xml,%3Csvg viewBox=%220 0 256 256%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E');"
	aria-hidden="true"
></div>
