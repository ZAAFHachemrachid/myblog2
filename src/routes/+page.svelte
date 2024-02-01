<!-- YOU CAN DELETE EVERYTHING IN THIS PAGE -->
<script lang="ts">
	import { onMount } from 'svelte';
	import Kerrnal from '../lib/components/projectlink/kerrnal.svelte';
	import Guipy from '../lib/components/projectlink/Guipy.svelte';
	import { fade, blur, fly } from 'svelte/transition';
	interface Video {
		id: {
			videoId: string;
		};
		snippet: {
			title: string;
			thumbnails: {
				default: {
					url: string;
				};
			};
		};
	}

	let videos: Video[] = []; // Type the videos array
	let apiKey = 'YOUR_API_KEY';
	let comingSoon = false;

	async function fetchVideos() {
		if (apiKey === 'YOUR_API_KEY') {
			comingSoon = true;
		} else {
			try {
				const response = await fetch(
					`https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=YOUR_CHANNEL_ID&maxResults=6&key=${apiKey}`
				);
				const data = await response.json();
				videos = data.items as Video[]; // Cast to Video[]
			} catch (error) {
				console.error(error);
				comingSoon = true;
			}
		}
	}
	let comingSoonCards = 6; // Number of "Coming Soon" cards to display
	onMount(fetchVideos); // Use onM
</script>

<div transition:fly={{ duration: 400 }}>
	<div class="container mx-auto px-4 py-8 flex flex-col md:flex-row justify-center items-center">
		<div class="grid grid-cols-1 md:grid-cols-2 md:gap-4 items-center">
			<div class="w-full md:w-[640px] mx-auto">
				<h1 class="h1 text-center font-bold mb-5">
					<span
						class="bg-gradient-to-br from-red-500 to-yellow-500 bg-clip-text text-transparent box-decoration-clone"
						>Hello Body The project below are under develop</span
					>
				</h1>
				<div class="space-y-0">
					<div class="flex justify-center md:justify-between flex-wrap">
						<Kerrnal />
						<Guipy />
					</div>
					<div class="flex justify-center md:justify-between flex-wrap"></div>
					<div class="flex justify-center md:justify-between flex-wrap"></div>
				</div>
			</div>
		</div>
	</div>
</div>
