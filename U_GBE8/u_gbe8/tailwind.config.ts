import type { Config } from "tailwindcss";
const {nextui} = require("@nextui-org/react");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "Ver_Primary_background":"#000",
        "Ver_Primary_accents_1":"#111",
        "Ver_Primary_accents_2":"#333",
        "Ver_Primary_accents_3":"#444",
        "Ver_Primary_accents_4":"#666",
        "Ver_Primary_accents_5":"#888",
        "Ver_Primary_accents_6":"#999",
        "Ver_Primary_accents_7":"#eaeaea",
        "Ver_Primary_accents_8":"#fafafa",
        "Ver_Primary_Foreground":"#fff",
        "Ver_Gray": "#0A0A0A",
        "Ver_Gray_1": "#121212",
        "Ver_Gray_2":"#242424",
        "Ver_Gray_3":"#111111",
        "Ver_Gray_4": "#888888",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          'vc-border-gradient': `radial-gradient(at left top, #000, 50px, #111 50%)`,  
      },
    },
  },
  darkMode: "class",
  plugins: [nextui({
    themes: {
      light: {
        colors: {
          primary: {
            DEFAULT: "#111",
          },
        },
      },
    },
  }),],
};
export default config;
