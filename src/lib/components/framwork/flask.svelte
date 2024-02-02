<script lang="ts">
	export let variant: String;
</script>

<div class={`block card card-hover p-4 w-[300px] ml-[10px] mb-5 ${variant}`}>
	<header class="card-header">
		<h2 class="h2">
			<span
				class="bg-gradient-to-br from-blue-600 to-yellow-400 bg-clip-text text-transparent box-decoration-clone"
				>Flask</span
			>
		</h2>
	</header>
	<section class="p-4">
		<p>
			<span class="text-blue-500">Flask</span>
			, a user-friendly Python web framework, excels in both simplicity and adaptability. Starting small
			projects is a breeze, but it can also handle complex applications as they grow. Its modular design
			and ease of use make it a popular choice, especially for beginners like you who used it in a university
			project.
		</p>
	</section>
</div>
