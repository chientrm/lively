<script>
	import routes from '$lib/constants/routes';
	import * as assets from '$lib/assets/images';
	import 'modern-normalize/modern-normalize.css';
	import '../app.css';
</script>

<svelte:head>
	<link rel="manifest" href={routes.manifest()} />
	<link
		rel="stylesheet"
		href="https://fonts.googleapis.com/icon?family=Material+Icons"
	/>
</svelte:head>

<div>
	<slot />
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
		gap: 1em;
	}
</style>
