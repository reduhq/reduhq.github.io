/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	safelist:[
		"bg-[#d63aff66]",
		"bg-[#2ca5e044]",
		"bg-[#222]",
		"bg-[#193449]",
		"bg-[#006e6366]",
		"bg-[#31619299]",
		"bg-[#000]",
		"bg-[#235a9799]",
		"bg-[#23272f]"
	],
	theme: {
		extend: {
			colors:{
				primary: '#14D4C9'
			}
		},
	},
	plugins: [],
}
