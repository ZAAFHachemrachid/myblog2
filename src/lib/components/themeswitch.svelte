<script lang="ts">
	import { onMount, afterUpdate } from 'svelte';

	let currentTheme = 'my-custom-theme01';

	const applyTheme = () => {
		document.body.setAttribute('data-theme', currentTheme);
	};
	onMount(() => {
		applyTheme();
	});

	afterUpdate(() => {
		applyTheme();
	});
</script>

<select bind:value={currentTheme} class="variant-ghost-primary">
	<option value="my-custom-theme01" class="text-red">Coding night</option>
	<option value="my-custom-theme02">Beyond the wood</option>
	<option value="my-custom-theme03">mestry</option>
	<option value="skeleton">skeleton</option>
	<option value="modern">modern</option>
	<option value="sahara">sahara</option>
	<option value="rocket">rocket</option>
	<option value="material"> material</option>
	// nam
	<option value="my-custom-theme-nam">nam</option>
</select>
