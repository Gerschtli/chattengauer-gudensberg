<script lang="ts">
	interface Props {
		gig: {
			weekday: string;
			day: string;
			start: string;
			end: string;
			description: string;
			location: string;
		};
	}

	let { gig }: Props = $props();
</script>

<!-- TODO: use grid instead of flexbox -->
<div class="py-2 flex gap-2">
	<span class="h-2 aspect-square mt-2 flex-shrink-0 rounded-sm bg-accent"></span>
	<div>
		<p class="text-slate-700">{gig.day}, {gig.start} - {gig.end} Uhr</p>
		<p class="font-semibold">{gig.description}</p>
		<p class="text-sm text-slate-500">{gig.location}</p>
	</div>
</div>
