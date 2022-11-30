<script>
	import { showDrawer } from '$lib/variables/stores';
</script>

<span
	class="material-icons"
	on:click={() => {
		showDrawer.set(true);
	}}
	on:keypress={() => {}}
>
	menu
</span>
