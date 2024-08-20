import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors : {
        secondary: '#f5741c',
        darkBg:'#131424'
      },
      backgroundImage: {
        'gradient-cover': 'linear-gradient(to top, #603155, #72375a, #833e5e, #944661, #a54e63);'
        
      },
    },
  },
  plugins: [],
};
export default config;
