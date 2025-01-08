import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				sans: ['"Roboto"', 'system-ui'],
				accent: ['"Saira Condensed"', 'system-ui'],
			},
			fontWeight: {
				'accent-bold': '600',
			},
			colors: {
				accent: '#dd1e25',
			},
			screens: {
				xs: '468px',
			},
			aspectRatio: {
				media: '3 / 2',
			},
		},
	},

	plugins: [typography],
} satisfies Config;
