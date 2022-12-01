import type { RequestHandler } from './$types';
import fs from 'fs';

const GET: RequestHandler = async ({ request, params, locals }) => {
	const { email } = locals.user!,
		{ imageUuid } = params,
		imagePath = `/home/ubuntu/blob/lively/${email}/${imageUuid}`,
		image = fs.readFileSync(imagePath);
	return new Response(image);
};

export { GET };
