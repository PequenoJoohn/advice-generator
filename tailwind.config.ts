import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      textColor: {
        "neon-green": "hsl(150, 100%, 66%)",
      },
      boxShadowColor: {
        "neon-green": "hsl(150, 100%, 66%)"
      },
      backgroundColor: {
        "neon-green": "hsl(150, 100%, 66%)",
        "light-cyan": "hsl(193, 38%, 86%)",
        "grayish-blue": "hsl(217, 19%, 38%)",
        "dark-grayish-blue": "hsl(217, 19%, 24%)",
        "dark-blue": "hsl(218, 23%, 16%)"
      },
      backgroundImage: {
        "desktop": "url('/images/pattern-divider-desktop.svg')",
        "mobile": "url('/images/pattern-divider-mobile.svg')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
