<script>
	import { enhance } from '$app/forms';
	import routes from '$lib/constants/routes';
	import strings from '$lib/constants/strings';
</script>

<form use:enhance>
	<input name="email" placeholder={strings.EMAIL} />
	<input name="password" placeholder={strings.PASSWORD} />
	<input name="confirmPassword" placeholder={strings.CONFIRM_PASSWORD} />
	<input type="submit" value={strings.REGISTER} />
</form>
<a href={routes.login()}>{strings.LOGIN}</a>
