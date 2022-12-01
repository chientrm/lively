<script lang="ts">
	import { enhance } from '$app/forms';
	import Logo from '$lib/components/Logo.svelte';
	import routes from '$lib/constants/routes';
	import strings from '$lib/constants/strings';
	import { slide } from 'svelte/transition';
	import type { ActionData } from './$types';
	export let form: ActionData;
	let showPassword = false;
</script>

<content>
	<Logo />
	<form use:enhance>
		<input name="email" type="email" placeholder={strings.EMAIL} required />
		<input
			name="password"
			type={showPassword ? 'text' : 'password'}
			placeholder={strings.PASSWORD}
			required
		/>
		<label>
			<input type="checkbox" bind:checked={showPassword} />
			<span>{strings.SHOW_PASSWORD}</span>
		</label>
		<input type="submit" value={strings.LOGIN} />
	</form>
	{#if form?.message}
		<p class="error" in:slide>{form.message}</p>
	{/if}
	<a href={routes.register()}>{strings.REGISTER}</a>
</content>

<style>
	content {
		display: flex;
		flex-direction: column;
		padding: 1em;
		gap: 1em;
	}
</style>
