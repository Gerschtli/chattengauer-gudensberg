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
			boxShadow: {
				header: '0 -16px 16px 16px rgba(0, 0, 0, 0.3)',
			},
		},
		container: {
			center: true,
			screens: {
				sm: '640px',
				md: '768px',
				lg: '1024px',
			},
		},
	},

	plugins: [typography],
} as Config;
