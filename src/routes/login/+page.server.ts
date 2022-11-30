import cookie from '$lib/constants/cookie';
import routes from '$lib/constants/routes';
import strings from '$lib/constants/strings';
import { encrypt } from '$lib/helpers/crypt';
import prisma from '$lib/helpers/prisma';
import { sha256, validate } from '$lib/helpers/utils';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { invalid, redirect } from '@sveltejs/kit';
import * as yup from 'yup';
import type { Actions, PageServerLoad } from './$types';

const load: PageServerLoad = ({ locals }) => {
		if (locals.user) {
			throw redirect(302, routes.workspace());
		}
	},
	actions: Actions = {
		default: async ({ request, cookies }) => {
			try {
				const { email, password } = await validate(request, {
						email: yup
							.string()
							.email(strings.INVALID_EMAIL)
							.required(strings.EMAIL_REQUIRED)
							.typeError(strings.EMAIL_REQUIRED),
						password: yup
							.string()
							.required(strings.PASSWORD_REQUIRED)
							.min(6, strings.INVALID_PASSWORD)
					}),
					passwordHash = await sha256(password),
					user = await prisma.user.findFirst({
						where: { email, passwordHash }
					});
				if (!user) {
					return invalid(400, { message: strings.INVALID_EMAIL_OR_PASSWORD });
				}
				const encryptedUser = await encrypt<Cookies.User>(user);
				cookies.set(cookie.USER, encryptedUser, { path: '/' });
				throw redirect(302, routes.workspace.dish());
			} catch (e) {
				if (e instanceof yup.ValidationError) {
					return invalid(400, { message: e.message });
				} else if (e instanceof PrismaClientKnownRequestError) {
					if (
						e.message.includes('Unique constraint failed on the constraint')
					) {
						return invalid(400, { message: strings.EMAIL_EXISTED });
					}
				} else {
					throw e;
				}
			}
		}
	};

export { load, actions };
