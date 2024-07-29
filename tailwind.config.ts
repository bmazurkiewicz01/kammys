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
        presm: "450px",
        "2md": "900px",
        "3xl": "1921px",
      },
      boxShadow: {
        "btn-hover-shadow":
          "rgba(0, 0, 0, 0.2) 0px 2px 4px -1px, rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px",
        card: "0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12)",
      },
      transitionProperty: {
        "btn-trans": "background-color, box-shadow, border-color, color",
      },
      transitionTimingFunction: {
        "btn-trans-time": "cubic-bezier(0.4, 0, 0.2, 1)",
      },
      transitionDuration: {
        "250": "250ms",
        "80": "80ms",
      },
      transitionDelay: {
        "0": "0ms",
      },
      backgroundImage: {
        "hero-pattern": "url('/hero/img1.jpg')",
        "chip-gradient":
          "linear-gradient(to right bottom, rgb(240, 247, 255), rgb(206, 229, 253))",
        "dark-chip-gradient":
          "linear-gradient(to right bottom, rgb(3, 51, 99), rgb(2, 31, 59))",
        "light-card-gradient": "linear-gradient(to bottom, #FFF, #FBFCFE)",
        "dark-card-gradient":
          "linear-gradient(rgb(9, 14, 16), rgba(19, 27, 32, 0.5))",
      },
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
  },
  plugins: [],
};
export default config;
