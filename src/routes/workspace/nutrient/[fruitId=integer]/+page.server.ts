import routes from '$lib/constants/routes';
import prisma from '$lib/helpers/prisma';
import { validate } from '$lib/helpers/utils';
import { redirect } from '@sveltejs/kit';
import * as yup from 'yup';
import type { Actions, PageServerLoad } from './$types';

const load: PageServerLoad = async ({ locals, params }) => {
		const { email: userEmail } = locals.user!,
			{ nutrientId } = params,
			id = parseInt(nutrientId),
			[nutrient, fruits] = await Promise.all([
				prisma.nutrient.findFirstOrThrow({
					select: {
						name: true,
						imageUuid: true,
						fruits: {
							select: {
								fruit: { select: { id: true, name: true, imageUuid: true } }
							}
						}
					},
					where: { userEmail, id }
				}),
				prisma.fruit.findMany({
					select: { id: true, name: true, imageUuid: true },
					where: { userEmail, nutrients: { none: { nutrientId: id } } }
				})
			]);
		return { nutrient, fruits };
	},
	actions: Actions = {
		rename: async ({ request, params }) => {
			const { nutrientId } = params,
				id = parseInt(nutrientId),
				{ name } = await validate(request, {
					name: yup.string().required()
				}),
				_ = await prisma.nutrient.update({
					data: { name },
					where: { id }
				});
		},
		addFruit: async ({ request, params }) => {
			const { nutrientId: _nutrientId } = params,
				nutrientId = parseInt(_nutrientId),
				{ fruitId } = await validate(request, {
					fruitId: yup.number().required()
				}),
				_ = await prisma.nutrientsOnFruits.create({
					data: { fruitId, nutrientId }
				});
		},
		delete: async ({ request, params }) => {
			const { nutrientId } = params,
				id = parseInt(nutrientId),
				_ = await prisma.nutrient.delete({ where: { id } });
			throw redirect(302, routes.workspace.nutrients());
		}
	};

export { load, actions };
