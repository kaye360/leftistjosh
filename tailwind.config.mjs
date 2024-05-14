/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			padding : {
				'default-x' : '0.75rem',
				'default-y' : '1.5rem'
			}
		},
	},
	plugins: [],
}
