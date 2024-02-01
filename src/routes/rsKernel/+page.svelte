<script lang="ts">
	import { onMount } from 'svelte';
	interface TimeRemaining {
		days: number;
		hours: number;
		minutes: number;
		seconds: number;
	}

	let timeRemaining: TimeRemaining = { days: 0, hours: 0, minutes: 0, seconds: 0 };

	onMount(() => {
		const intervalId = setInterval(() => {
			timeRemaining = getTimeRemaining();
		}, 1000);

		return () => clearInterval(intervalId);
	});

	function getTimeRemaining(): TimeRemaining {
		// ...same as above...
		const now = new Date();
		const target = new Date('2024-01-28T18:00:00'); // 6:00 PM

		const diff = Number(target) - Number(now);

		return {
			days: Math.floor(diff / (1000 * 60 * 60 * 24)),
			hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
			minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
			seconds: Math.floor((diff % (1000 * 60)) / 1000)
		};
	}
</script>

<!-- rest of the HTML code -->
<div
	class="container h-full mx-auto flex flex-col md:flex-row justify-center items-center w-full md:w-[640px]"
>
	<div class="space-y-5">
		<div>
			<h1 class="h1 text-center font-bold">
				<span
					class="bg-gradient-to-br from-red-500 to-yellow-500 bg-clip-text text-transparent box-decoration-clone"
					>COMING SOON</span
				>
			</h1>
		</div>

		<h2 class="mb-4 text-xl font-bold text-center">Countdown</h2>
		<div class="flex space-x-4">
			<div>{timeRemaining.days}</div>
			<div>{timeRemaining.hours}</div>
			<div>{timeRemaining.minutes}</div>
			<div>{timeRemaining.seconds}</div>

			<div class="text-center">Days : Hours : Minutes : Seconds</div>
		</div>
	</div>
</div>
