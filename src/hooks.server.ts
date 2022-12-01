import cookie from '$lib/constants/cookie';
import { decrypt } from '$lib/helpers/crypt';
import type { Handle } from '@sveltejs/kit';
import { dirname } from 'path';

if (!global.__dirname) {
	const dir = dirname(import.meta.url);
	Object.defineProperty(global, '__dirname', {
		// @ts-ignore
		__proto__: null,
		get: () => dir
	});
}

const handle: Handle = async ({ event, resolve }) => {
	const cookieUser = event.cookies.get(cookie.USER);
	if (cookieUser) {
		event.locals.user = await decrypt<Cookies.User>(cookieUser);
	}
	return resolve(event);
};

export { handle };
