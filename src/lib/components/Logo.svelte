<script>
	import { PUBLIC_APP_NAME } from '$env/static/public';
	import { logo192 } from '$lib/assets/images';
	import strings from '$lib/constants/strings';
</script>

<div>
	<img src={logo192} alt={strings.LOGO} />
</div>
<div>
	<h1>{PUBLIC_APP_NAME}</h1>
</div>
<span>{strings.DESCRIPTION}</span>

<style>
	div {
		display: flex;
		flex-direction: row;
		justify-content: center;
	}
	img {
		width: 5em;
	}
</style>
