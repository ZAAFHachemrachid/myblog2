import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const myCustomTheme03: CustomThemeConfig = {
	name: 'my-custom-theme03',
	properties: {
		// =~= Theme Properties =~=
		'--theme-font-family-base': `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
		'--theme-font-family-heading': `system-ui`,
		'--theme-font-color-base': '0 0 0',
		'--theme-font-color-dark': '255 255 255',
		'--theme-rounded-base': '6px',
		'--theme-rounded-container': '8px',
		'--theme-border-base': '1px',
		// =~= Theme On-X Colors =~=
		'--on-primary': 'var(--color-error-50)',
		'--on-secondary': '255 255 255',
		'--on-tertiary': '0 0 0',
		'--on-success': '255 255 255',
		'--on-warning': '0 0 0',
		'--on-error': '255 255 255',
		'--on-surface': '0 0 0',
		// =~= Theme Colors  =~=
		// primary | #F29313
		'--color-primary-50': '253 239 220', // #fdefdc
		'--color-primary-100': '252 233 208', // #fce9d0
		'--color-primary-200': '252 228 196', // #fce4c4
		'--color-primary-300': '250 212 161', // #fad4a1
		'--color-primary-400': '246 179 90', // #f6b35a
		'--color-primary-500': '242 147 19', // #F29313
		'--color-primary-600': '218 132 17', // #da8411
		'--color-primary-700': '182 110 14', // #b66e0e
		'--color-primary-800': '145 88 11', // #91580b
		'--color-primary-900': '119 72 9', // #774809
		// secondary | #ae8a68
		'--color-secondary-50': '243 237 232', // #f3ede8
		'--color-secondary-100': '239 232 225', // #efe8e1
		'--color-secondary-200': '235 226 217', // #ebe2d9
		'--color-secondary-300': '223 208 195', // #dfd0c3
		'--color-secondary-400': '198 173 149', // #c6ad95
		'--color-secondary-500': '174 138 104', // #ae8a68
		'--color-secondary-600': '157 124 94', // #9d7c5e
		'--color-secondary-700': '131 104 78', // #83684e
		'--color-secondary-800': '104 83 62', // #68533e
		'--color-secondary-900': '85 68 51', // #554433
		// tertiary | #fff6e7
		'--color-tertiary-50': '255 254 251', // #fffefb
		'--color-tertiary-100': '255 253 250', // #fffdfa
		'--color-tertiary-200': '255 253 249', // #fffdf9
		'--color-tertiary-300': '255 251 245', // #fffbf5
		'--color-tertiary-400': '255 249 238', // #fff9ee
		'--color-tertiary-500': '255 246 231', // #fff6e7
		'--color-tertiary-600': '230 221 208', // #e6ddd0
		'--color-tertiary-700': '191 185 173', // #bfb9ad
		'--color-tertiary-800': '153 148 139', // #99948b
		'--color-tertiary-900': '125 121 113', // #7d7971
		// success | #00c96a
		'--color-success-50': '217 247 233', // #d9f7e9
		'--color-success-100': '204 244 225', // #ccf4e1
		'--color-success-200': '191 242 218', // #bff2da
		'--color-success-300': '153 233 195', // #99e9c3
		'--color-success-400': '77 217 151', // #4dd997
		'--color-success-500': '0 201 106', // #00c96a
		'--color-success-600': '0 181 95', // #00b55f
		'--color-success-700': '0 151 80', // #009750
		'--color-success-800': '0 121 64', // #007940
		'--color-success-900': '0 98 52', // #006234
		// warning | #f4f419
		'--color-warning-50': '253 253 221', // #fdfddd
		'--color-warning-100': '253 253 209', // #fdfdd1
		'--color-warning-200': '252 252 198', // #fcfcc6
		'--color-warning-300': '251 251 163', // #fbfba3
		'--color-warning-400': '247 247 94', // #f7f75e
		'--color-warning-500': '244 244 25', // #f4f419
		'--color-warning-600': '220 220 23', // #dcdc17
		'--color-warning-700': '183 183 19', // #b7b713
		'--color-warning-800': '146 146 15', // #92920f
		'--color-warning-900': '120 120 12', // #78780c
		// error | #f2131c
		'--color-error-50': '253 220 221', // #fddcdd
		'--color-error-100': '252 208 210', // #fcd0d2
		'--color-error-200': '252 196 198', // #fcc4c6
		'--color-error-300': '250 161 164', // #faa1a4
		'--color-error-400': '246 90 96', // #f65a60
		'--color-error-500': '242 19 28', // #f2131c
		'--color-error-600': '218 17 25', // #da1119
		'--color-error-700': '182 14 21', // #b60e15
		'--color-error-800': '145 11 17', // #910b11
		'--color-error-900': '119 9 14', // #77090e
		// surface | #fff6e7
		'--color-surface-50': '255 254 251', // #fffefb
		'--color-surface-100': '255 253 250', // #fffdfa
		'--color-surface-200': '255 253 249', // #fffdf9
		'--color-surface-300': '255 251 245', // #fffbf5
		'--color-surface-400': '255 249 238', // #fff9ee
		'--color-surface-500': '255 246 231', // #fff6e7
		'--color-surface-600': '230 221 208', // #e6ddd0
		'--color-surface-700': '191 185 173', // #bfb9ad
		'--color-surface-800': '153 148 139', // #99948b
		'--color-surface-900': '125 121 113' // #7d7971
	}
};
