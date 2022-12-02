<script lang="ts">
	import { enhance } from '$app/forms';
	import routes from '$lib/constants/routes';
	import strings from '$lib/constants/strings';
</script>

<form use:enhance>
	<header>
		<a class="material-icons" href={routes.workspace.dishes()}>arrow_back</a>
		<h2>{strings.CREATE_DISH}</h2>
		<span class="grow" />
		<button type="submit">
			<i class="material-icons">done</i>
		</button>
	</header>
	<input name="name" placeholder={strings.NAME} required />
	<input
		name="image"
		type="file"
		accept="image/x-png,image/jpeg,image/gif"
		required
	/>
</form>

<style>
	a {
		color: white;
	}
</style>
