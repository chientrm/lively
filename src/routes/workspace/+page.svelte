<script>
	import { PUBLIC_APP_NAME } from '$env/static/public';
	import routes from '$lib/constants/routes';
	import strings from '$lib/constants/strings';
</script>

<h1>{PUBLIC_APP_NAME}</h1>
<a href={routes.workspace.dish()}>{strings.DISHES}</a>
<a href={routes.logout()}>{strings.LOGOUT}</a>
