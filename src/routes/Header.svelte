<script lang="ts">
	import { MenuIcon } from 'lucide-svelte';

	import schrift from '$lib/assets/schrift.svg';
	import wave from '$lib/assets/wave.svg';

	let scrollY = $state(0);
</script>

<svelte:window bind:scrollY />

<header class="sticky top-0 z-10 bg-white/95 shadow-header py-1">
	<div class="container flex justify-between w-full px-4 transition-all" class:py-3={scrollY === 0}>
		<div class="flex flex-col sm:items-end sm:gap-8 sm:flex-row gap-2">
			<a href="/" class="flex items-center gap-4">
				<img src={schrift} class="h-10" alt="Logo der Chattengauer Gudensberg" />
				<img src={wave} class="h-14" alt="Logo der Chattengauer Gudensberg" />
			</a>
			<!-- TODO: fix jumpy behaviour when scrolling -->
			<p class="font-bold text-sm text-slate-600 sm:pb-2 sm:block italic" class:hidden={scrollY > 0}>
				Dein Musikverein im Chattengau!
			</p>
		</div>

		<div class="p-4">
			<MenuIcon size={32} />
		</div>
	</div>
</header>
