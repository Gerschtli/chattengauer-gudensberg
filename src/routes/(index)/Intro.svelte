<script lang="ts">
	import notenstaender from '$lib/assets/notenstaender.jpg?enhanced';
	import { SimpleLayout } from '$lib/simpleLayout';
</script>

<SimpleLayout.Section class="content-grid gap-y-4">
	<h1 class="heading-1">
		Willkommen bei den Chattengauern aus Gudensberg!
		<span></span>
	</h1>

	<p>
		Wir sind nicht einfach nur ein Musikverein &ndash; wir stehen für vielfältige Musikauswahl, lockere Proben und
		eine starke Gemeinschaft über alle Altersgrenzen hinweg. Hier geht es nicht nur um die richtigen Töne und tolle
		Konzerte, sondern auch um die Erlebnisse und Freundschaften, die daraus entstehen.
	</p>

	<p>
		Egal, ob Kind, Jugendlicher, Erwachsener oder Senior - bei uns findet jeder seinen Platz in einem unserer
		Orchester.
	</p>

	<h2 class="heading-3 pt-2">
		Was uns ausmacht:
		<span></span>
	</h2>

	<ul role="list" class="list-disc space-y-2 pl-4">
		<li>
			<strong>Teamgeist:</strong>
			Egal ob Anfänger oder Profi, alt oder jung &ndash; bei uns zählt der Zusammenhalt.
		</li>
		<li>
			<strong>Neugier:</strong>
			Wir lieben es, Neues auszuprobieren &ndash; ob moderne Pop-Songs, Filmmusik oder einzigartige Projekte.
		</li>
		<li>
			<strong>Wohlfühlen:</strong>
			Richtig gute Musik ist unser Ding, aber der Spaß steht immer im Vordergrund. Keine steifen Proben, sondern gute
			Laune und viel Freude.
		</li>
		<li>
			<strong>Erlebnisse:</strong>
			Gemeinsame Events, Auftritte und Freizeitspaß machen unseren Verein einzigartig.
		</li>
	</ul>

	<p>Entdecke, wie spannend und vielseitig unser Orchester ist und sei Teil unserer musikalischen Reise!</p>

	<div class="content-grid__breakout">
		<enhanced:img src={notenstaender} alt="" loading="lazy" sizes="min(800px, 100vw)" />
	</div>
</SimpleLayout.Section>
