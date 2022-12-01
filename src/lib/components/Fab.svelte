<script lang="ts">
	export let href: string;
</script>

<div>
	<a class="material-icons" {href}>add</a>
</div>

<style>
	div {
		position: fixed;
		bottom: 1em;
		right: 1em;
		display: flex;
		flex-direction: row-reverse;
	}
	a {
		color: white;
		background-color: #3367d6;
		padding: 1em;
		border-radius: 50%;
	}
</style>
