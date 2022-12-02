<script lang="ts">
	import { enhance } from '$app/forms';
	import routes from '$lib/constants/routes';
	import strings from '$lib/constants/strings';
	import { confirmDelete } from '$lib/helpers/funcs';
	import type { PageServerData } from './$types';
	export let data: PageServerData;
	let renaming = false;
	$: data, (renaming = false);
</script>

<content>
	<header>
		<a class="material-icons white" href={routes.workspace.nutrients()}>
			arrow_back
		</a>
		{#if renaming}
			<form class="rename" use:enhance action="?/rename">
				<input name="name" type="text" value={data.nutrient.name} />
				<button type="submit">
					<i class="material-icons">done</i>
				</button>
			</form>
		{:else}
			<h2>{data.nutrient.name}</h2>
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
		src={routes.asset.size({ imageUuid: data.nutrient.imageUuid, size: '512' })}
		alt={strings.NUTRIENTS}
	/>
	<div>
		<h3>{strings.FRUITS}</h3>
		<ul>
			{#each data.nutrient.fruits as { fruit }, i}
				<a
					class="link"
					class:even={i % 2}
					href={routes.workspace.fruits.fruit({ fruitId: `${fruit.id}` })}
				>
					<img
						src={routes.asset.size({ imageUuid: fruit.imageUuid, size: '64' })}
						alt={strings.FRUITS}
						class="smallImg"
					/>
					<h4>{fruit.name}</h4>
				</a>
			{/each}
		</ul>
		{#if data.fruits.length}
			<h3>{strings.ADD_FRUIT}</h3>
			<form use:enhance action="?/addFruit">
				<select name="fruitId">
					{#each data.fruits as fruit}
						<option value={fruit.id}>{fruit.name}</option>
					{/each}
				</select>
				<input type="submit" value={strings.ADD} />
			</form>
		{/if}
		<form use:enhance={confirmDelete(data.nutrient.name)} action="?/delete">
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
	div {
		display: flex;
		flex-direction: column;
		padding: 1em;
	}
	ul {
		display: flex;
		flex-direction: column;
	}
	img.smallImg {
		height: 4em;
		width: 4em;
		object-fit: cover;
		padding: 0.5em;
	}
</style>
