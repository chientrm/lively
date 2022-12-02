import prisma from '$lib/helpers/prisma';
import { validate } from '$lib/helpers/utils';
import type { Actions, PageServerLoad } from './$types';
import * as yup from 'yup';
import { redirect } from '@sveltejs/kit';
import routes from '$lib/constants/routes';

const load: PageServerLoad = async ({ locals, params }) => {
		const { email: userEmail } = locals.user!,
			{ dishId } = params,
			id = parseInt(dishId),
			dish = await prisma.dish.findFirstOrThrow({
				select: { name: true, imageUuid: true },
				where: { userEmail, id }
			});

		return { dish };
	},
	actions: Actions = {
		rename: async ({ request, params }) => {
			const { dishId } = params,
				id = parseInt(dishId),
				{ name } = await validate(request, { name: yup.string().required() }),
				_ = await prisma.dish.update({ data: { name }, where: { id } });
		},
		delete: async ({ params }) => {
			const { dishId } = params,
				id = parseInt(dishId),
				_ = await prisma.dish.delete({ where: { id } });
			throw redirect(302, routes.workspace.dishes());
		}
	};

export { load, actions };
