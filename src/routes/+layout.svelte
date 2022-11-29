<script>
	import routes from '$lib/constants/routes';
</script>

<svelte:head>
	<link rel="manifest" href={routes.manifest()} />
</svelte:head>

<slot />
