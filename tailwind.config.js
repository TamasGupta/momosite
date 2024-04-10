/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{ 
        pacifico:["pacifico","cursive"],
        truculenta:["truculenta","sans-serif"],
        rubik:["Rubik Scribble", "system-ui"]

      },
      colors: {
        'yellowish': 'radial-gradient(circle, rgba(131,58,180,1) 0%, rgba(253,251,29,1) 11%, rgba(252,176,69,1) 100%)',
    },
  },
  plugins: [],
}
}
