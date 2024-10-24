import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: ["class"],
	content: [
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		// Or if using `src` directory:
		"./src/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			dropShadow: {
				'3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
				'4xl': [
					'0 35px 35px rgba(0, 0, 0, 0.25)',
					'0 45px 65px rgba(0, 0, 0, 0.15)'
				]
			},
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
			color:'#1ca2e9',
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
			c1: "url('./images/1.jpeg')",
			c2: "url('./images/2.jpg')",
			c3: "url('./images/3.jpeg')",
			c4: "url('./images/4.webp')",
			c5: "url('./images/5.jpg')",
			c6: "url('./images/6.jpg')",
			c7: "url('./images/7.jpg')",
			c8: "url('./images/8.jpg')",
			c9: "url('./images/9.webp')",
			c10: "url('./images/10.webp')",
			c11: "url('./images/11.webp')",
			c12: "url('./images/12.png')",
			c13: "url('./images/13.jpg')",
			c14: "url('./images/14.jpg')",
			c15: "url('./images/15.jpg')",
			cc1: "url('./images/c1.jpg')",
			cc2: "url('./images/cc2.webp')",
			courses1: "url('./images/courses1.png')",
			lifeSkill: "url('./images/iBEST_files/lifeSkill.jpg')",
			leader: "url('./images/leader.png')",
			management: "url('./images/management.jpeg')",
			finance: "url('./images/finance.jpg')",
			en: "url('./images/en.jpeg')",
			media: "url('./images/media.jpg')",
			flim: "url('./images/flim.jpg')",
			mo: "url('./images/mo.jpg')",
			ict: "url('./images/ict.jpg')",
			ooo: "url('./images/iBEST_files/leaders.jpg')",
			baba: "url('./images/baba.jpeg')",
			man: "url('./images/man.jpg')",
			fin: "url('./images/fin.JPG')",
			multi: "url('./images/multi.JPG')",
			tep: "url('./images/TEP.jpg')",
			le: "url('./images/le.JPG')",
			it: "url('./images/it.JPG')",





			
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
