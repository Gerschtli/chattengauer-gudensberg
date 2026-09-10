import { loadStories, loadStory } from '$lib/storyblok/setup';
import { getEnd, getStart, parseDateAsUtc } from '$lib/time';
import type { EventData } from '$lib/types';
import type { EventList, News, Page } from '$storyblok/335007/storyblok-components';

export async function load({ parent }) {
	const { storyblokApi, storyblokVisualEditor } = await parent();

	const [story, newsList, ensembleList, events] = await Promise.all([
		loadStory(storyblokApi, storyblokVisualEditor, 'aktuelles'),
		loadStories<News>(storyblokApi, storyblokVisualEditor, {
			starts_with: 'news/',
			sort_by: 'content.date:desc',
		}),
		loadStories<Page>(storyblokApi, storyblokVisualEditor, {
			starts_with: 'ensembles/',
			excluding_fields: 'banner,content',
		}),
		loadStory<EventList>(storyblokApi, storyblokVisualEditor, 'terminliste'),
	]);

	return {
		story,
		newsList,
		ensembleList: ensembleList.map((e) => ({ uuid: e.uuid, url: `/${e.full_slug}`, name: e.name })),
		events:
			events.content.events
				?.map(
					(event) =>
						({
							time: {
								type: 'range',
								start: parseDateAsUtc(event.start),
								end: event.end ? parseDateAsUtc(event.end) : undefined,
							},
							title: event.title,
							description: event.description,
							location: event.location,
							ensembles: event.ensembles,
						}) satisfies EventData,
				)
				.filter((event) => getEnd(event.time) >= new Date())
				.toSorted((a, b) => getStart(a.time).getTime() - getStart(b.time).getTime()) || [],
	};
}
