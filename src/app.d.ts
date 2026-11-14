import type { Config } from '#lib/storyblok/types.js';
import type { ISbStoryData } from '@storyblok/svelte';

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		interface PageData {
			config: ISbStoryData<Config>;
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
