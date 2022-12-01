import type { RequestHandler } from './$types';
import fs from 'fs';

const GET: RequestHandler = async ({ request, params, locals, setHeaders }) => {
	const { email } = locals.user!,
		{ imageUuid } = params,
		imagePath = `/home/ubuntu/blob/lively/${email}/${imageUuid}`,
		image = fs.readFileSync(imagePath);
	setHeaders({ 'cache-control': 'public, max-age=31536000;' });
	return new Response(image);
};

export { GET };
