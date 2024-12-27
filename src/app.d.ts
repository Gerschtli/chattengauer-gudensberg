// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		interface PageState {
			showNav: boolean;
		}
		// interface Platform {}

		namespace Superforms {
			type Message = {
				type: 'error' | 'success';
				text: string;
			};
		}
	}
}

export {};
