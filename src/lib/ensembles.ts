export type Ensemble = keyof typeof ensembles;

export function isEnsemble(slug: string): slug is Ensemble {
	return slug in ensembles;
}

export const ensembles = {
	'grosses-orchester': {
		name: 'Großes Orchester',
		claim: 'Leidenschaft trifft Klang',
	},
	blaeserklassen: {
		name: 'Bläserklassen Kid.Chatts',
		claim: 'Der perfekte Einstieg',
	},
	jugendorchester: {
		name: 'Jugendorchester',
		claim: 'Energiegeladene Sounds',
	},
	'brass-und-spass': {
		name: 'Brass & Spaß',
		claim: 'Dein musikalischer Neuanfang',
	},
};
