<script lang="ts">
	import DrawerOpener from '$lib/components/DrawerOpener.svelte';
	import Fab from '$lib/components/Fab.svelte';
	import routes from '$lib/constants/routes';
	import strings from '$lib/constants/strings';
	import type { PageServerData } from './$types';
	export let data: PageServerData;
</script>

<content>
	<header>
		<DrawerOpener />
		<h2>{strings.FRUITS}</h2>
	</header>

	<ul>
		{#each data.fruits as { name, imageUuid }}
			<li>
				<img src={routes.asset({ imageUuid })} alt="lel" />
				<span>{name}</span>
			</li>
		{/each}
	</ul>
	<Fab href={routes.workspace.fruits.create()} />
</content>

<style>
	content {
		display: flex;
		flex-direction: column;
	}
	img {
		height: 3em;
		width: 3em;
		object-fit: cover;
	}
	ul {
		display: flex;
		flex-direction: column;
	}
	li {
		display: flex;
		flex-direction: row;
		gap: 1em;
	}
</style>
