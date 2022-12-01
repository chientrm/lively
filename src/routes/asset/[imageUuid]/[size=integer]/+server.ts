import type { RequestHandler } from './$types';
import fs from 'fs';
import sharp from 'sharp';

const GET: RequestHandler = async ({ params, locals, setHeaders }) => {
	const { email } = locals.user!,
		{ imageUuid, size: _size } = params,
		size = parseInt(_size),
		originalImagePath = `/home/ubuntu/blob/lively/${email}/${imageUuid}`,
		imagePath = `${originalImagePath}-${size}`;
	if (!fs.existsSync(imagePath)) {
		await sharp(originalImagePath)
			.resize(size)
			.toFormat('webp')
			.toFile(imagePath);
	}
	const image = fs.readFileSync(imagePath);
	setHeaders({ 'cache-control': 'public, max-age=31536000;' });
	return new Response(image);
};

export { GET };
