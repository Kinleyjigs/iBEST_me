import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: ["class"],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
		keyframes: {
			slideRight: {
			"0%": { opacity: "0", marginLeft: "-600px" },
			"100%": { opacity: "1", marginLeft: "0" },
			},
			slideLeft: {
			"0%": { opacity: "0", marginRight: "-600px" },
			"100%": { opacity: "1", marginRight: "0" },
			},
		},
		animation: {
			slideRight: "slideRight 1s ease-in-out",
			slideLeft: "slideLeft 1s ease-in-out",
		},
		colors: {
			bb: '#aac5e1',
			blue :'#ecfeff',
			blueDark : '#043853',
			bblue:'#C2DFE7',
			lightStrok: '#E8E3E3',
			lightBlue : '#ddf3fd',			
			background: "hsl(var(--background))",
			foreground: "hsl(var(--foreground))",
			card: {
			DEFAULT: "hsl(var(--card))",
			foreground: "hsl(var(--card-foreground))",
			},
			popover: {
			DEFAULT: "hsl(var(--popover))",
			foreground: "hsl(var(--popover-foreground))",
			},
			primary: {
			DEFAULT: "hsl(var(--primary))",
			foreground: "hsl(var(--primary-foreground))",
			},
			secondary: {
			DEFAULT: "hsl(var(--secondary))",
			foreground: "hsl(var(--secondary-foreground))",
			},
			muted: {
			DEFAULT: "hsl(var(--muted))",
			foreground: "hsl(var(--muted-foreground))",
			},
			accent: {
			DEFAULT: "hsl(var(--accent))",
			foreground: "hsl(var(--accent-foreground))",
			},
			destructive: {
			DEFAULT: "hsl(var(--destructive))",
			foreground: "hsl(var(--destructive-foreground))",
			},
			border: "hsl(var(--border))",
			input: "hsl(var(--input))",
			ring: "hsl(var(--ring))",
			chart: {
			1: "hsl(var(--chart-1))",
			2: "hsl(var(--chart-2))",
			3: "hsl(var(--chart-3))",
			4: "hsl(var(--chart-4))",
			5: "hsl(var(--chart-5))",
			},
		},
		backgroundImage: {
			homepage_image: "url('./images/building.jpg')",
			testamonial1: "url('./images/drKarma.jpg')",
			image1: "url('./images/dasho1.png')",
			passu: "url('./images/passu.jpg')",
			traning: "url('./images/traning.jpg')",
			about: "url('./images/about.png')",
			one: "url('./images/one.jpg')",
			two: "url('./images/two.jpg')",
			three: "url('./images/three.jpg')",	
			four: "url('./images/four.jpg')",	
			five: "url('./images/five.jpg')",	
			six: "url('./images/six.jpg')",	
			seven: "url('./images/seven.webp')",	
			this: "url('./images/this.png')",
			co: "url('./images/co.png')",

		},
		borderRadius: {
			lg: "var(--radius)",
			md: "calc(var(--radius) - 2px)",
			sm: "calc(var(--radius) - 4px)",
		},
		},
	},
	plugins: [require("tailwindcss-animate")],
};

export default config;
