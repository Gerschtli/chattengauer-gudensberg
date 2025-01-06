<script lang="ts">
	import { ChevronRightIcon } from 'lucide-svelte';

	import Slider from '$lib/Slider.svelte';
	import { type Ensemble, ensembles } from '$lib/ensembles';
	import { SimpleLayout } from '$lib/simpleLayout';
</script>

{#snippet ensembleInfo(lightBg: boolean, slug: Ensemble)}
	{@const { name, images } = ensembles[slug]}

	<article
		class={[
			'content-grid--raw content-grid__full-width md:py-4 md:first-of-type:pt-0',
			lightBg || 'bg-slate-800 py-4 text-slate-200',
		]}
	>
		<div class={['place-content-center', lightBg ? 'breakout-left' : 'breakout-right md:order-2']}>
			<Slider assets={images.map((image) => ({ type: 'image', uri: image }))} />
		</div>

		<div
			class={[
				'flex h-full flex-col gap-y-2 py-4',
				lightBg ? 'content-right md:pl-4' : 'content-left md:order-1 md:pr-4',
			]}
		>
			<h2 class="font-accent text-xl">{name}</h2>

			{#if slug === 'grosses-orchester'}
				<p class="text-sm">Unser Ensemble für fortgeschrittene Musiker.</p>
				<p class="text-sm">
					Das Repertoire? So vielseitig wie wir selbst: traditionelle Blasorchester-Klassiker, Swing und die
					besten Hits aus mehreren Jahrzehnten. Hier trifft musikalisches Können auf gute Laune.
				</p>
			{:else if slug === 'blaeserklassen'}
				<p class="text-sm">
					Unsere Jüngsten (8-10 Jahre) machen ihre ersten Schritte in die spannende Welt des
					„Musik-selber-machens“.
				</p>
				<p class="text-sm">
					Mit viel Spaß und in entspannter Atmosphäre entdecken und lernen sie ihr Instrument und erleben
					erste Bühnenmomente. Ein spielerischer Einstieg, der begeistert.
				</p>
			{:else if slug === 'jugendorchester'}
				<p class="text-sm">Modern, cool und voller Energie &ndash; unser Orchester für 11- bis 25-Jährige.</p>
				<p class="text-sm">
					Hier spielen wir die neuesten Filmmusik-Hits, Musicals und moderne Songs. Ein Ort, an dem Musik und
					Freundschaft Hand in Hand gehen.
				</p>
			{:else if slug === 'brass-und-spass'}
				<p class="text-sm">Unser Ensemble für Erwachsene, die einfach Spaß an der Musik haben wollen.</p>
				<p class="text-sm">
					Egal ob Neuanfänger oder Wiedereinsteiger &ndash; bei uns steht das gemeinsame Erlebnis als buntes
					Orchester im Fokus. Locker, unkompliziert und immer gut drauf.
				</p>
			{/if}

			<footer class="flex-grow place-content-end text-right text-sm">
				<a href="/ensembles/{slug}" class={['font-bold', lightBg ? 'text-accent' : 'text-rose-400']}>
					Mehr Infos
					<ChevronRightIcon class="inline align-middle" size={16} />
				</a>
			</footer>
		</div>
	</article>
{/snippet}

<SimpleLayout.Section class="content-grid gap-y-4">
	<h2 class="heading-2">Finde dein Ensemble</h2>

	<p>Bei uns gibt es für jeden die richtige Mischung aus Musik, Spaß und Gemeinschaft.</p>

	<div class="content-grid gap-y-4 md:gap-y-0">
		{@render ensembleInfo(true, 'grosses-orchester')}
		{@render ensembleInfo(false, 'blaeserklassen')}
		{@render ensembleInfo(true, 'jugendorchester')}
		{@render ensembleInfo(false, 'brass-und-spass')}
	</div>
</SimpleLayout.Section>

<style>
	.breakout-left,
	.breakout-right {
		grid-column: breakout;
	}

	.content-left,
	.content-right {
		grid-column: content;
	}

	@media (width >= theme('screens.md')) {
		.breakout-left {
			grid-column: breakout-start / center;
		}

		.breakout-right {
			grid-column: center / breakout-end;
		}

		.content-left {
			grid-column: content-start / center;
		}

		.content-right {
			grid-column: center / content-end;
		}
	}
</style>
