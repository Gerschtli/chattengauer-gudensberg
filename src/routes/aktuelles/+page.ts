import { loadStories, loadStory } from '$lib/storyblok/setup';
import type { News, Page } from '$storyblok/335007/storyblok-components';

export async function load({ parent, data }) {
	const { storyblokApi, storyblokVisualEditor } = await parent();

	const [story, newsList, ensembleList] = await Promise.all([
		loadStory(storyblokApi, storyblokVisualEditor, 'aktuelles'),
		loadStories<News>(storyblokApi, storyblokVisualEditor, {
			starts_with: 'news/',
			sort_by: 'content.date:desc',
		}),
		loadStories<Page>(storyblokApi, storyblokVisualEditor, {
			starts_with: 'ensembles/',
			excluding_fields: 'banner,content',
		}),
	]);

	return {
		...data,
		story,
		newsList,
		ensembleList: ensembleList.map((e) => ({ uuid: e.uuid, url: `/${e.full_slug}`, name: e.name })),
	};
}
