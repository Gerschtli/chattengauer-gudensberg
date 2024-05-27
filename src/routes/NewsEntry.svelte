<script lang="ts">
	import { afterNavigate, goto } from '$app/navigation';
	import { ChevronRight, X } from 'lucide-svelte';
	import { writable } from 'svelte/store';

	export let color: string;
	export let id: string;

	afterNavigate((e) => {
		if (e.type === 'popstate' && $overlayIsOpen) {
			overlayToggle();
		}
	});

	const overlayIsOpen = writable(false);
	const overlayToggle = () => {
		if ($overlayIsOpen) {
			history.back();
			document.body.classList.remove('no-scroll');
		} else {
			goto(`#${id}`, { noScroll: true });
			document.body.classList.add('no-scroll');
		}
		$overlayIsOpen = !$overlayIsOpen;
	};

	const bodyKeyDown = (e: KeyboardEvent) => {
		if (e.key === 'Escape' && $overlayIsOpen) {
			overlayToggle();
		}
	};
</script>

<svelte:body on:keydown={bodyKeyDown} />

<article class="{color} p-4">
	<figure class="relative m-3 mb-3 overflow-hidden">
		<img
			src="https://www.original-chattengauer.de/uploads/imgs/221216_adventskonzert_gruppenbild.jpg"
			alt=""
			class="w-full"
		/>
		<figcaption class="absolute inset-x-0 bottom-0 p-3 text-sm font-semibold text-slate-200 backdrop-blur">
			Unser Adventskonzert am 17.12.
		</figcaption>
	</figure>
	<p class="text-sm text-slate-600">
		Mit einer vollen Kirche konnten wir unser Jahr 2023 gebührend ausklingen lassen. Für unsere jüngsten Mitglieder
		war dies das erste Adventskonzert von vielen, die noch kommen werden!
	</p>
	<footer class="text-right text-sm">
		<button class="font-bold text-red-500" on:click={overlayToggle}>
			Mehr Bilder <ChevronRight class="inline-block align-middle" size={16} />
		</button>
	</footer>

	<dialog
		open={$overlayIsOpen}
		class="fixed left-0 top-0 z-50 h-full w-full overflow-y-auto bg-white/80 p-0 backdrop-blur"
	>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div class="absolute right-4 top-4 cursor-pointer" on:click={overlayToggle}>
			<X size={32} />
		</div>

		<section class="space-y-4 pb-8">
			<header class="flex flex-col px-4 pt-4">
				<h1 class="text-md font-semibold uppercase text-slate-700">
					Unser Adventskonzert am 17.12.
					<span class="ml-1 inline-block h-2 w-2 rounded-sm bg-red-500" />
				</h1>
				<div class="my-1 w-1/3 border-b-2 border-red-500" />
			</header>

			{#each [1, 2, 3] as _}
				<figure class="grid place-content-center">
					<img
						src="https://www.original-chattengauer.de/uploads/imgs/221216_adventskonzert_gruppenbild.jpg"
						alt=""
					/>
				</figure>

				<p class="px-4 text-sm text-slate-800">
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo tempora sapiente at quaerat iste
					aut quos a, amet mollitia reprehenderit tenetur accusantium autem eveniet error et nobis sint
					laudantium esse?
				</p>
			{/each}
		</section>
	</dialog>
</article>

<style>
	:global(body.no-scroll) {
		overflow-y: hidden;
	}
</style>
