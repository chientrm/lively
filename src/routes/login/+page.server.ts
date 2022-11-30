import routes from '$lib/constants/routes';
import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

const load: PageServerLoad = ({ locals }) => {
	if (locals.user) {
		throw redirect(302, routes.workspace());
	}
};

export { load };
