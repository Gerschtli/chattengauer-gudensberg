<script lang="ts">
	import { Menu } from 'lucide-svelte';

	import schrift from '$lib/assets/schrift.svg';
	import wave from '$lib/assets/wave.svg';

	let scrollY = $state(0);
</script>

<svelte:window bind:scrollY />

<header class="sticky top-0 z-10 bg-white/95 shadow-header">
	<div class="container flex w-full items-center justify-between transition-all" class:py-4={scrollY === 0}>
		<a href="/" class="flex items-center gap-4 px-4">
			<img src={schrift} class="h-10" alt="Logo der Chattengauer Gudensberg" />
			<img src={wave} class="h-14" alt="Logo der Chattengauer Gudensberg" />
		</a>

		<div class="p-4">
			<Menu size={32} />
		</div>
	</div>
</header>
