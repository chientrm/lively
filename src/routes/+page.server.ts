import type { PageServerLoad } from './$types';

const load: PageServerLoad = ({ locals }) => {
	const { user } = locals;
	return { user };
};

export { load };
