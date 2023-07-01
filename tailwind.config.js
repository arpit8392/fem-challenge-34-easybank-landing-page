/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				darkBlue: 'hsl(233, 26%, 24%)',
				limeGreen: 'hsl(136, 65%, 51%)',
				brightCyan: 'hsl(192, 70%, 51%)',
				grayishBlue: 'hsl(233, 8%, 62%)',
				lightGrayishBlue: 'hsl(220, 16%, 96%)',
				veryLightGray: 'hsl(0, 0%, 98%)',
			},
			backgroundImage: {
				buttonGradient: 'linear-gradient(135deg, #33D35E 0%, #2AB6D9 100%)',
				introMobile: 'url("/images/bg-intro-mobile.svg")',
				introDesktop: 'url("/images/bg-intro-desktop.svg")',
			},
		},
	},
	plugins: [],
}
