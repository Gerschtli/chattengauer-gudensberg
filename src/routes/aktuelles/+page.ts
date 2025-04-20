import type { NewsStoryblok, PageStoryblok } from '$lib/component-types-storyblok';
import { loadStories, loadStory } from '$lib/storyblok/setup';

export async function load({ parent, data }) {
	const { storyblokApi } = await parent();

	const [story, newsList, ensembleList] = await Promise.all([
		loadStory(storyblokApi, 'aktuelles'),
		loadStories<NewsStoryblok>(storyblokApi, {
			starts_with: 'news/',
			sort_by: 'content.date:desc',
		}),
		loadStories<PageStoryblok>(storyblokApi, {
			starts_with: 'ensembles/',
			excluding_fields: 'banner,content',
		}),
	]);

	const ensembleMap = new Map<string, { url: string; name: string }>();
	ensembleList.forEach((e) => ensembleMap.set(e.uuid, { url: `/${e.full_slug}`, name: e.name }));

	return { ...data, story, newsList, ensembleMap };
}
