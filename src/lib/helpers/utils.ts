import * as yup from 'yup';
import type { ObjectShape } from 'yup/lib/object';

const validate = <TShape extends ObjectShape>(request: Request, spec: TShape) =>
		request
			.formData()
			.then((formData) =>
				yup
					.object(spec)
					.validate(
						Object.keys(spec).reduce(
							(a, b) => ({ ...a, [b]: formData.get(b) }),
							{}
						)
					)
			),
	sha256 = async (value: string) => {
		const msgBuffer = new TextEncoder().encode(value),
			hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer),
			hashArray = Array.from(new Uint8Array(hashBuffer)),
			hashHex = hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');
		return hashHex;
	};

export { validate, sha256 };
