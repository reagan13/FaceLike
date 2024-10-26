/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		screens: {
			sm: "640px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
			"2xl": "1536px",
		},
		extend: {
			fontFamily: {
				sans: ["Roboto", "sans-serif"], // Default font for body text
				heading: ["Montserrat", "sans-serif"], // Font for headings
			},
			colors: {
				primary: "#1c1c1e", // Dark Gray for background
				secondary: "#121212", // Soft Black for sections
				"primary-text": "#e5e5e5", // Off-White for main text
				"secondary-text": "#a3a3a3", // Cool Gray for secondary text
				"accent-blue": "#007AFF", // Electric Blue for highlights
				"accent-orange": "#FF9500", // Soft Orange for notifications
			},
		},
	},
	plugins: [],
};
