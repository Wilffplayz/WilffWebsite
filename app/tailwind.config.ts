import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#8B5CF6",
        secondary: "#4C1D95",
        background: "#050505",
      },
    },
  },
  plugins: [],
};
export default config;
