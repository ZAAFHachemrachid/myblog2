<!-- src/components/FlickeringBackground.svelte -->
<script lang="ts">
	import { onMount } from 'svelte';

	let flickerItems: string[] = [];
	let glow = false;
	const symbols = ['!', '@', '#', '$', '%', '&', '*'];
	const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

	function getRandomInt(min: number, max: number): number {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	function createFlickerItem(): string {
		return Math.random() < 0.5
			? symbols[getRandomInt(0, symbols.length - 1)]
			: letters[getRandomInt(0, letters.length - 1)];
	}

	function addFlickerItems(count: number): void {
		flickerItems = Array.from({ length: count }, createFlickerItem);
	}

	onMount(() => {
		setInterval(() => {
			addFlickerItems(5); // Adjust the count as needed
		}, 1000);
	});
</script>

<div
	role="button"
	tabindex="0"
	on:mouseover={() => (glow = true)}
	on:focus={() => (glow = true)}
	on:mouseout={() => (glow = false)}
	on:blur={() => (glow = false)}
>
	{#each flickerItems as item (item)}
		<span class="flicker-item {glow && 'glow'}">{item}</span>
	{/each}
</div>

<style lang="css">
	/* Add your Tailwind styles here */
	.flicker-item {
		position: absolute;
		user-select: none;
		pointer-events: none;
	}

	.glow:hover {
		filter: drop-shadow(0 0 8px #00ff00);
	}
</style>
