<script>
	import { PUBLIC_APP_NAME } from '$env/static/public';
	import routes from '$lib/constants/routes';
	import strings from '$lib/constants/strings';
	import { showDrawer } from '$lib/variables/stores';
</script>

<div>
	<span
		class="material-icons"
		on:click={() => showDrawer.set(true)}
		on:keypress={() => {}}
	>
		menu
	</span>
	<h2>{PUBLIC_APP_NAME}</h2>
</div>
<a href={routes.workspace.dish()}>{strings.DISHES}</a>
<a href={routes.logout()}>{strings.LOGOUT}</a>

<style>
	div {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 1em;
		color: white;
		padding: 0 1em;
		background-color: #3367d6;
	}
</style>
