<script>
	import Cardc from './cardc.svelte';
	import Cardrust from './cardrust.svelte';
	import Cardlua from './cardlua.svelte';
	import Cardpython from './cardpython.svelte';
	import Cardsvelte from './cardsvelte.svelte';
	import Cardweb from './cardweb.svelte';
</script>

<div class="w-full md:w-[640px] mx-auto">
	<div class="space-y-0">
		<div class="flex justify-center md:justify-between flex-wrap">
			<Cardc />
			<Cardrust />
		</div>
		<div class="flex justify-center md:justify-between flex-wrap">
			<Cardlua />
			<Cardpython />
		</div>
		<div class="flex justify-center md:justify-between flex-wrap">
			<Cardsvelte />
			<Cardweb />
		</div>
	</div>
</div>
