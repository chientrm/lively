import { sveltekit } from '@sveltejs/kit/vite';
import { imagetools } from 'vite-imagetools';
import { viteCommonjs, esbuildCommonjs } from '@originjs/vite-plugin-commonjs';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [viteCommonjs(), imagetools(), sveltekit()],
	optimizeDeps: {
		esbuildOptions: {
			plugins: [
				esbuildCommonjs(['sharp'])
			]
		}
	}
};

export default config;
