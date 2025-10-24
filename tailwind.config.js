/** @type {import('tailwindcss').Config} */
import tailwindScrollbar from "tailwind-scrollbar";
import tailwindcssAspectRatio from "@tailwindcss/aspect-ratio";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        md: "3rem",
        lg: "4rem",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Barlow"],
      },
      colors: {
        background: "#242046",
        card: "#292451",
        ungu: "#7420A8",
      },
    },
  },
  plugins: [tailwindScrollbar, tailwindcssAspectRatio],
};
