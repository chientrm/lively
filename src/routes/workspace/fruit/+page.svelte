<script>
	import DrawerOpener from '$lib/components/DrawerOpener.svelte';
	import routes from '$lib/constants/routes';
	import strings from '$lib/constants/strings';
</script>

<header>
	<DrawerOpener />
	<h2>{strings.FRUITS}</h2>
</header>

<a href={routes.workspace.fruits.create()}>{strings.CREATE}</a>
