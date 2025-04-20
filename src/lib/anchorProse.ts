export function anchorProse(node: HTMLElement) {
	const anchors = node.getElementsByTagName('a');
	const base = `${window.location.protocol}//${window.location.host}`;

	function isExternalLink(url: string) {
		return !url?.startsWith('/') && !url?.startsWith(base);
	}

	for (const anchor of anchors) {
		if (anchor.getAttribute('target') === '_self') {
			anchor.removeAttribute('target');
		}

		if (isExternalLink(anchor.href)) {
			anchor.rel = 'noopener noreferrer';
		}
	}
}
