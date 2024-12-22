/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*html"],
  theme: {
    extend: {
      screens: {
        mobile: "0px",
        desktop: "1024px",
      },
    },
  },
  plugins: [],
};
