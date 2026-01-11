/**
 * Material 3 Expressive Easing Curves
 * https://m3.material.io/styles/motion/easing-and-duration/tokens-specs
 */

// CSS Easing values
export const easingCSS = {
	emphasized: 'cubic-bezier(0.2, 0, 0, 1)',
	emphasizedDecelerate: 'cubic-bezier(0.05, 0.7, 0.1, 1)',
	emphasizedAccelerate: 'cubic-bezier(0.3, 0, 0.8, 0.15)',
	standard: 'cubic-bezier(0.2, 0, 0, 1)',
	standardDecelerate: 'cubic-bezier(0, 0, 0, 1)',
	standardAccelerate: 'cubic-bezier(0.3, 0, 1, 1)',
	decelerated: 'cubic-bezier(0, 0, 0.2, 1)',
	accelerated: 'cubic-bezier(0.4, 0, 1, 1)'
} as const;

// Duration tokens (in milliseconds)
export const duration = {
	short1: 50,
	short2: 100,
	short3: 150,
	short4: 200,
	medium1: 250,
	medium2: 300,
	medium3: 400,
	medium4: 500,
	long1: 450,
	long2: 500,
	long3: 550,
	long4: 600,
	extraLong1: 700,
	extraLong2: 800,
	extraLong3: 900,
	extraLong4: 1000
} as const;

// Spring parameters for Svelte spring animations
export const springConfig = {
	// Gentle spring - for subtle movements
	gentle: { stiffness: 0.05, damping: 0.3 },
	// Default spring - balanced feel
	default: { stiffness: 0.1, damping: 0.25 },
	// Responsive spring - quick response
	responsive: { stiffness: 0.15, damping: 0.2 },
	// Bouncy spring - more playful (use sparingly)
	bouncy: { stiffness: 0.2, damping: 0.15 },
	// Stiff spring - for precise movements
	stiff: { stiffness: 0.3, damping: 0.4 }
} as const;

// Stagger delay calculator
export function staggerDelay(index: number, baseDelay: number = 50): number {
	return index * baseDelay;
}

// Get CSS transition string
export function getTransition(
	properties: string | string[],
	durationMs: number = duration.medium2,
	easing: keyof typeof easingCSS = 'standard'
): string {
	const props = Array.isArray(properties) ? properties : [properties];
	return props.map((prop) => `${prop} ${durationMs}ms ${easingCSS[easing]}`).join(', ');
}
