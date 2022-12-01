import type { ParamMatcher } from '@sveltejs/kit';

const match: ParamMatcher = (param) => {
	return /^\d+$/.test(param);
};

export { match };
