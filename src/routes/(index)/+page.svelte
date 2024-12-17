<script lang="ts">
	import { ChevronRightIcon } from 'lucide-svelte';

	import ImageSlider from '$lib/ImageSlider.svelte';
	import ensembleImage from '$lib/assets/ensembleImage.jpg';
	import example1 from '$lib/assets/example1.avif';
	import example2 from '$lib/assets/example2.avif';
	import { SimpleLayout } from '$lib/simpleLayout';

	import Ensembles from './Ensembles.svelte';
	import Gigs from './Gigs.svelte';
	import News from './News.svelte';
</script>

<SimpleLayout.Root title="Chattengauer">
	<section class="grid grid-cols-1 grid-rows-1 h-48 overflow-hidden">
		<img
			class="grid-1 place-self-center"
			src="https://www.original-chattengauer.de/uploads/imgs/221216_adventskonzert_gruppenbild.jpg"
			alt=""
		/>
		<p class="grid-1 grid place-content-center">
			<a
				class="bg-white/80 py-2 px-4 font-bold shadow-black/50 hover:shadow-lg shadow-sm hover:bg-white/90 transition-all"
				href="/news"
			>
				Aktuelle Termine und News <ChevronRightIcon class="inline-block align-middle text-accent" size={16} />
			</a>
		</p>
	</section>

	<SimpleLayout.Section class="space-y-2">
		<SimpleLayout.H1>Willkommen bei den Chattengauern!</SimpleLayout.H1>

		<p class="px-4">
			Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium veniam, inventore nobis nam porro
			officiis exercitationem, dicta beatae dolorem cupiditate illum, corporis corrupti magnam! Unde voluptatibus
			quas laboriosam fugiat consequatur et cum nobis aliquam fugit quo. Quis eius quidem asperiores beatae. Eos
			necessitatibus id cum quod eum nulla sed natus!
		</p>

		<ul class="ps-8 pe-4 space-y-2 list-disc">
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

		<ImageSlider images={[ensembleImage, example1, example2]} />
	</SimpleLayout.Section>

	<News />

	<Ensembles />

	<Gigs />
</SimpleLayout.Root>
