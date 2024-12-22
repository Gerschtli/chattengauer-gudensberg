import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				sans: ['Trade Gothic LT Std Regular', 'system-ui'],
				accent: ['"Trade Gothic LT Std Bold Condensed No. 20"', 'system-ui'],
			},
			colors: {
				accent: '#dd1e25',
			},
			screens: {
				xs: '468px',
			},
		},
	},

	plugins: [typography],
} satisfies Config;
