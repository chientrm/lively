import routes from '$lib/constants/routes';
import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

const load: LayoutServerLoad = ({ locals }) => {
	if (!locals.user) {
		throw redirect(302, routes.login());
	}
};

export { load };
