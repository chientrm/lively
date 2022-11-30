<script>
	import { PUBLIC_APP_NAME } from '$env/static/public';
	import routes from '$lib/constants/routes';
	import strings from '$lib/constants/strings';
	import { showDrawer } from '$lib/variables/stores';
	import { fade } from 'svelte/transition';
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
		<a href={routes.workspace.dish()} on:click={() => showDrawer.set(false)}>
			{strings.DISHES}
		</a>
	</nav>
{/if}

<style>
	nav {
		position: fixed;
		height: 100%;
		width: 100%;
		color: white;
		background-color: #3367d6;
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
</style>
