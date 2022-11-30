import { createRouting, segment } from 'ts-routes';

export default createRouting({
	manifest: segment`/manifest.json`,
	register: segment`/register`,
	login: segment`/login`,
	workspace: {
		...segment`/workspace`,
		children: {
			dish: segment`/dish`
		}
	},
	logout: segment`/logout`
});
