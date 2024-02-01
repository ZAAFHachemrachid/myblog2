<script>
	import Aboutme from '$lib/components/aboutme.svelte';
	import Cardcare from '$lib/components/langs/cardcare.svelte';
	import Framecare from '$lib/components/framwork/framecare.svelte';
	import IDEcare from '$lib/components/idemap.svelte';
	import Testcom from '$lib/components/testcom.svelte';
	import { tocCrawler } from '@skeletonlabs/skeleton';
	import Themeswitch from '$lib/components/themeswitch.svelte';
</script>

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
			<Cardcare />
		</div>
		<div>
			<h2 class="h2 mb-5 font-bold ml-[10px]">
				<span
					class="bg-gradient-to-br from-red-500 to-yellow-500 bg-clip-text text-transparent box-decoration-clone"
				>
					Frame work i know</span
				>
			</h2>
			<Framecare />
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
