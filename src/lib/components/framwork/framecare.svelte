<script lang="ts">
	import Axum from './axum.svelte';
	import Tuari from './tuari.svelte';
	import Cutomt from './cutomt.svelte';
	import Flask from './flask.svelte';

	export let variant: String;
</script>

<div class="w-full md:w-[640px] mx-auto">
	<div class="space-y-5">
		<div class="flex justify-center md:justify-between flex-wrap">
			<Axum {variant} />
			<Tuari {variant} />
		</div>
		<div class="flex justify-center md:justify-between flex-wrap">
			<Cutomt {variant} />
			<Flask {variant} />
		</div>
		<div class="flex justify-center md:justify-between flex-wrap"></div>
	</div>
</div>
