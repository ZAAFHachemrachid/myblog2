<script lang="ts">
	export let variant: String;
</script>

<div class={`block card card-hover p-4 w-[300px] ml-[10px] mb-5 ${variant}`}>
	<header class="card-header">
		<h2 class="h2">
			<span
				class="bg-gradient-to-br from-orange-600 to-red-400 bg-clip-text text-transparent box-decoration-clone"
				>Svelte</span
			>
			<span
				class="bg-gradient-to-br from-blue-600 to-blue-400 bg-clip-text text-transparent box-decoration-clone"
				>Tailwind</span
			>
			<span
				class="bg-gradient-to-br from-pink-600 to-yellow-400 bg-clip-text text-transparent box-decoration-clone"
				>Skelton</span
			>
		</h2>
	</header>
	<section class="p-4">
		<p>
			i put them all in one (svelte tailwind skelton) because i still learning them , in short i am
			still learning web development and i am not a pro in it.
		</p>
	</section>
</div>
