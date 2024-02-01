import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const myCustomTheme02: CustomThemeConfig = {
	name: 'my-custom-theme02',
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
		'--on-primary': '0 0 0',
		'--on-secondary': '0 0 0',
		'--on-tertiary': '255 255 255',
		'--on-success': '255 255 255',
		'--on-warning': '0 0 0',
		'--on-error': '0 0 0',
		'--on-surface': '0 0 0',
		// =~= Theme Colors  =~=
		// primary | #f72c2d
		'--color-primary-50': '254 223 224', // #fedfe0
		'--color-primary-100': '253 213 213', // #fdd5d5
		'--color-primary-200': '253 202 203', // #fdcacb
		'--color-primary-300': '252 171 171', // #fcabab
		'--color-primary-400': '249 107 108', // #f96b6c
		'--color-primary-500': '247 44 45', // #f72c2d
		'--color-primary-600': '222 40 41', // #de2829
		'--color-primary-700': '185 33 34', // #b92122
		'--color-primary-800': '148 26 27', // #941a1b
		'--color-primary-900': '121 22 22', // #791616
		// secondary | #be687f
		'--color-secondary-50': '245 232 236', // #f5e8ec
		'--color-secondary-100': '242 225 229', // #f2e1e5
		'--color-secondary-200': '239 217 223', // #efd9df
		'--color-secondary-300': '229 195 204', // #e5c3cc
		'--color-secondary-400': '210 149 165', // #d295a5
		'--color-secondary-500': '190 104 127', // #be687f
		'--color-secondary-600': '171 94 114', // #ab5e72
		'--color-secondary-700': '143 78 95', // #8f4e5f
		'--color-secondary-800': '114 62 76', // #723e4c
		'--color-secondary-900': '93 51 62', // #5d333e
		// tertiary | #2918ce
		'--color-tertiary-50': '223 220 248', // #dfdcf8
		'--color-tertiary-100': '212 209 245', // #d4d1f5
		'--color-tertiary-200': '202 197 243', // #cac5f3
		'--color-tertiary-300': '169 163 235', // #a9a3eb
		'--color-tertiary-400': '105 93 221', // #695ddd
		'--color-tertiary-500': '41 24 206', // #2918ce
		'--color-tertiary-600': '37 22 185', // #2516b9
		'--color-tertiary-700': '31 18 155', // #1f129b
		'--color-tertiary-800': '25 14 124', // #190e7c
		'--color-tertiary-900': '20 12 101', // #140c65
		// success | #66283f
		'--color-success-50': '232 223 226', // #e8dfe2
		'--color-success-100': '224 212 217', // #e0d4d9
		'--color-success-200': '217 201 207', // #d9c9cf
		'--color-success-300': '194 169 178', // #c2a9b2
		'--color-success-400': '148 105 121', // #946979
		'--color-success-500': '102 40 63', // #66283f
		'--color-success-600': '92 36 57', // #5c2439
		'--color-success-700': '77 30 47', // #4d1e2f
		'--color-success-800': '61 24 38', // #3d1826
		'--color-success-900': '50 20 31', // #32141f
		// warning | #659836
		'--color-warning-50': '232 240 225', // #e8f0e1
		'--color-warning-100': '224 234 215', // #e0ead7
		'--color-warning-200': '217 229 205', // #d9e5cd
		'--color-warning-300': '193 214 175', // #c1d6af
		'--color-warning-400': '147 183 114', // #93b772
		'--color-warning-500': '101 152 54', // #659836
		'--color-warning-600': '91 137 49', // #5b8931
		'--color-warning-700': '76 114 41', // #4c7229
		'--color-warning-800': '61 91 32', // #3d5b20
		'--color-warning-900': '49 74 26', // #314a1a
		// error | #c7828c
		'--color-error-50': '247 236 238', // #f7ecee
		'--color-error-100': '244 230 232', // #f4e6e8
		'--color-error-200': '241 224 226', // #f1e0e2
		'--color-error-300': '233 205 209', // #e9cdd1
		'--color-error-400': '216 168 175', // #d8a8af
		'--color-error-500': '199 130 140', // #c7828c
		'--color-error-600': '179 117 126', // #b3757e
		'--color-error-700': '149 98 105', // #956269
		'--color-error-800': '119 78 84', // #774e54
		'--color-error-900': '98 64 69', // #624045
		// surface | #a0fa4f
		'--color-surface-50': '241 254 229', // #f1fee5
		'--color-surface-100': '236 254 220', // #ecfedc
		'--color-surface-200': '231 254 211', // #e7fed3
		'--color-surface-300': '217 253 185', // #d9fdb9
		'--color-surface-400': '189 252 132', // #bdfc84
		'--color-surface-500': '160 250 79', // #a0fa4f
		'--color-surface-600': '144 225 71', // #90e147
		'--color-surface-700': '120 188 59', // #78bc3b
		'--color-surface-800': '96 150 47', // #60962f
		'--color-surface-900': '78 123 39' // #4e7b27
	}
};
