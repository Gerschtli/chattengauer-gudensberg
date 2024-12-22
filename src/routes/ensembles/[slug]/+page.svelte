<script lang="ts">
	import { SimpleLayout } from '$lib/simpleLayout';

	import type { PageData } from './$types';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();
</script>

<SimpleLayout.Root title="Ensemble {data.slug}">
	<SimpleLayout.Section class="space-y-2">
		<SimpleLayout.H1>Ensemble {data.slug}</SimpleLayout.H1>

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
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis similique nam earum totam, quo suscipit
			blanditiis! Placeat veritatis magni, a consectetur odio perspiciatis vitae voluptatum, rem nisi nesciunt
			eos. Natus!
		</p>
	</SimpleLayout.Section>
</SimpleLayout.Root>
