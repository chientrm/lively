import { createRouting, segment, number, uuid } from 'ts-routes';

export default createRouting({
	manifest: segment`/manifest.json`,
	register: segment`/register`,
	login: segment`/login`,
	workspace: {
		...segment`/workspace`,
		children: {
			dish: segment`/dish`,
			fruits: {
				...segment`/fruit`,
				children: {
					create: segment`/create`,
					fruit: segment`/${number('fruitId')}`
				}
			},
			nutrients: {
				...segment`/nutrient`,
				children: {
					create: segment`/create`,
					nutrient: segment`/${number('nutrientId')}`
				}
			}
		}
	},
	logout: segment`/logout`,
	asset: segment`/asset/${uuid('imageUuid')}`
});
