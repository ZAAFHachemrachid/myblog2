<script lang="ts">
	export let variant: String;
</script>

<div class="block card card-hover p-4 w-[300px] ${variant} ml-[10px] mb-5">
	<header class="card-header">
		<h2 class="h2">
			<span
				class="bg-gradient-to-br from-orange-600 to-yellow-400 bg-clip-text text-transparent box-decoration-clone"
				>Axum</span
			>
		</h2>
	</header>
	<section class="p-4">
		<p>
			<span class="text-orange-500">Axum</span>
			is a web application framework for Rust that focuses on ergonomics and modularity. It was developed
			by the Tokio team and is designed to work with tokio and hyper. i chose this framwork because it
			still a updated and maintaned framwork and have easy synatx and easy to use.
		</p>
	</section>
</div>
