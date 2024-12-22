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
<div class="flex gap-2 py-2">
	<span class="mt-2 aspect-square h-2 flex-shrink-0 rounded-sm bg-accent"></span>
	<div>
		<p class="text-slate-700">{gig.day}, {gig.start} - {gig.end} Uhr</p>
		<p class="font-semibold">{gig.description}</p>
		<p class="text-sm text-slate-500">{gig.location}</p>
	</div>
</div>
