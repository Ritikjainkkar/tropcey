import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        dDin: ["var(--font-ddin)"],
        brokeline: ["var(--font-brokeline)"],
        franklin: ["var(--font-franklin)"],
        franklinHeavy: ["var(--font-franklinHeavy)"],
        franklinBook: ["var(--font-franklinBook)"],
        futuraBold: ["var(--font-futuraBold)"],
        impact: ["var(--font-impact)"],
        archivo: ["var(--font-archivo)"],
        berkShire: ["var(--font-berkShire)"],
        franklinGothic: ["var(--font-franklinGothic)"],
      },
      zIndex: {
        "100": "100",
      },
    },
  },
  plugins: [],
};
export default config;
