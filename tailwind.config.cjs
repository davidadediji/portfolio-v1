/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				inter: [
					'Inter',
					'-apple-system',
					'BlinkMacSystemFont',
					'Roboto',
					'Segoe UI',
					'Helvetica',
					'Arial',
					'sans-serif',
				],
				roboto: ['Roboto Mono', 'monospace'],
				sora: ['Sora'],
			},
		},
	},
	plugins: [],
};
