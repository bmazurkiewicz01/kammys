import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "3xl": "1921px",
      },
      boxShadow: {
        "btn-hover-shadow":
          "rgba(0, 0, 0, 0.2) 0px 2px 4px -1px, rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px",
      },
      transitionProperty: {
        "btn-trans": "background-color, box-shadow, border-color, color",
      },
      transitionTimingFunction: {
        "btn-trans-time": "cubic-bezier(0.4, 0, 0.2, 1)",
      },
      transitionDuration: {
        "250": "250ms",
      },
      transitionDelay: {
        "0": "0ms",
      },
      backgroundImage: {
        "hero-pattern": "url('/hero/img1.jpg')",
      },
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
  },
  plugins: [],
};
export default config;
