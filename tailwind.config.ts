import { join } from 'path'
import type { Config } from 'tailwindcss'
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import { skeleton } from '@skeletonlabs/tw-plugin'
import { myCustomTheme01 } from './theme';
import { myCustomTheme02 } from './themee';
import { myCustomTheme03 } from './themeea';
import { material } from './thmetail'
import { myCustomThemenam } from './themenam';
export default {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}', join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')],
	theme: {
		extend: {},
	},
	plugins: [
		forms,
		typography,
		skeleton({
			themes: {
				custom: [
					myCustomTheme01,myCustomTheme02,myCustomTheme03,material,myCustomThemenam
				],
				preset: [
					{
						name: 'skeleton',
						enhancements: true,
					},
					{
						name: 'modern',
						enhancements: true,
					},
					{
						name: 'sahara',
						enhancements: true,
					},
					{
						name: 'rocket',
						enhancements: true,
					},
				],
			},
		}),
	],
} satisfies Config;
