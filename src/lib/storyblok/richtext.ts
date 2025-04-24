import { BlockTypes, MarkTypes, type StoryblokRichTextNode, richTextResolver } from '@storyblok/richtext';

import type { RichtextStoryblok } from '$lib/component-types-storyblok';

const richText = richTextResolver({
	resolvers: {
		[BlockTypes.HEADING]: (node) => {
			const level = node.attrs?.['level'];

			return `<h${level} class="heading-${level}"><span>${node.children}</span>&nbsp;<span></span></h${level}>`;
		},
		[MarkTypes.LINK]: (node) => {
			const href = node.attrs?.['href'];
			const target = node.attrs?.['target'];

			let attrs = `href="${href}"`;

			if (target && target !== '_self') {
				attrs += ` target="${target}"`;
			}

			if (!href.startsWith('/')) {
				attrs += ` rel="noopener noreferrer"`;
			}

			return `<a ${attrs}>${node.text}</a>`;
		},
	},
});

export function renderRichText(blok: RichtextStoryblok) {
	return richText.render(blok as unknown as StoryblokRichTextNode);
}
