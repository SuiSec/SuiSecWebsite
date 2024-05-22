import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#DBE2EC",
        primary: "#4ca2ff",
        secondary: "#030f1c",
        hover: "#0000000d",
      },
    },
  },
  plugins: [],
};
export default config;
