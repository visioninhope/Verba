import type { Config } from "tailwindcss";
const colors = require('tailwindcss/colors')


const config: Config = {
  purge: {
    options: {
      safelist: [
        'bg-yellow-300',
        'bg-gray-300',
        'bg-gray-400',
        'bg-zinc-300',
        'bg-zinc-400',
        'bg-red-300',
        'bg-green-300',
        'bg-cyan-300',
        'bg-fuchsia-300',
        'bg-yellow-400',
        'bg-green-400',
        'bg-cyan-400',
        'bg-fuchsia-400',
        'bg-red-400',
        'bg-indigo-400'
        // ... any other dynamically constructed classes
      ],
    },
  },
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: '100px',
      md: '1000px',
      lg: '1330px',
      full: '1700px',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      green: colors.green,
      blue: colors.blue,
      yellow: colors.yellow,
      red: colors.red,
      "bg-verba": "#FEF7F7",
      "bg-alt-verba": "#F3F3F3",
      "primary-verba": "#FDFF91",
      "secondary-verba": "#90FFA8",
      "warning-verba": "#FF8399",
      "text-verba": "#161616",
      "text-alt-verba": "#8E8E8E"
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("daisyui")],

  daisyui: {
    themes: ["light"],
  },
};
export default config;
