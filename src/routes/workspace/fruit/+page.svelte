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
		{#each data.fruits as { id, name, imageUuid }, i}
			<a
				href={routes.workspace.fruits.fruit({ fruitId: `${id}` })}
				class:even={i % 2}
			>
				<img src={routes.asset.size({ imageUuid, size: '50' })} alt={name} />
				<h4>{name}</h4>
			</a>
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
