import cookie from '$lib/constants/cookie';
import routes from '$lib/constants/routes';
import { redirect } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

const GET: RequestHandler = ({ cookies }) => {
	cookies.set(cookie.USER, '');
	throw redirect(302, routes.login());
};

export { GET };
