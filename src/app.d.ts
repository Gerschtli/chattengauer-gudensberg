import type { ISbStoryData } from '@storyblok/svelte';

import type { ConfigStoryblok } from '$lib/component-types-storyblok';

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		interface PageData {
			config: ISbStoryData<ConfigStoryblok>;
		}
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
