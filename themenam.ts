
import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const myCustomThemenam: CustomThemeConfig = {
    name: 'my-custom-theme-nam',
    properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
		"--theme-font-family-heading": `ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "2px",
		"--theme-rounded-container": "0px",
		"--theme-border-base": "1px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "0 0 0",
		"--on-secondary": "255 255 255",
		"--on-tertiary": "0 0 0",
		"--on-success": "0 0 0",
		"--on-warning": "0 0 0",
		"--on-error": "0 0 0",
		"--on-surface": "0 0 0",
		// =~= Theme Colors  =~=
		// primary | #ffa500 
		"--color-primary-50": "255 242 217", // #fff2d9
		"--color-primary-100": "255 237 204", // #ffedcc
		"--color-primary-200": "255 233 191", // #ffe9bf
		"--color-primary-300": "255 219 153", // #ffdb99
		"--color-primary-400": "255 192 77", // #ffc04d
		"--color-primary-500": "255 165 0", // #ffa500
		"--color-primary-600": "230 149 0", // #e69500
		"--color-primary-700": "191 124 0", // #bf7c00
		"--color-primary-800": "153 99 0", // #996300
		"--color-primary-900": "125 81 0", // #7d5100
		// secondary | #805d48 
		"--color-secondary-50": "236 231 228", // #ece7e4
		"--color-secondary-100": "230 223 218", // #e6dfda
		"--color-secondary-200": "223 215 209", // #dfd7d1
		"--color-secondary-300": "204 190 182", // #ccbeb6
		"--color-secondary-400": "166 142 127", // #a68e7f
		"--color-secondary-500": "128 93 72", // #805d48
		"--color-secondary-600": "115 84 65", // #735441
		"--color-secondary-700": "96 70 54", // #604636
		"--color-secondary-800": "77 56 43", // #4d382b
		"--color-secondary-900": "63 46 35", // #3f2e23
		// tertiary | #b38c00 
		"--color-tertiary-50": "244 238 217", // #f4eed9
		"--color-tertiary-100": "240 232 204", // #f0e8cc
		"--color-tertiary-200": "236 226 191", // #ece2bf
		"--color-tertiary-300": "225 209 153", // #e1d199
		"--color-tertiary-400": "202 175 77", // #caaf4d
		"--color-tertiary-500": "179 140 0", // #b38c00
		"--color-tertiary-600": "161 126 0", // #a17e00
		"--color-tertiary-700": "134 105 0", // #866900
		"--color-tertiary-800": "107 84 0", // #6b5400
		"--color-tertiary-900": "88 69 0", // #584500
		// success | #00ffe7 
		"--color-success-50": "217 255 251", // #d9fffb
		"--color-success-100": "204 255 250", // #ccfffa
		"--color-success-200": "191 255 249", // #bffff9
		"--color-success-300": "153 255 245", // #99fff5
		"--color-success-400": "77 255 238", // #4dffee
		"--color-success-500": "0 255 231", // #00ffe7
		"--color-success-600": "0 230 208", // #00e6d0
		"--color-success-700": "0 191 173", // #00bfad
		"--color-success-800": "0 153 139", // #00998b
		"--color-success-900": "0 125 113", // #007d71
		// warning | #ff00c9 
		"--color-warning-50": "255 217 247", // #ffd9f7
		"--color-warning-100": "255 204 244", // #ffccf4
		"--color-warning-200": "255 191 242", // #ffbff2
		"--color-warning-300": "255 153 233", // #ff99e9
		"--color-warning-400": "255 77 217", // #ff4dd9
		"--color-warning-500": "255 0 201", // #ff00c9
		"--color-warning-600": "230 0 181", // #e600b5
		"--color-warning-700": "191 0 151", // #bf0097
		"--color-warning-800": "153 0 121", // #990079
		"--color-warning-900": "125 0 98", // #7d0062
		// error | #78e2cd 
		"--color-error-50": "235 251 248", // #ebfbf8
		"--color-error-100": "228 249 245", // #e4f9f5
		"--color-error-200": "221 248 243", // #ddf8f3
		"--color-error-300": "201 243 235", // #c9f3eb
		"--color-error-400": "161 235 220", // #a1ebdc
		"--color-error-500": "120 226 205", // #78e2cd
		"--color-error-600": "108 203 185", // #6ccbb9
		"--color-error-700": "90 170 154", // #5aaa9a
		"--color-error-800": "72 136 123", // #48887b
		"--color-error-900": "59 111 100", // #3b6f64
		// surface | #00b3a2 
		"--color-surface-50": "217 244 241", // #d9f4f1
		"--color-surface-100": "204 240 236", // #ccf0ec
		"--color-surface-200": "191 236 232", // #bfece8
		"--color-surface-300": "153 225 218", // #99e1da
		"--color-surface-400": "77 202 190", // #4dcabe
		"--color-surface-500": "0 179 162", // #00b3a2
		"--color-surface-600": "0 161 146", // #00a192
		"--color-surface-700": "0 134 122", // #00867a
		"--color-surface-800": "0 107 97", // #006b61
		"--color-surface-900": "0 88 79", // #00584f
		
	}
}