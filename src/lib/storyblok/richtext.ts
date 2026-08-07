import {
	type SbRichTextInput,
	type SbRichTextRenderContext,
	renderRichText as renderStoryblokRichText,
} from '@storyblok/richtext';

import type { StoryblokRichtext } from '$storyblok/storyblok';

const options: SbRichTextRenderContext = {
	renderers: {
		heading: ({ attrs, children }) => {
			const level = attrs?.level;

			return `<h${level} class="heading-${level}"><span>${children.trim()}</span>&nbsp;<span></span></h${level}>`;
		},
		link: ({ attrs, children }) => {
			const href = attrs?.href;
			const target = attrs?.target;

			let htmlAttrs = `href="${href}"`;

			if (target && target !== '_self') {
				htmlAttrs += ` target="${target}"`;
			}

			if (href && !href.startsWith('/')) {
				htmlAttrs += ` rel="noopener noreferrer"`;
			}

			return `<a ${htmlAttrs}>${children}</a>`;
		},
	},
};

export function renderRichText(blok: StoryblokRichtext) {
	return renderStoryblokRichText(blok as unknown as SbRichTextInput, options);
}
