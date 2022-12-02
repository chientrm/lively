<script lang="ts">
	import { enhance } from '$app/forms';
	import routes from '$lib/constants/routes';
	import strings from '$lib/constants/strings';
	import type { PageServerData } from './$types';
	export let data: PageServerData;
	let renaming = false;
	$: data, (renaming = false);
</script>

<content>
	<header>
		<a class="material-icons white" href={routes.workspace.dishes()}>
			arrow_back
		</a>
		{#if renaming}
			<form class="rename" use:enhance action="?/rename">
				<input name="name" type="text" value={data.dish.name} />
				<button type="submit">
					<i class="material-icons">done</i>
				</button>
			</form>
		{:else}
			<h2>{data.dish.name}</h2>
			<span class="grow" />
			<span
				class="material-icons"
				on:click={() => {
					renaming = true;
				}}
				on:keypress={() => {}}
			>
				edit
			</span>
		{/if}
	</header>
	<img
		src={routes.asset.size({ imageUuid: data.dish.imageUuid, size: '512' })}
		alt={strings.DISHES}
	/>
	<div class="content">
		<form use:enhance action="?/delete">
			<input type="submit" value={strings.DELETE} />
		</form>
	</div>
</content>

<style>
	content {
		display: flex;
		flex-direction: column;
	}
	img {
		width: 100%;
		height: 15em;
		object-fit: cover;
	}
</style>
