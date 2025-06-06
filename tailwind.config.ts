import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/modules/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/utils/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      screens: {
        "2xl": "1500px",
      },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        open_sans: ["var(--font-open-sans)"],
        inter: ["var(--font-inter)"],
      },
      colors: {
        "app-purple": "#6057FF",
        "app-gray": "#817C7C",
        "app-green": "#05CD99",
        "app-red": "#FF3A29",
        "app-off-white": "#FBFAFF",
        "app-black-100": "#353535",
        "app-black-200": "#1c1c1c",
      },
    },
  },
  plugins: [],
};
export default config;
