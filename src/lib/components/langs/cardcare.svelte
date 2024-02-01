<script lang="ts">
	import Cardc from './cardc.svelte';
	import Cardrust from './cardrust.svelte';
	import Cardlua from './cardlua.svelte';
	import Cardpython from './cardpython.svelte';
	import Cardsvelte from './cardsvelte.svelte';
	import Cardweb from './cardweb.svelte';
	export let variant: string;
</script>

<div class="w-full md:w-[640px] mx-auto">
	<div class="space-y-0">
		<div class="flex justify-center md:justify-between flex-wrap">
			<Cardc {variant} />
			<Cardrust {variant} />
		</div>
		<div class="flex justify-center md:justify-between flex-wrap">
			<Cardlua {variant} />
			<Cardpython {variant} />
		</div>
		<div class="flex justify-center md:justify-between flex-wrap">
			<Cardsvelte {variant} />
			<Cardweb {variant} />
		</div>
	</div>
</div>
