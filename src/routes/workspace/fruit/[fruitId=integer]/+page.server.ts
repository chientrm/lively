import prisma from '$lib/helpers/prisma';
import { validate } from '$lib/helpers/utils';
import type { Actions, PageServerLoad } from './$types';
import * as yup from 'yup';

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
		addNutrient: async ({ request, params }) => {
			const { fruitId: _fruitId } = params,
				fruitId = parseInt(_fruitId),
				{ nutrientId } = await validate(request, {
					nutrientId: yup.number().required()
				}),
				_ = await prisma.nutrientsOnFruits.create({
					data: { fruitId, nutrientId }
				});
		}
	};

export { load, actions };
