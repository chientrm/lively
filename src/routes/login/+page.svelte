<script>
	import { enhance } from '$app/forms';
	import routes from '$lib/constants/routes';
	import strings from '$lib/constants/strings';
</script>

<form use:enhance>
	<input name="email" placeholder={strings.EMAIL} />
	<input name="password" placeholder={strings.PASSWORD} />
	<input type="submit" value={strings.LOGIN} />
</form>
<a href={routes.register()}>{strings.REGISTER}</a>
