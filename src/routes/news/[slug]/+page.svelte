<script lang="ts">
	import { SimpleLayout } from '$lib/simpleLayout';
</script>

<SimpleLayout.Root title="Unser Adventskonzert am 17.12.">
	<SimpleLayout.Section class="space-y-4">
		<SimpleLayout.H1>Unser Adventskonzert am 17.12.</SimpleLayout.H1>

		{#each [1, 2, 3] as _}
			<figure class="grid place-content-center">
				<img
					src="https://www.original-chattengauer.de/uploads/imgs/221216_adventskonzert_gruppenbild.jpg"
					alt=""
				/>
			</figure>

			<p class="px-4 text-sm text-slate-800">
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo tempora sapiente at quaerat iste aut
				quos a, amet mollitia reprehenderit tenetur accusantium autem eveniet error et nobis sint laudantium
				esse?
			</p>
		{/each}
	</SimpleLayout.Section>
</SimpleLayout.Root>
