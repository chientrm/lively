import prisma from '$lib/helpers/prisma';
import { validate } from '$lib/helpers/utils';
import fs from 'fs';
import * as yup from 'yup';
import type { Actions } from './$types';
import { v4 } from 'uuid';
import { redirect } from '@sveltejs/kit';
import routes from '$lib/constants/routes';

const actions: Actions = {
	default: async ({ request, locals }) => {
		const { email } = locals.user!,
			{ name, image } = await validate(request, {
				name: yup.string().required(),
				image: yup.mixed().required()
			}),
			blob = image as Blob,
			dirPath = `/home/ubuntu/blob/lively/${email}`,
			imageUuid = v4(),
			imagePath = `${dirPath}/${imageUuid}`;
		fs.mkdirSync(dirPath, { recursive: true });
		fs.writeFileSync(imagePath, Buffer.from(await blob.arrayBuffer()));
		const _ = await prisma.dish.create({
			data: { name, imageUuid, User: { connect: { email } } }
		});
		throw redirect(302, routes.workspace.dishes());
	}
};

export { actions };
