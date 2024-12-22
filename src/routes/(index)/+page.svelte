<script lang="ts">
	import { ChevronRightIcon } from 'lucide-svelte';

	import ImageSlider from '$lib/ImageSlider.svelte';
	import ensembleImage from '$lib/assets/ensembleImage.jpg';
	import example1 from '$lib/assets/example1.avif';
	import example2 from '$lib/assets/example2.avif';
	import { SimpleLayout } from '$lib/simpleLayout';

	import Ensembles from './Ensembles.svelte';
</script>

<SimpleLayout.Root title="Chattengauer">
	<section class="content-grid__full-width grid h-48 grid-cols-1 grid-rows-1 overflow-hidden">
		<img class="grid-1 h-full w-full object-cover object-[center_35%]" src={example2} alt="" />
		<p class="grid-1 grid place-content-center">
			<a
				class="bg-white/80 px-4 py-2 font-bold shadow-sm shadow-black/50 transition-all hover:bg-white/90 hover:shadow-lg"
				href="/termine"
			>
				Aktuelle Termine und News <ChevronRightIcon class="inline-block align-middle text-accent" size={16} />
			</a>
		</p>
	</section>

	<SimpleLayout.Section class="content-grid space-y-2">
		<SimpleLayout.H1>Willkommen bei den Chattengauern!</SimpleLayout.H1>

		<p>
			Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium veniam, inventore nobis nam porro
			officiis exercitationem, dicta beatae dolorem cupiditate illum, corporis corrupti magnam! Unde voluptatibus
			quas laboriosam fugiat consequatur et cum nobis aliquam fugit quo. Quis eius quidem asperiores beatae. Eos
			necessitatibus id cum quod eum nulla sed natus!
		</p>

		<ul class="list-disc space-y-2 pl-4">
			<li class="list-item">
				<strong>Zusammenhalt:</strong>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, tenetur ea. Accusantium quisquam sed reiciendis
				tempore eveniet perferendis nostrum adipisci.
			</li>
			<li>
				<strong>Spaß:</strong>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, quae!
			</li>
			<li>
				<strong>Gemeinschaft:</strong>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas odit repellat doloremque?
			</li>
		</ul>

		<ImageSlider class="content-grid__breakout" images={[ensembleImage, example1, example2]} />
	</SimpleLayout.Section>

	<Ensembles />
</SimpleLayout.Root>
