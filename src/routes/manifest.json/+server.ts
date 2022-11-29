import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import logo512 from '$lib/assets/images/logo.png?w=512&h=512&format=png';
import logo192 from '$lib/assets/images/logo.png?w=192&h=192&format=png';

const GET: RequestHandler = () => {
	return json({
		short_name: 'Lively',
		name: 'Lively: Living assitant',
		icons: [
			{
				src: logo512,
				type: 'image/png',
				sizes: '512x512'
			}
		],
		id: '/?source=pwa',
		start_url: '/?source=pwa',
		background_color: '#3367D6',
		display: 'standalone',
		scope: '/',
		theme_color: '#3367D6',
		shortcuts: [
			{
				name: 'What should I eat today?',
				short_name: 'Today',
				description: 'View meal suggestion for today',
				url: '/today?source=pwa',
				icons: [{ src: logo192, sizes: '192x192' }]
			},
			{
				name: 'What should I eat tomorrow?',
				short_name: 'Tomorrow',
				description: 'View meal suggestion for tomorrow',
				url: '/tomorrow?source=pwa',
				icons: [{ src: logo192, sizes: '192x192' }]
			}
		],
		description: 'Living assistant',
		screenshots: []
	});
};

export { GET };
