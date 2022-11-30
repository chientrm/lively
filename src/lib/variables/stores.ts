import { writable } from 'svelte/store';

const showDrawer = writable<boolean>(false);

export { showDrawer };
