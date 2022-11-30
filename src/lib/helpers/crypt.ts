import { EncryptJWT, jwtDecrypt } from 'jose';
import { Buffer } from 'buffer';
import { SECRET } from '$env/static/private';

const key = Buffer.from(SECRET, 'utf8'),
	encrypt = <T>(payload: T) =>
		new EncryptJWT(payload as any)
			.setProtectedHeader({ alg: 'dir', enc: 'A256GCM' })
			.encrypt(key),
	decrypt = <T>(jwe: string) =>
		jwtDecrypt(jwe, key).then((res) => res.payload as T);

export { encrypt, decrypt };
