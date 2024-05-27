<script>
	import '@fontsource/open-sans';
	import { Mail, Menu, Phone, User } from 'lucide-svelte';
	import '../app.css';
</script>

<header class="flex items-center justify-between border-b border-slate-300 p-4">
	<hgroup>
		<h1 class="text-lg"><a href="/">Chattengauer</a></h1>
		<h2 class="text-xs text-slate-500">Dein Musikversion in Gudensberg</h2>
	</hgroup>

	<div class="ml-4">
		<Menu size={32} />
	</div>
</header>

<slot />

<footer class="mt-8 space-y-6 bg-slate-800 px-4 py-6 text-white">
	<article>
		<header>
			<h1 class="text-sm font-bold uppercase">
				Kontakt <span class="ml-1 inline-block h-2 w-2 rounded-sm bg-red-500" />
			</h1>
			<div class="my-1 w-1/4 border-b-2 border-red-500" />
		</header>

		<p class="mt-2 space-y-1 text-xs">
			<span class="block">
				<User class="mr-1 inline-block" size={16} />
				Martin Salfer
			</span>
			<a class="block" href="mailto:original.chattengauer@gmx.de">
				<Mail class="mr-1 inline-block" size={16} />
				original.chattengauer@gmx.de
			</a>
			<a class="block" href="tel:+4915152763235">
				<Phone class="mr-1 inline-block" size={16} />
				0151 52763235
			</a>
		</p>
	</article>

	<article>
		<header>
			<h1 class="text-sm font-bold uppercase">
				Bankverbindung <span class="ml-1 inline-block h-2 w-2 rounded-sm bg-red-500" />
			</h1>
			<div class="my-1 w-1/4 border-b-2 border-red-500" />
		</header>

		<div class="mt-2 inline-grid grid-cols-[auto_auto] gap-x-3 gap-y-1 text-xs">
			<div>KSK Schwalm Eder:</div>
			<div>DE50 5205 2154 1139 3241 05</div>
			<div>VR PartnerBank eG:</div>
			<div>DE50 5206 2601 0000 6477 64</div>
		</div>
	</article>

	<ul class="flex gap-4">
		<li><a class="text-xs font-bold" href="/datenschutz">Datenschutz</a></li>
		<li><a class="text-xs font-bold" href="/datenschutz">Impressum</a></li>
	</ul>
</footer>
