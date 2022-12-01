<script>
	import DrawerOpener from '$lib/components/DrawerOpener.svelte';
	import Fab from '$lib/components/Fab.svelte';
	import routes from '$lib/constants/routes';
	import strings from '$lib/constants/strings';
</script>

<header>
	<DrawerOpener />
	<h2>{strings.FRUITS}</h2>
</header>

<Fab href={routes.workspace.fruits.create()} />
