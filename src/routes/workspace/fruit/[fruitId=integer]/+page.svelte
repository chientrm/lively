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
		<a class="material-icons white" href={routes.workspace.fruits()}
			>arrow_back</a
		>
		{#if renaming}
			<form class="rename" use:enhance action="?/rename">
				<input name="name" type="text" value={data.fruit.name} />
				<button type="submit">
					<i class="material-icons">done</i>
				</button>
			</form>
		{:else}
			<h2>{data.fruit.name}</h2>
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
		src={routes.asset({ imageUuid: data.fruit.imageUuid })}
		alt={strings.FRUITS}
	/>
	<div>
		<h3>{strings.NUTRIENTS}</h3>
		<ul>
			{#each data.fruit.nutrients as { nutrient }}
				<a
					class="nutrientLink"
					href={routes.workspace.nutrients.nutrient({
						nutrientId: `${nutrient.id}`
					})}
				>
					<img
						src={routes.asset({ imageUuid: nutrient.imageUuid })}
						alt={strings.NUTRIENTS}
						class="nutrient"
					/>
					<h4>{nutrient.name}</h4>
				</a>
			{/each}
		</ul>
		{#if data.nutrients.length}
			<h3>{strings.ADD_NUTRIENT}</h3>
			<form use:enhance action="?/addNutrient">
				<select name="nutrientId">
					{#each data.nutrients as nutrient}
						<option value={nutrient.id}>{nutrient.name}</option>
					{/each}
				</select>
				<input type="submit" value={strings.ADD} />
			</form>
		{/if}
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
	div {
		display: flex;
		flex-direction: column;
		padding: 1em;
	}
	ul {
		display: flex;
		flex-direction: column;
	}
	a.nutrientLink {
		display: flex;
		flex-direction: row;
		align-items: flex-start;
		gap: 1em;
	}
	img.nutrient {
		height: 4em;
		width: 4em;
		object-fit: cover;
		padding: 0.5em;
	}
</style>
