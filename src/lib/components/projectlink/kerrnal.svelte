<script>
	import { fade } from 'svelte/transition';
</script>

<a
	href="/rsKernel"
	class="block card card-hover p-4 w-[300px] variant-glass-secondary ml-[10px] mb-5"
>
	<header class="card-header">
		<h2 class="h2">
			<span
				class="bg-gradient-to-br from-red-400 to-red-900 bg-clip-text text-transparent box-decoration-clone"
				>Kernel</span
			>
		</h2>
	</header>
	<section class="p-4">
		<p>
			Let's make a kernel from scratch, I will use Rust and Assembly to make a kernel that can run
			on x86 and x86_64, and I will use the bootloader to boot the kernel and I will use the VGA
			text mode to print text on the screen.
		</p>
	</section>
</a>
