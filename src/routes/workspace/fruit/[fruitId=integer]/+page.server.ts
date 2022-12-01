import prisma from '$lib/helpers/prisma';
import type { PageServerLoad } from './$types';

const load: PageServerLoad = async ({ locals, params }) => {
	const { email: userEmail } = locals.user!,
		{ fruitId } = params,
		id = parseInt(fruitId),
		fruit = await prisma.fruit.findFirstOrThrow({ where: { userEmail, id } });
	return { fruit };
};

export { load };
