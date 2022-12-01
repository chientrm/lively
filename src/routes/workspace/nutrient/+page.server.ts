import prisma from '$lib/helpers/prisma';
import type { PageServerLoad } from './$types';

const load: PageServerLoad = async ({ locals }) => {
	const { email: userEmail } = locals.user!,
		nutrients = await prisma.nutrient.findMany({
			select: { name: true, imageUuid: true },
			where: { userEmail }
		});
	return { nutrients };
};

export { load };
