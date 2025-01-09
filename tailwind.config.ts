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
        "logoColor": "var(--Primary-2, #343C6A)"
      },
    },
  },
  plugins: [],
} satisfies Config;
