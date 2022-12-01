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
		<h2>{strings.NUTRIENTS}</h2>
	</header>
	<ul>
		{#each data.nutrients as { id, name, imageUuid }, i}
			<a
				href={routes.workspace.nutrients.nutrient({ nutrientId: `${id}` })}
				class:even={i % 2}
			>
				<img src={routes.asset({ imageUuid })} alt={name} />
				<h4>{name}</h4>
			</a>
		{/each}
	</ul>
	<Fab href={routes.workspace.nutrients.create()} />
</content>

<style>
	content {
		display: flex;
		flex-direction: column;
	}
	img {
		height: 4em;
		width: 4em;
		object-fit: cover;
		padding: 0.5em;
	}
	ul {
		display: flex;
		flex-direction: column;
	}
	a {
		display: flex;
		flex-direction: row;
		align-items: flex-start;
		gap: 1em;
	}
</style>
