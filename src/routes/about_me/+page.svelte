<script lang="ts">
	import { writable } from 'svelte/store';
	import Aboutme from '$lib/components/aboutme.svelte';
	import Cardcare from '$lib/components/langs/cardcare.svelte';
	import Framecare from '$lib/components/framwork/framecare.svelte';
	import IDEcare from '$lib/components/idemap.svelte';
	import { tocCrawler } from '@skeletonlabs/skeleton';
	import Themeswitch from '$lib/components/themeswitch.svelte';
	import { onDestroy } from 'svelte';
	export let variant = 'variant-ghost-primary';
</script>

<div>
	<select bind:value={variant} class="variant-ghost-primary">
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
</div>
<div
	class="container h-full mx-auto flex flex-col md:flex-row justify-center items-center w-full md:w-[640px]"
	use:tocCrawler={{ mode: 'generate' }}
>
	<!-- End of the TOC -->
	<div class="space-y-5">
		<div>
			<h1 class="h1 text-center md:text-left font-bold">
				<span
					class="bg-gradient-to-br from-red-500 to-yellow-500 bg-clip-text text-transparent box-decoration-clone"
					>ZAAF HACHEM RACHID</span
				>
			</h1>
		</div>
		<Aboutme />
		<div>
			<h2 class="h2 mb-5 font-bold ml-[10px]">
				<span
					class="bg-gradient-to-br from-red-500 to-yellow-500 bg-clip-text text-transparent box-decoration-clone"
					>Programming Languages i know :</span
				>
			</h2>
			<Cardcare {variant} />
		</div>
		<div>
			<h2 class="h2 mb-5 font-bold ml-[10px]">
				<span
					class="bg-gradient-to-br from-red-500 to-yellow-500 bg-clip-text text-transparent box-decoration-clone"
				>
					Frame work i know</span
				>
			</h2>
			<Framecare {variant} />
		</div>
		<div>
			<h2 class="h2 mb-5 font-bold ml-[10px]">
				<span
					class="bg-gradient-to-br from-red-500 to-yellow-500 bg-clip-text text-transparent box-decoration-clone"
				>
					IDE i use</span
				>
			</h2>
			<IDEcare />
		</div>
		<div></div>
	</div>
</div>
