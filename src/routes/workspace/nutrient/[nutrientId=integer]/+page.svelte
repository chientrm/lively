<script lang="ts">
	import { enhance } from '$app/forms';
	import routes from '$lib/constants/routes';
	import strings from '$lib/constants/strings';
	import type { PageServerData } from './$types';
	export let data: PageServerData;
</script>

<content>
	<header>
		<a class="material-icons white" href={routes.workspace.nutrients()}>
			arrow_back
		</a>
		<h2>{data.nutrient.name}</h2>
	</header>
	<img
		src={routes.asset({ imageUuid: data.nutrient.imageUuid })}
		alt={strings.NUTRIENTS}
	/>
	<div>
		<h3>{strings.FRUITS}</h3>
		<ul>
			{#each data.nutrient.fruits as { fruit }}
				<a
					class="link"
					href={routes.workspace.fruits.fruit({ fruitId: `${fruit.id}` })}
				>
					<img
						src={routes.asset({ imageUuid: fruit.imageUuid })}
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
	a.link {
		display: flex;
		flex-direction: row;
		align-items: flex-start;
		gap: 1em;
	}
	img.smallImg {
		height: 4em;
		width: 4em;
		object-fit: cover;
		padding: 0.5em;
	}
</style>
