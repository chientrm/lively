<script>
	import { PUBLIC_APP_NAME } from '$env/static/public';
	import DrawerOpener from '$lib/components/DrawerOpener.svelte';
	import routes from '$lib/constants/routes';
	import strings from '$lib/constants/strings';
</script>

<header>
	<DrawerOpener />
	<h2>{PUBLIC_APP_NAME}</h2>
</header>
<a href={routes.workspace.dish()}>{strings.DISHES}</a>
<a href={routes.logout()}>{strings.LOGOUT}</a>

<style>
</style>
