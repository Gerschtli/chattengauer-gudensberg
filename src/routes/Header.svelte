<script lang="ts">
	import banner from '$lib/assets/banner.jpg';
	import schrift from '$lib/assets/schrift.svg';
	import wave from '$lib/assets/wave.svg';
	import { Menu } from 'lucide-svelte';
</script>

<header class="relative">
	<div class="t-0 flex w-full items-center justify-between bg-white/70">
		<a href="/" class="flex items-center gap-4 px-6">
			<img src={schrift} class="h-10" alt="Logo der Chattengauer Gudensberg" />
			<img src={wave} class="h-14" alt="Logo der Chattengauer Gudensberg" />
		</a>

		<div class="p-6">
			<Menu size={32} />
		</div>
	</div>

	<!-- svelte-ignore a11y-missing-attribute -->
	<img src={banner} />
</header>
