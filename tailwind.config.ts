import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {colors: {
      gray: {
        900: '#111827',
        800: '#1F2937',
        700: '#374151',
        400: '#9CA3AF',
      },
      blue: {
        400: '#60A5FA',
      },
    },
    fontSize: {
      '6xl': '4rem',
    },
  },
  },
  plugins: [],
};
export default config;
