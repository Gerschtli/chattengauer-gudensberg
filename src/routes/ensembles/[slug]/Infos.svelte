<script lang="ts">
	import ImageSlider from '$lib/ImageSlider.svelte';
	import ensembleImage from '$lib/assets/ensembleImage.jpg';
	import example1 from '$lib/assets/example1.avif';
	import example2 from '$lib/assets/example2.avif';
	import { SimpleLayout } from '$lib/simpleLayout';

	import type { PageData } from './$types';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();
</script>

<SimpleLayout.Section class="content-grid gap-y-2">
	<SimpleLayout.H1>Ensemble {data.slug}</SimpleLayout.H1>

	<div class="clear-both space-y-2">
		<figure class="float-right flex flex-col items-center gap-2 pb-4 pl-4">
			<img src="https://placehold.co/300" class="size-[150px] rounded-full" alt="" />
			<figcaption class="flex flex-col items-center">
				<span class="text-xs uppercase tracking-tighter text-slate-500">Musikalischer Leiter:</span>
				Martin Salfer
			</figcaption>
		</figure>

		<p class="!mt-0">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis similique nam earum totam, quo suscipit
			blanditiis! Placeat veritatis magni, a consectetur odio perspiciatis vitae voluptatum, rem nisi nesciunt
			eos. Natus!
		</p>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis similique nam earum totam, quo suscipit
			blanditiis! Placeat veritatis magni, a consectetur odio perspiciatis vitae voluptatum, rem nisi nesciunt
			eos. Natus!
		</p>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis similique nam earum totam, quo suscipit
			blanditiis! Placeat veritatis magni, a consectetur odio perspiciatis vitae voluptatum, rem nisi nesciunt
			eos. Natus!
		</p>
	</div>

	<ImageSlider class="content-grid__breakout" images={[ensembleImage, example1, example2]} />
</SimpleLayout.Section>
