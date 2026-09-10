import { type StoryblokRichTextRenderContext, renderRichText as renderStoryblokRichText } from '@storyblok/richtext';

import type { StoryblokRichTextDoc } from '$storyblok/storyblok';

const options: StoryblokRichTextRenderContext = {
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

export function renderRichTextWithoutParagraph(blok: StoryblokRichTextDoc) {
	if (blok.content?.[0].type === 'paragraph' && blok.content?.[0].content?.[0]) {
		blok = {
			type: 'doc',
			content: blok.content?.[0].content,
		};
	}

	return renderRichText(blok);
}

export function renderRichText(blok: StoryblokRichTextDoc) {
	return renderStoryblokRichText(blok, options);
}
