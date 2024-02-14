<script lang="ts">
	import { onMount, afterUpdate } from 'svelte';

	let currentTheme = 'my-custom-theme01';
	import { getDrawerStore } from '@skeletonlabs/skeleton';

	const applyTheme = () => {
		document.body.setAttribute('data-theme', currentTheme);
	};
	onMount(() => {
		applyTheme();
	});

	afterUpdate(() => {
		applyTheme();
	});
	const drawerStore = getDrawerStore();
	function drawerClose(): void {
		drawerStore.close();
	}
	function handleThemeChange(event: Event) {
        const newTheme = (event.target as HTMLSelectElement).value;
        currentTheme = newTheme;

            drawerStore.close(); // Close drawer for specific themes
    

        applyTheme(); // Update theme styles
    }
</script>

<select
	bind:value={currentTheme}
	on:change={handleThemeChange}
	class="fixed bottom-0 mr-[10px] mt-auto justify-center rounded-container-token variant-soft-surface mb-auto w-[340px] select"
	
>
	<option value="my-custom-theme01" >Coding night</option>
	<option value="my-custom-theme02" >Beyond the wood</option>
	<option value="my-custom-theme03" >mestry</option>
	<option value="skeleton" >skeleton</option>
	<option value="modern" >modern</option>
	<option value="sahara" >sahara</option>
	<option value="rocket" >rocket</option>
	<option value="material" on:click={drawerClose}> material</option>
	<option value="my-custom-theme-nam" on:click={drawerClose}>nam</option>
</select>
