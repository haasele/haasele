import { browser } from '$app/environment';

export interface IntersectionOptions {
	threshold?: number | number[];
	rootMargin?: string;
	once?: boolean;
}

/**
 * Svelte action for intersection observer
 * Usage: <div use:inview on:inview={(e) => visible = e.detail.inView}>
 */
export function inview(
	node: HTMLElement,
	options: IntersectionOptions = {}
): { destroy: () => void } {
	const { threshold = 0.1, rootMargin = '0px', once = true } = options;

	if (!browser) {
		return { destroy: () => {} };
	}

	let hasTriggered = false;

	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (once && hasTriggered) return;

				const inView = entry.isIntersecting;

				if (inView) {
					hasTriggered = true;
					node.dispatchEvent(
						new CustomEvent('inview', {
							detail: { inView, entry }
						})
					);
				} else if (!once) {
					node.dispatchEvent(
						new CustomEvent('inview', {
							detail: { inView, entry }
						})
					);
				}
			});
		},
		{ threshold, rootMargin }
	);

	observer.observe(node);

	return {
		destroy() {
			observer.disconnect();
		}
	};
}

/**
 * Creates a scroll progress tracker
 */
export function createScrollProgress() {
	let progress = $state(0);

	if (browser) {
		const updateProgress = () => {
			const scrollTop = window.scrollY;
			const docHeight = document.documentElement.scrollHeight - window.innerHeight;
			progress = docHeight > 0 ? scrollTop / docHeight : 0;
		};

		window.addEventListener('scroll', updateProgress, { passive: true });
		updateProgress();
	}

	return {
		get value() {
			return progress;
		}
	};
}

/**
 * Parallax effect action
 * Usage: <div use:parallax={{ speed: 0.5 }}>
 */
export function parallax(
	node: HTMLElement,
	options: { speed?: number } = {}
): { destroy: () => void } {
	const { speed = 0.2 } = options;

	if (!browser) {
		return { destroy: () => {} };
	}

	const handleScroll = () => {
		const rect = node.getBoundingClientRect();
		const scrolled = window.scrollY;
		const offset = (rect.top + scrolled) * speed;
		node.style.transform = `translateY(${-offset}px)`;
	};

	window.addEventListener('scroll', handleScroll, { passive: true });
	handleScroll();

	return {
		destroy() {
			window.removeEventListener('scroll', handleScroll);
		}
	};
}
