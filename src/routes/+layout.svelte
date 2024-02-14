<script lang="ts">
	import '../app.postcss';
	import {
		AppShell,
		AppBar,
		LightSwitch,
		autoModeWatcher,
		initializeStores,
		Avatar,
		Drawer,
		getDrawerStore
	} from '@skeletonlabs/skeleton';

	// Highlight JS
	import hljs from 'highlight.js/lib/core';
	import 'highlight.js/styles/github-dark.css';
	import { storeHighlightJs } from '@skeletonlabs/skeleton';
	import xml from 'highlight.js/lib/languages/xml'; // for HTML
	import css from 'highlight.js/lib/languages/css';
	import javascript from 'highlight.js/lib/languages/javascript';
	import typescript from 'highlight.js/lib/languages/typescript';
	import Navigation from '$lib/components/navigation.svelte';
	import Themeswitch from '$lib/components/themeswitch.svelte';
	import Var from '$lib/components/var.svelte';
	hljs.registerLanguage('xml', xml); // for HTML
	hljs.registerLanguage('css', css);
	hljs.registerLanguage('javascript', javascript);
	hljs.registerLanguage('typescript', typescript);
	storeHighlightJs.set(hljs);

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
	initializeStores();
	const drawerStore = getDrawerStore();
	function drawerOpen(): void {
		drawerStore.open();
	}
</script>

<Drawer>
	<Navigation />
</Drawer>
<svelte:head>{@html '<script>(' + autoModeWatcher.toString() + ')();</script>'}</svelte:head>

<!-- App Shell -->
<AppShell slotSidebarLeft="w-0 md:w-52 bg-surface-500/10" regionPage="scroll-smooth">
	<svelte:fragment slot="header">
		<AppBar background="bg-surface-100-800-token">
			<svelte:fragment slot="lead">
				<button class="  btn btn-sm mr-4" on:click={drawerOpen}>
					<span>
						<svg viewBox="0 0 100 80" class="fill-token w-4 h-4">
							<rect width="100" height="20" />
							<rect y="30" width="100" height="20" />
							<rect y="60" width="100" height="20" />
						</svg>
					</span>
				</button></svelte:fragment
			>
			<svelte:fragment slot="trail">
				<LightSwitch></LightSwitch>
				<Avatar initials="ra" background="bg-primary-500" width="w-10" />
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>

	<!-- Router Slot -->
	<slot />
	<!-- ---- / ---- -->
</AppShell>
