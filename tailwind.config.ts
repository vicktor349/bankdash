import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#2D60FF",
        "backgroundColor": "#E5E5E5",
        "logoColor": "var(--Primary-2, #343C6A)",
        "inputColor": "#8BA3CB"
      },
      backgroundColor: {
        "inputBackground": "#F5F7FA"
      },
      screens: {
        "3xl": "1736px",
        "ssm": "540px",
        "sssm": "480px",
        "ssssm": "360px"
      }
    },
  },
  plugins: [],
} satisfies Config;
