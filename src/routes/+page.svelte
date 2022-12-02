<script lang="ts">
	import { PUBLIC_APP_NAME } from '$env/static/public';
	import routes from '$lib/constants/routes';
	import strings from '$lib/constants/strings';
</script>

<svelte:head>
	<title>{PUBLIC_APP_NAME}</title>
	<meta property="og:title" content={PUBLIC_APP_NAME} />
	<meta property="og:description" content={strings.DESCRIPTION} />
</svelte:head>

<div class="content">
	<h1>{PUBLIC_APP_NAME}</h1>
	<p>
		{strings.DESCRIPTION}
	</p>

	<a href={routes.register()}>{strings.REGISTER}</a>
	<a href={routes.login()}>{strings.LOGIN}</a>
</div>
