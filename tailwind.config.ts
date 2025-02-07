import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens : {
      sm : "340px",
      md : "540px",
      lg : "968px",
      xl : "1380px"
    },
    container : {
      center : true ,
      padding :{
        DEFAULT : "12px",
        md : "32px",
      }
    },
    extend: {
      colors: {
        primary: "#EF3B3E", 
        darkblue: "#040d24",
        dark: "#1a1a1a", 
        light: "#f9f9f9", 
      },
    }
  },
  plugins: [],
} satisfies Config;
