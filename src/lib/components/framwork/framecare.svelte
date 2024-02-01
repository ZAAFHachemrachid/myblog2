<script>
	import Axum from './axum.svelte';
	import Tuari from './tuari.svelte';
	import Cutomt from './cutomt.svelte';
	import Flask from './flask.svelte';
</script>

<div class="w-full md:w-[640px] mx-auto">
	<div class="space-y-5">
		<div class="flex justify-center md:justify-between flex-wrap">
			<Axum />
			<Tuari />
		</div>
		<div class="flex justify-center md:justify-between flex-wrap">
			<Cutomt />
			<Flask />
		</div>
		<div class="flex justify-center md:justify-between flex-wrap"></div>
	</div>
</div>
