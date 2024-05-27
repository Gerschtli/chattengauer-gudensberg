<script lang="ts">
	export let gig: {
		weekday: string;
		day: string;
		start: string;
		end: string;
		description: string;
	};
</script>

<div class="py-2">
	<span class="inline-block h-2 w-2 rounded-sm bg-red-500" />
	{gig.day}, {gig.start} - {gig.end} Uhr
	<p class="pl-4 text-sm font-semibold">{gig.description}</p>
</div>
