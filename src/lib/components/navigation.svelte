<script lang="ts">
	import { getDrawerStore } from '@skeletonlabs/skeleton';
	const drawerStore = getDrawerStore();
	function drawerClose(): void {
		drawerStore.close();
	}
</script>

<nav class="list-nav p-4">
	<ul>
		<li><a href="/" on:click={drawerClose}>home</a></li>
		<li><a href="/about_me" on:click={drawerClose}>About Me</a></li>
	</ul>
</nav>
