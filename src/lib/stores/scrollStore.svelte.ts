import { browser } from '$app/environment';

/**
 * Scroll state store using Svelte 5 runes
 */
function createScrollStore() {
	let scrollY = $state(0);
	let scrollX = $state(0);
	let scrollDirection = $state<'up' | 'down' | null>(null);
	let lastScrollY = 0;

	if (browser) {
		const handleScroll = () => {
			scrollY = window.scrollY;
			scrollX = window.scrollX;

			if (scrollY > lastScrollY) {
				scrollDirection = 'down';
			} else if (scrollY < lastScrollY) {
				scrollDirection = 'up';
			}

			lastScrollY = scrollY;
		};

		window.addEventListener('scroll', handleScroll, { passive: true });
		handleScroll();
	}

	return {
		get y() {
			return scrollY;
		},
		get x() {
			return scrollX;
		},
		get direction() {
			return scrollDirection;
		},
		get isScrolled() {
			return scrollY > 50;
		},
		get progress() {
			if (!browser) return 0;
			const docHeight = document.documentElement.scrollHeight - window.innerHeight;
			return docHeight > 0 ? scrollY / docHeight : 0;
		}
	};
}

export const scrollStore = createScrollStore();
