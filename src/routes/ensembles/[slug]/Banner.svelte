<script lang="ts">
	import { ensembles } from '$lib/ensembles';

	import type { PageData } from './$types';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();
</script>

<section class="content-grid__full-width">
	<enhanced:img
		class="h-[40vh] object-cover object-[center_50%]"
		src={ensembles[data.slug].images[0]}
		alt=""
		fetchpriority="high"
		loading="eager"
		sizes="100vw"
	/>
</section>
