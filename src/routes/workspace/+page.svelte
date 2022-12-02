<script lang="ts">
	import { PUBLIC_APP_NAME } from '$env/static/public';
	import DrawerOpener from '$lib/components/DrawerOpener.svelte';
</script>

<header>
	<DrawerOpener />
	<h2>{PUBLIC_APP_NAME}</h2>
</header>

<style>
</style>
