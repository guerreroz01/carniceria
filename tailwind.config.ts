import type { Config } from "tailwindcss";

const config: Config = {
  variants: {
    extends: {
      backdropFilter: ["responsive"], // Asegúrate de que las variantes de filtro de fondo estén habilitadas
    },
  },
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#080f0f",
        active: "#10CEFE",
        bgs: "#232830",
        white: "#F8FCFD",
      },
    },
  },
  plugins: [require("tailwindcss-filters")],
};
export default config;
