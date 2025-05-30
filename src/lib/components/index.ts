import Banner from './Banner.svelte';
import Page from './Page.svelte';
import Directions from './richtext/Directions.svelte';
import EnsembleTeaserList from './richtext/EnsembleTeaserList.svelte';
import Form from './richtext/Form.svelte';
import Image from './richtext/Image.svelte';
import ImageSlider from './richtext/ImageSlider.svelte';
import TextAndLeader from './richtext/TextAndLeader.svelte';
import Events from './richtext/events/Events.svelte';
import NewsList from './richtext/newsList/NewsList.svelte';

export const components = {
	banner: Banner,
	directions: Directions,
	ensembleTeaserList: EnsembleTeaserList,
	events: Events,
	form: Form,
	image: Image,
	imageSlider: ImageSlider,
	newsList: NewsList,
	page: Page,
	textAndLeader: TextAndLeader,
};
