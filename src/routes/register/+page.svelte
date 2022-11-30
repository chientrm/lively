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

<Logo />
<form use:enhance>
	<input name="email" type="email" placeholder={strings.EMAIL} required />
	<input
		name="password"
		type={showPassword ? 'text' : 'password'}
		placeholder={strings.PASSWORD}
		required
	/>
	<input
		name="confirm_password"
		type={showPassword ? 'text' : 'password'}
		placeholder="{strings.CONFIRM_PASSWORD} "
		required
	/>
	<label>
		<input type="checkbox" bind:checked={showPassword} />
		<span>{strings.SHOW_PASSWORD}</span>
	</label>
	<input type="submit" value={strings.REGISTER} />
</form>
{#if form?.message}
	<p class="error" in:slide>{form.message}</p>
{/if}
<a href={routes.login()}>{strings.LOGIN}</a>
