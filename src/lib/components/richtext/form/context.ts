import { getContext, setContext } from 'svelte';

import type { SuperValidatedBooking, SuperValidatedEngageEnsemble, SuperValidatedEngageHome } from './schema';

export function setSuperValidatedEngageHome(superValidated: SuperValidatedEngageHome) {
	setContext<SuperValidatedEngageHome>('engage-home', superValidated);
}

export function getSuperValidatedEngageHome() {
	return getContext<SuperValidatedEngageHome>('engage-home');
}

export function setSuperValidatedEngageEnsemble(superValidated: SuperValidatedEngageEnsemble) {
	setContext<SuperValidatedEngageEnsemble>('engage-ensemble', superValidated);
}

export function getSuperValidatedEngageEnsemble() {
	return getContext<SuperValidatedEngageEnsemble>('engage-ensemble');
}

export function setSuperValidatedBooking(superValidated: SuperValidatedBooking) {
	setContext<SuperValidatedBooking>('booking', superValidated);
}

export function getSuperValidatedBooking() {
	return getContext<SuperValidatedBooking>('booking');
}
