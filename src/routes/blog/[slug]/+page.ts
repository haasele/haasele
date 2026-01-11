import { getPostBySlug } from '$lib/data/blogPosts';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
	const post = getPostBySlug(params.slug);

	if (!post) {
		throw error(404, {
			message: 'Artikel nicht gefunden'
		});
	}

	return {
		post
	};
};
