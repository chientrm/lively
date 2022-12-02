<script lang="ts">
	import { PUBLIC_APP_NAME } from '$env/static/public';
	import routes from '$lib/constants/routes';
	import strings from '$lib/constants/strings';
	import type { PageServerData } from './$types';
	export let data: PageServerData;
</script>

<svelte:head>
	<title>{PUBLIC_APP_NAME}</title>
	<meta property="og:title" content={PUBLIC_APP_NAME} />
	<meta property="og:description" content={strings.DESCRIPTION} />
</svelte:head>

<div class="content">
	<h1>{PUBLIC_APP_NAME}</h1>
	<p>{strings.DESCRIPTION}</p>
	{#if data.user}
		<a href={routes.workspace.dishes()}>{strings.WORKSPACE}</a>
	{:else}
		<a href={routes.register()}>{strings.REGISTER}</a>
		<a href={routes.login()}>{strings.LOGIN}</a>
	{/if}
</div>
