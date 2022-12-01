<script lang="ts">
	import routes from '$lib/constants/routes';
	import type { PageServerData } from './$types';
	export let data: PageServerData;
	const { name, imageUuid } = data.fruit;
</script>

<content>
	<header>
		<a class="material-icons" href={routes.workspace.fruits()}>arrow_back</a>
		<h2>{name}</h2>
	</header>
	<img src={routes.asset({ imageUuid })} alt="lel" />
</content>

<style>
	content {
		display: flex;
		flex-direction: column;
	}
	a {
		color: white;
	}
	img {
		width: 100%;
		height: 15em;
		object-fit: cover;
	}
</style>
