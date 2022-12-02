import prisma from '$lib/helpers/prisma';
import type { PageServerLoad } from './$types';

const load: PageServerLoad = async ({ locals }) => {
	const { email: userEmail } = locals.user!,
		dishes = await prisma.dish.findMany({
			select: { id: true, name: true, imageUuid: true },
			where: { userEmail }
		});
	return { dishes };
};

export { load };
