/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontSize: {
        '3xl': "2rem",
        '4xl': "2.5rem"
      },
      fontFamily: {
        JetBrains: ['JetBrains Mono', 'monospace'],
        Poltawski: ['Poltawski Nowy', 'serif']
      },
    },
  },
  plugins: [],
}

