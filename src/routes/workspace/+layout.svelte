<script>
	import { PUBLIC_APP_NAME } from '$env/static/public';
	import routes from '$lib/constants/routes';
	import strings from '$lib/constants/strings';
	import { showDrawer } from '$lib/variables/stores';
	import { fade } from 'svelte/transition';
	const hideDrawer = () => showDrawer.set(false);
</script>

<slot />
{#if $showDrawer}
	<nav transition:fade>
		<div>
			<h2>{PUBLIC_APP_NAME}</h2>
			<span class="grow" />
			<span
				class="material-icons"
				on:click={() => showDrawer.set(false)}
				on:keypress={() => {}}
			>
				close
			</span>
		</div>
		<a href={routes.workspace.dish()} on:click={hideDrawer}>
			{strings.DISHES}
		</a>
		<a href={routes.logout()}>{strings.LOGOUT}</a>
	</nav>
{/if}

<style>
	nav {
		position: fixed;
		height: 100%;
		width: 100%;
		color: white;
		background-color: #3367d6;
		display: flex;
		flex-direction: column;
		gap: 0.1em;
	}
	div {
		display: flex;
		flex-direction: row;
		align-items: center;
		padding: 0 1em;
		gap: 1em;
	}
	.grow {
		flex-grow: 1;
	}
	a {
		background-color: white;
		text-decoration: none;
		padding: 1em;
	}
</style>
