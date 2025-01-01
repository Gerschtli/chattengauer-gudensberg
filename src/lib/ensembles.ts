import blaeserklassen1 from '$lib/assets/ensembles/blaeserklassen-1.jpg?enhanced';
import blaeserklassen2 from '$lib/assets/ensembles/blaeserklassen-2.jpg?enhanced';
import blaeserklassen3 from '$lib/assets/ensembles/blaeserklassen-3.jpg?enhanced';
import blaeserklassen4 from '$lib/assets/ensembles/blaeserklassen-4.jpg?enhanced';
import blaeserklassen5 from '$lib/assets/ensembles/blaeserklassen-5.jpg?enhanced';
import brassUndSpass1 from '$lib/assets/ensembles/brass-und-spass-1.jpg?enhanced';
import brassUndSpass2 from '$lib/assets/ensembles/brass-und-spass-2.jpg?enhanced';
import brassUndSpass3 from '$lib/assets/ensembles/brass-und-spass-3.jpg?enhanced';
import brassUndSpass4 from '$lib/assets/ensembles/brass-und-spass-4.jpg?enhanced';
import grossesOrchester1 from '$lib/assets/ensembles/grosses-orchester-1.jpg?enhanced';
import grossesOrchester2 from '$lib/assets/ensembles/grosses-orchester-2.jpg?enhanced';
import grossesOrchester3 from '$lib/assets/ensembles/grosses-orchester-3.jpg?enhanced';
import jugendorchester1 from '$lib/assets/ensembles/jugendorchester-1.jpg?enhanced';
import jugendorchester2 from '$lib/assets/ensembles/jugendorchester-2.jpg?enhanced';
import jugendorchester3 from '$lib/assets/ensembles/jugendorchester-3.jpg?enhanced';
import jugendorchester4 from '$lib/assets/ensembles/jugendorchester-4.jpg?enhanced';

export type Picture = typeof grossesOrchester1;

export const ensembles = {
	'grosses-orchester': {
		name: 'Großes Orchester',
		claim: 'Leidenschaft trifft Klang',
		images: [grossesOrchester1, grossesOrchester2, grossesOrchester3],
	},
	blaeserklassen: {
		name: 'Bläserklassen',
		claim: 'Der perfekte Einstieg',
		images: [blaeserklassen1, blaeserklassen2, blaeserklassen3, blaeserklassen4, blaeserklassen5],
	},
	jugendorchester: {
		name: 'Jugendorchester',
		claim: 'Energiegeladene Sounds',
		images: [jugendorchester1, jugendorchester2, jugendorchester3, jugendorchester4],
	},
	'brass-und-spass': {
		name: 'Brass & Spaß',
		claim: 'Dein musikalischer Neuanfang',
		images: [brassUndSpass1, brassUndSpass2, brassUndSpass3, brassUndSpass4],
	},
};
