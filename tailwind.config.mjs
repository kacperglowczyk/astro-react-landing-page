/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			container: {
				center: true,
			},
			colors: {
				"almost-white": "#fafafa",
				"medium-gray": "#696969",
				"almost-black": "#141414",
			},
		},
	},

	
	plugins: [],
}
