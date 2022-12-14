import prisma from '$lib/helpers/prisma';
import { validate } from '$lib/helpers/utils';
import type { Actions, PageServerLoad } from './$types';
import * as yup from 'yup';
import { redirect } from '@sveltejs/kit';
import routes from '$lib/constants/routes';

const load: PageServerLoad = async ({ locals, params }) => {
		const { email: userEmail } = locals.user!,
			{ fruitId } = params,
			id = parseInt(fruitId),
			[fruit, nutrients] = await Promise.all([
				prisma.fruit.findFirstOrThrow({
					select: {
						name: true,
						imageUuid: true,
						nutrients: {
							select: {
								nutrient: { select: { id: true, name: true, imageUuid: true } }
							}
						}
					},
					where: { userEmail, id }
				}),
				prisma.nutrient.findMany({
					select: { id: true, name: true, imageUuid: true },
					where: { userEmail, fruits: { none: { fruitId: id } } }
				})
			]);
		return { fruit, nutrients };
	},
	actions: Actions = {
		rename: async ({ request, params }) => {
			const { fruitId } = params,
				id = parseInt(fruitId),
				{ name } = await validate(request, {
					name: yup.string().required()
				}),
				_ = await prisma.fruit.update({
					data: { name },
					where: { id }
				});
		},
		addNutrient: async ({ request, params }) => {
			const { fruitId: _fruitId } = params,
				fruitId = parseInt(_fruitId),
				{ nutrientId } = await validate(request, {
					nutrientId: yup.number().required()
				}),
				_ = await prisma.nutrientsOnFruits.create({
					data: { fruitId, nutrientId }
				});
		},
		delete: async ({ params }) => {
			const { fruitId } = params,
				id = parseInt(fruitId),
				_ = await prisma.fruit.delete({ where: { id } });
			throw redirect(302, routes.workspace.fruits());
		}
	};

export { load, actions };
