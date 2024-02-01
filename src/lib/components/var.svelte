<script lang="ts">
	import { variantStore } from '$lib/store';

	let variantp: string;
	variantStore.subscribe((value) => {
		variantp = value;
	});
</script>

<select bind:value={variantp} class="variant-ghost-primary">
	<option value="variant-filled-primary">v fill p</option>
	<option value="variant-ghost-primary">v ghost p</option>
	<option value="variant-soft-primary">v soft p</option>
	<option value="variant-glass-primary">v glass p</option>
	<option value="variant-ringed-primary">v ringed p</option>
	<option value="variant-filled-secondary">v fill s</option>
	<option value="variant-ghost-secondary">v ghost s</option>
	<option value="variant-soft-secondary">v soft s</option>A
	<option value="variant-glass-secondary">v glass s</option>
	<option value="variant-ringed-secondary">v ringed s</option>
	<option value="variant-filled-success">v fill s</option>
	<option value="variant-ghost-success">v ghost s</option>
	<option value="variant-soft-success">v soft s</option>
	<option value="variant-glass-success">v glass s</option>
	<option value="variant-ringed-success">v ringed s</option>
</select>
