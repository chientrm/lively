<script>
	import { showDrawer } from '$lib/variables/stores';
</script>

<a
	class="material-icons"
	href="#/"
	on:click={() => {
		showDrawer.set(true);
	}}
>
	menu
</a>

<style>
	a {
		color: white;
	}
</style>
