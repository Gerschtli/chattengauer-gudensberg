import Banner from './Banner.svelte';
import Page from './Page.svelte';
import Section from './Section.svelte';
import Directions from './richtext/Directions.svelte';
import EnsembleTeaserList from './richtext/EnsembleTeaserList.svelte';
import Form from './richtext/Form.svelte';
import Image from './richtext/Image.svelte';
import ImageSlider from './richtext/ImageSlider.svelte';
import TextAndLeader from './richtext/TextAndLeader.svelte';
import Events from './richtext/events/Events.svelte';

export const components = {
	banner: Banner,
	directions: Directions,
	ensembleTeaserList: EnsembleTeaserList,
	events: Events,
	form: Form,
	image: Image,
	imageSlider: ImageSlider,
	page: Page,
	section: Section,
	textAndLeader: TextAndLeader,
};
