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
        'custom-radial': 'radial-gradient(ellipse 80% 80% at 50% -20%, rgba(120,119,198,0.3), rgba(255,255,255,0))',
      },
      
    },
  },
  plugins: [],
};
export default config;
