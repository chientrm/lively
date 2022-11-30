<script>
	import routes from '$lib/constants/routes';
	import * as assets from '$lib/assets/images';
</script>

<svelte:head>
	<link rel="manifest" href={routes.manifest()} />
</svelte:head>

<slot />
