// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	// interface Error {}
	interface Locals {
		user?: Cookies.User;
	}
	// interface PageData {}
	// interface Platform {}
}

declare namespace Cookies {
	interface User {
		email: string;
	}
}

declare module '*png' {
	const value: string;
	export default value;
}
