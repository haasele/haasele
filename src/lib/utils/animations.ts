import { cubicOut } from 'svelte/easing';
import type { TransitionConfig } from 'svelte/transition';

/**
 * Material 3 Expressive Custom Transitions
 */

interface FlyAndScaleParams {
	y?: number;
	x?: number;
	start?: number;
	duration?: number;
	delay?: number;
}

// Fly and scale - Material 3 style entrance
export function flyAndScale(
	node: Element,
	params: FlyAndScaleParams = {}
): TransitionConfig {
	const { y = 20, x = 0, start = 0.95, duration = 300, delay = 0 } = params;
	const style = getComputedStyle(node);
	const transform = style.transform === 'none' ? '' : style.transform;

	return {
		delay,
		duration,
		css: (t) => {
			const eased = cubicOut(t);
			return `
				transform: ${transform} translate(${(1 - eased) * x}px, ${(1 - eased) * y}px) scale(${start + (1 - start) * eased});
				opacity: ${eased};
			`;
		}
	};
}

interface SlideParams {
	delay?: number;
	duration?: number;
	y?: number;
	x?: number;
}

// Slide up with fade - for sections
export function slideUp(
	node: Element,
	params: SlideParams = {}
): TransitionConfig {
	const { delay = 0, duration = 400, y = 30 } = params;

	return {
		delay,
		duration,
		css: (t) => {
			const eased = cubicOut(t);
			return `
				transform: translateY(${(1 - eased) * y}px);
				opacity: ${eased};
			`;
		}
	};
}

// Scale in with fade - for cards
export function scaleIn(
	node: Element,
	params: { delay?: number; duration?: number; start?: number } = {}
): TransitionConfig {
	const { delay = 0, duration = 300, start = 0.9 } = params;

	return {
		delay,
		duration,
		css: (t) => {
			const eased = cubicOut(t);
			return `
				transform: scale(${start + (1 - start) * eased});
				opacity: ${eased};
			`;
		}
	};
}

// Slide in from left
export function slideInLeft(
	node: Element,
	params: SlideParams = {}
): TransitionConfig {
	const { delay = 0, duration = 400, x = -30 } = params;

	return {
		delay,
		duration,
		css: (t) => {
			const eased = cubicOut(t);
			return `
				transform: translateX(${(1 - eased) * x}px);
				opacity: ${eased};
			`;
		}
	};
}

// Slide in from right
export function slideInRight(
	node: Element,
	params: SlideParams = {}
): TransitionConfig {
	const { delay = 0, duration = 400, x = 30 } = params;

	return {
		delay,
		duration,
		css: (t) => {
			const eased = cubicOut(t);
			return `
				transform: translateX(${(1 - eased) * x}px);
				opacity: ${eased};
			`;
		}
	};
}

// Staggered children animation helper
export function getStaggeredDelay(index: number, baseDelay: number = 50): number {
	return index * baseDelay;
}
